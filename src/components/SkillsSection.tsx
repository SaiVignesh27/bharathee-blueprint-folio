import { motion } from "framer-motion";
import { Briefcase, Wrench } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewportReveal } from "@/lib/motion";

const businessSkills = [
  "Requirement Gathering & Analysis",
  "UI/UX Design & Wireframing",
  "Manual Testing & Bug Tracking",
  "Stakeholder Communication",
  "Agile & Sprint Planning",
];

const tools = [
  { category: "Design", items: "Figma, Builder.io" },
  { category: "Development Support", items: "Agile Product Development" },
];

const SkillsSection = () => {
  return (
    <section className="section-alt py-24" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeading title="Core Competencies" />

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideInLeft}
            className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Business & Functional</h3>
            </div>
            <motion.ul
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportReveal}
            >
              {businessSkills.map((skill) => (
                <motion.li key={skill} variants={staggerItem} className="flex items-center gap-3">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideInRight}
            className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                <Wrench className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Tools & Technologies</h3>
            </div>
            <motion.div
              className="space-y-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportReveal}
            >
              {tools.map((tool) => (
                <motion.div key={tool.category} variants={staggerItem}>
                  <p className="mb-1 text-sm font-semibold text-primary">{tool.category}</p>
                  <p className="text-muted-foreground">{tool.items}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="pointer-events-none mx-auto mt-16 h-px max-w-lg bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default SkillsSection;
