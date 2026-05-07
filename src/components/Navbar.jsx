import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpeg'

const navLinks = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white">
      {/* Top Availability Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex justify-center py-2.5 bg-dark"
      >
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-dark-light border border-white-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-white font-medium">
            Available for New Projects
          </span>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[60px] border-b border-black-08"
      >
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="#" className="shrink-0 block bg-black rounded-xl overflow-hidden px-4 py-2">
            <img
              src={logo}
              alt="Decoders Digital"
              className="h-[36px] md:h-[42px] w-auto object-contain"
              style={{ filter: 'hue-rotate(45deg) saturate(1.8) brightness(1.2)' }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-gray-subtle hover:text-dark transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-primary text-white text-[14px] font-medium
                         hover:bg-primary-dark transition-colors duration-300"
            >
              Contact
            </a>
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
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-gray-subtle hover:text-dark transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium text-center"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
