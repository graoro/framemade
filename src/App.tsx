import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { PortfolioShowcase } from "./components/portfolio-showcase";
import { TestimonialsSection } from "./components/testimonials-section";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { CursorEffect } from "./components/cursor-effect";
import { SectionDivider } from "./components/section-divider";
import { CaseStudyPage } from "./components/case-study-page";
import { caseStudiesData } from "./data/case-studies";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [currentView, setCurrentView] = useState<'homepage' | 'case-study'>('homepage');
  const [currentCaseStudyId, setCurrentCaseStudyId] = useState<string | null>(null);

  useEffect(() => {
    // Performance detection
    const detectPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = navigator.hardwareConcurrency < 4;
      const isSlowConnection = navigator.connection && navigator.connection.effectiveType && 
        ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType);
      
      setIsLowPerformance(isMobile || isLowEnd || isSlowConnection);
    };

    detectPerformance();
    window.addEventListener('resize', detectPerformance);

    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['work', 'about', 'contact'];
          const scrollY = window.scrollY;
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollY >= offsetTop - 200 && scrollY < offsetTop + offsetHeight - 200) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectPerformance);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToWork = () => scrollToSection('work');

  const navigateToCaseStudy = (caseStudyId: string) => {
    setCurrentCaseStudyId(caseStudyId);
    setCurrentView('case-study');
    window.scrollTo(0, 0);
  };

  const navigateToHomepage = () => {
    setCurrentView('homepage');
    setCurrentCaseStudyId(null);
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    setCurrentView('homepage');
    setTimeout(() => scrollToSection('contact'), 100);
  };

  const navigateToArchive = () => {
    window.open('https://editedbymarko.carrd.co/', '_blank', 'noopener,noreferrer');
  };

  const currentCaseStudy = currentCaseStudyId 
    ? caseStudiesData.find(cs => cs.id === currentCaseStudyId)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Animated background - simple gradient with subtle animation */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
          zIndex: 0,
        }}
      />
      
      {!isLowPerformance && <CursorEffect />}
      
      {currentView === 'homepage' ? (
        <div className="relative" style={{ zIndex: 10 }}>
          <Navigation activeSection={activeSection} />
          <SectionDivider />
          <HeroSection onScrollToWork={scrollToWork} />
          <SectionDivider />
          <PortfolioShowcase onCaseStudyClick={navigateToCaseStudy} onArchiveClick={navigateToArchive} />
          <SectionDivider />
          <TestimonialsSection />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <ContactSection />
          <Footer />
        </div>
      ) : currentCaseStudy ? (
        <CaseStudyPage 
          caseStudy={currentCaseStudy} 
          onBack={navigateToHomepage}
          onContactClick={navigateToContact}
        />
      ) : (
        <div className="min-h-screen flex items-center justify-center text-white" style={{ zIndex: 10, position: 'relative' }}>
          <div className="text-center">
            <h1 className="text-2xl mb-4">Case study not found</h1>
            <p className="mb-4">Looking for case study ID: {currentCaseStudyId}</p>
            <Button onClick={navigateToHomepage}>Back to Homepage</Button>
          </div>
        </div>
      )}
      
      <Toaster />
    </div>
  );
}