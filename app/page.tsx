import { WovenLightHero } from "@/components/ui/woven-light-hero";
import { Experiences } from "@/components/ui/experiences";
import { Footer } from "@/components/ui/footer";
import { ScrollBackground } from "@/components/ui/scroll-background";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollBackground />
      <main className="flex-grow z-10">
        <WovenLightHero />
        <Experiences />
      </main>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
}
