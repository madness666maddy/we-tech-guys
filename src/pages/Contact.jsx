import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Globe,
  Share2,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all required contact fields.');
      return;
    }

    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(
      formState.subject || `New Contact Inquiry from ${formState.name}`
    );
    const emailBody = encodeURIComponent(
      `Hello WTG Team,\n\nYou have received a new message from your website contact form:\n\n` +
      `Name: ${formState.name}\n` +
      `Client Email: ${formState.email}\n` +
      `Subject: ${formState.subject || 'General Inquiry'}\n\n` +
      `Message:\n${formState.message}\n\n` +
      `---\nSent via WTG Website Contact Form`
    );

    const mailtoUrl = `mailto:wtgwebservices@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Automatically trigger mail client redirect
      window.location.href = mailtoUrl;
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionTitle
          badge="Get In Touch"
          title="Contact Our Engineering Team"
          subtitle="Have a question or want to discuss a new software project? Reach out directly via email or phone."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6 shadow-2xs">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Direct Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Email Us</span>
                    <a href="mailto:wtgwebservices@gmail.com" className="text-slate-900 font-bold hover:text-amber-600 transition-colors">
                      wtgwebservices@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Mobile / WhatsApp</span>
                    <a href="tel:+918667587977" className="text-slate-900 font-bold hover:text-amber-600 transition-colors">
                      +91 8667587977
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-slate-900 font-medium">
                      India • Remote & On-Site Projects
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Business Hours</span>
                    <span className="text-slate-900 font-medium">
                      Mon – Sat: 9:00 AM – 7:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Call / Email buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:wtgwebservices@gmail.com"
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-3 text-xs font-bold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-1.5" /> Email Direct
                </a>
                <a
                  href="https://wa.me/918667587977"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-3 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md hover:bg-emerald-100 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-1.5" /> WhatsApp Us
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10 shadow-2xs">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="General Inquiry / Technical Scoping"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can WTG assist your business?"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400 transition-colors shadow-xs flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Opening Mail Client...</span>
                    ) : (
                      <>
                        Send Message to wtgwebservices@gmail.com
                        <Send className="w-4 h-4 ml-2 text-slate-950" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Dispatched!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your message details have been formatted and directed to <strong className="text-slate-900">wtgwebservices@gmail.com</strong>.
                  </p>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs space-y-1.5 max-w-sm mx-auto my-4">
                    <div><span className="text-slate-400">Name:</span> {formState.name}</div>
                    <div><span className="text-slate-400">Email:</span> {formState.email}</div>
                    <div><span className="text-slate-400">Recipient:</span> wtgwebservices@gmail.com</div>
                    <div><span className="text-slate-400">Mobile Support:</span> +91 8667587977</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={`mailto:wtgwebservices@gmail.com?subject=Inquiry%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`}
                      className="px-4 py-2.5 text-xs font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400"
                    >
                      Re-open Email App
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
