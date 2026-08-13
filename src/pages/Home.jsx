import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Code, 
  Users, 
  Zap, 
  Award, 
  MessageSquareText, 
  ArrowUpRight 
} from 'lucide-react';

import HeroDashboard from '../components/HeroDashboard';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';

import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { technologyCategories } from '../data/technologies';
import { pricingPackages } from '../data/pricing';
import { faqs } from '../data/faqs';

export default function Home() {
  const navigate = useNavigate();

  const handleServiceDiscuss = (service) => {
    navigate(`/project-request?service=${encodeURIComponent(service.title)}`);
  };

  const steps = [
    {
      number: "01",
      title: "Tell Us Your Idea",
      description: "Share your project requirements, business goals, and target audience with our engineering team."
    },
    {
      number: "02",
      title: "Plan & Estimate",
      description: "We analyze technical feasibility, scope milestones, and create a transparent fixed-price estimate."
    },
    {
      number: "03",
      title: "Design & Develop",
      description: "Our engineers build your solution using modern React architecture and battle-tested backends."
    },
    {
      number: "04",
      title: "Test & Launch",
      description: "We perform automated end-to-end testing, security audits, and deploy your product to production."
    }
  ];

  const whyUsFeatures = [
    {
      icon: Code,
      title: "Clean & Production-Ready Code",
      description: "We write maintainable, modular React and Python code strictly adhering to modern industry standards."
    },
    {
      icon: Clock,
      title: "On-Time Milestone Delivery",
      description: "Agile sprint releases keep you updated weekly. We honor timelines with zero unexpected delays."
    },
    {
      icon: Users,
      title: "Direct Technical Communication",
      description: "No middlemen or non-technical account reps. Speak directly with the engineers building your product."
    },
    {
      icon: ShieldCheck,
      title: "Security & IP Protection",
      description: "Strict non-disclosure agreements (NDAs) and bank-grade data encryption practices protect your business."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50/70 border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-amber-50 border border-amber-300 rounded-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-xs font-bold text-amber-900 tracking-wide uppercase">
                  WE TECH GUYS • WE BUILD. YOU GROW.
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Have an Idea? <br />
                <span className="text-amber-500">Let's Build It.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                We design and develop modern websites, applications, AI solutions, and custom software for real businesses and ambitious startups.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/project-request')}
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 transition-all duration-150 shadow-xs border border-amber-400"
                >
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 text-slate-950" />
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
                >
                  View Our Work
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-6 text-xs font-semibold text-slate-700">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-500 mr-1.5" />
                  Fixed Budget Guarantee
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-500 mr-1.5" />
                  Full Source Code Ownership
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-500 mr-1.5" />
                  Post-Launch Support
                </span>
              </div>
            </div>

            {/* Right Column Visual Dashboard */}
            <div className="lg:col-span-5">
              <HeroDashboard />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Trusted Development • Built for Real Businesses
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">25+</div>
              <div className="text-sm font-semibold text-slate-600 mt-1">Completed Projects</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">15+</div>
              <div className="text-sm font-semibold text-slate-600 mt-1">Technologies Mastered</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">20+</div>
              <div className="text-sm font-semibold text-slate-600 mt-1">Happy Global Clients</div>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono">98%</div>
              <div className="text-sm font-semibold text-slate-600 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="Our Services"
              title="Everything You Need to Build Your Product"
              subtitle="From responsive landing pages to enterprise AI microservices, we engineer robust digital products."
              className="mb-0"
            />
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700"
            >
              View All 12 Services <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onDiscuss={handleServiceDiscuss}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS / TIMELINE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Process"
            title="How We Turn Your Idea into Reality"
            subtitle="A transparent 4-step development methodology built for quality and speed."
            centered={true}
          />

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-slate-50 rounded-lg p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-amber-500 font-mono block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold shadow-2xs">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="Portfolio"
              title="Featured Client Projects"
              subtitle="Explore recent applications and platforms we have engineered for real businesses."
              className="mb-0"
            />
            <Link
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700"
            >
              View Full Portfolio <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why Us"
            title="Engineered for Reliability & Scale"
            subtitle="We bridge the gap between expensive software agencies and unreliable freelancers."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyUsFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3"
                >
                  <div className="w-10 h-10 rounded-md bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold border border-amber-200">
                    <IconComp className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Tech Stack"
            title="Technologies We Master"
            subtitle="We utilize modern, production-grade tools and frameworks to build fast, secure software."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {technologyCategories.map((cat, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-100 pb-2">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2 py-1 bg-slate-50 text-slate-700 rounded border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Real feedback from founders and tech leaders who built their platforms with WTG."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRICING PACKAGES */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Investment"
            title="Transparent Project Packages"
            subtitle="Clear, predictable pricing tailored to your application's technical scope."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-lg border p-8 flex flex-col justify-between relative ${
                  pkg.popular
                    ? 'border-amber-500 shadow-md ring-1 ring-amber-500'
                    : 'border-slate-200 shadow-2xs'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-amber-500 text-slate-950 text-xs font-extrabold rounded-full uppercase tracking-wider shadow-2xs">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.subtitle}</p>

                  <div className="my-6">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono">
                      {pkg.price}
                    </span>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600 mb-8 border-t border-slate-100 pt-6">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-amber-500 mr-2.5 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate('/project-request')}
                  className={`w-full py-3 px-4 text-sm font-bold rounded-md transition-colors ${
                    pkg.popular
                      ? 'bg-amber-500 text-slate-950 hover:bg-amber-600 shadow-xs'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Have questions before starting? Find quick answers regarding process, pricing, and ownership."
            centered={true}
          />

          <div className="space-y-4 mt-12">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. ELEGANT DARK CALL TO ACTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3.5 py-1 text-xs font-bold tracking-wider text-amber-400 uppercase bg-slate-800 rounded-full border border-amber-400/30">
            Let's Collaborate
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Have a Project in Mind? <br />
            <span className="text-amber-400">WE BUILD. YOU GROW.</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you're building and we'll help turn your idea into a working, production-grade digital product.
          </p>

          <div className="pt-4">
            <button
              onClick={() => navigate('/project-request')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 transition-colors shadow-lg border border-amber-400"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 text-slate-950" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
