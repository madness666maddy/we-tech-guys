export const projects = [
  {
    id: "ai-business-assistant",
    title: "AI Business Assistant & Intelligence Platform",
    category: "AI / Machine Learning",
    shortDescription: "Enterprise AI assistant integrated with internal vector databases for automated client query resolution and document analysis.",
    fullDescription: "A sophisticated AI platform designed for medium-sized enterprises to ingest unstructured data (PDFs, internal wikis, customer support logs) and provide instant semantic search, automated response generation, and workflow orchestration via custom LLM pipelines.",
    clientProblem: "The client’s support team was overwhelmed handling 3,000+ repetitive technical inquiries weekly, resulting in an average response delay of 14 hours and reduced client retention.",
    ourSolution: "DEVFORGE built an end-to-end AI Assistant featuring FastAPI microservices, OpenAI LLM fine-tuning, Pinecone vector storage, and a sleek React admin portal with real-time analytics.",
    keyFeatures: [
      "Semantic Search & Document Ingestion",
      "Multi-tenant Role-Based Access Control (RBAC)",
      "Real-time Chat Interface with Code/Formula rendering",
      "Automated Ticket Routing & Sentiment Tagging",
      "Custom Fine-tuned Fallback Guardrails"
    ],
    technologies: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL", "Pinecone", "Tailwind CSS"],
    timeline: "8 Weeks",
    status: "Completed",
    clientIndustry: "Enterprise Software & Consulting",
    results: [
      "78% Reduction in Ticket First-Response Time",
      "Over $120,000 Saved in Annual Support Costs",
      "94% Accuracy on Technical Query Resolutions"
    ],
    challenges: "Handling low-latency embeddings generation while maintaining strict data privacy compliance across enterprise environments.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ecommerce-platform",
    title: "Next-Gen Omnichannel E-Commerce Platform",
    category: "E-Commerce",
    shortDescription: "High-performance online store with custom product customization engines, instant checkout flow, and inventory synchronization.",
    fullDescription: "A custom e-commerce solution built for a rapidly expanding lifestyle brand needing seamless multi-currency checkout, dynamic product variant filtering, and deep ERP sync.",
    clientProblem: "Legacy Shopify setup suffered from sluggish page loads (5.2s), checkout drop-offs, and poor integration with localized payment gateways across South Asia.",
    ourSolution: "We engineered a headless architecture using a React frontend paired with a robust Django REST Backend, Stripe & Razorpay multi-gateway support, and Redis caching.",
    keyFeatures: [
      "Sub-second Server Response Time (SSG & API Caching)",
      "Dynamic 3D-Style Product Configurator",
      "Multi-Currency & Automated Tax Calculation",
      "Custom Inventory Sync Engine with Physical Stores",
      "One-click Guest Checkout with SMS Verification"
    ],
    technologies: ["React", "Django", "Python", "PostgreSQL", "Redis", "Stripe API", "Tailwind CSS"],
    timeline: "10 Weeks",
    status: "Completed",
    clientIndustry: "Retail & Consumer Goods",
    results: [
      "3.2x Increase in Mobile Conversion Rates",
      "Page Load Speed Optimized from 5.2s to 0.8s",
      "45% Increase in Average Order Value (AOV)"
    ],
    challenges: "Ensuring zero-downtime database migration for 150,000+ historical orders during global launch day.",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf4005a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "student-management-system",
    title: "Institutional Student & Campus Management System",
    category: "Business Applications",
    shortDescription: "All-in-one educational ERP managing admissions, course schedules, attendance, grading, and parent communication portals.",
    fullDescription: "A unified cloud platform built for higher education academies to digitize paper-bound administrative tasks, automate exam grade calculations, and offer parents live progress dashboards.",
    clientProblem: "Manual attendance records and fragmented Excel grade sheets caused administrative bottlenecks, billing disputes, and lack of visibility for guardians.",
    ourSolution: "DEVFORGE delivered a modular React web application backed by Node.js microservices and MongoDB, providing distinct portals for Students, Faculty, and Parents.",
    keyFeatures: [
      "Biometric & QR Attendance Integration",
      "Automated Fee Invoice Generation & Online Payment Portal",
      "Interactive Timetable Builder & Examination Scheduler",
      "Real-time SMS & Push Notification Engine",
      "Comprehensive Academic Transcript Export (PDF/Excel)"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "PDFKit"],
    timeline: "12 Weeks",
    status: "Completed",
    clientIndustry: "Higher Education & Academies",
    results: [
      "100% Elimination of Paper Attendance Registers",
      "92% On-time Parent Fee Payments via Portal",
      "Saved 35+ Staff Hours per Week per Department"
    ],
    challenges: "Building highly configurable grade-weighting algorithms tailored to varying university faculty rules.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "saas-analytics-dashboard",
    title: "FinTech Data Analytics & Reporting SaaS",
    category: "SaaS",
    shortDescription: "Real-time financial analytics portal featuring interactive charting, subscription churn metrics, and automated PDF summaries.",
    fullDescription: "A multi-tenant SaaS application created for financial advisors and startup founders to aggregate revenue streams, monitor customer LTV/CAC ratios, and project financial forecasts.",
    clientProblem: "Founders were spending hours manually stitching CSV exports from Stripe, PayPal, and bank feeds into static slide decks for board updates.",
    ourSolution: "We created a sleek data visualization platform with React, Chart.js, FastAPI backend, and background Celery ETL pipelines.",
    keyFeatures: [
      "Live Revenue & MRR Growth Dashboards",
      "Custom Metric Builder with Drag-and-Drop Widgets",
      "Automated Weekly Email Executive Digests",
      "Bank-grade AES-256 Encryption & Audit Logs",
      "Stripe / QuickBooks / Plaid Native Connectors"
    ],
    technologies: ["React", "FastAPI", "Python", "PostgreSQL", "Celery", "Chart.js"],
    timeline: "6 Weeks",
    status: "Completed",
    clientIndustry: "FinTech & Venture Capital",
    results: [
      "Processed Over $14M in Aggregate Transaction Insights",
      "4.8/5 Average User Satisfaction Score",
      "Zero Security Incidents across 12,000+ API calls/day"
    ],
    challenges: "Optimizing WebSocket data feeds to update real-time charts without causing frontend re-rendering lag.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mobile-healthcare-app",
    title: "Telehealth & Doctor Consultation Platform",
    category: "Mobile Applications",
    shortDescription: "HIPAA-compliant doctor booking and HD video consultation system with digital prescription management.",
    fullDescription: "A cross-platform healthcare app connecting patients with specialist doctors for virtual visits, instant prescription downloads, and lab report tracking.",
    clientProblem: "Regional clinics faced long wait-room times and struggled to follow up with rural patients needing regular consultation.",
    ourSolution: "We built a web & tablet responsive solution with WebRTC video calling, secure cloud record storage, and automated appointment reminders.",
    keyFeatures: [
      "HD Encrypted WebRTC Video Consultation",
      "Digital Prescription Signing & Pharmacy Dispatch",
      "Patient Electronic Health Records (EHR) Locker",
      "Multi-language Interface (English, Hindi, Regional)",
      "Automated Doctor Availability Calendar"
    ],
    technologies: ["React", "FastAPI", "WebRTC", "PostgreSQL", "Tailwind CSS"],
    timeline: "9 Weeks",
    status: "Completed",
    clientIndustry: "Healthcare & Digital Health",
    results: [
      "Over 18,000 Virtual Consultations Completed",
      "Patient No-Show Rate Dropped from 22% to 4%",
      "100% Compliance with Data Privacy Norms"
    ],
    challenges: "Maintaining reliable video call quality across 3G mobile networks in remote geographical zones.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "automated-workflow-engine",
    title: "Logistics Fleet & Dispatch Automation Hub",
    category: "Automation",
    shortDescription: "Automated route optimization and driver dispatch portal for regional freight logistics providers.",
    fullDescription: "A mission-critical operational system that uses custom routing algorithms to bundle package deliveries, assign drivers based on live location, and track fuel efficiency.",
    clientProblem: "Manual route assignment led to driver overlap, excessive fuel consumption, and late delivery penalties for perishable cargo.",
    ourSolution: "DEVFORGE engineered an operational dashboard built with React, Python backend, OpenStreetMap APIs, and automated SMS dispatch triggers.",
    keyFeatures: [
      "Dynamic Route Optimization Algorithm",
      "Live GPS Fleet Mapping & Speed Telemetry",
      "Driver Mobile Web App for Digital Proof of Delivery",
      "Automated Fuel & Maintenance Expense Analytics",
      "Instant WhatsApp Delivery Status Notifications"
    ],
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Google Maps API", "Docker"],
    timeline: "7 Weeks",
    status: "Completed",
    clientIndustry: "Supply Chain & Logistics",
    results: [
      "28% Savings in Monthly Fleet Fuel Expenses",
      "99.4% On-time Delivery Rate Achieved",
      "Automated 90% of Daily Driver Dispatching Tasks"
    ],
    challenges: "Handling real-time recalculations when delivery drivers encountered sudden traffic roadblocks or vehicle breakdowns.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "custom-erp-manufacturing",
    title: "Smart Manufacturing ERP & Inventory Suite",
    category: "Business Applications",
    shortDescription: "Custom ERP tracking raw material procurement, assembly stages, quality control metrics, and warehouse stock levels.",
    fullDescription: "A custom enterprise resource planning system engineered for a precision component manufacturer to eliminate inventory discrepancies and track assembly line throughput.",
    clientProblem: "Off-the-shelf ERPs were overly complex, expensive, and failed to accommodate custom bill-of-materials (BOM) multi-tier structures.",
    ourSolution: "We designed a streamlined React portal backed by Django microservices tailored precisely to the client's manufacturing workflow.",
    keyFeatures: [
      "Multi-level Bill of Materials (BOM) Management",
      "Barcode & QR Code Warehouse Batch Scanning",
      "Assembly Line Defect Tracking & QC Gateways",
      "Supplier Purchase Order & Reorder Point Automation",
      "Role-Specific Dashboards (Floor Worker to CEO)"
    ],
    technologies: ["React", "Django", "Python", "PostgreSQL", "Tailwind CSS"],
    timeline: "11 Weeks",
    status: "Completed",
    clientIndustry: "Industrial Manufacturing",
    results: [
      "Zero Raw Material Shortage Downtime over 6 months",
      "Warehouse Audit Cycle Reduced from 4 Days to 3 Hours",
      "Full Batch Traceability for ISO Certification"
    ],
    challenges: "Designing an ultra-fast touch UI usable on rugged Android tablets in factory floor environments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "real-estate-portal",
    title: "Luxury Real Estate Marketplace & CRM",
    category: "Web Development",
    shortDescription: "High-end property listing engine featuring interactive map view, virtual tour integration, and broker lead management.",
    fullDescription: "A premium real estate platform crafted for high-net-worth buyers and property agents, featuring instant property comparison, mortgage calculators, and lead management CRM.",
    clientProblem: "Existing property listings looked outdated, loaded slowly on mobile devices, and failed to capture verified luxury client leads.",
    ourSolution: "DEVFORGE delivered a responsive web application with Mapbox integration, custom filter sliders, and automated broker assignment rules.",
    keyFeatures: [
      "Interactive Geospatial Map Search with Draw-Boundary Filter",
      "3D Virtual Tour & High-Definition Video Gallery",
      "Mortgage Payment Estimator with Dynamic Interest Rates",
      "Automated Broker Lead Distribution & Inquiry Tracker",
      "Saved Searches & Price Reduction Email Alerts"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Mapbox API"],
    timeline: "5 Weeks",
    status: "Completed",
    clientIndustry: "Real Estate & Architecture",
    results: [
      "210% Increase in Inbound Property Inquiry Submissions",
      "Average Session Duration Increased by 4.2 Minutes",
      "Captured Over $85M in High-Value Property Listings"
    ],
    challenges: "Optimizing high-resolution imagery and media rendering without degrading mobile load performance.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
  }
];

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Applications",
  "AI / Machine Learning",
  "E-Commerce",
  "SaaS",
  "Business Applications",
  "Automation"
];
