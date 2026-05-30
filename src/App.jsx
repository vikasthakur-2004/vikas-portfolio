import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;