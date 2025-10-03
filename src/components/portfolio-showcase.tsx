import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  id: string;
  title: string;
  client: string;
  thumbnail: string;
  websiteUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Julian Dorey",
    client: "Julian Dorey",
    thumbnail:
      "https://thedigestonline.com/wp-content/uploads/2024/09/Screenshot-2024-01-04-at-5.36.23%E2%80%AFPM-e1706995337481.jpg",
    websiteUrl: "https://www.youtube.com/@JulianDorey",
  },
  {
    id: "2",
    title: "Jack Hampton",
    client: "Jack Hampton",
    thumbnail:
      "public/images/jack thumb.jpg",
    websiteUrl: "https://www.youtube.com/@JackHampton",
  },
  {
    id: "3",
    title: "Jordan Lee",
    client: "Jordan Lee",
    thumbnail:
      "https://pbs.twimg.com/profile_images/1847177758197141504/NDAo1C91_400x400.jpg",
    websiteUrl: "https://editedbymarko.carrd.co/",
  },
  {
    id: "4",
    title: "Omega Luke",
    client: "Omega Luke",
    thumbnail:
      "https://fenregistrophies.co.uk/wp-content/uploads/2025/03/Untitled-design-2025-03-05T122856.308.png",
    websiteUrl: "https://www.youtube.com/@OmegaLuke",
  },
  {
    id: "5",
    title: "Nutralife",
    client: "Nutralife",
    thumbnail:
      "https://www.thedailyworld.com/wp-content/uploads/2025/02/38600125_web1_M1-ADW250207-Nutralife-Gummies-Teaser.jpg",
    websiteUrl: "https://editedbymarko.carrd.co/",
  },
  {
    id: "6",
    title: "Sparrow Claims",
    client: "Sparrow Claims",
    thumbnail:
      "https://exq58mhsbtg7hjkh.public.blob.vercel-storage.com/logo-with-gradient-3dadm0GkpXOTjg48Z0awd3qok2NLoB.png",
    websiteUrl: "https://editedbymarko.carrd.co/",
  },
];

function ProjectCard({
  project,
  index,
  onCaseStudyClick,
}: {
  project: Project;
  index: number;
  onCaseStudyClick: (caseStudyId: string) => void;
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => onCaseStudyClick(project.id)}
        className="group block w-full text-left transition-transform duration-300 hover:translate-y-[-8px]"
      >
        {/* Project thumbnail with enhanced hover animations */}
        <div className="relative overflow-hidden aspect-video mb-6 rounded-lg transition-all duration-500 group-hover:shadow-2xl">
          <ImageWithFallback
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500 ease-out grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* Liquid Glass View Casestudy Button Overlay - Always Visible in Bottom Third */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 transition-all duration-300">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
              View Casestudy ↗
            </div>
          </div>
        </div>

        {/* Project title with smooth color transition */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-all duration-300">
            {project.title}
          </h3>
        </div>
      </button>
    </div>
  );
}

interface PortfolioShowcaseProps {
  onCaseStudyClick: (caseStudyId: string) => void;
  onArchiveClick: () => void;
}

export function PortfolioShowcase({
  onCaseStudyClick,
  onArchiveClick,
}: PortfolioShowcaseProps) {
  const { ref: buttonsRef, isVisible: buttonsVisible } =
    useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="work" className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-muted-foreground tracking-wide">
            ↓ Explore a Few Brands We've Worked With ↓
          </p>
        </div>

        {/* Clean grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onCaseStudyClick={onCaseStudyClick}
            />
          ))}
        </div>

        {/* Buttons Section */}
        <div
          ref={buttonsRef}
          className={`text-center mt-20 transition-all duration-600 ease-out ${
            buttonsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={onArchiveClick}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-black px-12 py-4 text-lg uppercase tracking-wide transition-all duration-300"
          >
            View Archive ↗
          </Button>
        </div>
      </div>
    </section>
  );
}
