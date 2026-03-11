import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import {
  Figma,
  PenTool,
  Layout,
  Monitor,
  Smartphone,
  Search,
  Code,
  Layers,
} from "lucide-react";

const designSkills = [
  { name: "UI Design", icon: Layout },
  { name: "UX Design", icon: Search },
  { name: "Wireframing", icon: PenTool },
  { name: "Prototyping", icon: Smartphone },
  { name: "User Research", icon: Search },
  { name: "Design Systems", icon: Layers },
  { name: "Responsive Design", icon: Monitor },
  { name: "Interaction Design", icon: Code },
];

const tools = [
  { name: "Figma", proficiency: 95 },
  { name: "Adobe XD", proficiency: 80 },
  { name: "Photoshop", proficiency: 85 },
  { name: "Illustrator", proficiency: 75 },
  { name: "After Effects", proficiency: 60 },
  { name: "HTML/CSS", proficiency: 70 },
  { name: "AI Tools", proficiency: 80 },
];

const experience = [
  {
    role: "Freelance UI/UX Designer",
    company: "Self-Employed",
    period: "2025 - Present",
    description:
      "Delivering end-to-end design solutions for startups and small businesses. Specializing in mobile app design and brand identity systems.",
  },
  {
    role: "UI/UX Intern",
    company: "DEPI",
    period: "Nov 2025 - Present",
    description:
      "Collaborating with senior designers on client projects. Contributing to product designs, conducting user research, and creating high-fidelity prototypes.",
  },
  {
    role: "UX Design Certificate",
    company: "Google / Coursera",
    period: "2025",
    description:
      "Completed Google's professional UX Design Certificate. Mastered the full design thinking process from research to final deliverables.",
  },
];

export function Skills() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-glass-divider to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            Skills & Experience
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight max-w-2xl">
            The tools and skills{" "}
            <span className="text-muted-foreground">behind the craft.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Skills + Tools */}
          <div className="space-y-12">
            {/* Design Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[0.85rem] text-foreground uppercase tracking-[0.15em] mb-6">
                Design Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {designSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-glass-border bg-glass-bg hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300 group"
                  >
                    <skill.icon
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                    <span className="text-[0.85rem] text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Proficiency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-[0.85rem] text-foreground uppercase tracking-[0.15em] mb-6">
                Tools & Software
              </h3>
              <div className="space-y-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[0.85rem] text-foreground">
                        {tool.name}
                      </span>
                      <span className="text-[0.75rem] text-muted-foreground">
                        {tool.proficiency}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-progress-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${tool.proficiency}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[0.85rem] text-foreground uppercase tracking-[0.15em] mb-6">
              Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-glass-divider" />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="relative pl-8 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors -translate-x-[3.5px]" />

                    <div className="p-5 rounded-xl border border-glass-border bg-glass-bg hover:border-glass-border-hover transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="text-[1rem] text-foreground">
                          {exp.role}
                        </h4>
                        <span className="text-[0.75rem] text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[0.85rem] text-primary/80 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}