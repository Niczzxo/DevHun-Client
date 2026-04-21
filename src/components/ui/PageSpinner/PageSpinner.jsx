import { RotateLoader } from "react-spinners";
import useThemeContext from "../../../hooks/useThemeContext";

const PageSpinner = () => {
  const { theme } = useThemeContext();

  const color = theme === "light" ? "#086972" : "#00f7ff";

  return (
    <div className="w-full min-h-dvh grid place-items-center bg-base-100 dark:bg-slate-900 transition-colors duration-300">
      <RotateLoader color={color} />
    </div>
  );
};

export default PageSpinner;
