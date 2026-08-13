import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ServiceCard({ service, onDiscuss }) {
  // Dynamically map icon string to Lucide icon component
  const IconComponent = Icons[service.iconName] || Icons.Code;

  const navigate = useNavigate();

  const handleDiscuss = () => {
    if (onDiscuss) {
      onDiscuss(service);
    } else {
      navigate(`/project-request?service=${encodeURIComponent(service.title)}`);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-sm transition-all duration-200 group">
      <div>
        {/* Header Icon & Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          {service.startingPrice && (
            <span className="text-xs font-bold px-2.5 py-1 bg-amber-50 text-amber-900 rounded border border-amber-200">
              From {service.startingPrice}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 mb-5 leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables / Highlights if present */}
        {service.keyDeliverables && service.keyDeliverables.length > 0 && (
          <div className="mb-5 space-y-1.5 border-t border-slate-100 pt-3">
            {service.keyDeliverables.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center text-xs text-slate-600">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500 mr-2 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 bg-slate-50 text-slate-600 rounded border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Button Action */}
      <button
        onClick={handleDiscuss}
        className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-md hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all duration-150 group-hover:shadow-xs"
      >
        Discuss Project
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}
