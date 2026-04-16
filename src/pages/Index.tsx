import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Foundation from "@/components/Foundation";
import Offerings from "@/components/Offerings";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <Navbar />
      <Hero />
      <Foundation />
      <Offerings />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;
