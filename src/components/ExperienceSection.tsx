import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth, staggerContainer, staggerItem, viewportReveal } from "@/lib/motion";

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
        <SectionHeading title="Professional Journey" />

        <div className="mx-auto max-w-3xl space-y-12">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.65, ease: easeSmooth, delay: idx * 0.12 }}
              className="relative border-l-2 border-primary/30 pl-8"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <p className="font-semibold text-primary">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <motion.ul
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportReveal}
              >
                {exp.points.map((pt, i) => (
                  <motion.li key={i} variants={staggerItem}>
                    <span className="font-semibold text-foreground">{pt.label}: </span>
                    <span className="text-muted-foreground">{pt.desc}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
