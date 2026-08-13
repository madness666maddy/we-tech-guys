import React from 'react';

export default function TechnologyBadge({ name }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:text-blue-600 transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
      {name}
    </span>
  );
}
