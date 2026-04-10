import { type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Download, MessageCircle } from "lucide-react";

const RESUME_URL = "/krishna_resume.pdf";
const RESUME_FILENAME = "krishna_resume.pdf";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const handleResumeClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Open while still in the user-gesture turn (popup blockers allow this)
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");

    try {
      const res = await fetch(RESUME_URL);
      if (!res.ok) throw new Error("Failed to load resume");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = RESUME_FILENAME;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Preview tab already opened above; nothing else to do
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute left-10 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        animate={reduceMotion ? undefined : { y: [0, -18, 0], x: [0, 8, 0] }}
        transition={reduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        animate={reduceMotion ? undefined : { y: [0, 14, 0], x: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mx-auto mb-8"
          >
            <span className="text-3xl font-bold text-primary">BK</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
            Gorantla Bharathee Krishna
          </h1>

          <p className="text-lg md:text-xl text-primary font-semibold mb-6">
            Business Analyst · UI/UX Enthusiast · Agile Advocate
          </p>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Bridging the gap between complex business needs and functional, user-centric solutions.
            With 1 year of experience at the intersection of requirement gathering and product design,
            I turn ideas into high-quality digital realities.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Hyderabad, Telangana</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-accent/25"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Connect
            </a>
            <a
              href={RESUME_URL}
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
