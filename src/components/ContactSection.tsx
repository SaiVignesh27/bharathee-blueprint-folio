import { motion } from "framer-motion";
import { Mail, Phone, LinkedinIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 section-alt" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get in Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex flex-col gap-5 items-center">
            <a
              href="mailto:gorantlakrishna000@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              gorantlakrishna000@gmail.com
            </a>
            <a
              href="tel:+919110595233"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              +91-9110595233
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              LinkedIn Profile
            </a>
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm">
            Let's build something efficient together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
