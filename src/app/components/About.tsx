import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Palette, Users, Lightbulb } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "100%", label: "Passion Driven" },
];

const values = [
  {
    icon: Palette,
    title: "Design-First Thinking",
    description:
      "Every pixel serves a purpose. I prioritize clean visual hierarchy and intentional design decisions.",
  },
  {
    icon: Users,
    title: "User-Centered Approach",
    description:
      "Research-driven design that puts real users at the center. No assumptions, only validated solutions.",
  },
  {
    icon: Lightbulb,
    title: "Fresh Perspective",
    description:
      "Bringing modern design trends and innovative ideas to every project without the baggage of outdated patterns.",
  },
];

export function About() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            About Me
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight max-w-2xl">
            Designing with purpose,{" "}
            <span className="text-muted-foreground">
              crafting with precision.
            </span>
          </h2>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-[1rem]">
              I'm a UI/UX designer passionate about solving complex problems
              through clean, intuitive design. With a sharp eye for detail and a
              deep understanding of user behavior, I transform ideas into
              polished digital products that people genuinely enjoy using.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[1rem]">
              My approach is research-driven and user-centered. I believe great
              design is invisible — it just feels right. Whether it's a mobile
              app, a SaaS dashboard, or a complete design system, I bring the
              same level of care and craft to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[1rem]">
              Currently focused on building my portfolio and taking on
              meaningful freelance projects where I can make a real impact on
              how people interact with technology.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 flex md:flex-col justify-between md:justify-start gap-6 md:gap-8 md:pl-8 md:border-l border-glass-divider"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-['Space_Grotesk'] text-[clamp(1.75rem,3vw,2.5rem)] text-primary tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[0.8rem] text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values / Approach cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="p-6 rounded-2xl border border-glass-border bg-glass-bg hover:bg-glass-bg-hover hover:border-glass-border-hover transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-[1rem] text-foreground mb-2">{item.title}</h3>
              <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}