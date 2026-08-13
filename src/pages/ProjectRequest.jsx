import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
  CheckCircle2, 
  Send, 
  Upload, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  Clock,
  ShieldCheck,
  Building,
  Mail,
  Phone
} from 'lucide-react';

export default function ProjectRequest() {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse query params (e.g. ?service=React%20Development)
  const queryParams = new URLSearchParams(location.search);
  const prefilledService = queryParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: 'Web Application',
    requiredServices: prefilledService ? [prefilledService] : ['Web Development'],
    description: '',
    expectedFeatures: '',
    budgetRange: '₹25,000 - ₹50,000',
    expectedDeadline: '2-4 Weeks',
    referenceUrl: '',
    uploadedFileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService && !formData.requiredServices.includes(prefilledService)) {
      setFormData((prev) => ({
        ...prev,
        requiredServices: [...prev.requiredServices, prefilledService]
      }));
    }
  }, [prefilledService]);

  const availableServices = [
    'Website Development',
    'React Development',
    'Full Stack Development',
    'Python Development',
    'Django Development',
    'FastAPI Development',
    'AI / ML Development',
    'API Development',
    'Database Development',
    'E-Commerce Development',
    'Admin Dashboard Development',
    'Workflow Automation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.requiredServices.includes(service);
      if (exists) {
        return {
          ...prev,
          requiredServices: prev.requiredServices.filter((s) => s !== service)
        };
      } else {
        return {
          ...prev,
          requiredServices: [...prev.requiredServices, service]
        };
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, uploadedFileName: file.name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.description) {
      alert('Please complete all required fields (Name, Email, and Project Description).');
      return;
    }

    setIsSubmitting(true);
    const randomRef = 'WTG-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomRef);

    // Compose formatted email body
    const emailSubject = encodeURIComponent(
      `[New Project Request] ${formData.projectType} - ${formData.fullName}`
    );

    const emailBody = encodeURIComponent(
      `NEW PROJECT SUBMISSION (Ref: ${randomRef})\n\n` +
      `CLIENT CONTACT DETAILS:\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone || 'N/A'}\n` +
      `• Company: ${formData.companyName || 'N/A'}\n\n` +
      `PROJECT SPECIFICATIONS:\n` +
      `• Project Type: ${formData.projectType}\n` +
      `• Required Services: ${formData.requiredServices.join(', ')}\n` +
      `• Budget Range: ${formData.budgetRange}\n` +
      `• Completion Deadline: ${formData.expectedDeadline}\n` +
      `• Reference URL: ${formData.referenceUrl || 'N/A'}\n` +
      `• Spec Document: ${formData.uploadedFileName || 'None'}\n\n` +
      `PROJECT DESCRIPTION:\n${formData.description}\n\n` +
      `EXPECTED FEATURES:\n${formData.expectedFeatures || 'N/A'}\n\n` +
      `---\nSubmitted via WTG Project Request Portal`
    );

    const mailtoUrl = `mailto:wtgwebservices@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo(0, 0);
      // Automatically trigger email client
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!submitted ? (
          <>
            {/* Form Header */}
            <SectionTitle
              badge="Start a Project"
              title="Submit Your Project Requirements"
              subtitle="Tell us what you're building. Your specifications will be sent directly to wtgwebservices@gmail.com and our team will get back to you within 24 hours."
              centered={true}
            />

            {/* Main Form Container */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10 shadow-2xs space-y-8"
            >
              
              {/* 1. Client Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 8667587977"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Acme Tech Ventures"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Project Scope & Category */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Project Type & Required Services
                </h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Primary Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Web Application">Web Application (React / Python)</option>
                    <option value="Website Development">Corporate / Marketing Website</option>
                    <option value="AI / ML Solution">AI Assistant / RAG / Machine Learning</option>
                    <option value="E-Commerce">E-Commerce Storefront</option>
                    <option value="Mobile App">Mobile Application</option>
                    <option value="API / Backend System">Custom Backend & API Infrastructure</option>
                    <option value="Workflow Automation">Internal Tooling & Workflow Automation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Select Required Services (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {availableServices.map((service) => {
                      const isSelected = formData.requiredServices.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3 py-2 text-xs font-medium rounded-md border text-left flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'bg-amber-50 text-amber-900 border-amber-300 font-semibold'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span>{service}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 ml-1 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 3. Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Description & Specifications
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Description & Overview <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    placeholder="Describe your project idea, business goals, key problems to solve, and target users..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Expected Key Features
                  </label>
                  <textarea
                    name="expectedFeatures"
                    rows={2}
                    placeholder="List specific features required (e.g., User Login, Payment Gateway, Admin Dashboard, PDF Reports)..."
                    value={formData.expectedFeatures}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  ></textarea>
                </div>
              </div>

              {/* 4. Budget, Timeline & References */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Budget, Timeline & File Upload
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Starter)</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Professional)</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 (Advanced)</option>
                      <option value="₹1,00,000+">₹1,00,000+ (Enterprise Custom)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Expected Completion Deadline
                    </label>
                    <select
                      name="expectedDeadline"
                      value={formData.expectedDeadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Urgent (1-2 Weeks)">Urgent (1-2 Weeks)</option>
                      <option value="Standard (2-4 Weeks)">Standard (2-4 Weeks)</option>
                      <option value="Flexible (1-2 Months)">Flexible (1-2 Months)</option>
                      <option value="Long Term (3+ Months)">Long Term (3+ Months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Reference Website / Competitor Link
                  </label>
                  <input
                    type="url"
                    name="referenceUrl"
                    placeholder="https://example.com"
                    value={formData.referenceUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  />
                </div>

                {/* File upload simulator */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Upload Specification File (Optional PDF / Doc)
                  </label>
                  <div className="relative border-2 border-dashed border-slate-300 rounded-md p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-center cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex flex-col items-center space-y-1">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span className="text-xs font-semibold text-slate-700">
                        {formData.uploadedFileName ? (
                          <span className="text-amber-600 font-bold">Attached: {formData.uploadedFileName}</span>
                        ) : (
                          'Click or drag specification doc / Wireframes (PDF, PNG, DOCX)'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Submission Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-base font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400 transition-all duration-150 shadow-xs flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      Submit Project Request to wtgwebservices@gmail.com
                      <Send className="w-5 h-5 ml-2 text-slate-950" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Direct dispatch to wtgwebservices@gmail.com • Direct Call / WhatsApp: +91 8667587977
                </p>
              </div>

            </form>
          </>
        ) : (
          /* SUCCESS STATE */
          <div className="bg-white rounded-xl border border-slate-200 p-10 sm:p-12 shadow-sm text-center max-w-2xl mx-auto space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Reference Code: {referenceId}
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight pt-2">
                Project Request Dispatched!
              </h2>
              <p className="text-slate-600 text-base max-w-md mx-auto">
                Your project specification has been formatted and directed to <strong className="text-slate-900">wtgwebservices@gmail.com</strong>.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-left text-sm space-y-2.5">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Client Name:</span>
                <span className="font-semibold text-slate-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Client Email:</span>
                <span className="font-semibold text-slate-900">{formData.email}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Project Type:</span>
                <span className="font-semibold text-slate-900">{formData.projectType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Target Email:</span>
                <span className="font-semibold text-amber-600">wtgwebservices@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Direct Phone:</span>
                <span className="font-semibold text-slate-900">+91 8667587977</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:wtgwebservices@gmail.com?subject=Project%20Request%20[${formData.projectType}]%20-${encodeURIComponent(formData.fullName)}&body=${encodeURIComponent(formData.description)}`}
                className="px-6 py-3 text-sm font-extrabold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-600 border border-amber-400 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Re-open Email App
              </a>
              <a
                href="tel:+918667587977"
                className="px-6 py-3 text-sm font-semibold text-slate-800 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2 text-amber-600" />
                Call +91 8667587977
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
