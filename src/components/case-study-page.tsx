import { ArrowLeft, TrendingUp, Users, Target, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export interface CaseStudyData {
  id: string;
  client: string;
  title: string;
  thumbnail: string;
  resultsSummary: string;
  challenge: string;
  solution: string;
  execution: {
    description: string;
    visuals: {
      type: 'image' | 'video' | 'analytics';
      src: string;
      alt: string;
      caption?: string;
      thumbnail?: string;
    }[];
  };
  results: {
    metrics: {
      icon: 'growth' | 'audience' | 'conversions';
      label: string;
      value: string;
    }[];
    description: string;
  };
  closingLine: string;
}

interface CaseStudyPageProps {
  caseStudy: CaseStudyData;
  onBack: () => void;
  onContactClick: () => void;
}

export function CaseStudyPage({ caseStudy, onBack, onContactClick }: CaseStudyPageProps) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: challengeRef, isVisible: challengeVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: executionRef, isVisible: executionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'growth':
        return <TrendingUp className="w-6 h-6" />;
      case 'audience':
        return <Users className="w-6 h-6" />;
      case 'conversions':
        return <Target className="w-6 h-6" />;
      default:
        return <TrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative min-h-screen" style={{ zIndex: 10, position: 'relative' }}>
      {/* Navigation Buttons */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <Button
          onClick={onBack}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm border-gray-800 text-white hover:bg-primary hover:text-black transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={onBack}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm border-gray-800 text-white hover:bg-primary hover:text-black transition-all duration-300"
        >
          Homepage
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={heroRef}
            className={`transition-all duration-600 ease-out ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-7xl mb-8 text-white leading-tight">
              <span style={{ fontFamily: 'Europa Grotesk, Arial, sans-serif', fontWeight: 'bold' }}>{caseStudy.client}</span>
            </h1>
            
            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={caseStudy.thumbnail}
                alt={caseStudy.client}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              {caseStudy.resultsSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={challengeRef}
            className={`transition-all duration-600 ease-out ${
              challengeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-white">
              The Challenge
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div
            ref={solutionRef}
            className={`transition-all duration-600 ease-out ${
              solutionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-white">
              Our Solution
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={executionRef}
            className={`transition-all duration-600 ease-out ${
              executionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-white">
              Execution
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {caseStudy.execution.description}
            </p>
            
            {/* Visuals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.execution.visuals.map((visual, index) => (
                <div key={index} className="group">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
                    {visual.type === 'video' ? (
                      <a
                        href={visual.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block w-full h-full group cursor-pointer"
                      >
                        {visual.thumbnail ? (
                          <ImageWithFallback
                            src={visual.thumbnail}
                            alt={visual.alt}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                        )}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-20 h-20 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <ExternalLink className="w-10 h-10 text-black" />
                          </div>
                        </div>
                      </a>
                    ) : (
                      <ImageWithFallback
                        src={visual.src}
                        alt={visual.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  {visual.caption && (
                    <p className="text-sm text-gray-400">{visual.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div
            ref={resultsRef}
            className={`transition-all duration-600 ease-out ${
              resultsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">
              Results
            </h2>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {caseStudy.results.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-background/50 rounded-lg border border-gray-800"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {getIcon(metric.icon)}
                  </div>
                  <div className="text-3xl md:text-4xl text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wide text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              {caseStudy.results.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={ctaRef}
            className={`transition-all duration-600 ease-out ${
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-white leading-tight">
              {caseStudy.closingLine}
            </h2>
            
            <Button
              onClick={onContactClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-lg uppercase tracking-wide transition-all duration-300"
            >
              Work With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}