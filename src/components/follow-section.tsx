import { Button } from "./ui/button";
import { Youtube, Instagram, Mail, ExternalLink } from "lucide-react";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  {
    name: "YouTube",
    handle: "@indiecorn.xyz",
    description: "Tutorials, project walkthroughs, and indie maker content",
    icon: Youtube,
    url: "https://youtube.com/@indiecorn.xyz",
    color: "hover:text-red-500 hover:border-red-500"
  },
  {
    name: "Instagram",
    handle: "@indiecorn.xyz",
    description: "Behind-the-scenes content and visual updates",
    icon: Instagram,
    url: "https://instagram.com/indiecorn.xyz",
    color: "hover:text-pink-400 hover:border-pink-400"
  },
  {
    name: "TikTok",
    handle: "@indiecorn.xyz",
    description: "Quick tips, coding snippets, and viral tech content",
    icon: TikTokIcon,
    url: "https://tiktok.com/@indiecorn.xyz",
    color: "hover:text-black hover:border-black"
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
    <section className="bg-black text-white py-12" id="follow">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            Let&apos;s <span className="text-green-400">Connect</span>
          </h2>
          
          {/* Simple social links row */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 group ${social.color}`}
                  title={social.name}
                >
                  <IconComponent className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}