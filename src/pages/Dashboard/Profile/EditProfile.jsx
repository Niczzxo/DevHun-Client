// src/pages/Dashboard/EditProfilePage.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineUser,
  HiOutlineLink,
} from "react-icons/hi";
import useAuthInfo from "../../../hooks/useAuthInfo";
import MyContainer from "../../../components/shared/MyContainer/MyContainer";
import Avatar from "../../../components/shared/Avatar/Avatar";
import MyButton from "../../../components/ui/MyButton/MyButton";
import ActionSpinner from "../../../components/ui/ActionSpinner/ActionSpinner";
import MyLabel from "../../../components/ui/MyLabel/MyLabel";
import MyInput from "../../../components/ui/MyInput/MyInput";
import MyTitle from "../../../components/ui/MyTitle/MyTitle";

const EditProfile = () => {
  const { currentUser, updateUserProfile, loading } = useAuthInfo();
  const [displayName, setDisplayName] = useState(
    currentUser?.displayName || ""
  );
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!displayName.trim()) {
      toast.error("Display name cannot be empty");
      return;
    }

    setSaving(true);
    try {
      await updateUserProfile({
        displayName: displayName.trim(),
        photoURL: photoURL.trim() || null, // allow clearing the photo URL
      });

      toast.success("Profile updated successfully!");
      navigate("/dashboard/profile");
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    },
    exit: { opacity: 0 },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen py-8"
    >
      <MyContainer>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div variants={childVariants} className="text-center mb-8">
            <MyTitle>Edit Profile</MyTitle>
          </motion.div>

          {/* Form Card */}
          <motion.div variants={childVariants} className="card-premium border-none">
            <div className="card-body">
              {/* Avatar Preview */}
              <div className="flex flex-col items-center mb-8">
                <Avatar
                  src={photoURL || currentUser?.photoURL}
                  alt={displayName || "User"}
                  size="size-32"
                />
                <p className="mt-4 text-sm text-base-content/60 dark:text-gray-400">
                  Profile picture preview
                </p>
              </div>

              {/* Display Name */}
              <motion.div variants={childVariants} className="form-control">
                <MyLabel>
                  <HiOutlineUser className="size-5" />
                  Display Name
                </MyLabel>
                <MyInput
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Enter your display name"
                  disabled={saving || loading}
                />
              </motion.div>

              {/* Photo URL */}
              <motion.div variants={childVariants} className="form-control mt-6">
                <MyLabel>
                  <HiOutlineLink className="size-5" />
                  Profile Picture URL
                </MyLabel>
                <MyInput
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  disabled={saving || loading}
                />
                <label className="label">
                  <span className="label-text-alt text-base-content/60 text-wrap">
                    Enter a direct link to an image (e.g. from Imgur, Unsplash,
                    etc.)
                  </span>
                </label>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={childVariants} className="card-actions flex justify-end gap-3 mt-10">
                <button
                  onClick={() => navigate("/dashboard/profile")}
                  className="btn btn-sm md:btn-md btn-ghost gap-2"
                  disabled={saving || loading}
                >
                  <HiOutlineX className="size-5" />
                  Cancel
                </button>
                <MyButton onClick={handleSave} disabled={saving || loading}>
                  {saving ? (
                    <ActionSpinner />
                  ) : (
                    <HiOutlineCheck className="size-5" />
                  )}
                  Save Changes
                </MyButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </MyContainer>
    </motion.section>
  );
};

export default EditProfile;
