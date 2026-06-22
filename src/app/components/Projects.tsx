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

import projectsData from "../../data/projects.json";
const projects: Project[] = projectsData;
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