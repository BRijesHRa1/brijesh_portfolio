'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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

  // Section animations
  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
              About <span className="gradient-text">Me</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground/80 text-lg"
            >
              A passionate web developer with a focus on creating beautiful and functional experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <motion.section
        ref={introRef}
        initial="hidden"
        animate={introInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-12 md:py-16 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold">Hello, I'm <span className="gradient-text">Brijesh</span></h2>
              <p className="text-foreground/80 leading-relaxed">
              I’m a passionate software engineer with a strong focus on backend development, scalable system design, and AI integration. My expertise spans building robust APIs, designing microservices, and deploying cloud-native architectures using technologies like Java, Python, Docker, and Kubernetes. I have hands-on experience with advanced AI, including RAG pipelines and LLM fine-tuning, to power intelligent, real-time solutions.

My approach blends deep technical skill with a drive for automation and performance—consistently reducing latency, optimizing data flow, and supporting thousands of concurrent users. I thrive on solving complex problems and turning innovative ideas into reliable, production-ready software.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver outstanding 
                user experiences. I have a proven track record of optimizing processes and improving performance metrics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="btn-3d rgb-glow inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  View My Work
                </Link>
                <a
                  href="https://www.linkedin.com/in/brijesh-rai-120712129/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background/60 backdrop-blur-sm px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/BRijesHRa1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background/60 backdrop-blur-sm px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="card-3d relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl border border-border/40 rgb-glow"
            >
              <div className="card-3d-content w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(79,70,229,0.15)] to-[rgba(219,39,119,0.15)]" />
                <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                    <img 
                      src="/Brijesh_picture.png" 
                      alt="Brijesh" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 w-full">
                    <h3 className="text-xl font-bold mb-1">Brijesh</h3>
                    <p className="text-sm text-foreground/70 mb-2">Software Engineer</p>
                    <div className="flex flex-col justify-center text-foreground/60">
                      <span className="text-xs">📧 brijeshraii0721@gmail.com</span>
                      <span className="text-xs">📞 +1(205) 572-3427</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        ref={experienceRef}
        initial="hidden"
        animate={experienceInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-16 md:py-24 backdrop-blur-sm bg-secondary/20 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
            >
              <div className="card-3d-content">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Software Engineer (AI Researcher)</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-sm font-medium text-foreground/70">May 2025 - Present</span>
                  </div>
                </div>
                <h4 className="text-lg text-foreground/90 mb-3">University of Alabama at Birmingham</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Architected multi-LLM pipelines for extracting experimental soft robotics parameters from research literature</li>
                  <li>Engineered 6+ domain-specific features enabling rigorous model evaluation and iterative refinement</li>
                  <li>Increased data utility by <span className="text-primary font-medium">35%</span> through advanced AI research methods</li>
                </ul>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
            >
              <div className="card-3d-content">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-sm font-medium text-foreground/70">April 2021 - March 2023</span>
                  </div>
                </div>
                <h4 className="text-lg text-foreground/90 mb-3">Taboola - Gurugram, India</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Engineered and implemented Taboola product integrations, automating key processes that enhanced user experience and publisher efficiency, resulting in <span className="text-primary font-medium">a 10% improvement in client engagement and a $100K annual increase in revenue</span></li>
                  <li>Built a Chrome Extension integrated with APIs to audit Taboola product automating cutting troubleshooting time by 40%. Adopted by 5+ teams via real-time dashboards</li>
                  <li>Engineered Jenkins CI/CD pipelines with Docker/Kubernetes integration, automating deployments and reducing release cycles by 25%</li>
                  <li>Re-architected Taboola News implementations using React.js, optimizing cross-platform performance and resolving scalability bottlenecks to accelerate deployment cycles by 30%</li>
                </ul>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
            >
              <div className="card-3d-content">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <span className="text-sm font-medium text-foreground/70 mt-2 md:mt-0">Jan 2020 - March 2021</span>
                </div>
                <h4 className="text-lg text-foreground/90 mb-3">Ansh Softech - Pune, India</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Reduced API latency by 30% by optimizing Java/Spring Boot RESTful services and deploying them as Docker containers on Kubernetes clusters, scaling to handle 50k+ concurrent users</li>
                  <li>Implemented full-stack features for scalable web applications, enhancing system performance by 15%</li>
                  <li>Maintained build pipelines, reducing deployment time by 25%, by optimizing Jenkins pipelines and MySQL queries</li>
                  <li>Enabled real-time event processing from 1k to 10k+ monthly active users by integrating Apache Kafka</li>
                </ul>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        ref={educationRef}
        initial="hidden"
        animate={educationInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-16 md:py-24 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Education & <span className="gradient-text">Certifications</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              My academic background and technical education
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
            >
              <div className="card-3d-content">
                <h3 className="text-xl font-bold mb-2">MS in Computer Science</h3>
                <h4 className="text-lg text-foreground/90 mb-1">University of Alabama at Birmingham</h4>
                <p className="text-sm text-foreground/70 mb-4">Birmingham, AL (US)</p>
                <p className="text-foreground/80">
                  GPA: 3.6/4.0
                </p>
                <p className="text-foreground/80 mt-2">
                  <span className="font-medium">Relevant Courses:</span> Machine Learning, Deep Learning, Database Development and Cloud Security.
                </p>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
            >
              <div className="card-3d-content">
                <h3 className="text-xl font-bold mb-2">BE in Computer Science & Engineering</h3>
                <h4 className="text-lg text-foreground/90 mb-1">Chandigarh University</h4>
                <p className="text-sm text-foreground/70 mb-4">India</p>
                <p className="text-foreground/80">
                  <span className="font-medium">Achievements:</span> Gold medal in the Data structures quiz competition.
                </p>
                <p className="text-foreground/80 mt-2">
                  <span className="font-medium">Relevant Courses:</span> C, C++, Java, Python, Data Structure, Design and Analysis of Algorithm (DSA), Software Engineering.
                </p>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 md:py-24 backdrop-blur-sm bg-secondary/20 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Languages, frameworks, and technologies I work with
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300 mb-8"
            >
              <div className="card-3d-content">
                <h3 className="text-xl font-bold mb-4">Programming Languages & Databases</h3>
                <div className="flex flex-wrap gap-3">
                  {["Python", "C++", "Java", "J2EE", "Spring Boot", "JavaScript", "TypeScript", "Dart", "SQL", "MongoDB", "PostgreSQL", "Vertica", "XML"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300 mb-8"
            >
              <div className="card-3d-content">
                <h3 className="text-xl font-bold mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-3">
                  {["JWT", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "pandas", "Flutter", "React.js", "Next.js", "Vue.js", "GraphQL", "ORM", "Hibernate", "JDBC", "Tailwind", "Bootstrap", "jQuery", "Angular", "Redux", "Node.js", "Express.js", "REST API", "Swagger"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="card-3d bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
            >
              <div className="card-3d-content">
                <h3 className="text-xl font-bold mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {["Postman API", "OAuth 2.0", "Docker", "Kubernetes", "AWS", "Git", "UNIX", "Tableau", "Jira", "Bitbucket", "Salesforce", "Jenkins", "VSCode", "CI/CD", "Agile Methodology", "Bash", "Linux", "MS Office", "Jupyter", "NPM", "Webpack", "Babel", "Junit", "Microservices"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-3d-shadow"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 md:py-24 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured <span className="gradient-text">Project</span></h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Spotlight on my technical work and achievements
            </p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="card-3d max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-border/40 hover:rgb-glow transition-all duration-300"
          >
            <div className="card-3d-content">
              <h3 className="text-2xl font-bold mb-4">Real-Time Log Tracking System</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="col-span-1 md:col-span-2">
                  <p className="text-foreground/80 mb-4">
                  Designed and implemented a scalable real-time log aggregation system using Loki and Grafana, enabling efficient
collection, querying, and visualization of distributed microservices logs. Streamlined log ingestion and centralized
monitoring, reducing incident response time by 50% and enhancing overall system observability.
                  </p>
                  <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Loki", "Grafana", "Docker", "Prometheus", "Kafka", "Node.js", "Postgres", "Microservices", "Docker"].map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground/80">
                   
                  </p>
                </div>
                <div className="col-span-1 bg-primary/5 rounded-lg p-4 flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[200px]">
                    <Image
                      src="/log-tracking-real-time.png"
                      alt="Real-Time Log Tracking System"
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Link 
                  href="https://github.com/BRijesHRa1/log-tracking-real-time" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  View Project Details
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="card-3d-shadow"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative backdrop-blur-sm bg-gradient-to-r from-[rgba(79,70,229,0.05)] to-[rgba(219,39,119,0.05)]">
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
              Let's Work <span className="gradient-text">Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-foreground/80"
            >
              I'm currently available for Full time work and exciting project opportunities.
              If you have a project that needs some creative touch, let's connect!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="btn-3d inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-[rgba(79,70,229,0.3)] to-[rgba(219,39,119,0.3)] hover:from-[rgba(79,70,229,0.4)] hover:to-[rgba(219,39,119,0.4)] px-8 text-sm font-medium text-foreground transition-all duration-300 backdrop-blur-sm rgb-glow"
              >
                Explore My Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 