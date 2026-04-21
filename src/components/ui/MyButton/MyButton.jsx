// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MyButton = ({ children, onClick, className = "", disabled = false, variant = "primary", size = "", ...props }) => {
  const variantClass = variant === "primary" ? "btn-primary-premium" : "btn-secondary-premium";
  const sizeClass = size === "sm" ? "px-4! py-1.5! text-sm! rounded-lg!" : size === "lg" ? "px-8 py-4 text-lg" : "";
  
  return (
    <>
      <motion.button
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        disabled={disabled}
        onClick={onClick}
        className={`${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    </>
  );
};

export default MyButton;
