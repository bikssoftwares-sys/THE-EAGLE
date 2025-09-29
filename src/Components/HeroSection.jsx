'use client';
import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const fullText = "Raising Kingdom Leaders for Marketplace, Governance, and Technology Transformation. Empowering a generation to rise with integrity, wisdom, and innovation.";
  
  const stats = [
    { value: 10000, label: 'Leaders to Train', suffix: '+' },
    { value: 3, label: 'Core Pillars', suffix: '' },
    { value: 50, label: 'Campus Clubs', suffix: '+' },
    { value: 7, label: 'Strategic Partners', suffix: '' }
  ];

  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  // Fixed Typewriter effect with proper forward typing and backward deleting
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let isMounted = true;

    const typeText = () => {
      if (!isMounted) return;

      if (!isDeleting) {
        // Typing forward
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
          setTimeout(typeText, 50);
        } else {
          // Finished typing, wait then start deleting
          isDeleting = true;
          setTimeout(typeText, 2000); // Wait 2 seconds before deleting
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayText(fullText.slice(0, currentIndex));
          setTimeout(typeText, 30); // Faster deletion
        } else {
          // Finished deleting, wait then start typing again
          isDeleting = false;
          setTimeout(typeText, 500); // Wait 0.5 seconds before typing again
        }
      }
    };

    // Start typing after a short delay
    const startTimeout = setTimeout(typeText, 1000);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
    };
  }, []); // Remove isDeleting from dependencies

  // Check if section is visible for counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Counting animation - simplified and safe
  useEffect(() => {
    if (!isVisible) return;

    let isMounted = true;
    const duration = 2000; // 2 seconds total
    const frameRate = 60; // 60 frames per second
    const totalFrames = (duration / 1000) * frameRate;

    const animateStats = () => {
      stats.forEach((stat, index) => {
        let frame = 0;
        const increment = stat.value / totalFrames;

        const animate = () => {
          if (!isMounted) return;

          frame++;
          const currentValue = Math.min(Math.floor(increment * frame), stat.value);

          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = currentValue;
            return newStats;
          });

          if (frame < totalFrames) {
            requestAnimationFrame(animate);
          }
        };

        // Stagger the start of each counter
        setTimeout(() => {
          if (isMounted) {
            requestAnimationFrame(animate);
          }
        }, index * 200);
      });
    };

    animateStats();

    return () => {
      isMounted = false;
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          THE EAGLE GENERATION
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
          SOARING ABOVE, TRANSFORMING NATIONS
        </p>
        
        {/* Description with Typewriter Effect */}
        <div className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed min-h-[120px] flex items-center justify-center">
          <span>
            {displayText}
            <span className="ml-1 animate-pulse">|</span>
          </span>
        </div>
        
        {/* Divider */}
        <div className="w-32 h-1 bg-yellow-500 mx-auto mb-12"></div>
        
        {/* Impact Stats with Counting Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400">
              {animatedStats[0].toLocaleString()}{stats[0].suffix}
            </div>
            <div className="text-sm uppercase tracking-wide">Leaders to Train</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400">
              {animatedStats[1]}{stats[1].suffix}
            </div>
            <div className="text-sm uppercase tracking-wide">Core Pillars</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400">
              {animatedStats[2]}{stats[2].suffix}
            </div>
            <div className="text-sm uppercase tracking-wide">Campus Clubs</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400">
              {animatedStats[3]}{stats[3].suffix}
            </div>
            <div className="text-sm uppercase tracking-wide">Strategic Partners</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-400 transition-colors">
            Join the Movement
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors">
            Explore Our Programs
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
