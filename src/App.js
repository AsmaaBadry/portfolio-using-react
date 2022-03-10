// import logo from './logo.svg';
import './App.css';
import HeroSec from './Components/HeroSec/HeroSec';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <HeroSec />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />

    </div>
  );
}

export default App;
