import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  const handleDiscuss = (service) => {
    navigate(`/project-request?service=${encodeURIComponent(service.title)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16">
      <SEO
        title="Website Development Services | WTG — We Tech Guys"
        description="Explore WTG's website development services: business websites, e-commerce stores, React development, Python backends, FastAPI microservices, and website maintenance."
        canonicalPath="/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          badge="Our Services"
          title="Website Development & Digital Engineering Services"
          subtitle="Explore our specialized development services engineered to take your business from concept to a high-performance, search-friendly website."
          centered={true}
        />

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onDiscuss={handleDiscuss}
            />
          ))}
        </div>

        {/* Custom Solution Banner */}
        <div className="mt-20 bg-white rounded-xl border border-slate-200 p-8 lg:p-12 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-300">
              Need a Custom Combination?
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Don't See Your Exact Technical Requirement?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We architect custom multi-service business applications combining AI, backend Python APIs, database engineering, and modern React user interfaces.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigate('/project-request')}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 transition-colors shadow-xs border border-amber-400"
            >
              Discuss Custom Requirement
              <ArrowRight className="ml-2 w-5 h-5 text-slate-950" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
