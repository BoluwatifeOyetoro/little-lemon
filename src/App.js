import './App.css';
import Navigation from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
