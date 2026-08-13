import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { projects } from '../data/projects';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Building, 
  Layers, 
  Award, 
  ArrowRight, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 flex items-center justify-center">
        <SEO
          title="Project Not Found | WTG — We Tech Guys"
          description="The requested project details could not be found."
          canonicalPath="/projects"
        />
        <div className="bg-white rounded-lg border border-slate-200 p-10 text-center max-w-md">
          <h2 className="text-xl font-bold text-slate-900">Project Not Found</h2>
          <p className="text-sm text-slate-500 mt-2 mb-6">
            The requested project details could not be found.
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <SEO
        title={`${project.title} Case Study | WTG — We Tech Guys`}
        description={project.shortDescription}
        canonicalPath={`/projects/${project.id}`}
        ogImage={project.image}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to All Projects
        </Link>

        {/* Top Header Block */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold rounded-md border border-amber-300">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded border border-emerald-200">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200 rounded-lg mb-10 text-sm">
          <div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Industry</span>
            <span className="font-bold text-slate-800 mt-1 block">{project.clientIndustry}</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Timeline</span>
            <span className="font-bold text-slate-800 mt-1 block">{project.timeline}</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Tech Stack</span>
            <span className="font-bold text-slate-800 mt-1 block">{project.technologies.length} Frameworks</span>
          </div>
          <div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Status</span>
            <span className="font-bold text-emerald-600 mt-1 block">{project.status}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 mb-12 bg-slate-100 shadow-2xs">
          <img
            src={project.image}
            alt={`${project.title} - WTG Website Development Case Study`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Left / Main Section (2 Cols) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
                Project Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center">
                <ShieldAlert className="w-5 h-5 mr-2 text-amber-700" />
                The Client Challenge
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {project.clientProblem}
              </p>
            </div>

            {/* Our Solution */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-amber-500" />
                Our Solution Architecture
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {project.ourSolution}
              </p>
            </div>

            {/* Key Features Delivered */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                Key Features Delivered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-3 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2.5 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Results Achieved */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                Measurable Impact & Results
              </h2>
              <div className="space-y-3">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-md text-sm font-semibold text-emerald-900 flex items-center"
                  >
                    <Award className="w-5 h-5 text-emerald-600 mr-3 shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar (1 Col) */}
          <div className="space-y-8">
            
            {/* Tech Stack Box */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono font-medium bg-white text-slate-800 rounded border border-slate-300 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Resolution */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 space-y-3">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                Technical Highlights
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Quick CTA Box */}
            <div className="bg-slate-900 text-white rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-bold">Have a Similar Project?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Let's discuss how we can engineer a custom website or application tailored for your business requirements.
              </p>
              <button
                onClick={() => navigate('/project-request')}
                className="w-full py-2.5 px-4 text-xs font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400 transition-colors"
              >
                Start Your Website Project
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
