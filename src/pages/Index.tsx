import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import PlatformHighlights from "@/components/PlatformHighlights";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Capabilities />
      <PlatformHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
