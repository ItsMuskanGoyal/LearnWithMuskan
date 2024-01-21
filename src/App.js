import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <Notes/>
      <Experience/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
