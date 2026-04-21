import { Outlet, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import * as React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import useThemeContext from "../hooks/useThemeContext";

const layoutVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      y: { type: "spring", duration: 0.6 },
    },
  },
};

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.98,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const RootLayout = () => {
  const { theme } = useThemeContext();
  const location = useLocation();

  return (
    <>
      <motion.header
        variants={layoutVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50"
      >
        <Navbar />
      </motion.header>

      <main className="w-full min-h-[70dvh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Footer />
      </motion.footer>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        theme={theme === "light" ? "light" : "dark"}
      />
    </>
  );
};

export default RootLayout;
