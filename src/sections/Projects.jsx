import { motion } from "framer-motion";
function Projects() {
  const projects = [
    {
      title: "DevQuest",
      status: "In Development 🚧",
      description:
        "Gamified learning platform with XP, levels, quests, achievements, interview preparation, and AI-powered guidance.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
    },

    {
      title: "InterviewPilot AI",
      status: "Planned 📌",
      description:
        "AI-powered mock interview platform providing feedback, scoring, and personalized improvement suggestions.",
      tech: ["React", "OpenAI", "Node.js"],
    },

    {
      title: "FounderLens AI",
      status: "Planned 📌",
      description:
        "AI startup validation platform helping founders evaluate ideas, competition, and market opportunities.",
      tech: ["React", "AI", "MongoDB"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        Featured Projects
      </h2>

      <p className="text-gray-400 text-center mb-12">
        Current projects under development and future product ideas.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
  <motion.div
    key={project.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border border-gray-800 rounded-2xl p-6
    hover:border-purple-500
    hover:-translate-y-2
    hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
    transition-all duration-300"
  >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <span className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300">
                {project.status}
              </span>
            </div>

            <p className="text-gray-400 mb-6 leading-7">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 border border-gray-700 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="px-4 py-2 bg-white text-black rounded-lg font-medium">
                Coming Soon
              </button>

              <button className="px-4 py-2 border border-gray-700 rounded-lg hover:border-purple-500 transition">
                Private
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;