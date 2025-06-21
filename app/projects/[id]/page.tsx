'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  demoLink: string;
  githubLink: string;
  category: string[];
  technologies: string[];
  featured: boolean;
}

export default function ProjectDetail() {
  const params = useParams();
  const projectId = typeof params?.id === 'string' ? parseInt(params.id) : null;
  const [project, setProject] = React.useState<Project | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Gallery images (simulated for this example)
  const galleryImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
  ];

  // Project data (simulating data fetching from an API)
  const projects: Project[] = [
    {
      id: 1,
      title: 'Real-Time Log Tracking System',
      description: 'A scalable real-time log aggregation and monitoring system with centralized observability.',
      longDescription: 'Designed and implemented a scalable real-time log aggregation system using Loki and Grafana, enabling efficient collection, querying, and visualization of distributed microservices logs. Streamlined log ingestion and centralized monitoring, reducing incident response time by 50% and enhancing overall system observability.',
      image: '/log-tracking-real-time.png',
      demoLink: 'https://github.com/BRijesHRa1/log-tracking-real-time',
      githubLink: 'https://github.com/BRijesHRa1/log-tracking-real-time',
      category: ['backend', 'devops', 'monitoring'],
      technologies: ['Loki', 'Grafana', 'Docker', 'Prometheus', 'Kafka', 'Node.js', 'PostgreSQL', 'Microservices'],
      featured: true
    },
    {
      id: 2,
      title: 'Fraud Detection Orchestrator with Agentic AI',
      description: 'Real-time fraud prevention system using collaborative AI agents with 95% accuracy.',
      longDescription: 'Built a real-time fraud prevention system using collaborative AI agents that analyze payments, vote on risk, and block suspicious transactions in under 500ms with 95% accuracy. Utilizes CrewAI framework with local LLMs for intelligent decision making.',
      image: '/Fraud-Detection-Orchestrator-with-Agentic-AI.png',
      demoLink: 'https://github.com/BRijesHRa1/Fraud-Detection-Orchestrator-with-Agentic-AI',
      githubLink: 'https://github.com/BRijesHRa1/Fraud-Detection-Orchestrator-with-Agentic-AI',
      category: ['ai', 'backend', 'security'],
      technologies: ['Python', 'FastAPI', 'CrewAI', 'Ollama', 'Mistral 7B', 'SQLite', 'ChromaDB', 'Docker'],
      featured: true
    },
    {
      id: 4,
      title: 'Ai-chatbot',
      description: 'An AI-powered chatbot for intelligent conversations and automated responses.',
      longDescription: 'This AI chatbot leverages natural language processing to provide intelligent responses and assist users with various tasks through a conversational interface.',
      image: '/chatbot.png',
      demoLink: 'https://ai-chatbot-brijesh.vercel.app',
      githubLink: 'https://github.com/BRijesHRa1/Ai-chatbot',
      category: ['web', 'ai'],
      technologies: ['HTML', 'JavaScript', 'AI Models', 'NLP'],
      featured: true
    },
    {
      id: 5,
      title: 'Music Genre Classification',
      description: 'Machine learning project that automatically classifies music into genres using the GTZAN dataset.',
      longDescription: 'This project uses machine learning algorithms to analyze audio features and classify music tracks into different genres based on the GTZAN dataset, a common benchmark in music information retrieval.',
      image: '/music.png',
      demoLink: '#',
      githubLink: 'https://github.com/BRijesHRa1/Music-Genre-Classification-using-GTZAN',
      category: ['ai', 'data'],
      technologies: ['Python', 'Machine Learning', 'Audio Processing', 'Data Science'],
      featured: true
    },
    {
      id: 9,
      title: 'Farm Dashboard',
      description: 'An agricultural dashboard for monitoring and managing farm operations.',
      longDescription: 'The Farm Dashboard provides farmers with tools to monitor crops, track weather conditions, manage inventory, and analyze productivity with visual data representations.',
      image: '/farm.jpg',
      demoLink: '#',
      githubLink: 'https://github.com/BRijesHRa1/FarmDashboard-Team16-FNU_Brijesh',
      category: ['web', 'fullstack'],
      technologies: ['Java', 'Spring Boot', 'React', 'Data Visualization'],
      featured: false
    },
    {
      id: 3,
      title: 'Modern-Ecommerce',
      description: 'A modern e-commerce platform built with TypeScript and modern web technologies.',
      longDescription: 'A full-featured e-commerce solution with product listings, cart functionality, user authentication, and payment processing capabilities.',
      image: '/ecommerce.png',
      demoLink: 'https://modern-ecommerce-brijesh.vercel.app',
      githubLink: 'https://github.com/BRijesHRa1/Modern-Ecommerce',
      category: ['web', 'fullstack'],
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'MongoDB'],
      featured: true
    },
    {
      id: 7,
      title: 'Task Master',
      description: 'A comprehensive task management application to help organize and track projects and tasks.',
      longDescription: 'Task Master is a powerful task management tool that helps users organize their work, set priorities, track progress, and manage deadlines with a user-friendly interface.',
      image: '/task.png',
      demoLink: 'https://task-master-brijesh.vercel.app',
      githubLink: 'https://github.com/BRijesHRa1/Task_Master',
      category: ['web', 'productivity'],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      featured: true
    },
    {
      id: 6,
      title: 'Tic-Tac-Toe',
      description: 'A modern implementation of the classic Tic-Tac-Toe game with an interactive UI.',
      longDescription: 'An interactive Tic-Tac-Toe game with a clean user interface, player vs. player mode, and win detection algorithms.',
      image: '/game.png',
      demoLink: 'https://tic-tac-toe-brijesh.vercel.app',
      githubLink: 'https://github.com/BRijesHRa1/tic-tac-toe',
      category: ['web', 'game'],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
      featured: false
    },
   
    {
      id: 8,
      title: 'Brijesh Portfolio',
      description: 'A personal portfolio website showcasing projects and professional experience.',
      longDescription: 'This portfolio website highlights professional accomplishments, showcases projects, and provides information about skills and experience with a modern, responsive design.',
      image: '/portfolio.png',
      demoLink: 'https://brijesh-portfolio.vercel.app',
      githubLink: 'https://github.com/BRijesHRa1/Brijesh-Portfolio',
      category: ['web'],
      technologies: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      featured: false
    },
    
    {
      id: 10,
      title: 'Money Manager',
      description: 'A mobile application for tracking personal finances and managing budgets.',
      longDescription: 'Money Manager helps users track expenses, manage budgets, set financial goals, and visualize spending patterns through an intuitive mobile interface.',
      image: '/finance.png',
      demoLink: '#',
      githubLink: 'https://github.com/BRijesHRa1/moneymanager',
      category: ['mobile', 'productivity'],
      technologies: ['Dart', 'Flutter', 'Firebase', 'Mobile Development'],
      featured: false
    },
    {
      id: 11,
      title: 'Docker Projects',
      description: 'A collection of containerized applications and Docker deployment configurations.',
      longDescription: 'This repository contains various Docker configurations and containerized applications, demonstrating best practices for deployment and container orchestration.',
      image: '/docker.png',
      demoLink: '#',
      githubLink: 'https://github.com/BRijesHRa1/Docker',
      category: ['devops', 'backend'],
      technologies: ['Docker', 'Containerization', 'DevOps', 'CI/CD'],
      featured: false
    },
    {
      id: 12,
      title: 'Hibernate Examples',
      description: 'A collection of examples demonstrating Hibernate ORM framework usage.',
      longDescription: 'This repository provides examples and patterns for using Hibernate ORM framework for Java applications, including entity mappings, relationships, and database operations.',
      image: '/hibernate.jpeg',
      demoLink: '#',
      githubLink: 'https://github.com/BRijesHRa1/Hibernate',
      category: ['backend', 'java'],
      technologies: ['Java', 'Hibernate', 'ORM', 'Database'],
      featured: false
    }
  ];

  // Find the requested project
  React.useEffect(() => {
    if (projectId !== null) {
      const foundProject = projects.find(p => p.id === projectId);
      
      if (foundProject) {
        setProject(foundProject);
      }
      
      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } else {
      setIsLoading(false);
    }
  }, [projectId]);

  // Handle 404 if project not found
  if (!isLoading && !project) {
    return notFound();
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen rgb-bg">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="card-3d inline-block p-8 bg-background/80 backdrop-blur-sm rounded-lg shadow-xl border border-border/40">
            <div className="card-3d-content">
              <div className="animate-spin w-12 h-12 rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
            <div className="card-3d-shadow"></div>
          </div>
        </div>
      ) : project && (
        <>
          {/* Hero Section with Project Title */}
          <section className="relative py-20 md:py-28 backdrop-blur-sm bg-secondary/20">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto">
                <Link href="/projects" className="btn-3d inline-flex items-center text-sm text-foreground/60 hover:text-foreground mb-6">
                  <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Projects
                </Link>
                <div className="mb-8 relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  {project.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-foreground/80 text-lg mb-8"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="btn-3d px-3 py-1 bg-primary/10 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="py-16 md:py-24 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Project Info */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                  >
                    <motion.div variants={fadeInUp} className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border/40 hover:rgb-glow mb-12">
                      <div className="card-3d-content">
                        <h2 className="text-2xl font-bold mb-6 gradient-text">Project Overview</h2>
                        {project.longDescription && (
                          <div className="space-y-4 text-foreground/80">
                            {project.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="card-3d-shadow"></div>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <h2 className="text-2xl font-bold mb-6 gradient-text">Project Gallery</h2>
                      <div className="gallery-3d grid grid-cols-1 md:grid-cols-2 gap-6">
                        {galleryImages.map((image, index) => (
                          <div key={index} className="gallery-item-3d relative aspect-video bg-background/50 rounded-lg overflow-hidden border border-border/30">
                            <div className="absolute inset-0 flex items-center justify-center text-foreground/60">
                              <Image 
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover', opacity: 0.7 }}
                              />
                              <span className="relative z-10 px-2 py-1 bg-background/40 backdrop-blur-sm rounded">
                                Screenshot {index + 1}
                              </span>
                            </div>
                            <div className="gallery-caption-3d">
                              Project Screenshot {index + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Right Column - Project Meta */}
                <div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="sticky top-24"
                  >
                    <div className="card-3d bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden border border-border/40 hover:rgb-glow mb-8">
                      <div className="card-3d-content">
                        <div className="p-6">
                          <h3 className="font-bold text-lg mb-4">Project Details</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm text-foreground/60 mb-1">Project Type</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.category.map((cat: string, index: number) => (
                                  <span key={index} className="capitalize px-2 py-1 bg-secondary/20 rounded-md text-xs">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm text-foreground/60 mb-1">Technologies</h4>
                              <p className="text-sm">{project.technologies.join(', ')}</p>
                            </div>
                            {project.featured && (
                              <div className="text-sm text-primary font-semibold flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5l1.293-1.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2A1 1 0 0115 2zM15 8a1 1 0 01.707.293l.707.707L18.414 11l1.293-1.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2A1 1 0 0115 8z" clipRule="evenodd" />
                                </svg>
                                Featured Project
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="bg-background/40 border-t border-border/20 p-6 space-y-4">
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-3d w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Live Demo
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-3d w-full inline-flex items-center justify-center rounded-md border border-input bg-background/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                            View Source Code
                          </a>
                        </div>
                      </div>
                      <div className="card-3d-shadow"></div>
                    </div>
                    
                    <div className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/40 hover:rgb-glow">
                      <div className="card-3d-content">
                        <h3 className="font-bold text-lg mb-4">Need Something Similar?</h3>
                        <p className="text-sm text-foreground/80 mb-4">
                          Interested in a project like this? I'm available for freelance work and new opportunities.
                        </p>
                        <Link
                          href="/contact"
                          className="btn-3d w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.2)] to-[rgba(219,39,119,0.2)] hover:from-[rgba(79,70,229,0.3)] hover:to-[rgba(219,39,119,0.3)] px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 rgb-glow backdrop-blur-sm"
                        >
                          Contact Me
                        </Link>
                      </div>
                      <div className="card-3d-shadow"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Projects */}
          <section className="py-16 md:py-24 backdrop-blur-sm bg-secondary/20 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold"
                >
                  Related <span className="gradient-text">Projects</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-foreground/80 mt-4"
                >
                  Check out some of my other work that might interest you
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {projects
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map(relatedProject => (
                    <Link 
                      href={`/projects/${relatedProject.id}`} 
                      key={relatedProject.id} 
                      className="card-3d bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden border border-border/40 hover:rgb-glow h-full"
                    >
                      <div className="card-3d-content h-full flex flex-col">
                        <div className="h-40 bg-gradient-to-br from-[rgba(79,70,229,0.1)] to-[rgba(219,39,119,0.1)] flex items-center justify-center">
                          <span className="text-lg font-medium">{relatedProject.title}</span>
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-bold text-lg mb-2">{relatedProject.title}</h3>
                          <p className="text-foreground/70 text-sm mb-4">{relatedProject.description}</p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {relatedProject.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="card-3d-shadow"></div>
                    </Link>
                  ))}
              </motion.div>
              
              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="btn-3d inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.3)] to-[rgba(219,39,119,0.3)] hover:from-[rgba(79,70,229,0.4)] hover:to-[rgba(219,39,119,0.4)] px-8 text-sm font-medium text-foreground transition-all duration-300 backdrop-blur-sm rgb-glow"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
} 