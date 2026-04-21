import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      <Link
        to="/"
        className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-1 sm:gap-2"
      >
        <span className="size-8 sm:size-10 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center text-white text-lg sm:text-xl rotate-3 group-hover:rotate-0 transition-transform">D</span>
        <span className="primary_linear uppercase">DevHun</span>
      </Link>
    </>
  );
};

export default Logo;
