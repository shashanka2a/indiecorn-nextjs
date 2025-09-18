import { Terminal, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="font-mono font-bold text-lg">IndieCorn.xyz</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building the future, one indie project at a time.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              🦄 Indie today. Unicorn tomorrow.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#mission" className="text-gray-400 hover:text-green-400 transition-colors">Mission</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors">Projects</a></li>
              <li><a href="#journal" className="text-gray-400 hover:text-green-400 transition-colors">Journal</a></li>
              <li><a href="#follow" className="text-gray-400 hover:text-green-400 transition-colors">Follow</a></li>
            </ul>
          </div>
          
          {/* Status */}
          <div>
            <h3 className="font-bold mb-4">Current Status</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Building in public</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-400">3 active projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-400">Open to collaborations</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Tagline */}
          <div className="text-center mb-6">
            <p className="text-xs font-mono text-green-400/80">
              Indie today. Unicorn tomorrow. One man. One laptop. One billion.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by an indie maker</span>
            </div>
            
            <div className="text-sm text-gray-500 mt-4 md:mt-0">
              <span className="font-mono">© 2025 IndieCorn.xyz</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}