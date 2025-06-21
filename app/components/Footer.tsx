'use client';

import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Skip animations on server-side
  if (!isMounted) {
    return <div className="h-64"></div>;
  }

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      {/* Floating footer container */}
      <div className="container relative z-10 mx-auto">
        <div className="glass-card backdrop-blur-sm bg-background/20 border border-border/40 rounded-xl p-8 mx-auto max-w-5xl shadow-glow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Logo and brief description */}
            <div className="space-y-4">
              <div className="relative">
                <h2 className="text-xl font-bold tracking-tight gradient-text inline-block">
                  Brijesh
                </h2>
                <span className="absolute -top-1 -right-2 h-1.5 w-1.5 bg-primary rounded-full pulse-animation"></span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Creating immersive digital experiences with clean code and innovative solutions.
              </p>
            </div>
            
            {/* Connect section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Connect</h3>
              <div className="flex space-x-5">
                <a
                  href="https://github.com/BRijesHRa1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/brijesh-rai-120712129/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="mailto:brijeshraii0721@gmail.com"
                  className="social-icon-link"
                  aria-label="Email"
                >
                  <FiMail size={18} />
                </a>
              </div>
              
              <div className="pt-4">
                <a
                  href="mailto:brijeshraii0721@gmail.com"
                  className="btn-3d inline-flex items-center justify-center space-x-2 py-2 px-4 rounded-md border border-border/40 bg-background/40 hover:bg-background/60 transition-all duration-300"
                >
                  <span className="text-sm font-medium">Let's work together</span>
                  <span className="ml-2"><FiExternalLink size={14} /></span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright and divider */}
          <div className="mt-12 pt-4 border-t border-border/20 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/50">
            <p>© {currentYear} Brijesh. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Built with Next.JS</p>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .social-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 40px;
          color: var(--foreground);
          opacity: 0.6;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .social-icon-link:hover {
          opacity: 1;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .shadow-glow {
          box-shadow: 0 0 30px rgba(79, 70, 229, 0.08);
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
          }
          
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 4px rgba(79, 70, 229, 0);
          }
          
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
          }
        }
      `}} />
    </footer>
  );
};

export default Footer; 