import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import RecentWorks from '../components/RecentWorks'
import Services from '../components/Services'
import WhatWeDo from '../components/WhatWeDo'
import HowWeWork from '../components/HowWeWork'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import WaysToWork from '../components/WaysToWork'
import LogoTicker from '../components/LogoTicker'

import SectionDivider from '../components/SectionDivider'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.state?.scrollTo
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300)
      }
      window.history.replaceState({}, '')
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <SectionDivider />
      <RecentWorks />
      <SectionDivider />
      <WhatWeDo />
      <SectionDivider />
      <HowWeWork />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <LogoTicker />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <WaysToWork />
      <div className="py-6 md:py-10 bg-white" />
    </>
  )
}
