import { useState } from "react";
import useAuthInfo from "./useAuthInfo";
import getAuthErrorMessage from "../utilities/getAuthErrorMessage";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import { loginSuccessMessage } from "../utilities/getLoginMessage";

const useGoogleLogin = () => {
  const navigate = useNavigate();
  const { loginUserWithGoogle } = useAuthInfo();
  const [googleLoading, setGoogleLoading] = useState(false);
  const { state } = useLocation();

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      const userCreds = await loginUserWithGoogle();
      const user = userCreds.user;

      loginSuccessMessage(user.displayName);
      navigate((state && state.path) || "/", { replace: true });
    } catch (err) {
      console.error("Google Login Error:", err);
      const errorMessage = getAuthErrorMessage(err?.code || 'unknown');
      toast.error(errorMessage);
    } finally {
      setGoogleLoading(false);
    }
  };

  return { handleGoogleLogin, googleLoading };
};

export default useGoogleLogin;
