import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Tag } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group">
      <div>
        {/* Project Image Preview */}
        <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex items-center space-x-2">
            <span className="text-[11px] font-semibold px-2.5 py-1 bg-white/90 text-slate-800 rounded-md backdrop-blur-xs shadow-xs border border-slate-200/80">
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-[11px] font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 bg-slate-50 text-slate-600 rounded border border-slate-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="px-6 pb-6 pt-0">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50/50 border border-blue-100 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-150"
        >
          View Project Details
          <ArrowUpRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
