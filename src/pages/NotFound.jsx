import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, ArrowLeft, Globe, Briefcase, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-20 px-4">
      <SEO
        title="Page Not Found | WTG — We Tech Guys"
        description="The requested page could not be found. Return to WTG Homepage to explore our website development services."
        canonicalPath="/404"
      />
      
      <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-sm text-center max-w-lg mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-2xl font-black font-mono">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center text-sm">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400 transition-colors shadow-2xs"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-5 py-2.5 font-bold text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors"
          >
            <Globe className="w-4 h-4 mr-2 text-amber-600" />
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
