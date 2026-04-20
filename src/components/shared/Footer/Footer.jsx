import MyContainer from "../MyContainer/MyContainer";
import { SiFacebook, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Link } from "react-router";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-base-200 to-base-300 dark:from-gray-900 dark:to-black">
      <div className="py-12 border-t border-base-300 dark:border-gray-800">
        <MyContainer className="space-y-10">
          <div className="footer sm:footer-horizontal text-base-content">
            <aside>
              <Logo />

              <p className="max-w-sm opacity-80 mt-4 leading-relaxed">
                DevHun is your trusted partner in connecting businesses with top
                freelance talent worldwide. Our platform empowers companies to
                scale efficiently while helping skilled professionals build
                meaningful careers.
              </p>
            </aside>

            <nav>
              <h6 className="footer-title text-primary font-bold opacity-100 mb-4">
                Services
              </h6>
              <a className="footer-link block mb-2 opacity-70 hover:opacity-100 hover:text-primary transition-all">
                Branding
              </a>
              <a className="footer-link block mb-2 opacity-70 hover:opacity-100 hover:text-primary transition-all">
                Design
              </a>
              <a className="footer-link block mb-2 opacity-70 hover:opacity-100 hover:text-primary transition-all">
                Marketing
              </a>
              <a className="footer-link block mb-2 opacity-70 hover:opacity-100 hover:text-primary transition-all">
                Advertisement
              </a>
            </nav>

            <nav>
              <h6 className="footer-title text-primary font-bold opacity-100 mb-4">
                Legal
              </h6>
              <a className="footer-link block mb-2 opacity-70 hover:opacity-100 hover:text-primary transition-all">
                Terms & Conditions
              </a>
              <a className="footer-link block mb-2 opacity-70 hover:opacity-100 hover:text-primary transition-all">
                Privacy Policy
              </a>
              <a className="footer-link block mb-2 opacity-70 hover:opacity-100 hover:text-primary transition-all">
                Cookie Policy
              </a>
            </nav>

            <nav>
              <h6 className="footer-title text-primary font-bold opacity-100 mb-4">
                Social Links
              </h6>
              <div className="flex flex-col gap-3">
                <Link
                  to="https://facebook.com/Riyazul.Islam.Rafsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  <SiFacebook className="text-xl" /> Facebook
                </Link>

                <Link
                  to="https://github.com/Niczzxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  <SiGithub className="text-xl" /> Github
                </Link>

                <Link
                  to="https://instagram.com/Niczzxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  <SiInstagram className="text-xl" /> Instagram
                </Link>

                <Link
                  to="https://www.linkedin.com/in/md-riyazul-islam-rafsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  <SiLinkedin className="text-xl" /> Linkedin
                </Link>
              </div>
            </nav>
          </div>

          <div className="pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 rounded-2xl bg-linear-to-r from-primary/5 to-secondary/5 border border-primary/10 backdrop-blur-sm">
              <p className="font-semibold text-center md:text-left opacity-80">
                &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary font-bold text-lg">
                  DevHun
                </span>
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm opacity-60">Crafted with ❤️ by</span>
                <Link
                  to="https://github.com/Niczzxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm font-bold"
                >
                  Niczzxo
                </Link>
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
    </footer>
  );
};

export default Footer;
