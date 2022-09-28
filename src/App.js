import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;