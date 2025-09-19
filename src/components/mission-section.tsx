
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
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6 text-lg leading-relaxed text-center">
              <p className="text-2xl font-mono text-green-600">
                &gt; I believe in building without permission.
              </p>
              <p>
                In a world of gatekeepers and venture capital, I choose the indie path. 
                I build products that matter, solve real problems, and create value 
                without compromise.
              </p>
              
              {/* AI empowerment meme */}
              <div className="bg-black border border-green-500/30 rounded-lg p-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-white text-lg font-bold mb-2">
                      &quot;I have VCs, MBAs, big teams.&quot;
                    </p>
                    <p className="text-gray-400 text-sm font-mono">
                      – The Old Playbook
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-green-400 text-xl font-bold mb-2">
                      &quot;We have AI.&quot;
                    </p>
                    <p className="text-green-500 text-sm font-mono">
                      – IndieCorn
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="font-mono text-green-600 border-l-4 border-green-500 pl-4">
                Independence. Innovation. Impact.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}