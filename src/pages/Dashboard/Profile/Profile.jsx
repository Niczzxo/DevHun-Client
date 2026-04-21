import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import {
  HiOutlineUser,
  HiOutlinePencilAlt,
  HiOutlineMail,
  HiOutlineCalendar,
} from "react-icons/hi";
import useAuthInfo from "../../../hooks/useAuthInfo";
import MyContainer from "../../../components/shared/MyContainer/MyContainer";
import Avatar from "../../../components/shared/Avatar/Avatar";
import MyButton from "../../../components/ui/MyButton/MyButton";
import MyTitle from "../../../components/ui/MyTitle/MyTitle";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuthInfo();

  if (!currentUser) {
    return (
      <div className="min-h-[60dvh] grid place-items-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  const creationDate = currentUser?.metadata?.creationTime
    ? new Date(currentUser.metadata.creationTime)
    : null;

  const creationDateString = creationDate && creationDate.toString() !== "Invalid Date"
    ? creationDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="p-4 md:p-8"
    >
      <MyContainer>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div variants={childVariants} className="text-center mb-8 md:mb-10">
            <MyTitle>My Profile</MyTitle>
            <p className="mt-2 text-sm md:text-base text-base-content/70 dark:text-gray-300">
              Manage your account information
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            variants={childVariants}
            className="card-premium border-none shadow-xl"
          >
            <div className="card-body items-center text-center p-4 sm:p-8">
              <Avatar
                src={currentUser?.photoURL}
                alt={currentUser?.displayName}
                size="size-28 sm:size-32 md:size-40"
              />

              <div className="mt-6">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {currentUser?.displayName || "User"}
                </h2>
                <p className="text-xs sm:text-sm text-base-content/60 dark:text-gray-400 mt-1">
                  {currentUser?.email}
                </p>
              </div>

              <div className="mt-8 w-full space-y-5 max-w-md mx-auto">
                <div className="flex items-center gap-4 text-left">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <HiOutlineUser className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-base-content/40">
                      Full Name
                    </p>
                    <p className="font-semibold text-sm sm:text-base">
                      {currentUser?.displayName || "Not set"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-left">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <HiOutlineMail className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-base-content/40">
                      Email Address
                    </p>
                    <p className="font-semibold text-sm sm:text-base truncate max-w-[200px] sm:max-w-none">
                      {currentUser?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-left">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <HiOutlineCalendar className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-base-content/40">
                      Member Since
                    </p>
                    <p className="font-semibold text-sm sm:text-base">
                      {creationDateString}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-actions mt-10">
                <MyButton onClick={() => navigate("../update-profile")} className="btn-primary">
                  <HiOutlinePencilAlt className="size-5" />
                  Edit Profile
                </MyButton>
              </div>
            </div>
          </motion.div>
        </div>
      </MyContainer>
    </motion.section>
  );
};

export default Profile;
