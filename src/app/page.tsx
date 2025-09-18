import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { MissionSection } from "@/components/mission-section";
import { ProjectsSection } from "@/components/projects-section";
import { JournalSection } from "@/components/journal-section";
import { FollowSection } from "@/components/follow-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <JournalSection />
      <FollowSection />
      <Footer />
    </div>
  );
}
