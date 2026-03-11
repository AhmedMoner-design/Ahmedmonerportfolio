import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Category = "All" | "UI Design" | "UX Design" | "Web Design" | "Mobile";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category[];
  image: string;
  tags: string[];
  year: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FinFlow Dashboard",
    description:
      "Redesigned a financial analytics dashboard that improved user engagement by 40%. Focused on clear data visualization and intuitive navigation patterns.",
    category: ["UI Design", "UX Design"],
    image:
      "https://images.unsplash.com/photo-1649442746245-f51f4b76963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwcmVkZXNpZ24lMjBkYXNoYm9hcmQlMjBwcm9qZWN0fGVufDF8fHx8MTc3MTYwMTg1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Dashboard", "Figma", "Data Viz"],
    year: "2025",
  },
  {
    id: 2,
    title: "ShopEase Mobile App",
    description:
      "End-to-end e-commerce app design focused on a seamless checkout experience. Reduced cart abandonment through simplified user flows.",
    category: ["UI Design", "UX Design", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1648803336451-d882ce46e68c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhcHAlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzcxNTE0Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile", "E-commerce", "Prototype"],
    year: "2025",
  },
  {
    id: 3,
    title: "FitTrack Health App",
    description:
      "Health & fitness tracking app with intuitive data visualization. Designed for accessibility-first with clean, minimal interface patterns.",
    category: ["UI Design", "UX Design", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaGVhbHRoJTIwYXBwJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3MTYwMTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Health", "Mobile", "Accessibility"],
    year: "2024",
  },
  {
    id: 4,
    title: "TaskFlow SaaS Platform",
    description:
      "High-converting landing page and product design for a B2B project management tool. Increased sign-up conversion by 25%.",
    category: ["UI Design", "UX Design", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1748801583998-c693323e6305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBVSSUyMGRlc2lnbiUyMHdvcmtzcGFjZSUyMG1vY2t1cHxlbnwxfHx8fDE3NzE2MDE4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["SaaS", "Landing Page", "Web"],
    year: "2025",
  },
  {
    id: 5,
    title: "FoodieGo Ordering App",
    description:
      "Restaurant food ordering app with a focus on mouthwatering visuals and a frictionless ordering flow. Designed menu browsing, customization, and real-time order tracking.",
    category: ["UI Design", "UX Design", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG9yZGVyaW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTYyMTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Food & Drink", "Mobile", "UX Research"],
    year: "2025",
  },
  {
    id: 6,
    title: "HomeNest Real Estate",
    description:
      "Property listing platform with advanced search filters, interactive maps, and virtual tour integration. Simplified the home-buying journey for first-time buyers.",
    category: ["UI Design", "UX Design", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1652878530627-cc6f063e3947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBsaXN0aW5nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzE2MjEyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Real Estate", "Web", "Maps"],
    year: "2024",
  },
  {
    id: 7,
    title: "Wanderly Travel App",
    description:
      "Travel planning and booking app that curates personalized itineraries. Focused on a delightful discovery experience with smart recommendation flows.",
    category: ["UI Design", "UX Design", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1738762740722-b4209280df7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwdmFjYXRpb24lMjBwbGFubmluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzcxNjIxMjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Travel", "Mobile", "Personalization"],
    year: "2025",
  },
  {
    id: 8,
    title: "SoundWave Music Platform",
    description:
      "Music streaming interface with an immersive dark UI. Designed playlist management, artist profiles, and a mood-based discovery feature.",
    category: ["UI Design", "UX Design"],
    image:
      "https://images.unsplash.com/photo-1511138743687-5c14e8cfcf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGFwcCUyMGRlc2lnbiUyMGRhcmt8ZW58MXx8fHwxNzcxNjIxMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Music", "Dark UI", "Streaming"],
    year: "2024",
  },
  {
    id: 9,
    title: "LearnUp EdTech Platform",
    description:
      "Online learning platform with course dashboards, progress tracking, and interactive lesson modules. Designed for engagement and knowledge retention.",
    category: ["UI Design", "UX Design", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MTUzNTgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["EdTech", "Web", "Dashboard"],
    year: "2025",
  },
  {
    id: 10,
    title: "Applify – Job Application Tracker",
    description:
      "A web app to streamline the job hunt. Designed an intuitive tracker with pipeline views, status updates, and analytics to help users stay organized throughout their application process.",
    category: ["UI Design", "UX Design", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBhcHBsaWNhdGlvbiUyMHRyYWNrZXIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNjIxNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web App", "Dashboard", "Productivity"],
    year: "2025",
    link: "https://www.behance.net/gallery/235828963/Applify-Job-Application-Tracker-Web-App",
  },
];

const categories: Category[] = ["All", "UI Design", "UX Design", "Web Design", "Mobile"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { ref, isInView } = useInView(0.1);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            Selected Work
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight max-w-2xl">
            Projects that{" "}
            <span className="text-muted-foreground">
              showcase my craft.
            </span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[0.85rem] transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-glass-border text-muted-foreground hover:border-glass-border-hover hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.a
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-glass-border bg-glass-bg overflow-hidden hover:border-glass-border-hover transition-all duration-300 cursor-pointer block"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gradient-overlay via-transparent to-transparent opacity-60" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <ArrowUpRight size={20} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[1.125rem] text-foreground font-['Space_Grotesk']">
                      {project.title}
                    </h3>
                    <span className="text-[0.75rem] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-[0.85rem] text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[0.7rem] border border-glass-border text-muted-foreground bg-glass-bg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}