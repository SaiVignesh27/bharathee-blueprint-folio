import { motion } from "framer-motion";
import { MapPin, Download, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
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
              href="#contact"
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
