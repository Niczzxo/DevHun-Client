// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MyTitle = ({ children, className = "" }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`${className} section-title`}
      >
        {children}
      </motion.h2>
    </>
  );
};

export default MyTitle;
