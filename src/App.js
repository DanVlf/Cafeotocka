import './App.css';
import Hero from './components/Hero.js'; 
import Menu from './components/Menu';
import About from './components/About.js'; 
import Navbar from './components/Navbar.js'; 
import Feed from './components/Feed.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="overflow-hidden min-h-screen m-0 p-0 ">
      <Navbar />
      <Hero />
      <section id="feed">
        <Feed />
      </section>
      
      <section id="menu">
        <Menu />
      </section>
      
      <section id="about">
        <About />
      </section>
      <Footer />

      
    </div>
  );
}

export default App;
