import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
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
      description: "We write clean, documented, search-friendly code adhering strictly to modern web standards, performance budgets, and security protocols."
    },
    {
      icon: Rocket,
      title: "Agile & Transparent Scoping",
      description: "No black-box development. Clients receive milestone updates, clear progress reports, and direct developer communication throughout."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <SEO
        title="About WTG — We Tech Guys | Website Development Agency"
        description="Learn about WTG — We Tech Guys. We are an independent software development agency specializing in website development, custom web applications, e-commerce, and digital solutions."
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="px-3.5 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase bg-amber-50 border border-amber-300 rounded-full">
            About WTG — We Tech Guys
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Website Development Agency Built for <span className="text-amber-500">Modern Businesses</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            WTG (We Tech Guys) is a dedicated software development service specializing in custom business websites, e-commerce stores, React applications, and python backends.
          </p>
        </div>

        {/* Company Intro & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Mission & Philosophy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We started WTG to solve a common problem faced by business owners: expensive agencies charge exorbitant fees for slow progress, while unvetted freelancers can risk poor code quality and missed deadlines.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our engineering philosophy combines technical craftsmanship with direct, responsive communication. Whether you need an affordable starter website or an e-commerce platform, we build software that drives real growth.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-800">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                100% Code Ownership
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                Transparent Pricing
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                Post-Launch Support
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              WTG Highlights
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Tagline</span>
                <span className="font-bold text-slate-900">WE BUILD. YOU GROW.</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Core Stack</span>
                <span className="font-semibold text-slate-900">React.js, Python, FastAPI, Tailwind</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Average Turnaround</span>
                <span className="font-semibold text-slate-900">1 to 4 Weeks</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Special Launch Deal</span>
                <span className="font-bold text-amber-600">₹2,000 – ₹5,000 (First 5 Clients)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mobile / WhatsApp</span>
                <span className="font-semibold text-slate-900">+91 8667587977</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Philosophy / Values */}
        <div className="mb-20">
          <SectionTitle
            badge="Core Principles"
            title="Why Clients Choose Working With WTG"
            subtitle="The fundamental values guiding how we architect websites and collaborate with clients."
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200 space-y-3">
                  <div className="w-10 h-10 rounded-md bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold border border-amber-200">
                    <IconComp className="w-5 h-5 text-amber-600" />
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
            subtitle="Full mastery across modern web development, backend APIs, and responsive design."
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
          <h2 className="text-3xl font-extrabold">Ready to Partner with WTG?</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Let's discuss your project scope and transform your technical vision into a production-grade business website.
          </p>
          <button
            onClick={() => navigate('/project-request')}
            className="inline-flex items-center px-6 py-3.5 text-sm font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400 transition-colors"
          >
            Build Your Website <ArrowRight className="ml-2 w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </div>
  );
}
