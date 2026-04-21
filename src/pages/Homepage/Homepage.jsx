import { useEffect, useState } from "react";
import JobCard from "../../components/shared/JobCard/JobCard";
import MyTitle from "../../components/ui/MyTitle/MyTitle";
import usePublicAxios from "../../hooks/usePublicAxios";
import MyContainer from "../../components/shared/MyContainer/MyContainer";
import useCategoryData from "../../hooks/useCategoryData";
import BannerSlider from "../../components/ui/BannerSlider/BannerSlider";
import Badge from "../../components/ui/Badge/Badge";
import FetchSpinner from "../../components/ui/FetchSpinner/FetchSpinner";
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client";
import MyButton from "../../components/ui/MyButton/MyButton";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import MyInput from "../../components/ui/MyInput/MyInput";
import { howItWorksData } from "../../data/howItWorksData";
import {
  HiOutlineUserPlus,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import { testimonialsData } from "../../data/testimonialsData";
import { HiStar } from "react-icons/hi";
import { careerResourcesData } from "../../data/careerResourcesData";
import { topFreelancersData } from "../../data/topFreelancersData";

const Homepage = () => {
  const navigate = useNavigate();
  const publicAxios = usePublicAxios();
  const [loading, setLoading] = useState(true);
  const [latestJobs, setLatestJobs] = useState([]);
  const categories = useCategoryData();

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const { data } = await publicAxios.get("/jobs", {
          params: {
            excludes: "creator_email,created_at,status",
            sortBy: "created_at",
            sortOrder: "desc",
            limit: 6,
          },
        });

        if (data.success) {
          setLatestJobs(data.jobs);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [publicAxios]);

  const jobCardElements = latestJobs.map((item) => (
    <JobCard key={item._id} singleJob={item} />
  ));

  return (
    <>
      <title>Home - DevHun</title>

      {/* Hero Banner */}
      <section className="pt-8 pb-16 overflow-hidden">
        <MyContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <BannerSlider />
          </motion.div>
        </MyContainer>
      </section>

      {/* Latest Jobs */}
      <section className="section-padding">
        <MyContainer className="space-y-16">
          <div className="text-center space-y-4">
            <MyTitle>
              <span className="primary_linear font-black">Latest Opportunities</span>
            </MyTitle>
            <p className="section-subtitle">
              Discover fresh roles from top companies looking for elite talent like you.
            </p>
          </div>

          {loading ? (
            <FetchSpinner className="min-h-[30dvh]" />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobCardElements}
            </div>
          )}

          <div className="flex items-center justify-center pt-8">
            <MyButton 
              variant="secondary"
              onClick={() => navigate("/all-jobs")}
              className="group w-full max-w-xs"
            >
              View Global Job Board <span className="group-hover:translate-x-1 transition-transform">→</span>
            </MyButton>
          </div>
        </MyContainer>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <MyContainer className="space-y-16" style={{ marginTop: "20px" }}>
          <div className="text-center space-y-4">
            <MyTitle>
              Explore <span className="primary_linear">Categories</span>
            </MyTitle>
            <p className="section-subtitle">
              Find your niche in our most active and growing freelance marketplaces.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={category.id}
                className="card-premium group"
              >
                <div className="flex flex-col h-full gap-5">
                  <div className={`size-14 rounded-2xl ${category.color} bg-opacity-20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500`}>
                    {category.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{category.description}</p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary/70">{category.jobs} opening(s)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MyContainer>
      </section>

      {/* Opportunity */}
      <section className="section-padding">
        <MyContainer className="grid lg:grid-cols-2 gap-20 items-center" style={{ marginTop: "20px" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Where <span className="primary_linear">Talent</span> Meets <span className="primary_linear">Opportunity</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                DevHun is building the future of work by connecting exceptional professionals with businesses that value premium quality and reliable delivery.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="size-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <HiOutlineShieldCheck className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Secure Workflows</h4>
                  <p className="text-sm text-slate-500">Every contract is backed by our secure escrow and dispute resolution system.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <HiOutlineCurrencyDollar className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Instant Payments</h4>
                  <p className="text-sm text-slate-500">Get paid in your local currency as soon as milestones are approved.</p>
                </div>
              </div>
            </div>

            <MyButton onClick={() => navigate("/about-us")} variant="secondary">Learn Our Story</MyButton>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="card-premium aspect-square flex flex-col justify-center items-center text-center gap-3">
                <span className="text-3xl font-black text-primary">98%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Success Rate</span>
              </div>
              <div className="card-premium aspect-[4/5] flex flex-col justify-center items-center text-center gap-3 bg-primary! text-white border-none">
                <HiOutlineUserPlus className="size-10" />
                <span className="text-xl font-bold">10k+ Talent</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="card-premium aspect-[4/5] flex flex-col justify-center items-center text-center gap-3 bg-secondary! text-white border-none">
                <HiOutlineBriefcase className="size-10" />
                <span className="text-xl font-bold">500+ Active Jobs</span>
              </div>
              <div className="card-premium aspect-square flex flex-col justify-center items-center text-center gap-3">
                <span className="text-3xl font-black text-secondary">24/7</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Support</span>
              </div>
            </div>
          </div>
        </MyContainer>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <MyContainer className="space-y-16" style={{ marginTop: "20px" }}>
          <div className="text-center space-y-4">
            <MyTitle>Simple <span className="primary_linear">3-Step</span> Process</MyTitle>
            <p className="section-subtitle">
              We've refined the engagement model to be as smooth and efficient as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 dark:bg-slate-800 -translate-y-1/2 -z-10"></div>
            {howItWorksData.slice(0, 3).map((item, index) => {
              const IconComponent = {
                userPlus: HiOutlineUserPlus,
                search: HiOutlineMagnifyingGlassCircle,
                shield: HiOutlineShieldCheck,
              }[item.iconType];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <div className="size-20 rounded-3xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-3xl border border-slate-100 dark:border-slate-700 relative">
                    <span className="absolute -top-3 -left-3 size-8 rounded-full bg-primary text-white text-sm font-black flex items-center justify-center shadow-lg">
                      {index + 1}
                    </span>
                    <IconComponent className="text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </MyContainer>
      </section>

      {/* Success Stories */}
      <section className="section-padding overflow-hidden relative">
        <MyContainer className="space-y-16 relative z-10 pt-5">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black">Trusted by <span className="primary_linear">Professionals</span></h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from those who've built their careers on DevHun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium group"
              >
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <HiStar key={i} className="size-4 fill-current" />)}
                </div>
                <p className="text-lg italic text-slate-600 dark:text-slate-300 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="size-12 rounded-full ring-2 ring-primary/30 object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MyContainer>
      </section>

      {/* Career Resources */}
      <section className="section-padding">
        <MyContainer className="space-y-16 pt-5">
          <div className="text-center space-y-4">
            <MyTitle>Career <span className="primary_linear">Hub</span></MyTitle>
            <p className="section-subtitle">
              Expert-crafted resources to help you scale your freelance business and stay competitive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerResourcesData.map((resource, index) => {
              const IconComponent = {
                currency: HiOutlineCurrencyDollar,
                document: HiOutlineDocumentText,
                chat: HiOutlineChatBubbleLeftRight,
                briefcase: HiOutlineBriefcase,
              }[resource.iconType];

              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-premium group cursor-pointer"
                  onClick={() => toast.info("Resource bundle preparing!")}
                >
                  <div className="flex flex-col gap-6">
                    <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <IconComponent />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{resource.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{resource.description}</p>
                    </div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Access Guide <span className="text-lg">→</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </MyContainer>
      </section>

      {/* Top Freelancers */}
      <section className="section-padding">
        <MyContainer className="space-y-16">
          <div className="text-center space-y-4 pt-5 mb-16">
            <MyTitle>Elite <span className="primary_linear">Talent</span></MyTitle>
            <p className="section-subtitle">
              The highest-rated professionals in our network, chosen for their expertise and reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topFreelancersData.map((freelancer, index) => (
              <motion.div
                key={freelancer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium group"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="relative">
                    <img
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="size-24 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-2 right-0 size-8 rounded-full bg-secondary text-white flex items-center justify-center border-4 border-white dark:border-slate-800">
                      <HiStar className="size-4 fill-current" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{freelancer.name}</h3>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{freelancer.title}</p>
                  </div>

                  <div className="flex items-center gap-4 py-3 border-y border-slate-100 dark:border-slate-700 w-full justify-center">
                    <div className="text-center">
                      <p className="text-xs text-slate-400 font-bold uppercase">Rated</p>
                      <p className="font-black text-primary">{freelancer.rating}</p>
                    </div>
                    <div className="w-px h-8 bg-slate-100 dark:bg-slate-700"></div>
                    <div className="text-center">
                      <p className="text-xs text-slate-400 font-bold uppercase">Jobs</p>
                      <p className="font-black text-secondary">{freelancer.jobs}+</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {freelancer.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="px-2 py-1 rounded-md bg-slate-50 dark:bg-slate-700/50 text-[10px] font-bold text-slate-500 uppercase">{skill}</span>
                    ))}
                  </div>

                  <div className="w-full pt-2">
                    <MyButton className="w-full py-2! text-sm!">Hire Professional</MyButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MyContainer>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <MyContainer className="pt-5">
          <div className="relative card-premium p-10 md:p-20 overflow-hidden text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  Ready to <span className="primary_linear">Elevate</span> your career?
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400">
                  Join 50,000+ professionals getting weekly insights and priority access to high-budget projects.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  if (email) {
                    toast.success("Welcome to the inner circle!");
                    e.target.reset();
                  }
                }}
                className="flex flex-col md:flex-row gap-4 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="flex-1 bg-transparent px-6 py-4 outline-hidden text-lg placeholder:text-slate-500"
                  required
                />
                <MyButton className="md:px-10 py-4! text-lg!">Subscribe Now</MyButton>
              </form>
              
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                No spam. Only high-value opportunities.
              </p>
            </motion.div>
          </div>
        </MyContainer>
      </section>
    </>
  );
};

export default Homepage;
