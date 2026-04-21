import MyContainer from "../../components/shared/MyContainer/MyContainer";
import MyTitle from "../../components/ui/MyTitle/MyTitle";
import MyButton from "../../components/ui/MyButton/MyButton";
import CountUpNumber from "../../components/ui/CountUpNumber/CountUpNumber";
import { motion } from "framer-motion";
import { teamMembers } from "../../data/teamMembers";
import { features } from "../../data/features";
import { values } from "../../data/values";
import { stats } from "../../data/stats";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <title>About Us | DevHun</title>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <MyContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              We're Building the <span className="primary_linear">Future</span> of Remote Work
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              DevHun is more than a job portal. We are a global infrastructure for professional empowerment, connecting elite talent with businesses that change the world.
            </p>
          </motion.div>
        </MyContainer>
      </section>

      {/* Stats Section */}
      <section className="pb-24">
        <MyContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="card-premium text-center p-10"
              >
                <p className="text-4xl md:text-5xl font-black primary_linear">
                  <CountUpNumber
                    target={stat.number}
                    duration={2000}
                    suffix={stat.suffix || ""}
                  />
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-4">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </MyContainer>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <MyContainer className="space-y-16">
          <div className="text-center space-y-4">
            <MyTitle>Our Core <span className="primary_linear">Principles</span></MyTitle>
            <p className="section-subtitle">The foundation of everything we build and every connection we facilitate.</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.id}
                  variants={itemVariants}
                  className="card-premium group"
                >
                  <div className="space-y-6">
                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icon />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{value.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </MyContainer>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <MyContainer>
          <div className="mb-12">
            <MyTitle>Why Choose Us</MyTitle>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-secondary/20 dark:bg-secondary/30">
                      <Icon className="text-4xl text-secondary dark:text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-neutral dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-neutral dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </MyContainer>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <MyContainer>
          <div className="mb-12">
            <MyTitle>Our Team</MyTitle>
            <p className="text-center text-neutral dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Meet the talented people behind DevHun
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-400"
              >
                <div className="relative h-48 overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-neutral dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-secondary dark:text-secondary mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MyContainer>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <MyContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral dark:text-white">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-neutral dark:text-gray-300 text-base md:text-lg">
              Join thousands of professionals and employers building successful
              careers and businesses on DevHun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <MyButton onClick={() => navigate("/all-jobs")}>
                Browse Jobs
              </MyButton>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate("/dashboard/add-job")}
                className="btn btn-sm md:btn-md btn-outline text-primary dark:text-secondary border-primary dark:border-secondary hover:bg-primary/10 dark:hover:bg-secondary/10"
              >
                Post a Job
              </motion.button>
            </div>
          </motion.div>
        </MyContainer>
      </section>
    </>
  );
};

export default AboutUs;
