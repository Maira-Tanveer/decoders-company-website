import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RecentWorks from './components/RecentWorks'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import WaysToWork from './components/WaysToWork'
import LogoTicker from './components/LogoTicker'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <RecentWorks />
      <SectionDivider />
      <Services />
      <LogoTicker />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <WaysToWork />
      <Footer />
    </>
  )
}

export default App
