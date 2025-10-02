import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Testimonial {
  id: string;
  quote: string;
  client: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "frameMade transformed our raw footage into something truly engaging. Their attention to pacing and storytelling is incredible.",
    client: "Julian Dorey",
  },
  {
    id: "2",
    quote:
      "Working with frameMade was seamless. They understood our vision immediately and delivered beyond expectations.",
    client: "Jack Hampton",
  },
  {
    id: "3",
    quote:
      "The quality and turnaround time exceeded our expectations. frameMade's editing style perfectly matched our brand.",
    client: "Nutralife",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-600 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <blockquote className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
      <p className="text-sm uppercase tracking-wide text-gray-500">
        {testimonial.client}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}