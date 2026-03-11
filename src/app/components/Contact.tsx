import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-moner1", icon: "in" },
  { name: "Behance", url: "https://www.behance.net/ahmed_moner1", icon: "Be" },
];

export function Contact() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-glass-divider to-transparent" />

      <div className="max-w-2xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-[0.8rem] text-primary uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h2 className="font-['Space_Grotesk'] text-[clamp(1.75rem,4vw,2.75rem)] text-foreground tracking-tight leading-tight max-w-2xl mx-auto">
            Let's create something{" "}
            <span className="text-primary">great together.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-[0.95rem]">
            Whether you're looking to hire a dedicated designer or need help
            with a project, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-glass-border bg-glass-bg">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[0.8rem] text-muted-foreground mb-0.5">
                  Email
                </p>
                <p className="text-[0.9rem] text-foreground">
                  ahmedmonierr1@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl border border-glass-border bg-glass-bg">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[0.8rem] text-muted-foreground mb-0.5">
                  Location
                </p>
                <p className="text-[0.9rem] text-foreground">
                  Available Worldwide (Remote)
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-[0.8rem] text-muted-foreground mb-4">
              Find me on
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-glass-border bg-glass-bg hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-200"
                >
                  <span className="text-[0.8rem] text-muted-foreground group-hover:text-primary transition-colors">
                    {social.icon}
                  </span>
                  <span className="text-[0.8rem] text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">
                    {social.name}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="text-muted-foreground/50 group-hover:text-primary transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Download CV */}
          <div className="p-5 rounded-xl border border-primary/10 bg-primary/[0.03]">
            <p className="text-[0.9rem] text-foreground mb-1">
              Want a quick overview?
            </p>
            <p className="text-[0.8rem] text-muted-foreground mb-4">
              See my resume for a summary of my skills and experience.
            </p>
            <a
              href="https://docs.google.com/document/d/1O-sAu_6YLGX4bqXwqaxY86WtPRF7GKNQ/edit?usp=sharing&ouid=102583379876820286935&rtpof=true&sd=true"
              target="_blank"
              className="inline-flex items-center gap-2 text-[0.85rem] text-primary hover:text-primary/80 transition-colors"
            >
              Resume
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}