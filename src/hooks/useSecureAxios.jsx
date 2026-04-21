import axios from "axios";
import { useMemo } from "react";
import useAuthInfo from "./useAuthInfo";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.init";

const useSecureAxios = () => {
  const { logoutUser } = useAuthInfo();
  const navigate = useNavigate();

  const axiosSecure = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "/api",
    });


    instance.interceptors.request.use(
      async (config) => {
        const user = auth.currentUser;
        if (user) {
          try {

            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
          } catch (error) {
            console.error("Error getting token", error);
          }
        } else {

          const token = localStorage.getItem("token");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );


    let isRefreshing = false;
    let failedQueue = [];

    const processQueue = (error, token = null) => {
      failedQueue.forEach((prom) => {
        if (error) {
          prom.reject(error);
        } else {
          prom.resolve(token);
        }
      });
      failedQueue = [];
    };

    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;


        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry
        ) {
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return instance(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          isRefreshing = true;

          const user = auth.currentUser;
          if (user) {
            try {
              console.log("Forcing token refresh due to 401...");
              const token = await user.getIdToken(true);
              localStorage.setItem("token", token);
              originalRequest.headers.Authorization = `Bearer ${token}`;

              processQueue(null, token);
              isRefreshing = false;

              return instance(originalRequest);
            } catch (refreshError) {
              processQueue(refreshError, null);
              isRefreshing = false;
              console.error("Token refresh failed", refreshError);
            }
          } else {
            isRefreshing = false;
          }
        }

        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          if (window.location.pathname !== "/auth/login") {
            const backendMessage = error.response.data?.message;
            console.error("401/403 Error Details:", {
              status: error.response.status,
              message: backendMessage,
              data: error.response.data,
              url: originalRequest.url,
            });

            toast.error(
              backendMessage ||
                "Session expired or unauthorized. Please login again."
            );
            await logoutUser();
            navigate("/auth/login");
          }
        }
        return Promise.reject(error);
      }
    );

    return instance;
  }, [logoutUser, navigate]);

  return axiosSecure;
};

export default useSecureAxios;
