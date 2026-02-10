'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaPython, FaJava, FaReact, FaNodeJs, FaAngular, FaVuejs, FaDocker, FaAws, FaJenkins, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMysql, SiPostgresql, SiMongodb, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiKubernetes, SiSpringboot, SiExpress, SiNextdotjs, SiFlutter, SiDart } from 'react-icons/si';
import { BsDatabase, BsCloudFill } from 'react-icons/bs';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { BiGitBranch } from 'react-icons/bi';
import { MdSecurity } from 'react-icons/md';
import { TbBrandVercel } from 'react-icons/tb';

// Project data with interface matching the one from projects/page.tsx
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

export default function Home() {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Hero section animation
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Skills section animation
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Projects section animation
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Skills data
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: <div style={{ color: "#3776AB" }}><FaPython size={18} /></div> },
        { name: "C++", icon: <div style={{ color: "#00599C" }}><SiCplusplus size={18} /></div> },
        { name: "Java", icon: <div style={{ color: "#007396" }}><FaJava size={18} /></div> },
        { name: "JavaScript", icon: <div style={{ color: "#F7DF1E" }}><SiJavascript size={18} /></div> },
        { name: "SQL", icon: <div style={{ color: "#4479A1" }}><AiOutlineConsoleSql size={18} /></div> }
      ]
    },
    {
      category: "Web Frameworks/Libraries",
      skills: [
        { name: "React.js", icon: <div style={{ color: "#61DAFB" }}><FaReact size={18} /></div> },
        { name: "Next.js", icon: <div style={{ color: "#000000" }}><SiNextdotjs size={18} /></div> },
        { name: "Node.js", icon: <div style={{ color: "#339933" }}><FaNodeJs size={18} /></div> },
        { name: "Express.js", icon: <div style={{ color: "#000000" }}><SiExpress size={18} /></div> },
        { name: "Spring Boot", icon: <div style={{ color: "#6DB33F" }}><SiSpringboot size={18} /></div> },
        { name: "Angular", icon: <div style={{ color: "#DD0031" }}><FaAngular size={18} /></div> },
        { name: "Vue.js", icon: <div style={{ color: "#4FC08D" }}><FaVuejs size={18} /></div> }
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", icon: <div style={{ color: "#02569B" }}><SiFlutter size={18} /></div> },
        { name: "Dart", icon: <div style={{ color: "#0175C2" }}><SiDart size={18} /></div> }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: <div style={{ color: "#4479A1" }}><SiMysql size={18} /></div> },
        { name: "PostgreSQL", icon: <div style={{ color: "#336791" }}><SiPostgresql size={18} /></div> },
        { name: "MongoDB", icon: <div style={{ color: "#47A248" }}><SiMongodb size={18} /></div> },
        { name: "Vertica", icon: <div style={{ color: "#19A974" }}><TbBrandVercel size={18} /></div> }
      ]
    },
    {
      category: "ML/AI Tools",
      skills: [
        { name: "TensorFlow", icon: <div style={{ color: "#FF6F00" }}><SiTensorflow size={18} /></div> },
        { name: "PyTorch", icon: <div style={{ color: "#EE4C2C" }}><SiPytorch size={18} /></div> },
        { name: "scikit-learn", icon: <div style={{ color: "#F7931E" }}><SiScikitlearn size={18} /></div> },
        { name: "OpenCV", icon: <div style={{ color: "#5C3EE8" }}><SiOpencv size={18} /></div> },
        { name: "Hugging Face", icon: <div style={{ color: "#FFBD13" }}><svg width="18" height="18" viewBox="0 0 144 144" fill="currentColor"><path d="M102.13 47.46c4.5 0 8.06-3.5 8.06-8 0-4.38-3.56-7.93-8.06-7.93-4.38 0-7.94 3.55-7.94 7.94 0 4.5 3.56 8 7.94 8zm-60.26 0c4.5 0 8.06-3.5 8.06-8 0-4.38-3.56-7.93-8.06-7.93-4.37 0-7.94 3.55-7.94 7.94 0 4.5 3.57 8 7.94 8zm60.26 8.06h-60.26c-7.37 0-13.5 6.13-13.5 13.5v24.68c0 7.44 6.13 13.56 13.5 13.56h60.26c7.44 0 13.56-6.12 13.56-13.56V69.02c0-7.37-6.12-13.5-13.56-13.5ZM57.35 91.07h-4.2c-1.8 0-3.3-1.5-3.3-3.3V83.9c0-1.8 1.5-3.3 3.3-3.3h4.2c1.8 0 3.3 1.5 3.3 3.3v3.86c0 1.8-1.5 3.31-3.3 3.31Zm33.7 0h-4.2c-1.8 0-3.3-1.5-3.3-3.3V83.9c0-1.8 1.5-3.3 3.3-3.3h4.2c1.8 0 3.3 1.5 3.3 3.3v3.86c0 1.8-1.5 3.31-3.3 3.31Z"></path></svg></div> },
        { name: "LLaMA & Falcon", icon: <div style={{ color: "#0081FB" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.35-.43.58-.79.58h-.13c-.55-.06-.98-.57-.88-1.19.32-1.94 2.15-3.42 4.2-3.42 1.21 0 2.41.55 3.19 1.48.99 1.21 1.03 2.83.13 4.07z"/></svg></div> },
        { name: "LangChain", icon: <div style={{ color: "#65E89D" }}><svg width="18" height="18" viewBox="0 0 40 40" fill="currentColor"><path d="M18.8 26.12h2.15v-4.3l3.3 4.3h2.7l-3.88-4.98L26.7 16.5h-2.55l-3.21 4.4V16.5h-2.15v9.62Z"/><path d="M8.71 36.67 3.33 31.3A11.38 11.38 0 0 1 0 23.13v-6.26A11.38 11.38 0 0 1 3.33 8.7L8.71 3.33A11.38 11.38 0 0 1 16.88 0h6.25a11.38 11.38 0 0 1 8.17 3.33l5.38 5.37A11.38 11.38 0 0 1 40 16.87v6.26a11.38 11.38 0 0 1-3.33 8.17l-5.38 5.37a11.38 11.38 0 0 1-8.17 3.33h-6.25a11.38 11.38 0 0 1-8.17-3.33Z"/><path fill="none" stroke="white" stroke-width="4" d="M18.8 26.12h2.15v-4.3l3.3 4.3h2.7l-3.88-4.98L26.7 16.5h-2.55l-3.21 4.4V16.5h-2.15v9.62Z"/></svg></div> },
        { name: "Ollama", icon: <div style={{ color: "#FF585D" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2Zm7 0c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2Zm7 0c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2ZM5 10c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2Zm7 0c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2Zm7 0c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2ZM5 17c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2Zm7 0c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2Zm7 0c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2Z"/></svg></div> }
      ]
    },
    {
      category: "DevOps/Cloud",
      skills: [
        { name: "Docker", icon: <div style={{ color: "#2496ED" }}><FaDocker size={18} /></div> },
        { name: "Kubernetes", icon: <div style={{ color: "#326CE5" }}><SiKubernetes size={18} /></div> },
        { name: "AWS", icon: <div style={{ color: "#FF9900" }}><FaAws size={18} /></div> },
        { name: "CI/CD", icon: <div style={{ color: "#F05032" }}><BiGitBranch size={18} /></div> },
        { name: "Jenkins", icon: <div style={{ color: "#D24939" }}><FaJenkins size={18} /></div> },
        { name: "Git", icon: <div style={{ color: "#F05032" }}><FaGitAlt size={18} /></div> },
        { name: "OAuth 2.0", icon: <div style={{ color: "#4285F4" }}><MdSecurity size={18} /></div> }
      ]
    }
  ];

  // Featured projects data from projects page
  const allProjects: Project[] = [
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
    }
  ];

  // Filter to get 3 featured projects
  const featuredProjects = allProjects.filter(project => project.featured).slice(0, 3);

  return (
    <div className="min-h-screen rgb-bg">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative overflow-hidden py-20 md:py-32"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="gradient-text pl-1">I am Brijesh</span> 
                  <div className="perspective-container inline-block">
                    <span className="text-3d relative inline-block transform-gpu">Software Developer</span>
                  </div>
                </h1>
              </motion.div>
              <motion.p variants={itemVariants} className="text-lg text-foreground/80">
              I’m a Software developer passionate about building scalable, high-performance systems and integrating advanced AI into real-world applications. With hands-on experience in Java, Node, and cloud-native technologies, I design architectures that handle thousands of concurrent users with low latency and high reliability. My recent work involves deploying LLMs locally, building RAG pipelines, and fine-tuning models for domain-specific use cases. I thrive on automating workflows, optimizing APIs, and leveraging agentic AI to create intelligent, production-ready solutions. Always learning and always scaling.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="btn-3d rgb-glow inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background/60 backdrop-blur-sm px-8 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  About Me
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-transparent rgb-glow floating-3d mx-auto hover:shadow-primary/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(79,70,229,0.15)] to-[rgba(219,39,119,0.15)]" />
              {isMounted && (
                <div className="relative w-full h-full">
                  <Image
                    src="/Brijesh_picture.png"
                    alt="Brijesh's Profile Picture"
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 backdrop-blur-sm bg-secondary/10 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              My professional journey across leading tech companies
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-primary/30 via-secondary/30 to-transparent"></div>
            
            {/* Experience items */}
            <div className="space-y-12">

              {/* UAB */}
              <motion.div 
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20"></div>
                
                <div className="md:w-1/2 md:pr-10 pb-10 md:pb-0 md:text-right pl-6 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                    May 2025 - Present
                  </div>
                  <h3 className="text-xl font-bold">Software Engineer (AI Researcher)</h3>
                  <h4 className="text-foreground/80 mb-2">University of Alabama at Birmingham</h4>
                  <div className="flex justify-end mb-3">
                    <img 
                      src="/uab_logo_2.png"
                      alt="UAB Logo"
                      className="h-8 object-contain"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-10 backdrop-blur-sm bg-background/40 rounded-lg p-4 border border-white/5 shadow-lg md:ml-0 ml-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Architected multi-LLM pipelines for extracting experimental soft robotics parameters from research literature</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Engineered 6+ domain-specific features enabling rigorous model evaluation and iterative refinement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Increased data utility by <span className="text-primary font-medium">35%</span> through advanced AI research methods</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Taboola */}
              <motion.div 
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20"></div>
                
                <div className="md:w-1/2 md:pr-10 pb-10 md:pb-0 md:text-right pl-6 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                    April 2021 - March 2002
                  </div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <h4 className="text-foreground/80 mb-2">Taboola - Gurugram, India</h4>
                  <div className="flex justify-end mb-3">
                    <img 
                      src="https://cdn.brandfetch.io/idhK0OkFyQ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                      alt="Taboola Logo"
                      className="h-8 object-contain"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-10 backdrop-blur-sm bg-background/40 rounded-lg p-4 border border-white/5 shadow-lg md:ml-0 ml-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Testing Engineered product integrations resulting in <span className="text-primary font-medium">10% engagement growth</span></span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Built Chrome Extension cutting troubleshooting time by <span className="text-primary font-medium">40%</span></span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Automated CI/CD pipelines reducing release cycles by <span className="text-primary font-medium">25%</span></span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Ansh Softech */}
              <motion.div 
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20"></div>
                
                <div className="md:w-1/2 md:pr-10 pb-10 md:pb-0 md:text-right pl-6 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                    Jan 2020 - March 2021
                  </div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <h4 className="text-foreground/80 mb-2">Ansh Softech - Pune, India</h4>
                  <div className="flex justify-end mb-3">
                    <img 
                      src="/anshsofttech.png"
                      alt="Ansh Softech Logo"
                      className="h-8 object-contain"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-10 backdrop-blur-sm bg-background/40 rounded-lg p-4 border border-white/5 shadow-lg md:ml-0 ml-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Reduced API latency by <span className="text-primary font-medium">30%</span> with optimized microservices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Implemented features enhancing system performance by <span className="text-primary font-medium">15%</span></span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Enabled real-time processing from <span className="text-primary font-medium">1k to 10k+ users</span></span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic <span className="gradient-text">Background</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              My educational journey and qualifications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* University of Alabama */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-background/40 border border-white/5 shadow-lg p-6"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src="/uab_logo_2.png"
                    alt="University of Alabama at Birmingham Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">MS in Computer Science</h3>
                  <p className="text-foreground/60 text-sm">University of Alabama at Birmingham</p>
                  <p className="text-xs text-primary mt-1">Birmingham, AL (US)</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <span className="text-xs font-medium">GPA:</span>
                      <span className="ml-1 text-xs">3.6/4.0</span>
                    </div>
                    <div>
                      <span className="text-xs font-medium">Relevant Courses:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="inline-block px-2 py-0.5 bg-primary/10 rounded-full text-xs">Machine Learning</span>
                        <span className="inline-block px-2 py-0.5 bg-primary/10 rounded-full text-xs">Deep Learning</span>
                        <span className="inline-block px-2 py-0.5 bg-primary/10 rounded-full text-xs">Database Development</span>
                        <span className="inline-block px-2 py-0.5 bg-primary/10 rounded-full text-xs">Cloud Security</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Chandigarh University */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-background/40 border border-white/5 shadow-lg p-6"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src="/cu_logo.png"
                    alt="Chandigarh University Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">BE in Computer Science & Engineering</h3>
                  <p className="text-foreground/60 text-sm">Chandigarh University</p>
                  <p className="text-xs text-secondary mt-1">India</p>
                  <div className="flex items-center">
                      <span className="text-xs font-medium">GPA:</span>
                      <span className="ml-1 text-xs">3.0/4.0</span>
                    </div>
                  <div className=" space-y-2">
                    <div className="flex items-center">
                      <span className="text-xs font-medium">Achievement:</span>
                      <span className="ml-1 text-xs">Gold medal in Data Structures</span>
                    </div>
                    <div>
                      <span className="text-xs font-medium">Relevant Courses:</span>
                      <div className="flex flex-wrap ">
                        <span className="inline-block px-2 py-0.5 bg-secondary/10 rounded-full text-xs">Data Structures</span>
                        <span className="inline-block px-2 py-0.5 bg-secondary/10 rounded-full text-xs">Algorithms</span>
                        <span className="inline-block px-2 py-0.5 bg-secondary/10 rounded-full text-xs">Software Engineering</span>
                        <span className="inline-block px-2 py-0.5 bg-secondary/10 rounded-full text-xs">Java & Python</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-20 backdrop-blur-sm bg-secondary/20"
      >
        <div className="container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & <span className="gradient-text">Technologies</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I specialize in modern technologies for full-stack development and machine learning
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/[0.03] backdrop-blur-md p-6"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
              <div className="absolute -top-20 -right-20 w-36 h-36 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-36 h-36 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-5">
                {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`pb-4 ${index !== skillCategories.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="h-6 w-0.5 bg-gradient-to-b from-primary to-secondary rounded-full mr-2"></div>
                      <h3 className="text-base font-bold bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        {category.category}
                      </h3>
                    </div>
                    
                    <div className="pl-3 flex flex-wrap gap-2 items-center">
                      {category.skills.map((skill, i) => (
                        <div 
                          key={i} 
                          className="group flex items-center bg-background/40 backdrop-blur-sm px-2 py-1 rounded-md border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5"
                        >
                          <span className="mr-1.5 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                          <span className="text-xs">{skill.name}</span>
                        </div>
                      ))}
                </div>
              </motion.div>
            ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Check out some of my recent work. Each project represents a unique challenge and solution.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card-3d bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border border-border/40 transition-all duration-300 h-full flex flex-col hover:rgb-glow"
              >
                <div className="card-3d-content flex flex-col h-full">
                  <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-[rgba(79,70,229,0.1)] to-[rgba(219,39,119,0.1)]">
                    {isMounted && (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-2 right-2 z-10 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
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
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              href="/projects"
              className="btn-3d inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.2)] to-[rgba(219,39,119,0.2)] hover:from-[rgba(79,70,229,0.3)] hover:to-[rgba(219,39,119,0.3)] px-8 text-sm font-medium text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm rgb-glow"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 