
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import About from "./pages/About"
import Contact from "./pages/Contactos"
import Experience from "./pages/Experience"
import Projectos from "./pages/Projectos"
import Skills from "./pages/Skills"



function App() {
 

  return (
    <>
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projectos></Projectos>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  
    </>
  )
}

export default App
