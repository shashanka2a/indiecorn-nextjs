import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const journalEntries = [
  {
    title: "Building in Public: Lessons from Month 1",
    excerpt: "What I learned from shipping my first indie project and the community response that surprised me.",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["Building in Public", "Indie Hacking", "Lessons"]
  },
  {
    title: "The Minimalist Tech Stack",
    excerpt: "Why choosing fewer tools and sticking to the basics helped me ship faster and maintain better focus.",
    date: "2024-03-10",
    readTime: "3 min read",
    tags: ["Tech Stack", "Minimalism", "Productivity"]
  },
  {
    title: "From Idea to MVP in 30 Days",
    excerpt: "A detailed breakdown of how I went from concept to live product in a month, including all the mistakes I made.",
    date: "2024-03-05",
    readTime: "8 min read",
    tags: ["MVP", "Product Development", "Timeline"]
  }
];

export function JournalSection() {
  return (
    <section className="bg-white text-black py-20" id="journal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-green-500">Journal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, lessons, and insights from the indie maker journey
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {journalEntries.map((entry) => (
            <article 
              key={entry.title}
              className="border-b border-gray-200 pb-8 mb-8 last:border-b-0 hover:bg-gray-50 transition-colors p-6 rounded-lg group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    {entry.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {entry.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {entry.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(entry.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{entry.readTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* Read button */}
                <div className="md:pt-2">
                  <Button 
                    variant="outline" 
                    className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter signup */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mt-16 text-center">
          <BookOpen className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified when new journal entries are published. No spam, just indie maker insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
            />
            <Button className="bg-green-400 hover:bg-green-500 text-black px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}