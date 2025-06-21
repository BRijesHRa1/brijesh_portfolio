"use client";

import React from "react";
import { FiArrowDown, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="container py-12 md:py-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">My Resume</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here is my professional experience, education, skills, and projects.
          </p>
          <div className="flex justify-center pt-4">
            <a
              href="/Brijesh_Rai_Resume.pdf"
              download
              className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.2)] to-[rgba(219,39,119,0.2)] hover:from-[rgba(79,70,229,0.3)] hover:to-[rgba(219,39,119,0.3)] px-8 text-sm font-medium text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm rgb-glow"
            >
              <div style={{ marginRight: "0.5rem" }}><FiArrowDown /></div> Download Resume
            </a>
          </div>
        </header>
        
        <div className="space-y-12 mt-8">
          {/* Experience Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="relative z-10 space-y-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="gradient-text">Professional Experience</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <p className="text-foreground/60 text-sm">June 2022 - Present</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <p className="text-primary/80 mb-2">Tech Innovations Inc.</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70">
                      <li>Developed responsive web applications using React, Next.js, and TypeScript</li>
                      <li>Implemented backend solutions with Node.js, Express, and MongoDB</li>
                      <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                      <li>Optimized application performance and improved user experience</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <p className="text-foreground/60 text-sm">Jan 2021 - May 2022</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                    <p className="text-primary/80 mb-2">Web Solutions Ltd.</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70">
                      <li>Built dynamic user interfaces with React and JavaScript</li>
                      <li>Implemented responsive designs using Tailwind CSS and SCSS</li>
                      <li>Worked with designers to translate mockups into functional components</li>
                      <li>Integrated REST APIs and managed state with Redux</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <p className="text-foreground/60 text-sm">Jun 2020 - Dec 2020</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Web Development Intern</h3>
                    <p className="text-primary/80 mb-2">Digital Agency</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70">
                      <li>Assisted in developing website features using HTML, CSS, and JavaScript</li>
                      <li>Participated in code reviews and improved my skills</li>
                      <li>Learned best practices for web development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Education Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="relative z-10 space-y-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="gradient-text">Education</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <p className="text-foreground/60 text-sm">2018 - 2022</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                    <p className="text-primary/80 mb-2">University of Technology</p>
                    <p className="text-foreground/70">GPA: 3.8/4.0</p>
                    <p className="text-foreground/70 mt-2">Coursework: Data Structures, Algorithms, Software Engineering, Database Management, Web Development</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <p className="text-foreground/60 text-sm">2023</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Full Stack Web Development Certificate</h3>
                    <p className="text-primary/80 mb-2">Tech Bootcamp</p>
                    <p className="text-foreground/70">Intensive 12-week program focused on modern web development technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="relative z-10 space-y-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="gradient-text">Skills</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS', 'Redux'].map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Node.js', 'Express', 'MongoDB', 'SQL', 'REST API', 'GraphQL', 'Firebase'].map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Tools & DevOps</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'GitHub', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Webpack', 'Jest'].map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground/70">
                    <li>Problem-solving and analytical thinking</li>
                    <li>Team collaboration and communication</li>
                    <li>Time management and organization</li>
                    <li>Adaptability and quick learning</li>
                    <li>Attention to detail</li>
                    <li>Project management</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Projects Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="relative z-10 space-y-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="gradient-text">Key Projects</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="aspect-video relative h-24 w-full overflow-hidden rounded-lg bg-muted/50">
                      <Image
                        src="/ecommerce.png"
                        alt="E-commerce project"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Modern E-commerce Platform</h3>
                    <p className="text-foreground/70 mt-2">Developed a full-featured e-commerce solution with product listings, cart functionality, user authentication, and payment processing capabilities.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['TypeScript', 'React', 'Next.js', 'MongoDB'].map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <a href="https://modern-ecommerce-brijesh.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary">
                        Live Demo <div style={{ marginLeft: "0.25rem" }}><FiExternalLink /></div>
                      </a>
                      <a href="https://github.com/BRijesHRa1/Modern-Ecommerce" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary">
                        GitHub <div style={{ marginLeft: "0.25rem" }}><FiExternalLink /></div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="aspect-video relative h-24 w-full overflow-hidden rounded-lg bg-muted/50">
                      <Image
                        src="/chatbot.png"
                        alt="AI Chatbot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">AI-powered Chatbot</h3>
                    <p className="text-foreground/70 mt-2">Built an intelligent chatbot that leverages natural language processing to provide intelligent responses and assist users through a conversational interface.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['JavaScript', 'AI Models', 'NLP', 'React'].map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <a href="https://ai-chatbot-brijesh.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary">
                        Live Demo <div style={{ marginLeft: "0.25rem" }}><FiExternalLink /></div>
                      </a>
                      <a href="https://github.com/BRijesHRa1/Ai-chatbot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary">
                        GitHub <div style={{ marginLeft: "0.25rem" }}><FiExternalLink /></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Link href="/projects" className="inline-flex items-center text-sm font-medium text-primary">
                  View All Projects <div style={{ marginLeft: "0.25rem" }}><FiExternalLink /></div>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="relative z-10 space-y-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40 p-6 md:p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Interested in working together?</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.2)] to-[rgba(219,39,119,0.2)] hover:from-[rgba(79,70,229,0.3)] hover:to-[rgba(219,39,119,0.3)] px-8 text-sm font-medium text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm rgb-glow"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 