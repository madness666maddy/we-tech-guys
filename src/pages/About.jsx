import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { technologyCategories } from '../data/technologies';
import { 
  Code2, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Business Impact First",
      description: "We don't write code for code's sake. Every architectural choice, database schema, and UI component is tailored to drive client revenues and operational speed."
    },
    {
      icon: ShieldCheck,
      title: "Engineering Integrity",
      description: "We write clean, documented, PEP-8 and ES6+ compliant code with high test coverage and zero shortcuts on security or performance."
    },
    {
      icon: Rocket,
      title: "Agile & Transparent Scoping",
      description: "No black-box development. Clients receive weekly demo builds, clear milestone dashboards, and direct developer communication."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200 rounded-full">
            About DEVFORGE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Software Development Agency Built for <span className="text-blue-600">Modern Businesses</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            DEVFORGE is an independent freelance software development agency specializing in custom web applications, AI platforms, Python backends, and full-stack solutions.
          </p>
        </div>

        {/* Company Intro & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Mission & Philosophy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We started DEVFORGE to address a massive problem faced by business leaders: traditional software consulting agencies charge exorbitant fees for slow progress, while unvetted marketplaces risk low code quality and missed deadlines.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our engineering philosophy combines senior-level technical craftsmanship with lean, direct communication. Whether you are building an AI tool, an e-commerce platform, or an internal ERP, we build software that scales effortlessly.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-800">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                100% Code Ownership
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                Transparent Pricing
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                Dedicated Post-Launch Support
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Agency Highlights
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Core Stack</span>
                <span className="font-semibold text-slate-900">React.js, Python, Django, FastAPI</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Average Project Delivery</span>
                <span className="font-semibold text-slate-900">2 to 6 Weeks</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Client Retention</span>
                <span className="font-semibold text-blue-600">92% Long-Term Retainers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Geographies Served</span>
                <span className="font-semibold text-slate-900">Global (US, Europe, India, Asia)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Philosophy / Values */}
        <div className="mb-20">
          <SectionTitle
            badge="Core Principles"
            title="Why Clients Choose Working With Us"
            subtitle="The fundamental values guiding how we architect software and collaborate with clients."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200 space-y-3">
                  <div className="w-10 h-10 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Stack Grid */}
        <div className="mb-20">
          <SectionTitle
            badge="Capabilities"
            title="Technical Skills & Ecosystem"
            subtitle="Full mastery across modern web, cloud, database, and machine learning stacks."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {technologyCategories.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 space-y-3">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-500">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 bg-slate-50 text-slate-700 rounded border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white rounded-xl p-10 text-center space-y-4">
          <h2 className="text-3xl font-extrabold">Ready to Partner with DEVFORGE?</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Let's discuss your project scope and transform your technical vision into a production application.
          </p>
          <button
            onClick={() => navigate('/project-request')}
            className="inline-flex items-center px-6 py-3 text-sm font-bold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-colors"
          >
            Start Your Project <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
          </button>
        </div>

      </div>
    </div>
  );
}
