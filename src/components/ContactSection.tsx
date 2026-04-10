import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth, staggerContainer, staggerItem, viewportReveal } from "@/lib/motion";

const ContactSection = () => {
  return (
    <section className="section-alt py-24" id="contact">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get in Touch" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="mx-auto flex max-w-xl flex-col items-center gap-5"
        >
          <motion.a
            variants={staggerItem}
            href="mailto:gorantlakrishna000@gmail.com"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            gorantlakrishna000@gmail.com
          </motion.a>
          <motion.a
            variants={staggerItem}
            href="tel:+919110595233"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            +91-9110595233
          </motion.a>
          <motion.a
            variants={staggerItem}
            href="https://www.linkedin.com/in/gorantla-krishna/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink className="h-5 w-5 shrink-0 text-primary" />
            LinkedIn Profile
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.55, ease: easeSmooth, delay: 0.15 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          Let's build something efficient together.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
