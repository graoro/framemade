import { useState } from "react";
import { ArrowLeft, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { archiveData, ArchiveItem } from "../data/archive-data";

interface ArchivePageProps {
  onBack: () => void;
}

function ArchiveCard({ item, index }: { item: ArchiveItem; index: number }) {
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
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="group">
        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-video mb-4 rounded-lg transition-all duration-500 group-hover:shadow-2xl">
          <ImageWithFallback
            src={item.thumbnail}
            alt={item.client}
            className="w-full h-full object-cover transition-all duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-wide">
              {item.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-white text-xs">
              {item.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl mb-2 text-white group-hover:text-primary transition-all duration-300">
            {item.client}
          </h3>
          <p className="text-gray-400 text-sm mb-3 leading-relaxed">
            {item.description}
          </p>
          
          {/* Platforms */}
          <div className="flex flex-wrap gap-2">
            {item.platforms.map((platform, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArchivePage({ onBack }: ArchivePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: filterRef, isVisible: filterVisible } = useScrollAnimation({ threshold: 0.1 });

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(archiveData.map(item => item.category)))];

  // Filter items
  const filteredItems = selectedCategory === "All" 
    ? archiveData 
    : archiveData.filter(item => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen" style={{ zIndex: 10, position: 'relative' }}>
      {/* Navigation Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          onClick={onBack}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm border-gray-800 text-white hover:bg-primary hover:text-black transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Homepage
        </Button>
      </div>

      {/* Archive Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-600 ease-out ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
              <span style={{ fontFamily: 'Europa Grotesk, Arial, sans-serif', fontWeight: 'bold' }}>
                Archive
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of previous projects and collaborations spanning various industries and content formats.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            ref={filterRef}
            className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-600 ease-out ${
              filterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 text-gray-400 mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-black"
                    : "bg-transparent border-gray-800 text-white hover:bg-primary hover:text-black"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Archive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ArchiveCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
