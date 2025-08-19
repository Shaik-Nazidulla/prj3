import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Code, Smartphone, Monitor, Globe, ArrowRight } from 'lucide-react';
import Silk from './ui/CaseStudies-HeroBackground';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const horizontalRef = useRef(null);
  const slidesRef = useRef([]);

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      client: "RetailMax Inc.",
      industry: "E-Commerce",
      type: "Website",
      icon: <Globe className="w-6 h-6" />,
      problem: "Outdated platform causing 60% cart abandonment rates",
      description: "Complete redesign of e-commerce platform with modern UX/UI and optimized checkout flow.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      slides: [
        {
          title: "The Challenge",
          content: "RetailMax was struggling with an outdated e-commerce platform that resulted in 60% cart abandonment rates, poor mobile experience, and loading times exceeding 8 seconds. Their conversion rates were plummeting, and customer satisfaction was at an all-time low.",
          image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["60% Cart Abandonment", "8+ Second Load Times", "Poor Mobile Experience"]
        },
        {
          title: "Our Solution",
          content: "We built a modern, responsive e-commerce platform using React.js and Node.js with optimized checkout flow, integrated modern payment gateways, and implemented progressive web app features for lightning-fast performance.",
          image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["React.js Frontend", "Node.js Backend", "PWA Features"]
        },
        {
          title: "Key Features",
          content: "The new platform includes one-click checkout, real-time inventory tracking, advanced product filtering, mobile-first responsive design, and AI-powered product recommendations that transformed the shopping experience.",
          image: "https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["One-Click Checkout", "AI Recommendations", "Real-time Tracking"]
        },
        {
          title: "Results & Impact",
          content: "The transformation delivered exceptional results: 85% increase in conversion rates, 300% faster loading times, 200% increase in mobile traffic, and 150% revenue growth within the first quarter of launch.",
          image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["85% Conversion Increase", "300% Faster Loading", "150% Revenue Growth"]
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
      icon: <Smartphone className="w-6 h-6" />,
      problem: "Need for secure, user-friendly mobile banking solution",
      description: "Comprehensive mobile banking app with biometric security and real-time transaction features.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      slides: [
        {
          title: "Security Challenge",
          content: "SecureBank needed a mobile banking solution that met strict security compliance requirements while providing an intuitive user experience. The challenge was balancing security with usability.",
          image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Strict Compliance", "Security First", "User-Friendly Design"]
        },
        {
          title: "Development Approach",
          content: "We developed a secure mobile banking app using React Native with advanced biometric authentication, end-to-end encryption, and real-time banking features that exceeded industry security standards.",
          image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["React Native", "End-to-End Encryption", "Biometric Auth"]
        },
        {
          title: "Advanced Features",
          content: "The app includes biometric authentication, real-time transaction notifications, advanced security protocols, intuitive money transfer system, and comprehensive account management capabilities.",
          image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Face ID/Fingerprint", "Real-time Notifications", "Account Management"]
        },
        {
          title: "Outstanding Results",
          content: "The app achieved 400% increase in user adoption, 99.9% reduction in security incidents, 70% faster transaction processing, and maintained a 4.8/5 star rating from users.",
          image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["400% User Adoption", "99.9% Security", "4.8/5 Rating"]
        }
      ],
      testimonial: "The app exceeded our security standards while delivering an exceptional user experience."
    },
    {
      id: 3,
      title: "Healthcare Management System",
      client: "MediCare Solutions",
      industry: "Healthcare",
      type: "Web App",
      icon: <Monitor className="w-6 h-6" />,
      problem: "Fragmented patient data across multiple systems",
      description: "Unified healthcare management platform streamlining patient care and administrative tasks.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      slides: [
        {
          title: "Healthcare Challenge",
          content: "MediCare faced fragmented patient data across multiple departments, HIPAA compliance requirements, complex scheduling needs, and integration challenges with legacy systems affecting patient care quality.",
          image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Data Silos", "HIPAA Compliance", "Legacy Integration"]
        },
        {
          title: "Comprehensive Solution",
          content: "We created a unified healthcare management system using Vue.js and Python Django with secure patient data management, automated scheduling, and real-time analytics dashboards.",
          image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Vue.js Frontend", "Python Django", "Real-time Analytics"]
        },
        {
          title: "System Features",
          content: "The platform provides centralized patient records, automated appointment scheduling, real-time analytics dashboard, HIPAA-compliant data storage, and seamless integration with medical devices.",
          image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Centralized Records", "Auto Scheduling", "Device Integration"]
        },
        {
          title: "Healthcare Impact",
          content: "The system delivered 60% improvement in efficiency, 95% increase in data accuracy, 40% higher patient satisfaction, and 30% reduction in administrative costs.",
          image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["60% Efficiency", "95% Data Accuracy", "40% Satisfaction"]
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
      icon: <Globe className="w-6 h-6" />,
      problem: "Lack of modern property search and virtual tour capabilities",
      description: "Advanced real estate platform with 3D virtual tours and AI-powered property matching.",
      image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
      slides: [
        {
          title: "Market Challenge",
          content: "PropertyPro needed modern property search capabilities, high-resolution image management, virtual tour integration, and lead generation optimization to compete in the digital real estate market.",
          image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Modern Search", "Virtual Tours", "Lead Generation"]
        },
        {
          title: "Platform Development",
          content: "We built a cutting-edge real estate platform using Next.js with 3D virtual tours, advanced search filters, and AI-powered property recommendations that revolutionized property browsing.",
          image: "https://images.pexels.com/photos/1974594/pexels-photo-1974594.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Next.js Platform", "3D Tours", "AI Matching"]
        },
        {
          title: "Advanced Features",
          content: "The platform includes 3D virtual property tours, advanced search and filtering, AI-powered property matching, integrated mortgage calculator, and real-time market analytics.",
          image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Virtual Tours", "Smart Matching", "Market Analytics"]
        },
        {
          title: "Business Growth",
          content: "The platform achieved 250% increase in lead generation, 180% improvement in user engagement, 300% more property views, and 120% higher conversion rates.",
          image: "https://images.pexels.com/photos/1974594/pexels-photo-1974594.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["250% Lead Growth", "300% More Views", "120% Conversion"]
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
      icon: <Smartphone className="w-6 h-6" />,
      problem: "Need for comprehensive fitness tracking with social features",
      description: "Social fitness app with workout tracking, nutrition monitoring, and community challenges.",
      image: "https://images.pexels.com/photos/4162483/pexels-photo-4162483.jpeg?auto=compress&cs=tinysrgb&w=800",
      slides: [
        {
          title: "Fitness Challenge",
          content: "FitLife needed a comprehensive fitness app with complex data visualization, social features integration, wearable device compatibility, and motivational user engagement systems.",
          image: "https://images.pexels.com/photos/4162483/pexels-photo-4162483.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Data Visualization", "Social Features", "Wearable Integration"]
        },
        {
          title: "App Development",
          content: "We developed a comprehensive fitness app using React Native with social features, workout tracking, nutrition monitoring, and gamification elements that keep users motivated.",
          image: "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["React Native", "Social Integration", "Gamification"]
        },
        {
          title: "Core Features",
          content: "The app provides comprehensive workout tracking, nutrition and calorie monitoring, social challenges and leaderboards, wearable device integration, and personalized workout plans.",
          image: "https://images.pexels.com/photos/4162483/pexels-photo-4162483.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Workout Tracking", "Social Challenges", "Personal Plans"]
        },
        {
          title: "User Success",
          content: "The app achieved 70% increase in user retention, 200% growth in daily active users, 85% higher workout completion rates, and maintained a 4.7/5 star app rating.",
          image: "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["70% Retention", "200% DAU Growth", "4.7/5 Rating"]
        }
      ],
      testimonial: "The app keeps our users motivated and engaged like never before!"
    },
    {
      id: 6,
      title: "Inventory Management Suite",
      client: "LogiTech Warehouse",
      industry: "Logistics",
      type: "Desktop App",
      icon: <Code className="w-6 h-6" />,
      problem: "Manual inventory tracking causing frequent stock issues",
      description: "Comprehensive desktop application for automated inventory management and logistics optimization.",
      image: "https://images.pexels.com/photos/4481263/pexels-photo-4481263.jpeg?auto=compress&cs=tinysrgb&w=800",
      slides: [
        {
          title: "Logistics Problem",
          content: "LogiTech struggled with manual inventory processes, lack of real-time tracking, complex warehouse layouts, and integration challenges with existing systems causing operational inefficiencies.",
          image: "https://images.pexels.com/photos/4481263/pexels-photo-4481263.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Manual Processes", "No Real-time Tracking", "System Integration"]
        },
        {
          title: "Desktop Solution",
          content: "We created a robust desktop application using Electron and React with automated inventory tracking, barcode scanning, predictive analytics, and seamless system integration.",
          image: "https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Electron + React", "Barcode Scanning", "Predictive Analytics"]
        },
        {
          title: "System Capabilities",
          content: "The suite provides automated inventory tracking, barcode scanning integration, predictive stock analytics, multi-warehouse management, and automated reorder notifications.",
          image: "https://images.pexels.com/photos/4481263/pexels-photo-4481263.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["Auto Tracking", "Multi-warehouse", "Smart Notifications"]
        },
        {
          title: "Operational Excellence",
          content: "The system achieved 98% improvement in inventory accuracy, 80% reduction in stockouts, 65% increase in operational efficiency, and 40% reduction in operational costs.",
          image: "https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=800",
          stats: ["98% Accuracy", "80% Less Stockouts", "40% Cost Reduction"]
        }
      ],
      testimonial: "This system eliminated our inventory nightmares. We now have complete visibility and control."
    }
  ];

  // Initialize animations for case study cards
  useEffect(() => {
    // Hero animation
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

    // Cards animation on scroll
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

    cardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.95)';
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle opening case study details
  const openCaseStudy = (study) => {
    setSelectedStudy(study);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  // Handle closing case study details
  const closeDetailedView = () => {
    setSelectedStudy(null);
    setCurrentSlide(0);
    document.body.style.overflow = 'auto';
  };

  // Handle direct slide navigation
  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < selectedStudy.slides.length) {
      setCurrentSlide(slideIndex);
      
      if (horizontalRef.current) {
        horizontalRef.current.style.transition = 'transform 0.8s ease-out';
        horizontalRef.current.style.transform = `translateX(-${slideIndex * 100}vw)`;
      }
    }
  };

  // Horizontal scrolling animation for detailed case study
  useEffect(() => {
    if (!selectedStudy || !horizontalRef.current) return;

    const slides = slidesRef.current;
    const totalSlides = selectedStudy.slides.length;
    
    // Set up horizontal container
    horizontalRef.current.style.width = `${totalSlides * 100}vw`;
    horizontalRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`;

    // Position slides horizontally
    slides.forEach((slide, index) => {
      if (slide) {
        slide.style.position = 'absolute';
        slide.style.left = `${index * 100}vw`;
        slide.style.width = '100vw';
        slide.style.height = '100vh';
      }
    });

    // Scroll handling with proper debouncing
    let isScrolling = false;
    let scrollTimeout;
    
    const handleScroll = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const delta = e.deltaY;
      const threshold = 30;
      
      if (Math.abs(delta) < threshold) return;
      
      isScrolling = true;
      
      if (delta > 0 && currentSlide < totalSlides - 1) {
        // Next slide
        goToSlide(currentSlide + 1);
      } else if (delta < 0 && currentSlide > 0) {
        // Previous slide
        goToSlide(currentSlide - 1);
      } else {
        isScrolling = false;
        return;
      }
      
      // Reset scrolling flag after animation
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 900);
    };

    const modalElement = document.querySelector('.modal-container');
    if (modalElement) {
      modalElement.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('wheel', handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [selectedStudy, currentSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedStudy) return;
      
      if (e.key === 'Escape') {
        closeDetailedView();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentSlide < selectedStudy.slides.length - 1) {
          goToSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentSlide > 0) {
          goToSlide(currentSlide - 1);
        }
      }
    };

    if (selectedStudy) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStudy, currentSlide]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Silk Background Animation */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={5}
            scale={1}
            color="#1e3a8a"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10"></div>
        
        {/* Additional atmospheric effects */}
        <div className="absolute inset-0 opacity-20 z-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96  rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96  rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-20" ref={heroRef}>
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 bg-white bg-clip-text text-transparent">
              Case Studies
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
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 mx-auto rotate-90 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16 md:space-y-32">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                ref={el => cardsRef.current[index] = el}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-sm overflow-hidden hover:border-gray-500 transition-all duration-500 cursor-pointer group relative backdrop-blur-sm max-w-5xl mx-auto"
                style={{ height: '600px' }}
                onClick={() => openCaseStudy(study)}
              >
                <div className="grid md:grid-cols-2 gap-0" style={{ height: '600px' }}>
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col justify-center min-h-0">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="p-2 md:p-3 bg-white text-black rounded-sm">
                        {study.icon}
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 px-3 md:px-4 py-1 md:py-2 bg-gray-800 rounded-sm border border-gray-600">
                        {study.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 group-hover:text-gray-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-3 md:mb-4 font-medium">
                      {study.client} • {study.industry}
                    </p>
                    
                    <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-3">
                      {study.description}
                    </p>
                    
                    <button className="bg-white text-black hover:bg-gray-200 px-4 md:px-6 py-2 md:py-3 rounded-sm font-semibold transition-all duration-300 flex items-center gap-2 md:gap-3 self-start text-sm md:text-base">
                      View Case Study <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal with Horizontal Scroll */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black z-50 modal-container">
          {/* Header */}
          <div className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black via-black/90 to-transparent p-4 md:p-6">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-white text-black rounded-xl">
                  {selectedStudy.icon}
                </div>
                <div>
                  <h2 className="text-lg md:text-2xl font-bold">{selectedStudy.title}</h2>
                  <p className="text-gray-400 text-sm md:text-base">{selectedStudy.client}</p>
                </div>
              </div>
              <button
                onClick={closeDetailedView}
                className="p-2 md:p-3 hover:bg-gray-800/50 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Horizontal Slides Container */}
          <div className="h-screen overflow-hidden">
            <div
              ref={horizontalRef}
              className="h-full flex transition-transform duration-800 ease-out"
              style={{ width: `${selectedStudy.slides.length * 100}vw` }}
            >
              {selectedStudy.slides.map((slide, index) => (
                <div
                  key={index}
                  ref={el => slidesRef.current[index] = el}
                  className="w-screen h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 pt-20 sm:pt-24"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="max-w-4xl mx-auto text-center px-4">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white">
                      {slide.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed">
                      {slide.content}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      {slide.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20"
                        >
                          <div className="text-sm md:text-lg font-semibold text-white">
                            {stat}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed Slide Indicators */}
          <div className="fixed bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
            <div className="flex space-x-2">
              {selectedStudy.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
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