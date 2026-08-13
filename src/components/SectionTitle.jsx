import React from 'react';

export default function SectionTitle({ badge, title, subtitle, centered = false, className = '' }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
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
