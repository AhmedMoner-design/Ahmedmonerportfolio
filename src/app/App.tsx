import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter'] scroll-smooth transition-colors duration-300">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#141414",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#F5F5F5",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}