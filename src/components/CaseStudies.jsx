import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Code, Smartphone, Monitor, Globe, ArrowRight, Calendar, Users, Trophy, ChevronDown } from 'lucide-react';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsRef = useRef([]);
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  // Case studies data - 9 projects
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      client: "RetailMax Inc.",
      industry: "E-Commerce",
      type: "Website",
      year: "2024",
      duration: "6 months",
      team: "5 people",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete redesign of e-commerce platform with modern UX/UI and optimized checkout flow.",
      overview: "RetailMax was struggling with an outdated e-commerce platform that resulted in 60% cart abandonment rates, poor mobile experience, and loading times exceeding 8 seconds. We transformed their digital presence with a modern, high-performance platform.",
      challenge: "The existing platform was built on legacy technology, causing severe performance issues and user experience problems that directly impacted sales and customer satisfaction.",
      solution: "We built a modern, responsive e-commerce platform using React.js and Node.js with optimized checkout flow, integrated modern payment gateways, and implemented progressive web app features.",
      results: "85% increase in conversion rates, 300% faster loading times, 200% increase in mobile traffic, and 150% revenue growth within the first quarter.",
      services: ["Web Development", "UX/UI Design", "Performance Optimization", "SEO", "Analytics Integration"],
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "AWS"],
      projectImages: [
        {
          title: "Homepage Design",
          image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Modern homepage with hero section and product showcase"
        },
        {
          title: "Product Catalog",
          image: "https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Advanced filtering and search functionality"
        },
        {
          title: "Checkout Process",
          image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Streamlined one-click checkout experience"
        },
        {
          title: "Mobile Experience",
          image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Responsive design optimized for mobile devices"
        },
        {
          title: "Admin Dashboard",
          image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive admin panel for inventory management"
        },
        {
          title: "Analytics Dashboard",
          image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Real-time analytics and reporting system"
        }
      ],
      testimonial: "Arohance Tech transformed our struggling online store into a conversion machine. Sales have never been better!"
    },
    {
      id: 2,
      title: "FinTech Mobile Banking",
      client: "SecureBank Digital",
      industry: "Financial Services",
      type: "Mobile App",
      year: "2024",
      duration: "8 months",
      team: "7 people",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive mobile banking app with biometric security and real-time transaction features.",
      overview: "SecureBank needed a mobile banking solution that met strict security compliance requirements while providing an intuitive user experience. The challenge was balancing security with usability.",
      challenge: "Creating a mobile banking app that meets stringent financial regulations while maintaining user-friendly interface and ensuring top-level security for financial transactions.",
      solution: "We developed a secure mobile banking app using React Native with advanced biometric authentication, end-to-end encryption, and real-time banking features that exceeded industry security standards.",
      results: "400% increase in user adoption, 99.9% reduction in security incidents, 70% faster transaction processing, and maintained a 4.8/5 star rating from users.",
      services: ["Mobile App Development", "Security Implementation", "UX/UI Design", "API Integration", "Compliance Testing"],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Biometric APIs"],
      projectImages: [
        {
          title: "Login & Security",
          image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Biometric authentication and security features"
        },
        {
          title: "Dashboard Overview",
          image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Clean and intuitive account overview"
        },
        {
          title: "Transaction History",
          image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Detailed transaction tracking and history"
        },
        {
          title: "Money Transfer",
          image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Seamless money transfer functionality"
        },
        {
          title: "Card Management",
          image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Digital card management and controls"
        },
        {
          title: "Investment Portfolio",
          image: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Investment tracking and portfolio management"
        }
      ],
      testimonial: "The app exceeded our security standards while delivering an exceptional user experience."
    },
    {
      id: 3,
      title: "Healthcare Management",
      client: "MediCare Solutions",
      industry: "Healthcare",
      type: "Web App",
      year: "2023",
      duration: "10 months",
      team: "8 people",
      icon: <Monitor className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Unified healthcare management platform streamlining patient care and administrative tasks.",
      overview: "MediCare faced fragmented patient data across multiple departments, HIPAA compliance requirements, complex scheduling needs, and integration challenges with legacy systems affecting patient care quality.",
      challenge: "Creating a unified system that consolidates patient data from multiple sources while maintaining HIPAA compliance and integrating with existing medical equipment and legacy systems.",
      solution: "We created a comprehensive healthcare management system using Vue.js and Python Django with secure patient data management, automated scheduling, and real-time analytics dashboards.",
      results: "60% improvement in efficiency, 95% increase in data accuracy, 40% higher patient satisfaction, and 30% reduction in administrative costs.",
      services: ["Web Development", "System Integration", "Data Migration", "Compliance Implementation", "Training & Support"],
      technologies: ["Vue.js", "Python Django", "PostgreSQL", "Redis", "Docker"],
      projectImages: [
        {
          title: "Patient Dashboard",
          image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive patient information overview"
        },
        {
          title: "Appointment Scheduling",
          image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Automated scheduling and calendar management"
        },
        {
          title: "Medical Records",
          image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Digital medical records and history"
        },
        {
          title: "Analytics Dashboard",
          image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Healthcare analytics and reporting"
        },
        {
          title: "Staff Management",
          image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Staff scheduling and management system"
        },
        {
          title: "Billing System",
          image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Integrated billing and insurance management"
        }
      ],
      testimonial: "This system revolutionized how we manage patient care. Everything is now seamlessly connected."
    },
    {
      id: 4,
      title: "Real Estate Platform",
      client: "PropertyPro Realty",
      industry: "Real Estate",
      type: "Website",
      year: "2024",
      duration: "7 months",
      team: "6 people",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Advanced real estate platform with 3D virtual tours and AI-powered property matching.",
      overview: "PropertyPro needed modern property search capabilities, high-resolution image management, virtual tour integration, and lead generation optimization to compete in the digital real estate market.",
      challenge: "Building a sophisticated real estate platform that handles large property databases, integrates virtual tour technology, and provides intelligent property matching for buyers.",
      solution: "We built a cutting-edge real estate platform using Next.js with 3D virtual tours, advanced search filters, and AI-powered property recommendations that revolutionized property browsing.",
      results: "250% increase in lead generation, 180% improvement in user engagement, 300% more property views, and 120% higher conversion rates.",
      services: ["Web Development", "3D Integration", "AI Implementation", "SEO Optimization", "Lead Generation"],
      technologies: ["Next.js", "Three.js", "Python", "MongoDB", "AWS"],
      projectImages: [
        {
          title: "Property Listings",
          image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Beautiful property listing interface"
        },
        {
          title: "Virtual Tours",
          image: "https://images.pexels.com/photos/1974594/pexels-photo-1974594.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Interactive 3D virtual property tours"
        },
        {
          title: "Search & Filters",
          image: "https://images.pexels.com/photos/1974595/pexels-photo-1974595.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Advanced search and filtering system"
        },
        {
          title: "Property Details",
          image: "https://images.pexels.com/photos/1974592/pexels-photo-1974592.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive property information pages"
        },
        {
          title: "Agent Portal",
          image: "https://images.pexels.com/photos/1974598/pexels-photo-1974598.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Agent management and listing tools"
        },
        {
          title: "Market Analytics",
          image: "https://images.pexels.com/photos/1974593/pexels-photo-1974593.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Real estate market data and trends"
        }
      ],
      testimonial: "Our property listings have never looked better. The virtual tours are a game-changer!"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      client: "FitLife Technologies",
      industry: "Health & Fitness",
      type: "Mobile App",
      year: "2024",
      duration: "5 months",
      team: "4 people",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/4162483/pexels-photo-4162483.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Social fitness app with workout tracking, nutrition monitoring, and community challenges.",
      overview: "FitLife needed a comprehensive fitness app with complex data visualization, social features integration, wearable device compatibility, and motivational user engagement systems.",
      challenge: "Creating a fitness app that seamlessly integrates with multiple wearable devices, provides accurate health tracking, and maintains user engagement through social features.",
      solution: "We developed a comprehensive fitness app using React Native with social features, workout tracking, nutrition monitoring, and gamification elements that keep users motivated.",
      results: "70% increase in user retention, 200% growth in daily active users, 85% higher workout completion rates, and maintained a 4.7/5 star app rating.",
      services: ["Mobile Development", "Wearable Integration", "Social Features", "Data Analytics", "UI/UX Design"],
      technologies: ["React Native", "Node.js", "MongoDB", "HealthKit", "Google Fit"],
      projectImages: [
        {
          title: "Dashboard Overview",
          image: "https://images.pexels.com/photos/4162483/pexels-photo-4162483.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive fitness dashboard and stats"
        },
        {
          title: "Workout Tracking",
          image: "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Real-time workout tracking and monitoring"
        },
        {
          title: "Nutrition Logging",
          image: "https://images.pexels.com/photos/4162495/pexels-photo-4162495.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Food tracking and nutrition analysis"
        },
        {
          title: "Social Challenges",
          image: "https://images.pexels.com/photos/4162496/pexels-photo-4162496.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Community challenges and leaderboards"
        },
        {
          title: "Progress Analytics",
          image: "https://images.pexels.com/photos/4162497/pexels-photo-4162497.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Detailed progress tracking and insights"
        },
        {
          title: "Personal Goals",
          image: "https://images.pexels.com/photos/4162498/pexels-photo-4162498.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Goal setting and achievement tracking"
        }
      ],
      testimonial: "The app keeps our users motivated and engaged like never before!"
    },
    {
      id: 6,
      title: "Inventory Management",
      client: "LogiTech Warehouse",
      industry: "Logistics",
      type: "Desktop App",
      year: "2023",
      duration: "9 months",
      team: "5 people",
      icon: <Code className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/4481263/pexels-photo-4481263.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive desktop application for automated inventory management and logistics optimization.",
      overview: "LogiTech struggled with manual inventory processes, lack of real-time tracking, complex warehouse layouts, and integration challenges with existing systems causing operational inefficiencies.",
      challenge: "Developing a robust desktop application that can handle complex inventory operations, integrate with existing warehouse systems, and provide real-time tracking capabilities.",
      solution: "We created a comprehensive desktop application using Electron and React with automated inventory tracking, barcode scanning, predictive analytics, and seamless system integration.",
      results: "98% improvement in inventory accuracy, 80% reduction in stockouts, 65% increase in operational efficiency, and 40% reduction in operational costs.",
      services: ["Desktop Development", "System Integration", "Barcode Integration", "Analytics Implementation", "Training"],
      technologies: ["Electron", "React", "Node.js", "SQLite", "Barcode APIs"],
      projectImages: [
        {
          title: "Inventory Dashboard",
          image: "https://images.pexels.com/photos/4481263/pexels-photo-4481263.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Real-time inventory overview and management"
        },
        {
          title: "Barcode Scanning",
          image: "https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Integrated barcode scanning system"
        },
        {
          title: "Warehouse Layout",
          image: "https://images.pexels.com/photos/4481944/pexels-photo-4481944.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Visual warehouse layout and navigation"
        },
        {
          title: "Stock Analytics",
          image: "https://images.pexels.com/photos/4481945/pexels-photo-4481945.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Predictive analytics and stock insights"
        },
        {
          title: "Order Management",
          image: "https://images.pexels.com/photos/4481946/pexels-photo-4481946.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Order processing and fulfillment tracking"
        },
        {
          title: "Reporting System",
          image: "https://images.pexels.com/photos/4481947/pexels-photo-4481947.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive reporting and analytics"
        }
      ],
      testimonial: "This system eliminated our inventory nightmares. We now have complete visibility and control."
    },
    {
      id: 7,
      title: "EdTech Learning Platform",
      client: "EduMaster Academy",
      industry: "Education",
      type: "Web App",
      year: "2024",
      duration: "8 months",
      team: "9 people",
      icon: <Monitor className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Interactive online learning platform with AI-powered personalized curriculum and progress tracking.",
      overview: "EduMaster needed a modern e-learning platform that could deliver personalized education experiences, track student progress effectively, and provide interactive learning tools for multiple subjects.",
      challenge: "Building a scalable education platform that supports multiple content types, provides personalized learning paths, and integrates with various educational tools and assessments.",
      solution: "We developed an advanced learning management system using React and Django with AI-powered content recommendations, interactive assessments, and comprehensive progress analytics.",
      results: "300% increase in student engagement, 85% improvement in completion rates, 200% growth in active users, and 95% student satisfaction rating.",
      services: ["Web Development", "AI Integration", "Content Management", "Assessment Tools", "Analytics Dashboard"],
      technologies: ["React", "Django", "PostgreSQL", "TensorFlow", "AWS"],
      projectImages: [
        {
          title: "Student Dashboard",
          image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Personalized student learning dashboard"
        },
        {
          title: "Course Catalog",
          image: "https://images.pexels.com/photos/4144924/pexels-photo-4144924.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive course catalog and enrollment"
        },
        {
          title: "Interactive Lessons",
          image: "https://images.pexels.com/photos/4144925/pexels-photo-4144925.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Interactive video lessons and content"
        },
        {
          title: "Assessment System",
          image: "https://images.pexels.com/photos/4144926/pexels-photo-4144926.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Advanced assessment and testing tools"
        },
        {
          title: "Progress Tracking",
          image: "https://images.pexels.com/photos/4144927/pexels-photo-4144927.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Detailed progress analytics and insights"
        },
        {
          title: "Teacher Portal",
          image: "https://images.pexels.com/photos/4144928/pexels-photo-4144928.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive teacher management tools"
        }
      ],
      testimonial: "Our students love the interactive learning experience. Engagement has skyrocketed!"
    },
    {
      id: 8,
      title: "Restaurant Management",
      client: "Gourmet Chain",
      industry: "Food & Beverage",
      type: "Web App",
      year: "2023",
      duration: "6 months",
      team: "6 people",
      icon: <Monitor className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete restaurant management system with POS integration, inventory tracking, and customer ordering.",
      overview: "Gourmet Chain needed a unified system to manage multiple restaurant locations, streamline ordering processes, track inventory across locations, and provide customer-facing ordering solutions.",
      challenge: "Creating a multi-location restaurant management system that integrates with existing POS systems, manages complex inventory, and provides seamless customer ordering experiences.",
      solution: "We built a comprehensive restaurant management platform using Angular and Node.js with POS integration, real-time inventory management, and customer ordering capabilities.",
      results: "50% reduction in order processing time, 75% improvement in inventory accuracy, 120% increase in online orders, and 40% reduction in food waste.",
      services: ["Web Development", "POS Integration", "Inventory Management", "Mobile Ordering", "Analytics"],
      technologies: ["Angular", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      projectImages: [
        {
          title: "Restaurant Dashboard",
          image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive restaurant operations dashboard"
        },
        {
          title: "Order Management",
          image: "https://images.pexels.com/photos/1581385/pexels-photo-1581385.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Real-time order tracking and management"
        },
        {
          title: "Menu Management",
          image: "https://images.pexels.com/photos/1581386/pexels-photo-1581386.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Digital menu creation and management"
        },
        {
          title: "Inventory Tracking",
          image: "https://images.pexels.com/photos/1581387/pexels-photo-1581387.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Real-time inventory and supply management"
        },
        {
          title: "Customer Ordering",
          image: "https://images.pexels.com/photos/1581388/pexels-photo-1581388.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Customer-facing ordering interface"
        },
        {
          title: "Analytics Reports",
          image: "https://images.pexels.com/photos/1581389/pexels-photo-1581389.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Sales analytics and performance reports"
        }
      ],
      testimonial: "This system streamlined our operations across all locations. Efficiency has improved dramatically!"
    },
    {
      id: 9,
      title: "Travel Booking Platform",
      client: "Wanderlust Travels",
      industry: "Travel & Tourism",
      type: "Website",
      year: "2024",
      duration: "7 months",
      team: "8 people",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive travel booking platform with AI recommendations, itinerary planning, and social features.",
      overview: "Wanderlust Travels wanted to create a modern travel booking platform that combines booking functionality with social travel features, AI-powered recommendations, and comprehensive itinerary planning tools.",
      challenge: "Integrating multiple travel APIs, creating intelligent recommendation systems, and building social features while maintaining fast performance and reliable booking processes.",
      solution: "We developed a feature-rich travel platform using Vue.js and Laravel with AI-powered recommendations, social travel features, and seamless booking integration with major travel providers.",
      results: "180% increase in bookings, 90% improvement in user engagement, 250% growth in repeat customers, and 4.6/5 customer satisfaction rating.",
      services: ["Web Development", "API Integration", "AI Implementation", "Social Features", "Payment Integration"],
      technologies: ["Vue.js", "Laravel", "MySQL", "Python", "Third-party APIs"],
      projectImages: [
        {
          title: "Search & Discovery",
          image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Intelligent travel search and discovery"
        },
        {
          title: "Booking Interface",
          image: "https://images.pexels.com/photos/1008156/pexels-photo-1008156.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Streamlined booking process and payments"
        },
        {
          title: "Itinerary Planner",
          image: "https://images.pexels.com/photos/1008157/pexels-photo-1008157.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Interactive itinerary planning tools"
        },
        {
          title: "Travel Community",
          image: "https://images.pexels.com/photos/1008158/pexels-photo-1008158.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Social features and travel community"
        },
        {
          title: "Trip Management",
          image: "https://images.pexels.com/photos/1008159/pexels-photo-1008159.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "Comprehensive trip management dashboard"
        },
        {
          title: "Reviews & Ratings",
          image: "https://images.pexels.com/photos/1008160/pexels-photo-1008160.jpeg?auto=compress&cs=tinysrgb&w=800",
          description: "User reviews and destination ratings"
        }
      ],
      testimonial: "Our booking rates have tripled! The platform makes travel planning effortless and enjoyable."
    }
  ];

  // Hero animation
  useEffect(() => {
    if (heroRef.current) {
      const children = Array.from(heroRef.current.children);
      children.forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(100px)';
        
        setTimeout(() => {
          child.style.transition = 'all 1.2s ease-out';
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, index * 200);
      });
    }

    // Grid animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'all 0.8s ease-out';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, observerOptions);

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.case-study-card');
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.95)';
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle opening case study details
  const openCaseStudy = (study) => {
    setSelectedStudy(study);
    document.body.style.overflow = 'hidden';
  };

  // Handle closing case study details
  const closeDetailedView = () => {
    setSelectedStudy(null);
    document.body.style.overflow = 'auto';
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedStudy) return;
      
      if (e.key === 'Escape') {
        closeDetailedView();
      }
    };

    if (selectedStudy) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStudy]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-20" ref={heroRef}>
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Cases
            </h1>
          </div>
          <div className="mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Discover how <span className="font-semibold text-white">Arohance Tech Team</span> transforms businesses through innovative digital solutions
            </p>
          </div>
          <div className="mb-8 md:mb-12">
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              From e-commerce platforms to mobile applications, explore our portfolio of success stories
            </p>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div 
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`case-study-card group relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:border-gray-500 hover:shadow-2xl ${
                  hoveredCard && hoveredCard !== study.id ? 'blur-sm opacity-50' : ''
                }`}
                onClick={() => openCaseStudy(study)}
                onMouseEnter={() => setHoveredCard(study.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-3 py-1 bg-white/90 text-black rounded-full font-semibold">
                      {study.type}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white text-black rounded-lg">
                      {study.icon}
                    </div>
                    <div className="text-sm text-gray-400">
                      {study.industry}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3 font-medium">
                    {study.client}
                  </p>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                    {study.description}
                  </p>
                  
                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {study.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {study.team}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black z-50 overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeDetailedView}
            className="fixed top-6 right-6 z-30 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="h-screen flex">
            {/* Left Column - Fixed Info Card */}
            <div className="w-full lg:w-1/2 bg-gray-100 p-8 lg:p-12 flex flex-col justify-center sticky top-0 h-screen overflow-hidden">
              <div className="max-w-xl">
                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-black leading-tight">
                  {selectedStudy.title}
                </h1>
                
                {/* Industry & Type */}
                <div className="text-gray-600 text-lg mb-8">
                  {selectedStudy.industry} — {selectedStudy.type}
                </div>

                {/* Service Tags */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.services.slice(0, 5).map((service, index) => (
                      <span key={index} className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded-full font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black">Client</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {selectedStudy.overview}
                  </p>
                </div>

                {/* Process Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black">Process</h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-6">
                    {selectedStudy.solution}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-orange-500 text-white rounded-lg">
                    <div className="text-xl font-bold">{selectedStudy.duration}</div>
                    <div className="text-orange-100 text-sm">of collaboration</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 text-white rounded-lg">
                    <div className="text-xl font-bold">{selectedStudy.technologies.length}+</div>
                    <div className="text-gray-300 text-sm">technologies used</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 text-white rounded-lg">
                    <div className="text-xl font-bold">{selectedStudy.projectImages.length}</div>
                    <div className="text-gray-300 text-sm">project deliverables</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Scrollable Project Images */}
            <div className="hidden lg:block w-1/2 h-screen overflow-y-auto bg-black scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-white sticky top-0 bg-black py-4 z-10">
                  Project Gallery
                </h3>
                <div className="space-y-8">
                  {selectedStudy.projectImages.map((image, index) => (
                    <div key={index} className="group">
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{image.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{image.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-3xl mx-auto px-4">
            Partner with <span className="font-semibold text-white">Arohance Tech Team</span> to transform your digital presence and drive exceptional results
          </p>
          <button className="bg-white text-black hover:bg-gray-200 px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;