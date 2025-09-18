import { Button } from "./ui/button";
import { Twitter, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    handle: "@indiecorn_xyz",
    description: "Daily updates, thoughts, and indie maker tips",
    icon: Twitter,
    url: "https://twitter.com/indiecorn_xyz",
    color: "hover:text-blue-400 hover:border-blue-400"
  },
  {
    name: "GitHub",
    handle: "@indiecorn",
    description: "Open source projects and code experiments",
    icon: Github,
    url: "https://github.com/indiecorn",
    color: "hover:text-gray-400 hover:border-gray-400"
  },
  {
    name: "LinkedIn",
    handle: "/in/indiecorn",
    description: "Professional updates and industry insights",
    icon: Linkedin,
    url: "https://linkedin.com/in/indiecorn",
    color: "hover:text-blue-600 hover:border-blue-600"
  },
  {
    name: "Email",
    handle: "hello@indiecorn.xyz",
    description: "Direct line for collaborations and questions",
    icon: Mail,
    url: "mailto:hello@indiecorn.xyz",
    color: "hover:text-green-400 hover:border-green-400"
  }
];

export function FollowSection() {
  return (
    <section className="bg-black text-white py-20" id="follow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-green-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow the journey, join the conversation, and be part of the indie maker community
          </p>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Social links grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 bg-gray-900 border border-gray-800 rounded-lg transition-all duration-300 group ${social.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-gray-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{social.name}</h3>
                        <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="font-mono text-green-400 mb-2">{social.handle}</p>
                      <p className="text-gray-400 text-sm">{social.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-400/10 to-transparent border border-green-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you&apos;re an aspiring indie maker, experienced developer, or just curious about the journey, 
                I&apos;d love to hear from you. Let&apos;s turn ideas into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-green-400 hover:bg-green-500 text-black font-mono"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Get In Touch
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono"
                >
                  <Github className="mr-2 w-5 h-5" />
                  Collaborate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}