import { NavLink, Outlet, useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import MyContainer from "../components/shared/MyContainer/MyContainer";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChartBar,
  HiOutlinePlusCircle,
  HiOutlineFolder,
  HiOutlineCheckCircle,
  HiOutlineUser,
} from "react-icons/hi";
import Logo from "../components/shared/Logo/Logo";
import MyButton from "../components/ui/MyButton/MyButton";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import AvatarDropdown from "../components/shared/AvatarDropdown/AvatarDropdown";
import { ToastContainer } from "react-toastify";
import useThemeContext from "../hooks/useThemeContext";
import ErrorBoundary from "../components/shared/ErrorBoundary/ErrorBoundary";

const sidebarItems = [
  {
    label: "Overview",
    slug: "/dashboard",
    icon: HiOutlineChartBar,
  },
  {
    label: "Post a Job",
    slug: "/dashboard/add-job",
    icon: HiOutlinePlusCircle,
  },
  {
    label: "My Jobs",
    slug: "/dashboard/my-jobs",
    icon: HiOutlineFolder,
  },
  {
    label: "My Accepted Tasks",
    slug: "/dashboard/my-accepted-tasks",
    icon: HiOutlineCheckCircle,
  },
  {
    label: "Profile",
    slug: "/dashboard/profile",
    icon: HiOutlineUser,
  },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);

  // Detect mobile and handle resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-toggle")
      ) {
        setSidebarOpen(false);
      }

      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, sidebarOpen, dropdownOpen]);

  const handleLinkClick = () => {
    if (isMobile) setSidebarOpen(false);
  };

  // Framer Motion variants
  const sidebarVariants = {
    open: { x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    closed: { x: "-100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  const backdropVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, duration: 0.4 },
    }),
  };

  return (
    <div className="flex h-screen flex-col bg-base-100 overflow-hidden">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100 shadow-sm">
        <div className="flex items-center justify-between h-16 px-5">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mobile-menu-toggle lg:hidden btn btn-ghost btn-circle btn-sm"
            aria-label="Toggle menu"
            aria-expanded={sidebarOpen}
          >
            <motion.div
              animate={{ rotate: sidebarOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {sidebarOpen ? (
                <HiOutlineX className="size-5" />
              ) : (
                <HiOutlineMenu className="size-5" />
              )}
            </motion.div>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:block">
              <MyButton
                onClick={() => navigate("/dashboard/add-job")}
                size="sm"
              >
                Post a Job
              </MyButton>
            </div>
            <AvatarDropdown />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <motion.aside
              ref={sidebarRef}
              variants={sidebarVariants}
              initial={isMobile ? "closed" : false}
              animate={isMobile ? (sidebarOpen ? "open" : "closed") : "open"}
              exit="closed"
              className={`${
                !isMobile ? "w-64" : "fixed inset-y-0 left-0 z-30 w-72"
              } bg-base-100 border-r border-base-300 shadow-lg overflow-y-auto h-full`}
              aria-label="Sidebar navigation"
            >
              <nav className="p-5 space-y-2">
                <div className="px-4 py-3 mb-4 border-b border-base-300">
                  <p className="text-xs font-bold uppercase text-base-content/50">
                    Menu
                  </p>
                </div>

                {/* Sidebar Links */}
                {sidebarItems.map((item, i) => {
                  const Icon = item.icon;
                  // If it's "Post a Job", we only show it on mobile sidebar because it's a button in header for desktop
                  if (item.label === "Post a Job" && !isMobile) return null;

                  return (
                    <motion.div
                      key={item.slug}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <NavLink
                        to={item.slug}
                        end={item.slug === "/dashboard"}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                            isActive
                              ? "bg-primary text-white shadow-md shadow-primary/20"
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                          }`
                        }
                        onClick={handleLinkClick}
                      >
                        <Icon className="size-5 shrink-0" />
                        <span>{item.label}</span>
                      </NavLink>
                    </motion.div>
                  );
                })}

                {/* Sidebar Footer */}
                <div className="mt-8 pt-4 border-t border-base-300">
                  <div className="px-4 py-3 text-center text-xs text-base-content/50">
                    <p>DevHun Dashboard</p>
                    <p className="mt-1 opacity-70">v1.0</p>
                  </div>
                </div>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Mobile Backdrop */}
        <AnimatePresence>
          {isMobile && sidebarOpen && (
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto h-full relative bg-base-200">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        theme={theme === "light" ? "light" : "dark"}
      />
    </div>
  );
};

export default DashboardLayout;
