import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Spin animation - triggers every 3 seconds
    const triggerSpin = () => {
      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 800); // Animation duration
    };

    // Initial spin after 1 second
    const initialTimer = setTimeout(triggerSpin, 1000);

    // Then every 3 seconds
    const spinInterval = setInterval(triggerSpin, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initialTimer);
      clearInterval(spinInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-3 text-xl font-medium text-white hover:text-primary transition-colors group"
          >
            <img 
              src="/images/cameraLogo.jpg"
              alt="Camera Aperture Logo" 
              className={`w-8 h-8 opacity-90 group-hover:opacity-100 transition-all duration-300 ${
                isSpinning ? 'animate-spin-smooth' : ''
              }`}
              style={{ 
                transformOrigin: 'center',
                willChange: 'transform'
              }}
            />
            <span>
              <span style={{ fontFamily: 'Times New Roman, serif' }}>frame</span>
              <span style={{ fontFamily: 'Europa Grotesk, Arial, sans-serif', fontWeight: 'bold' }}>Made</span>
            </span>
          </button>

          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm uppercase tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
