import { Code, Zap, Users, Rocket } from "lucide-react";

export function MissionSection() {
  return (
    <section className="bg-white text-black py-20" id="mission">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-green-500">Indie</span> Manifesto
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          {/* Main manifesto */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-2xl font-mono text-green-600">
                  &gt; We believe in building without permission.
                </p>
                <p>
                  In a world of gatekeepers and venture capital, we choose the indie path. 
                  We build products that matter, solve real problems, and create value 
                  without compromise.
                </p>
                
                {/* AI empowerment note */}
                <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-gray-600 mb-2">
                    We have AI now — one builder can do the work of ten.
                  </p>
                  <p className="text-xs font-mono text-green-600 italic">
                    (Think Loki giving Hulk that little… push.)
                  </p>
                </div>
                
                <p>
                  Every unicorn started as an idea. Every empire began with a single line of code. 
                  We&apos;re not just building products—we&apos;re building the future, one commit at a time.
                </p>
                <p className="font-mono text-green-600 border-l-4 border-green-500 pl-4">
                  Independence. Innovation. Impact.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <Code className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Ship Fast</h3>
                <p className="text-sm text-gray-600">Build, iterate, improve</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Stay Lean</h3>
                <p className="text-sm text-gray-600">Maximum impact, minimal overhead</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">User First</h3>
                <p className="text-sm text-gray-600">Solve real problems</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <Rocket className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Scale Smart</h3>
                <p className="text-sm text-gray-600">Grow sustainably</p>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <blockquote className="text-center border-t border-gray-200 pt-12">
            <p className="text-2xl md:text-3xl italic text-gray-700 mb-4">
              &ldquo;The best time to plant a tree was 20 years ago. 
              The second best time is now.&rdquo;
            </p>
            <cite className="text-green-600 font-mono">- Ancient Proverb, Modern Truth</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}