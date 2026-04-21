import MyContainer from "../MyContainer/MyContainer";
import { SiFacebook, SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import { Link } from "react-router";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-4 sm:py-6 md:py-12 border-t border-slate-800 mt-6 md:mt-14">
      <MyContainer>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-10">
          <div className="col-span-2 lg:col-span-1 space-y-3 mb-4 lg:mb-0">
            <Logo />
            <p className="text-[10px] sm:text-xs leading-relaxed max-w-xs">
              DevHun is the leading global talent platform for professional freelancers and visionary businesses.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <Link to="https://facebook.com/Riyazul.Islam.Rafsan" target="_blank" rel="noopener noreferrer" className="size-7 sm:size-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xs sm:text-sm"><SiFacebook /></Link>
              <Link to="https://github.com/Niczzxo" target="_blank" rel="noopener noreferrer" className="size-7 sm:size-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xs sm:text-sm"><SiGithub /></Link>
              <Link to="https://www.linkedin.com/in/md-riyazul-islam-rafsan" target="_blank" rel="noopener noreferrer" className="size-7 sm:size-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xs sm:text-sm"><SiLinkedin /></Link>
              <Link to="https://instagram.com/Niczzxo" target="_blank" rel="noopener noreferrer" className="size-7 sm:size-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xs sm:text-sm"><SiInstagram /></Link>
              <Link to="https://x.com/" target="_blank" rel="noopener noreferrer" className="size-7 sm:size-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xs sm:text-sm"><SiX /></Link>
            </div>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-[9px] md:text-[10px]">Marketplace</h4>
            <ul className="space-y-1 md:space-y-2 text-[10px] md:text-xs">
              <li><Link to="/all-jobs" className="hover:text-primary transition-colors">Find Work</Link></li>
              <li><Link to="/dashboard/add-job" className="hover:text-primary transition-colors">Post a Job</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Talent Directory</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-[9px] md:text-[10px]">Resources</h4>
            <ul className="space-y-1 md:space-y-2 text-[10px] md:text-xs">
              <li><Link to="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Freelance Guides</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Partner Program</Link></li>
            </ul>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-[9px] md:text-[10px]">Company</h4>
            <ul className="space-y-1 md:space-y-2 text-[10px] md:text-xs">
              <li><Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-3 md:pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center md:text-left">
          <p className="text-[8px] md:text-[10px] font-medium uppercase tracking-wider">
            &copy; {new Date().getFullYear()} DevHun Inc. Built for the future of work.
          </p>
          <div className="flex items-center gap-1 md:gap-2 text-[8px] md:text-[10px] font-medium">
            <span>Powering the global economy through</span>
            <span className="text-white font-black">Remote Excellence</span>
          </div>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
