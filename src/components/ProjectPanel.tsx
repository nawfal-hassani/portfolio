import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectPanel({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 h-full w-80 bg-[#0a0a0a]/90 backdrop-blur-xl border-l border-white/5 p-8 flex flex-col justify-center z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#a1a1aa] hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <span className="text-[#60a5fa] text-sm font-mono mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-[#60a5fa]/10 text-[#60a5fa] px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60a5fa] hover:text-[#93c5fd] text-sm transition-colors inline-flex items-center gap-1"
            >
              View Project
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
