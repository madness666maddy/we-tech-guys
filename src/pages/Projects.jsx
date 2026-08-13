import React, { useState, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../data/projects';
import { Filter, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionTitle
          badge="Our Portfolio"
          title="Engineered Solutions & Client Work"
          subtitle="Browse completed applications across web engineering, enterprise AI, mobile apps, and business process automation."
          centered={true}
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-bold rounded-md transition-all duration-150 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-xs border border-amber-400 font-extrabold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No Projects Found</h3>
            <p className="text-sm text-slate-500 mt-1">
              There are no projects currently under the "{selectedCategory}" category filter.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-xs font-bold text-blue-600 underline"
            >
              Reset to All Projects
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
