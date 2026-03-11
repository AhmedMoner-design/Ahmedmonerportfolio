import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroPhoto from "figma:asset/d3bb474b9b5937c0f2348684af028d314ecf37f4.png";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-pattern) 1px, transparent 1px), linear-gradient(90deg, var(--grid-pattern) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-[0.8rem] text-primary">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-['Space_Grotesk'] text-[clamp(2.5rem,8vw,5.5rem)] tracking-tight text-foreground leading-[1.05] mb-4"
          >
            Ahmed{" "}
            <span className="text-primary">Moner</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[clamp(1rem,2.5vw,1.375rem)] text-muted-foreground mb-6 tracking-wide uppercase"
          >
            UI/UX Designer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl mx-auto lg:mx-0 text-[clamp(0.95rem,1.8vw,1.125rem)] text-muted-foreground/80 leading-relaxed mb-12"
          >
            I craft digital experiences that users love. Blending aesthetics with
            usability to create interfaces that don't just look beautiful —{" "}
            <span className="text-foreground">they work beautifully.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => handleScroll("#projects")}
              className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-[0.95rem] hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              View My Work
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="px-8 py-3.5 border border-glass-border text-foreground rounded-full text-[0.95rem] hover:border-glass-border-hover hover:bg-glass-bg transition-all duration-200"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex-shrink-0"
        >
          {/* Animated glow ring */}
          <motion.div
            className="absolute -inset-3 rounded-full opacity-60 blur-xl"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-primary), transparent, var(--color-primary), transparent, var(--color-primary))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Outer ring */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-br from-primary/60 via-primary/20 to-primary/60">
            {/* Inner container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-background p-[3px]">
              <motion.img
                src={heroPhoto}
                alt="Ahmed Moner"
                className="w-full h-full rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Floating decorative dots */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/80"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-primary/50"
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 -right-5 w-2 h-2 rounded-full bg-primary/40"
            animate={{ x: [-2, 4, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => handleScroll("#about")}
        >
          <ArrowDown size={20} className="text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}