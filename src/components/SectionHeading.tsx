import { motion } from "framer-motion";
import { easeSmooth, fadeUp, viewportReveal } from "@/lib/motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-16 text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportReveal} variants={fadeUp}>
        <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
        {subtitle ? <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p> : null}
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportReveal}
        transition={{ duration: 0.65, ease: easeSmooth }}
        className="mx-auto mt-5 h-1 w-16 origin-center rounded-full bg-primary"
      />
    </div>
  );
};

export default SectionHeading;
