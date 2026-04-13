import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to connect, feel free to reach out!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild variant="outline" className="rounded-full">
            <a href="mailto:richardchiou93@gmail.com">
              <Mail size={16} className="mr-2" /> Email Me
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="tel:4082149110">
              <Phone size={16} className="mr-2" /> Call Me
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://www.linkedin.com/in/richard-chiou-1275744b" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} className="mr-2" /> LinkedIn
            </a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          <MapPin size={12} /> 6737 Lizardfish Way, Newark, CA 94560-5549
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
