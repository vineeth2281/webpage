import { WovenLightHero } from "@/components/ui/woven-light-hero";
import { Experiences } from "@/components/ui/experiences";
import { Projects } from "@/components/ui/projects";
import { Publications } from "@/components/ui/publications";
import { Footer } from "@/components/ui/footer";
import { ScrollBackground } from "@/components/ui/scroll-background";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <ScrollBackground />
      <main className="flex-grow z-10">
        <WovenLightHero />
        <Experiences />
        <Projects />
        <Publications />
      </main>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
}
