import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth, viewportReveal } from "@/lib/motion";

const EducationSection = () => {
  return (
    <section className="py-24" id="education">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.65, ease: easeSmooth }}
          whileHover={{ y: -4, transition: { duration: 0.22 } }}
          className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
            <GraduationCap className="h-7 w-7 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-foreground">B.Tech in Computer Science and Engineering</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
