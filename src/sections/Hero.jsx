import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <p className="text-gray-400 mb-4">
        Full Stack Developer & AI Integration Enthusiast
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Vikassingh Thakur
      </h1>

      <div className="text-xl md:text-2xl text-gray-300 mb-8">
        <TypeAnimation
          sequence={[
            "Building Modern Web Apps",
            2000,
            "Learning AI Integration",
            2000,
            "Future Product Engineer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="max-w-2xl text-gray-400 mb-10">
        BSc Computer Science Final Year student focused on
        Full Stack Web Development, AI Integration and building
        scalable digital products for the future.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/vikasthakur-2004"
          target="_blank"
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
        >
          GitHub
        </a>

        <a
          href="http://www.linkedin.com/in/vikassingh-thakur"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-xl"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;