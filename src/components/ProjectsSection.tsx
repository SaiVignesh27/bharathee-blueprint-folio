import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

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
    <section className="py-24 section-alt" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <FolderOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
              {project.period && <p className="text-xs text-muted-foreground mb-4">{project.period}</p>}
              <div className="space-y-3 mt-4">
                <div>
                  <p className="text-sm font-semibold text-accent mb-1">The Goal</p>
                  <p className="text-sm text-muted-foreground">{project.goal}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">The Execution</p>
                  <p className="text-sm text-muted-foreground">{project.execution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
