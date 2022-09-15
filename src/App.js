import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Resume from "./components/Resume"

function App() {
  return (
    <div>
       <main>
        <About></About>
        <Resume></Resume>
      </main>
      <Footer />
    </div>
  );
}

export default App;
