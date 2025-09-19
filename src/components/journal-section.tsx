"use client";

import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";

const journalEntries = [
  {
    title: "The Monopoly Exploitation Cycle: How Once-Innovative Companies Turn Against Their Users",
    excerpt: "Exploring how successful companies evolve from user-centric innovators to profit-maximizing monopolies that exploit their user base.",
    date: "2025-09-01",
    readTime: "8 min read",
    tags: ["Business Strategy", "Monopoly", "User Experience"],
    link: "https://medium.com/@jagannathamshashank/the-monopoly-exploitation-cycle-how-once-innovative-companies-turn-against-their-users-4550b07ebe5c"
  },
  {
    title: "Why the Student Commerce Problem Remains Unsolved",
    excerpt: "Analyzing the persistent challenges in student commerce and why existing solutions fail to address the core needs of campus communities.",
    date: "2025-08-25",
    readTime: "6 min read",
    tags: ["Student Commerce", "Problem Solving", "Campus Life"],
    link: "https://medium.com/@jagannathamshashank/why-the-student-commerce-problem-remains-unsolved-eba65c0bab78"
  },
  {
    title: "Why Campus Ride-Sharing Remains Broken",
    excerpt: "Deep dive into the fundamental issues plaguing campus transportation and why current ride-sharing models don't work for students.",
    date: "2025-08-15",
    readTime: "7 min read",
    tags: ["Transportation", "Campus Life", "Ride Sharing"],
    link: "https://medium.com/@jagannathamshashank/why-campus-ride-sharing-remains-broken-5f056ee084a6"
  },
  {
    title: "From Assignments to Vibe Coding: How AI Evolved and Redefined Industries",
    excerpt: "Tracing the evolution of AI from academic assignments to practical applications that are reshaping entire industries and workflows.",
    date: "2025-08-05",
    readTime: "9 min read",
    tags: ["Artificial Intelligence", "Industry Evolution", "Technology"],
    link: "https://medium.com/@jagannathamshashank/from-assignments-to-vibe-coding-how-ai-evolved-and-redefined-industries-7547a0e765c4"
  }
];

export function JournalSection() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedEntries = showAll ? journalEntries : journalEntries.slice(0, 2);

  return (
    <section className="bg-white text-black py-20" id="journal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-green-500">Journal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, lessons, and insights from the indie developer journey
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {displayedEntries.map((entry) => (
            <article 
              key={entry.title}
              className="border-b border-gray-200 pb-8 mb-8 last:border-b-0 hover:bg-gray-50 transition-colors p-6 rounded-lg group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    <a 
                      href={entry.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {entry.title}
                    </a>
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
                    asChild
                  >
                    <a href={entry.link} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
          
          {/* View All Posts Button */}
          {!showAll && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                onClick={() => setShowAll(true)}
              >
                View All Posts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
          
          {/* Show Less Button */}
          {showAll && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                onClick={() => setShowAll(false)}
              >
                Show Less
                <ArrowRight className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </div>
          )}
        </div>
        
        {/* Unified CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mt-16 text-center">
          <BookOpen className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Follow the Journey</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe or reach out — let&apos;s build together. No spam, just indie developer insights.
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