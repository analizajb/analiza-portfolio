import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from "./components/Resume";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
       <main>
        <Navbar/>
        <About></About>
        <Resume></Resume>
        <Projects></Projects>
      </main>
      <Footer />
    </div>
  );
}

export default App;
