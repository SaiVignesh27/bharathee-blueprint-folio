import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth, fadeUp, viewportReveal } from "@/lib/motion";

const projects = [
  {
    title: "Duplicate File Detection System",
    period: "2018–2022",
    goal: "Identify and eliminate redundant files to optimize storage efficiency.",
    execution: "Implemented advanced file comparison techniques to enhance detection accuracy.",
  },
  {
    title: "Image Resolution Enhancement",
    period: "",
    goal: "Improving image clarity and visual quality for better user performance.",
    execution: "Focused on optimizing final image output for usability across high-performance platforms.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-alt py-24" id="projects">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Projects" />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.65, ease: easeSmooth, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: easeSmooth } }}
              className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
                <FolderOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-foreground">{project.title}</h3>
              {project.period ? <p className="mb-4 text-xs text-muted-foreground">{project.period}</p> : null}
              <div className="mt-4 space-y-3">
                <div>
                  <p className="mb-1 text-sm font-semibold text-accent">The Goal</p>
                  <p className="text-sm text-muted-foreground">{project.goal}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-primary">The Execution</p>
                  <p className="text-sm text-muted-foreground">{project.execution}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="pointer-events-none mx-auto mt-16 h-px max-w-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
