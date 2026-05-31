import { WovenLightHero } from "@/components/ui/woven-light-hero";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <WovenLightHero />
      </main>
      <Footer />
    </div>
  );
}
