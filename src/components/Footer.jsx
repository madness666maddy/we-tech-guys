import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white p-2 rounded-lg border border-slate-700 hover:opacity-95 transition-opacity">
              <img
                src="/logo.png"
                alt="WTG - WE TECH GUYS"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              WE TECH GUYS (WTG) - Modern software development agency. We design and build web applications, AI platforms, and enterprise solutions for real businesses and ambitious startups.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Available for New Projects
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Portfolio Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Team</Link>
              </li>
              <li>
                <Link to="/project-request" className="hover:text-white transition-colors font-medium text-blue-400 flex items-center">
                  Start a Project <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">React Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Full Stack Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">AI & ML Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">API & Backend Systems</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <a href="mailto:madhan678@gmail.com" className="hover:text-white transition-colors">madhan678@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <a href="tel:+918667587977" className="hover:text-white transition-colors">+91 8667587977</a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 WTG (WE TECH GUYS). All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
