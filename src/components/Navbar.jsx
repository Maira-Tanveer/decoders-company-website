import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo1.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Works', href: '/works' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (hash) => {
    if (location.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: hash } })
    }
  }

  return (
    <header className="w-full sticky top-0 z-50" style={{ background: '#1a1a1a' }}>

      {/* Availability Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative w-full"
        style={{ height: '44px', background: '#1a1a1a' }}
      >
        {/* White fill ONLY inside the notch — clipped to scoop shape */}
        <svg
          viewBox="0 0 1440 44"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
          style={{ display: 'block' }}
        >
          {/* Full dark background first */}
          <rect width="1440" height="44" fill="#1a1a1a" />

          {/* Carve out white ONLY in the concave notch area from the top */}
          <path
            d="
              M575,0
              C585,0 592,0 600,8
              C610,20 623,28 645,30
              L795,30
              C817,28 830,20 840,8
              C848,0 855,0 865,0
              Z
            "
            fill="white"
          />
        </svg>

        {/* Badge — centered inside the white notch */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10"
          style={{ top: '2px' }}
        >
          <div className="flex items-center gap-2 px-5 py-1.5 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-medium" style={{ color: '#1a1a1a' }}>
              Available for New Projects
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[60px] border-b border-black-08"
        style={{ background: 'white' }}
      >
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link to="/" className="shrink-0 block">
            <img
              src={logo}
              alt="Decoders Digital"
              className="h-[55px] md:h-[65px] w-auto object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(52%) saturate(2800%) hue-rotate(237deg) brightness(97%) contrast(93%)' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => link.href ? navigate(link.href) : handleNavClick(link.hash)}
                className="text-[14px] text-dark font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-primary text-white text-[14px] font-medium
                         hover:bg-primary-dark transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-dark"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-dark"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-black-08"
            >
              <div className="flex flex-col py-4 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => { link.href ? navigate(link.href) : handleNavClick(link.hash); setMobileOpen(false) }}
                    className="py-3 text-gray-subtle hover:text-dark transition-colors text-sm font-medium text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium text-center"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}