import { Button } from "./ui/button";

interface HeroSectionProps {
  onScrollToWork: () => void;
}

export function HeroSection({
  onScrollToWork,
}: HeroSectionProps) {
  return (
    <section className="h-screen flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl relative z-10">
        <h1 className="text-7xl md:text-9xl mb-8 text-white leading-tight animate-fade-in-up">
          <span style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'normal' }}>frame</span>
          <span style={{ fontFamily: 'Europa Grotesk, Arial, sans-serif', fontWeight: 'bold' }}>Made</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Where stories take shape.
        </p>
        <Button
          onClick={onScrollToWork}
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-black px-12 py-4 text-lg uppercase tracking-wide transition-all duration-300 animate-fade-in-up animation-delay-400"
        >
          View Our Work
        </Button>
      </div>
    </section>
  );
}