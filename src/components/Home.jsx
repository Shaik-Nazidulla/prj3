import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { WorksSection } from './ui/Home-Works';
import TeamMembersSection from './ui/Home-TeamMembers';
import sampleVideo from '../assets/sample.mp4';
import { Link } from 'react-router-dom';
import HomeFAQs from './ui/Home-FAQs';
import Testimonials from './ui/Home-Testimonials';
import AboutUs from './ui/Home-AboutUs';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);
  const videoContainerRef = useRef(null);

  // Hero text refs
  const heroTheRef = useRef(null);
  const heroArohanceRef = useRef(null);
  const heroTechTeamRef = useRef(null);
  const heroDescriptionRef = useRef(null);
  const heroContainerRef = useRef(null);

  useEffect(() => {
    // Hero Text Animations - Individual ScrollTrigger animations for each hero text element
    if (heroTheRef.current) {
      gsap.set(heroTheRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9
      });

      ScrollTrigger.create({
        trigger: heroTheRef.current,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(heroTheRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
          });
        },
        onLeave: () => {
          gsap.to(heroTheRef.current, {
            y: -50,
            opacity: 0.3,
            scale: 0.95,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        onEnterBack: () => {
          gsap.to(heroTheRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(heroTheRef.current, {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: "power2.out"
          });
        }
      });
    }

    if (heroArohanceRef.current) {
      gsap.set(heroArohanceRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9
      });

      ScrollTrigger.create({
        trigger: heroArohanceRef.current,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(heroArohanceRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
          });
        },
        onLeave: () => {
          gsap.to(heroArohanceRef.current, {
            y: -50,
            opacity: 0.3,
            scale: 0.95,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        onEnterBack: () => {
          gsap.to(heroArohanceRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(heroArohanceRef.current, {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: "power2.out"
          });
        }
      });
    }

    if (heroTechTeamRef.current) {
      gsap.set(heroTechTeamRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9
      });

      ScrollTrigger.create({
        trigger: heroTechTeamRef.current,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(heroTechTeamRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
          });
        },
        onLeave: () => {
          gsap.to(heroTechTeamRef.current, {
            y: -50,
            opacity: 0.3,
            scale: 0.95,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        onEnterBack: () => {
          gsap.to(heroTechTeamRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(heroTechTeamRef.current, {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: "power2.out"
          });
        }
      });
    }

    if (heroDescriptionRef.current) {
      gsap.set(heroDescriptionRef.current, {
        y: 50,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: heroDescriptionRef.current,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(heroDescriptionRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
          });
        },
        onLeave: () => {
          gsap.to(heroDescriptionRef.current, {
            y: -30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        },
        onEnterBack: () => {
          gsap.to(heroDescriptionRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(heroDescriptionRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section - Extended height for scrolling content */}
      <section ref={heroSectionRef} className="relative hero-section" style={{ height: '200vh' }}>
        {/* Background Video - Fixed/Sticky */}
        <div ref={videoContainerRef} className="sticky top-0 w-full h-screen z-0">
          <video 
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={sampleVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Text Container - Positioned absolutely over video with negative margin to overlay */}
        <div ref={heroContainerRef} className="relative z-30 -mt-[100vh]">
          <div className="flex flex-col justify-center items-start pl-0 pr-0 pointer-events-none font-sans lg:pt-150 md:pt-170 sm:pt-150" style={{ height: '100vh' }}>
            {/* Hero Text Structure with Individual Refs */}
            <div className="flex flex-col">
              {/* "THE" - Top */}
              <div 
                ref={heroTheRef}
                className="text-[20vw] font-[20] leading-[0.9] tracking-tight text-white opacity-0"
              >
                THE
              </div>
              
              {/* "AROHANCE" - Middle */}
              <div 
                ref={heroArohanceRef}
                className="text-[20vw] font-[20] leading-[0.9] tracking-tight text-white opacity-0"
              >
                AROHANCE
              </div>
              
              {/* "Tech Team" - Bottom */}
              <div 
                ref={heroTechTeamRef}
                className="text-[10vw] md:text-[8vw] lg:text-[13vw] font-light leading-[0.9] tracking-tight text-white mt-2 opacity-0"
              >
                Tech Team
              </div>
            </div>

            {/* Description Text - Separate div */}
            <div 
              ref={heroDescriptionRef} 
              className="mt-8 md:mt-12 max-w-2xl text-xl md:text-2xl opacity-0 leading-relaxed text-white ml-20"
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto ad cumque sequi officia repellendus et praesentium odit libero adipisci, impedit corrupti numquam earum mollitia consectetur dolorum explicabo veritatis quasi?</p>
            </div>
          </div>
        </div>
      </section>
      <WorksSection />
      <TeamMembersSection />
      <AboutUs/>
      <Testimonials/>
      <HomeFAQs/>
    </div>
  );
}

export default Home;