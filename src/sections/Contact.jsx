import resume from "../assets/vikas-resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-400 mb-10">
        Interested in collaborating, internships, freelance projects, or
        full-time opportunities? Let's connect.
      </p>

      <div className="flex justify-center gap-6 text-3xl mb-10">
        <a
          href="https://github.com/vikasthakur-2004"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="http://www.linkedin.com/in/vikassingh-thakur"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:vikasht2004@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <a
        href={resume}
        download
        className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Contact;