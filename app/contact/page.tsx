'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import motion components with SSR disabled
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then(mod => mod.motion.h1), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show maintenance message instead of sending the form
    setTimeout(() => {
      setIsSubmitting(false);
      setMaintenanceMessage(true);
      
      // Hide the message after a few seconds
      setTimeout(() => {
        setMaintenanceMessage(false);
      }, 5000);
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Render a minimal skeleton while client-side hydration is happening
  if (!isMounted) {
    return (
      <div className="min-h-screen rgb-bg">
        <div className="py-20 md:py-28 bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-pulse">
                <div className="h-10 bg-gray-300/20 rounded w-2/3 mx-auto mb-6"></div>
                <div className="h-4 bg-gray-300/20 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300/20 rounded w-5/6 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-8 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-pulse space-y-6">
                <div className="h-8 bg-gray-300/20 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300/20 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300/20 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300/20 rounded w-4/5"></div>
              </div>
              
              <div className="p-6 border border-border/40 rounded-lg">
                <div className="animate-pulse space-y-6">
                  <div className="h-8 bg-gray-300/20 rounded w-1/2 mb-6"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300/20 rounded w-1/4"></div>
                      <div className="h-10 bg-gray-300/20 rounded w-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300/20 rounded w-1/4"></div>
                      <div className="h-10 bg-gray-300/20 rounded w-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300/20 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-300/20 rounded w-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300/20 rounded w-1/4"></div>
                    <div className="h-24 bg-gray-300/20 rounded w-full"></div>
                  </div>
                  <div className="h-12 bg-gray-300/20 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen rgb-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 backdrop-blur-sm bg-secondary/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <MotionH1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get In <span className="gradient-text">Touch</span>
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground/80 text-lg"
            >
              I appreciate you reaching out. Feel free to get in touch anytime—I'm happy to connect and Feel free to mail me about any relevant job updates.
            </MotionP>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className=" md:py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <MotionDiv
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              <MotionDiv variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-6">Let's Build Something <span className="gradient-text">Amazing</span></h2>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question about my work or want to discuss a potential 
                  collaboration, feel free to reach out.
                </p>
              </MotionDiv>

              <MotionDiv 
                variants={itemVariants} 
                className="card-3d bg-background/60 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
              >
                <div className="card-3d-content space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-foreground/80">brijeshraii0721@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-foreground/80">+1(205) 572-3427</p>
                    </div>
                  </div>
                
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Availability</h3>
                      <p className="text-foreground/80">Available for new opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="card-3d-shadow"></div>
              </MotionDiv>
              
              <MotionDiv variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/brijesh-rai-120712129/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-3d bg-background/60 backdrop-blur-sm p-3 rounded-full border border-border/40 hover:rgb-glow transition-all duration-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/BRijesHRa1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-3d bg-background/60 backdrop-blur-sm p-3 rounded-full border border-border/40 hover:rgb-glow transition-all duration-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </MotionDiv>
            </MotionDiv>

            {/* Contact Form */}
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="card-3d bg-background/60 backdrop-blur-sm rounded-lg shadow-xl border border-border/40 p-6 md:p-8 hover:rgb-glow"
            >
              <div className="card-3d-content">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                {submitSuccess ? (
                  <MotionDiv
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/30 text-green-500 rounded-lg p-4 text-center"
                  >
                    <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-lg font-semibold">Thank you!</p>
                    <p>Your message has been sent successfully.</p>
                  </MotionDiv>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {maintenanceMessage && (
                      <MotionDiv
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-lg p-4 text-center mb-4"
                      >
                        <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <p className="text-lg font-semibold">Contact Form Currently Down</p>
                        <p>Please reach out directly via email or call. Thank you for your understanding.</p>
                      </MotionDiv>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="btn-3d w-full rounded-md border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="btn-3d w-full rounded-md border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="btn-3d w-full rounded-md border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="btn-3d w-full rounded-md border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-3d w-full inline-flex justify-center items-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.6)] to-[rgba(219,39,119,0.6)] hover:from-[rgba(79,70,229,0.7)] hover:to-[rgba(219,39,119,0.7)] px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 backdrop-blur-sm rgb-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
              <div className="card-3d-shadow"></div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 backdrop-blur-sm bg-secondary/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <MotionH2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Looking for a <span className="gradient-text">Quick Response?</span>
            </MotionH2>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-foreground/80"
            >
              For urgent inquiries, you can reach me directly via email or phone.
            </MotionP>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:brijeshraii0721@gmail.com"
                className="btn-3d inline-flex items-center justify-center rounded-md bg-background/60 backdrop-blur-sm border border-border/40 px-6 py-3 text-sm font-medium text-foreground hover:bg-background/80 transition-all duration-300 rgb-glow"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                brijeshraii0721@gmail.com
              </a>
              <a
                href="tel:+12055723427"
                className="btn-3d inline-flex items-center justify-center rounded-md bg-background/60 backdrop-blur-sm border border-border/40 px-6 py-3 text-sm font-medium text-foreground hover:bg-background/80 transition-all duration-300 rgb-glow"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1(205) 572-3427
              </a>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
} 