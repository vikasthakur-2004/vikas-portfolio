function Projects() {
  const projects = [
    {
      title: "Gamified Learning Platform",
      description:
        "A learning platform that turns education into an engaging game with XP, levels, achievements, quests, and interview preparation challenges.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
    },
    {
      title: "Zerodha Clone",
      description:
        "A modern stock trading platform inspired by Zerodha with portfolio tracking, watchlists, and market insights.",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      title: "Zoom Clone",
      description:
        "A real-time video conferencing platform with meeting rooms, screen sharing, and chat features.",
      tech: ["React", "WebRTC", "Node.js"],
    },
    {
      title: "GitHub Clone",
      description:
        "A code hosting and collaboration platform inspired by GitHub with repositories, commits, and version control workflows.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "LinkedIn Clone",
      description:
        "A professional networking platform with profiles, posts, connections, and activity feeds.",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      title: "ChatGPT Clone",
      description:
        "An AI-powered conversational assistant with chat history, modern UI, and AI integrations.",
      tech: ["React", "OpenAI API", "Node.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
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
              <button className="px-4 py-2 bg-white text-black rounded-lg">
                Live Demo
              </button>

              <button className="px-4 py-2 border border-gray-700 rounded-lg">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;