import {
  HiOutlineCodeBracketSquare,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";
import type { Project } from "../types";

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  githubLink,
  liveLink,
}: Project) => {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 transition-all group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <div className="flex gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código do ${title} no GitHub`}
              >
                <HiOutlineCodeBracketSquare className="w-5 h-5 text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo ao vivo do ${title}`}
              >
                <HiOutlineArrowTopRightOnSquare className="w-5 h-5 text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
