'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

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

  // Project data
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

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'devops', name: 'DevOps' },
    { id: 'backend', name: 'Backend' },
    { id: 'monitoring', name: 'Monitoring' },
    { id: 'security', name: 'Security' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'game', name: 'Games' },
  ];

  // Handle filter change
  React.useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category.includes(activeFilter)
      ));
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <div className="min-h-screen rgb-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 backdrop-blur-sm bg-secondary/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              My <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground/80 text-lg"
            >
              A collection of my recent work and side projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-2 md:py-2 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`btn-3d px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id 
                    ? 'bg-primary text-primary-foreground rgb-glow' 
                    : 'bg-background/60 backdrop-blur-sm border border-border/40 text-foreground/70 hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card-3d group bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border border-border/40 transition-all duration-500 h-full flex flex-col hover:rgb-glow"
              >
                <div className="card-3d-content h-full flex flex-col">
                  <div className="relative w-full h-48 bg-gradient-to-br from-[rgba(79,70,229,0.1)] to-[rgba(219,39,119,0.1)] overflow-hidden">
                    <Image 
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 z-10 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary/20 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-3d inline-flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-3d inline-flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-3d-shadow"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-foreground/70">No projects match the selected filter. Try another category.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="btn-3d mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 backdrop-blur-sm bg-secondary/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Interested in <span className="gradient-text">Working Together?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-foreground/80"
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="btn-3d inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.3)] to-[rgba(219,39,119,0.3)] hover:from-[rgba(79,70,229,0.4)] hover:to-[rgba(219,39,119,0.4)] px-8 text-sm font-medium text-foreground transition-all duration-300 backdrop-blur-sm rgb-glow"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 