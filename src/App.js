import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <Navbar />
      <Home />
      <About/>
      <Skill/>
    </div>
  );
}

export default App;
