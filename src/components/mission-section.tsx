
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
              <div className="bg-black border border-green-500/30 rounded-lg p-6 text-center">
                <div className="space-y-4">
                  <p className="text-white text-lg font-bold">
                    I have VCs, MBAs, and big teams.
                  </p>
                  <div className="w-full h-px bg-green-500/50"></div>
                  <p className="text-green-400 text-xl font-bold">
                    We have AI.
                  </p>
                </div>
              </div>
              
              <p className="font-mono text-green-600 border-l-4 border-green-500 pl-4">
                Independence. Innovation. Impact.
              </p>
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