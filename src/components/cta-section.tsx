import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onScrollToContact: () => void;
}

export function CTASection({ onScrollToContact }: CTASectionProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Let's Create Something Amazing
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your vision to life? Whether it's a podcast, commercial, 
          or creative project, I'm here to help you tell your story.
        </p>
        <Button 
          onClick={onScrollToContact}
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 group"
        >
          Work With Me
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}