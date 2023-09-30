import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ArrowUp from './helpers/ArrowTop/ArrowUp';
import Banner from './components/Banner/Banner';
import './styles/main.css'


function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <Banner/>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ArrowUp/>
    </div>
  );
}

export default App;
