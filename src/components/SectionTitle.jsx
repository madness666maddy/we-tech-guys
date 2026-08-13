import React from 'react';

export default function SectionTitle({ badge, title, subtitle, centered = false, className = '' }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3.5 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase bg-amber-50 border border-amber-300/80 rounded-full mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
