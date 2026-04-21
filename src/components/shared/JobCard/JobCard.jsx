import { MdOutlineVerifiedUser } from "react-icons/md";
import { useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client";
import Badge from "../../ui/Badge/Badge";
import { cleanupName } from "../../../utilities/nameCleanup";

const JobCard = ({ singleJob }) => {
  const navigate = useNavigate();
  const { _id, job_title, job_image, job_category, job_summary, posted_by } =
    singleJob || {};

  const cleanPostedBy = cleanupName(posted_by);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => navigate(`/job-details/${_id}`)}
      className="card-premium cursor-pointer group p-0!"
    >
      <figure className="relative overflow-hidden p-0!">
        <img
          src={job_image || "https://picsum.photos/seed/jobs/800/600"}
          alt={job_title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.target.src = "https://picsum.photos/seed/jobs/800/600";
          }}
          className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 backdrop-blur-md text-primary font-bold border-none shadow-lg">
            {job_category}
          </Badge>
        </div>
      </figure>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <MdOutlineVerifiedUser className="text-sm" />
          <span>{cleanPostedBy}</span>
        </div>

        <h3 className="line-clamp-1 text-xl group-hover:text-primary transition-colors">
          {job_title}
        </h3>
        
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {job_summary}
        </p>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <span className="text-primary font-bold text-sm">View Details →</span>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
