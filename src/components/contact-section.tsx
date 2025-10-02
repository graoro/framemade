import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: socialRef, isVisible: socialVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-8 transition-all duration-700 ease-out ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Let&apos;s work together
          </h2>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className={`text-center mb-20 transition-all duration-700 ease-out delay-100 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-gray-400 leading-relaxed">
            Ready to bring your vision to life? Let&apos;s get in touch.
          </p>
        </div>

        {/* Photo and About Text */}
        <div
          ref={contentRef}
          className={`transition-all duration-700 ease-out delay-200 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* Circular Photo */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/markoPhoto.jpg"
                alt="Portrait of Marko, founder of frameMade"
                className="w-80 h-80 rounded-full object-cover transition-transform duration-700 ease-out hover:scale-110 grayscale hover:grayscale-0 shadow-2xl"
              />
            </div>

            {/* About Text */}
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-xl md:text-2xl">
                I&apos;m Marko. I founded{" "}
                <span className="font-serif">frame</span>
                <span className="font-bold">Made</span> with one simple mission:
                to help businesses grow.
              </p>
              <p className="text-xl md:text-2xl">
                After 3 years in the editing and marketing fields, I saw a major
                gap between creating beautiful content and making it profitable.
                My focus is on bridging that gap, using my expertise to build
                strategies that directly generate sales and revenue for my clients.
              </p>
              <p className="text-xl md:text-2xl">
                Let&apos;s create something that not only looks great but also delivers results.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Links */}
        <div
          ref={socialRef}
          className={`mt-20 pt-16 border-t border-gray-800 transition-all duration-700 ease-out delay-300 ${
            socialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-gray-400">
            <a
              href="mailto:mgraoroski13@gmail.com"
              aria-label="Email Marko"
              className="text-xl hover:text-primary transition-colors duration-300"
            >
              mgraoroski13@gmail.com
            </a>
            <span className="hidden md:inline text-gray-600">•</span>
            <a
              href="https://x.com/markomp4__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marko on X (Twitter)"
              className="text-xl hover:text-primary transition-colors duration-300"
            >
              @markomp4__
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
