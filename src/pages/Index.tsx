import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LegacyBar from "@/components/LegacyBar";
import ChairmanWelcome from "@/components/ChairmanWelcome";
import Capabilities from "@/components/Capabilities";
import LeadershipTeaser from "@/components/LeadershipTeaser";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <LegacyBar />
      <ChairmanWelcome />
      <Capabilities />
      <LeadershipTeaser />
      <Footer />
    </main>
  );
};

export default Index;
