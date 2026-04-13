import { MapPin, Mail, Phone, Linkedin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Open to new opportunities
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="gradient-text">Richard Chiou</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-medium">
          AI/ML Engineer & Data Scientist
        </p>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          10+ years building production-grade ML systems across computer vision, NLP, GenAI, and cloud AI deployments
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" /> Newark, CA
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-primary" /> (408) 214-9110
          </span>
          <a
            href="mailto:richardchiou93@gmail.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail size={14} className="text-primary" /> richardchiou93@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/richard-chiou-1275744b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Linkedin size={14} className="text-primary" /> LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
