import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const logos = [
  {
    name: 'React',
    color: '#61DAFB',
    svg: (color) => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" fill={color} />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke={color} strokeWidth="1" fill="none" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke={color} strokeWidth="1" fill="none" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke={color} strokeWidth="1" fill="none" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#000000',
    svg: (color) => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill={color} />
        <path d="M12 10v12l10-12" fill="#fff" />
        <line x1="22" y1="10" x2="22" y2="22" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    svg: (color) => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L30 10v12L16 30 2 22V10z" fill={color} opacity="0.15" stroke={color} strokeWidth="1.2" />
        <text x="16" y="20" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill={color} textAnchor="middle">JS</text>
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    svg: (color) => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="12" height="12" rx="2.5" fill={color} opacity="0.85" />
        <rect x="16" y="14" width="12" height="12" rx="2.5" fill="#FFD43B" opacity="0.85" />
        <circle cx="9" cy="11" r="1.5" fill="#fff" />
        <circle cx="23" cy="21" r="1.5" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'TensorFlow',
    color: '#FF6F00',
    svg: (color) => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v24M10 10l6-6 6 6M10 16h12M10 22l6 6 6-6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    color: '#FF9900',
    svg: (color) => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <path d="M4 22l12-16 12 16" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 26c8-3 20-3 28 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    color: '#10A37F',
    svg: (color) => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M10 16c0-4 3-6 6-6s6 2 6 6-3 6-6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2.5" fill={color} />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    color: '#FFA000',
    svg: () => (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <path d="M8 28L13 4l6 12-6 4z" fill="#FFA000" opacity="0.85" />
        <path d="M8 28l5-8 10 4z" fill="#F57C00" opacity="0.85" />
        <path d="M13 20l4-16 6 12z" fill="#FFCA28" opacity="0.85" />
      </svg>
    ),
  },
]

const LogoCard = ({ logo }) => (
  <motion.div
    className="group relative shrink-0 mx-8 md:mx-12 cursor-default"
    whileHover={{ y: -3, scale: 1.08 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
  >
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div className="transition-transform duration-300 group-hover:scale-110">
        {logo.svg(logo.color)}
      </div>

      {/* Name */}
      <span className="text-base md:text-lg font-semibold text-gray-700 group-hover:text-gray-900 tracking-tight transition-colors duration-400 whitespace-nowrap select-none">
        {logo.name}
      </span>
    </div>
  </motion.div>
)

export default function LogoTicker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative bg-white py-0 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-12 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-50 border border-primary-100">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[12px] text-primary font-semibold tracking-[0.12em] uppercase">Our Tech Stack</span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[22px] md:text-[32px] lg:text-[38px] leading-[1.2] tracking-tight font-medium text-gray-900"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Technologies We Work With
        </motion.h2>
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)' }} />

      {/* Single scrolling row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { duration: 35, repeat: Infinity, ease: 'linear' } }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoCard key={i} logo={logo} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
