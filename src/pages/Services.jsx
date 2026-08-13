import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  const handleDiscuss = (service) => {
    navigate(`/project-request?service=${encodeURIComponent(service.title)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          badge="Our Services"
          title="Full-Cycle Software Engineering Solutions"
          subtitle="Explore our specialized development services engineered to take your product from concept to high-performance launch."
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
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              Need a Custom Combination?
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Don't See Your Exact Technical Requirement?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We frequently architect bespoke multi-service applications combining AI, specialized backend Python APIs, complex database indexing, and custom React user interfaces.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => navigate('/project-request')}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-xs"
            >
              Discuss Custom Requirement
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
