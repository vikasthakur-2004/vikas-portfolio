function Projects() {
  const projects = [
  {
    title: "DevQuest 🚧",
    description:
      "Gamified learning platform with XP, levels, quests, achievements, interview preparation, and AI-powered guidance.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
  },

  {
    title: "InterviewPilot AI 📌",
    description:
      "AI-powered mock interview platform providing feedback, scoring, and personalized improvement suggestions.",
    tech: ["React", "OpenAI", "Node.js"],
  },

  {
    title: "FounderLens AI 📌",
    description:
      "AI startup validation platform helping founders evaluate ideas, competition, and market opportunities.",
    tech: ["React", "AI", "MongoDB"],
  },
];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-2xl p-6 hover:-translate-y-2 hover:border-white transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

            <p className="text-gray-400 mb-6">{project.description}</p>

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
              <button className="px-4 py-2 bg-white text-black rounded-lg">
                Coming Soon
              </button>

              <button className="px-4 py-2 border border-gray-700 rounded-lg">
                Private
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;