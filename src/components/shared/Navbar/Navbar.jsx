import Logo from "../Logo/Logo";
import { LuSun } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";
import MyButton from "../../ui/MyButton/MyButton";
import useAuthInfo from "../../../hooks/useAuthInfo";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import useThemeContext from "../../../hooks/useThemeContext";
import AvatarDropdown from "../AvatarDropdown/AvatarDropdown";

const Navbar = () => {
  const { currentUser } = useAuthInfo();
  const navigate = useNavigate();
  const { toggleTheme, theme } = useThemeContext();

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="nav_links">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-jobs" className="nav_links">
          Find Jobs
        </NavLink>
      </li>
      {currentUser && (
        <li>
          <NavLink to="/dashboard" className="nav_links">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about-us" className="nav_links">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className="nav_links">
          Contact
        </NavLink>
      </li>
      {/* Mobile Only "Post a Job" Styled as Button Link */}
      <li className="lg:hidden pt-2">
        <NavLink 
          to="/dashboard/add-job" 
          className={({ isActive }) => 
            `flex items-center justify-center py-3 px-4 rounded-xl font-bold transition-all ${
              isActive 
                ? "bg-primary text-white" 
                : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
            }`
          }
        >
          Post a Job
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="glass-nav">
      <MyContainer>
        <div className="navbar p-0 min-h-16 h-16">
          <div className="navbar-start gap-2">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost p-1 lg:hidden hover:bg-primary/10 transition-colors"
              >
                <HiOutlineMenuAlt1 className="text-2xl" />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-base-200 rounded-xl z-50 mt-3 w-56 p-3 shadow-xl border border-slate-100 dark:border-slate-800 space-y-1"
              >
                {navLinks}
                {!currentUser && (
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                    <MyButton
                      onClick={() => navigate("/auth/login")}
                      className="w-full py-2! text-sm!"
                    >
                      Login
                    </MyButton>
                    <MyButton
                      onClick={() => navigate("/auth/register")}
                      variant="secondary"
                      className="w-full py-2! text-sm!"
                    >
                      Register
                    </MyButton>
                  </div>
                )}
              </ul>
            </div>

            <Logo />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 text-sm uppercase tracking-wider font-bold">
              {navLinks}
            </ul>
          </div>

          <div className="navbar-end gap-1 sm:gap-2">
            <label className="swap swap-rotate text-primary/70 scale-90 sm:scale-100">
              <input
                onChange={toggleTheme}
                type="checkbox"
                checked={theme === "night"}
              />

              <LuSun className="size-8 swap-off" />

              <BsMoon className="size-7 swap-on" />
            </label>

            {/* Desktop Post a Job Button */}
            <div className="hidden lg:flex items-center mr-2">
              <MyButton
                onClick={() => navigate("/dashboard/add-job")}
                size="sm"
                className="shadow-sm"
              >
                Post a Job
              </MyButton>
            </div>

            {currentUser ? (
              <AvatarDropdown />
            ) : (
              <div className="flex items-center gap-1 sm:gap-2">
                <MyButton onClick={() => navigate("/auth/login")} size="sm" className="px-3! py-1.5!">
                  Login
                </MyButton>

                <MyButton
                  onClick={() => navigate("/auth/register")}
                  className="hidden sm:inline-flex"
                  size="sm"
                >
                  Register
                </MyButton>
              </div>
            )}
          </div>
        </div>
      </MyContainer>
    </nav>
  );
};

export default Navbar;
