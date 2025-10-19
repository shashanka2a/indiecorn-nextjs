import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Kampus.fun",
    tagline: "Campus super-app",
    icon: "🏫",
    description: "Ultimate campus life platform. Connect, buy, sell, ride, and discover everything campus has to offer.",
    category: ["Campus", "Social", "Marketplace"],
    status: "Live",
    link: "https://www.kampus.fun/",
    github: "https://github.com/shashanka2a",
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Markit.one",
    tagline: "Startup SaaS hub",
    icon: "⚡",
    description: "Simplify forms, QR codes, and hiring. Essential startup tools to launch faster and scale smarter.",
    category: ["SaaS", "Startup", "Tools"],
    status: "Beta Launch",
    link: "https://www.markit.one/",
    github: "https://github.com/shashanka2a",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Hackr.plus",
    tagline: "All-in-one hackathon hub",
    icon: "🏆",
    description: "Host smarter, judge faster, hire better. Complete hackathon platform with AI-powered management and talent discovery.",
    category: ["Events", "AI", "Talent"],
    status: "Coming October",
    link: "https://www.hackr.plus/",
    github: "https://github.com/shashanka2a",
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Payd.plus",
    tagline: "Unified payment OS",
    icon: "💳",
    description: "Your payments, simplified. Business invoices, creator tips, global transfers — all unified with crypto and fiat support.",
    category: ["Fintech", "Payments", "Crypto"],
    status: "Coming November",
    link: "https://www.payd.plus/",
    github: "https://github.com/shashanka2a",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Layr.plus",
    tagline: "Builder's toolkit",
    icon: "🤖",
    description: "All the layers you need to build. Create, design, and deploy from concept to completion.",
    category: ["Dev Tools", "Design", "SaaS"],
    status: "Coming December",
    link: "https://www.layr.plus/",
    github: "https://github.com/shashanka2a",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "MenuPRO",
    tagline: "Digital menu platform",
    icon: "🍽️",
    description: "Digital menu platform for restaurants. Scan, order, serve — no tablets, no delays. QR code ordering.",
    category: ["Restaurant", "SaaS", "QR"],
    status: "Live",
    link: "https://www.menupro.biz/",
    github: "https://github.com/shashanka2a",
    color: "from-orange-500 to-yellow-600"
  },
  {
    name: "OpenGig",
    tagline: "AI-powered client scoping",
    icon: "⚡",
    description: "Turn client inquiries into ready-to-build briefs. Automate onboarding, save time, start projects faster with AI.",
    category: ["AI", "Freelancer", "Auto"],
    status: "Live",
    link: "https://opengig.net/",
    github: "https://github.com/shashanka2a",
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "StayLinq",
    tagline: "Unified hospitality platform",
    icon: "🏨",
    description: "End-to-end operating system for vacation rental managers. Operational automation with five-star guest experience.",
    category: ["Hospitality", "Property", "SaaS"],
    status: "Live",
    link: "https://www.staylinq.co/",
    github: "https://github.com/shashanka2a",
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "ProductJoy",
    tagline: "Premium development",
    icon: "🚀",
    description: "Premium web & mobile app development. From wireframes to launch, we make it happen at the speed of your ambition.",
    category: ["Dev Agency", "Web", "Mobile"],
    status: "Live",
    link: "https://www.productjoy.co/",
    github: "https://github.com/shashanka2a",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "Momint",
    tagline: "NFT marketplace for influencers",
    icon: "💎",
    description: "Own moments from your favorite influencers. Exclusive NFTs with meet-and-greets, discounts, and gated content.",
    category: ["Web3", "NFT", "Creator"],
    status: "Live",
    link: "https://www.momint.club/",
    github: "https://github.com/shashanka2a",
    color: "from-indigo-500 to-purple-600"
  },
  {
    name: "WhatIfStudio",
    tagline: "AI filmmaking platform",
    icon: "🎬",
    description: "Rewriting sad endings beautifully. Exploring alternate timelines through AI filmmaking. Every story deserves a second chance.",
    category: ["AI Film", "Creative", "Story"],
    status: "Live",
    link: "https://www.whatifstudio.art/",
    github: "https://github.com/shashanka2a",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Aura Art",
    tagline: "AI creative platform",
    icon: "🎨",
    description: "AI meets creativity. Ultimate creative platform with templates, editing tools, and AI assistance.",
    category: ["AI", "Creative", "Content"],
    status: "Live",
    link: "https://www.tryaura.art/",
    github: "https://github.com/shashanka2a",
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "SnapEvent",
    tagline: "Photographer marketplace",
    icon: "📸",
    description: "Capture life's best moments. Find the perfect photographer for your special moments. Browse portfolios and book.",
    category: ["Marketplace", "Photography", "Booking"],
    status: "Live",
    link: "https://snapevent.in/",
    github: "https://github.com/shashanka2a",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "OmniTrix",
    tagline: "IoT blockchain platform",
    icon: "🔗",
    description: "The on-chain brain of the real world. Where IoT meets intelligence to make supply chains with AI agents and blockchain verification.",
    category: ["IoT", "Blockchain", "AI"],
    status: "Live",
    link: "https://www.tryomnitrix.com/",
    github: "https://github.com/shashanka2a",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "BlueBeetle",
    tagline: "AI trading platform",
    icon: "🤖",
    description: "Agentic intelligence for markets that never sleep. The living co-pilot for traders with AI-powered market analysis and management.",
    category: ["AI", "Trading", "Finance"],
    status: "Live",
    link: "https://www.bluebeetle.online/",
    github: "https://github.com/shashanka2a",
    color: "from-cyan-500 to-blue-600"
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
            Building 25 projects by end of 2025 - tools and platforms that empower the next generation of indie makers
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
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Category/Industry */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2 font-mono">Category:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((category) => (
                      <span 
                        key={category}
                        className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-green-400"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-green-400 hover:bg-green-500 text-black flex-1"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-600 text-black hover:bg-gray-800 hover:text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}