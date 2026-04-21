import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import Messengers from "@/components/Messengers";
import Quantum from "@/components/Quantum";
import Pillars from "@/components/Pillars";
import Sabedoria from "@/components/Sabedoria";
import Offerings from "@/components/Offerings";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <Hero />
      <Foundation />
      <Messengers />
      <Quantum />
      <Pillars />
      <Sabedoria />
      <Offerings />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;
