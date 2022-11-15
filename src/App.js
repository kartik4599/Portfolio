import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <Navbar />
      <Home />
      <About/>
      <Skill/>
      <Project/>
    </div>
  );
}

export default App;
