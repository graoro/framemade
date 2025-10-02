import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbulb, Edit, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Concept & Script",
    description: "Aligning vision and understanding your story",
  },
  {
    icon: Edit,
    title: "Editing & Effects",
    description: "Crafting engaging visuals and seamless flow",
  },
  {
    icon: CheckCircle,
    title: "Delivery & Revisions",
    description:
      "Ensuring quality and your complete satisfaction",
  },
];

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-32 px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={titleRef}
          className={`transition-all duration-600 ease-out ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-white">
            About
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`max-w-2xl mx-auto space-y-8 text-xl md:text-2xl leading-relaxed transition-all duration-600 ease-out ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="text-gray-300">
            At <span style={{ fontFamily: 'Times New Roman, serif' }}>frame</span><span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>MADE</span>, we believe every brand has a story
            worth telling and telling it right makes all the
            difference. We are a modern video editing and
            marketing agency built to help creators, businesses,
            and brands cut through the noise with content that
            actually connects. From high-impact edits to
            complete marketing strategies, our mission is
            simple: turning your ideas into visuals that drive
            growth. We combine sharp storytelling, engaging
            visuals, and data-driven marketing to make sure your
            brand isn't just seen — it's remembered.
          </p>

          <p className="text-gray-400">
            With years of experience in post-production, We
            bring technical expertise and creative vision to
            every project, ensuring your content stands out in
            today's competitive landscape.
          </p>
        </div>
      </div>
    </section>
  );
}