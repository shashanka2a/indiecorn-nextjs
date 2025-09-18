import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Kampus",
    tagline: "Campus super-app",
    icon: "🏫",
    description: "Community-driven learning platform connecting developers, designers, and entrepreneurs.",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Live",
    link: "#",
    github: "#",
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Markit",
    tagline: "Startup SaaS hub",
    icon: "⚡",
    description: "AI-powered market research tool for indie makers and small businesses.",
    tech: ["Next.js", "OpenAI", "Stripe"],
    status: "Beta",
    link: "#",
    github: "#",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Layr",
    tagline: "AI for founders",
    icon: "🤖",
    description: "No-code visual design system builder for rapid prototyping and development.",
    tech: ["Vue.js", "Canvas API", "Firebase"],
    status: "Coming Soon",
    link: "#",
    github: "#",
    color: "from-orange-500 to-red-600"
  }
];

export function ProjectsSection() {
  return (
    <section className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Current <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building the tools and platforms that empower the next generation of indie makers
          </p>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.name}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                {/* Project header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <span className="text-2xl">{project.icon}</span>
                    </div>
                    <p className="text-green-400 font-mono text-sm mb-3">{project.tagline}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-mono ${
                      project.status === 'Live' ? 'bg-green-400/20 text-green-400' :
                      project.status === 'Beta' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-gray-600/20 text-gray-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2 font-mono">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-green-400 hover:bg-green-500 text-black flex-1"
                    disabled={project.status === 'Coming Soon'}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all projects CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}