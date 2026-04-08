import Navbar from "./components/layout/Navbar.jsx"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Achievements from "./sections/Achievements.jsx"
import Projects from "./sections/Projects.jsx"
import Skills from "./sections/Skills.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./components/layout/Footer.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

export default App