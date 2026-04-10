import { motion } from "framer-motion";
import { Briefcase, Wrench } from "lucide-react";

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
    <section className="py-24 section-alt" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Core Competencies</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Business & Functional</h3>
            </div>
            <ul className="space-y-3">
              {businessSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Tools & Technologies</h3>
            </div>
            <div className="space-y-5">
              {tools.map((tool, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-primary mb-1">{tool.category}</p>
                  <p className="text-muted-foreground">{tool.items}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
