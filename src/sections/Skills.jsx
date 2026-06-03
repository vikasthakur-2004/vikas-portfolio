import { motion } from "framer-motion";
function Skills() {

  const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "REST APIs",
  "AI Integration",
  "Responsive Design",
  "Vercel",
];

  return (
    <motion.section
  id="skills"
  className="py-24 px-6 max-w-5xl mx-auto"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-3 border border-gray-700 rounded-xl"
          >
            {skill}
          </div>
        ))}
      </div>
   </motion.section>
  );
}

export default Skills;