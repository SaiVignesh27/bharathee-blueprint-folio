import { motion } from "framer-motion";

const experiences = [
  {
    title: "Business Analyst",
    company: "Nextenti",
    period: "July 2025 – Present",
    points: [
      { label: "Requirement Architecture", desc: "Gather and document business and functional requirements to anchor product development." },
      { label: "Design Leadership", desc: "Create high-fidelity wireframes and user flows using Figma to ensure developer clarity." },
      { label: "Agile Integration", desc: "Participate in daily stand-ups, sprint planning, and reviews to maintain momentum." },
      { label: "Strategic Bridge", desc: "Act as the primary communication link between technical teams and business stakeholders." },
    ],
  },
  {
    title: "Manual Tester",
    company: "Nextenti",
    period: "March 2025 – June 2025",
    points: [
      { label: "Quality Assurance", desc: "Conducted end-to-end manual testing for web applications, focusing on functionality and usability." },
      { label: "Bug Management", desc: "Identified and tracked critical bugs to improve overall product stability." },
      { label: "Design Validation", desc: "Ensured UI/UX components remained strictly consistent with initial design requirements." },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Professional Journey</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <p className="text-primary font-semibold">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <ul className="space-y-3">
                {exp.points.map((pt, i) => (
                  <li key={i}>
                    <span className="font-semibold text-foreground">{pt.label}: </span>
                    <span className="text-muted-foreground">{pt.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
