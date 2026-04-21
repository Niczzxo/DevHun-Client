import { FcGoogle } from "react-icons/fc";
import ActionSpinner from "../ActionSpinner/ActionSpinner";
import * as motion from "motion/react-client";

const buttonVariants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1.1,
    transition: {
      duration: 0.4,
    },
  },
};

const GoogleButton = ({ onClick, disabled }) => {
  return (
    <>
      <motion.button
        variants={buttonVariants}
        initial="hidden"
        whileHover="visible"
        type="button"
        disabled={disabled}
        onClick={onClick}
        className="btn btn-sm md:btn-md btn-block bg-white text-slate-900 hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm"
      >
        {disabled ? (
          <ActionSpinner />
        ) : (
          <>
            <FcGoogle size={22} />
            Login with Google
          </>
        )}
      </motion.button>
    </>
  );
};

export default GoogleButton;
