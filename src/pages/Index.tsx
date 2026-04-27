import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LegacyBar from "@/components/LegacyBar";
import Capabilities from "@/components/Capabilities";
import LeadershipTeaser from "@/components/LeadershipTeaser";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <LegacyBar />
      <Capabilities />
      <LeadershipTeaser />
      <Footer />
    </main>
  );
};

export default Index;
