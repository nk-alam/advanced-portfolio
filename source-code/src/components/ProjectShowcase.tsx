import React, { useState } from 'react';
import { ExternalLink, Github, Star, Eye, Calendar, Code } from 'lucide-react';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "IndiaCart - E-commerce Platform",
      description: "Full-stack e-commerce solution built for Indian market with multi-language support, payment gateway integration, and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: {
        users: "50K+",
        revenue: "₹2.5Cr",
        performance: "99.9%"
      },
      features: [
        "Multi-vendor marketplace",
        "Real-time chat support",
        "Advanced search & filters",
        "Mobile-first responsive design",
        "Payment gateway integration"
      ],
      status: "Live",
      client: "Indian E-commerce Startup"
    },
    {
      title: "HealthTracker Pro - Medical App",
      description: "Comprehensive health monitoring app with AI-powered insights, doctor consultations, and medication tracking for Indian healthcare system.",
      tech: ["React Native", "Python", "TensorFlow", "AWS", "PostgreSQL"],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: {
        users: "25K+",
        accuracy: "94%",
        satisfaction: "4.8/5"
      },
      features: [
        "AI symptom checker",
        "Telemedicine integration",
        "Prescription management",
        "Health data analytics",
        "Emergency contact system"
      ],
      status: "Live",
      client: "Healthcare Startup"
    },
    {
      title: "EduPlatform - Learning Management",
      description: "Complete LMS solution for Indian educational institutions with live classes, assignments, and progress tracking.",
      tech: ["Next.js", "GraphQL", "Prisma", "WebRTC", "Docker"],
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: {
        students: "100K+",
        completion: "85%",
        rating: "4.9/5"
      },
      features: [
        "Live video classes",
        "Interactive assignments",
        "Progress analytics",
        "Multi-language support",
        "Mobile app companion"
      ],
      status: "Live",
      client: "EdTech Company"
    }
  ];

  const project = projects[selectedProject];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matrix-green mb-4 font-hacker">
            PROJECT PORTFOLIO.EXE
          </h2>
          <p className="text-matrix-green/70">Real-world solutions that drive business growth</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((proj, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedProject === index
                    ? 'bg-matrix-green/20 border-matrix-green shadow-matrix'
                    : 'bg-matrix-darkGray border-matrix-green/30 hover:border-matrix-green/60'
                }`}
              >
                <h3 className="font-bold text-matrix-green mb-2">{proj.title}</h3>
                <p className="text-sm text-matrix-green/70 mb-3">{proj.description.substring(0, 100)}...</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-matrix-green/20 text-matrix-green rounded">
                    {proj.status}
                  </span>
                  <div className="flex space-x-1">
                    {proj.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs text-matrix-green/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-matrix-green/10"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-matrix-green text-matrix-black rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-matrix-green mb-2">{project.title}</h3>
                <p className="text-matrix-green/80 mb-4">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-matrix-green">{value}</div>
                      <div className="text-xs text-matrix-green/60 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-matrix-green mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-matrix-green/20 text-matrix-green rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-matrix-green mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm text-matrix-green/80 flex items-center">
                        <Star size={12} className="text-matrix-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-matrix-green text-matrix-black px-4 py-2 rounded hover:bg-matrix-darkGreen transition-colors">
                    <Eye size={16} />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-matrix-green text-matrix-green px-4 py-2 rounded hover:bg-matrix-green/10 transition-colors">
                    <Github size={16} />
                    <span>View Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;