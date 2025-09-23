import { Button } from "./ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-green-400/20"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Terminal-style header */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-lg">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="font-mono text-sm text-green-400">indie_corn@startup:~$</span>
        </div>
        
        {/* Main hero text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">Indie</span>{" "}
          <span className="text-green-400">today.</span>
          <br />
          <span className="text-white">Unicorn</span>{" "}
          <span className="text-green-400">tomorrow.</span>
        </h1>
        
        {/* SEO H1 for brand definition */}
        <h1 className="sr-only">Indiecorn – Startup Studio for Indie Founders</h1>
        
        {/* Tony Stark subline */}
        <p className="font-mono text-sm md:text-base text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Tony Stark built his suit in a cave. I am trying to build startups on a MacBook Pro 2022 — no team, no VC, just AI and focus.
        </p>
        
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-green-400 hover:bg-green-500 text-black font-mono text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono text-lg px-8 py-6 transition-all duration-300"
          >
            Read Manifesto
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}