import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Speaking from "./components/Speaking";
import Tools from "./components/Tools";
import Articles from "./components/Articles";

function App() {
  const handleNavigation = (component: string) => {
    console.log(`Navigating to: ${component}`);
  };

  return (
    <Router>
      <Navbar onNavigate={handleNavigation} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
