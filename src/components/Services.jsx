import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Strategy & Research',
    description:
      'Tempor lacus sodaleset conub accumsan ornare lifeTempor lacus sodaleset conub',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="24" height="18" rx="2" />
        <path d="M10 23v3h12v-3" />
        <line x1="16" y1="26" x2="16" y2="28" />
        <line x1="11" y1="28" x2="21" y2="28" />
        <rect x="8" y="12" width="3" height="7" rx="0.5" fill="currentColor" opacity="0.2" />
        <rect x="12.5" y="10" width="3" height="9" rx="0.5" fill="currentColor" opacity="0.3" />
        <rect x="17" y="13" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.2" />
        <rect x="21.5" y="8.5" width="3" height="10.5" rx="0.5" fill="currentColor" opacity="0.4" />
        <path d="M9 14l4.5-3 4 2.5 5-5" strokeWidth="1.3" />
        <circle cx="24" cy="8.5" r="1.2" fill="currentColor" />
        <rect x="30" y="8" width="10" height="14" rx="1.5" />
        <line x1="30" y1="12" x2="40" y2="12" />
        <line x1="33" y1="15.5" x2="37" y2="15.5" />
        <line x1="33" y1="18" x2="38" y2="18" />
        <circle cx="36" cy="27" r="4" />
        <line x1="39" y1="30" x2="42" y2="33" strokeWidth="1.5" />
        <circle cx="7" cy="8" r="0.8" fill="currentColor" />
        <circle cx="10" cy="8" r="0.8" fill="currentColor" />
        <circle cx="13" cy="8" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Growth Tracking',
    description:
      'Tempor lacus sodaleset conub accumsan ornare lifeTempor lacus sodaleset conub',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="22" r="15" />
        <circle cx="22" cy="22" r="9" strokeDasharray="3 2" />
        <circle cx="22" cy="22" r="4" fill="currentColor" opacity="0.15" />
        <circle cx="22" cy="22" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="22" cy="22" r="0.8" fill="currentColor" />
        <line x1="22" y1="4" x2="22" y2="9" />
        <line x1="22" y1="35" x2="22" y2="40" />
        <line x1="4" y1="22" x2="9" y2="22" />
        <line x1="35" y1="22" x2="40" y2="22" />
        <line x1="22" y1="7" x2="22" y2="10" strokeWidth="1.5" />
        <line x1="22" y1="34" x2="22" y2="37" strokeWidth="1.5" />
        <line x1="7" y1="22" x2="10" y2="22" strokeWidth="1.5" />
        <line x1="34" y1="22" x2="37" y2="22" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="13" y2="13" />
        <line x1="31" y1="11" x2="33" y2="13" />
        <line x1="11" y1="33" x2="13" y2="31" />
        <line x1="31" y1="33" x2="33" y2="31" />
        <path d="M22 22l6-8" strokeWidth="1.5" />
        <circle cx="28" cy="14" r="1.5" fill="currentColor" opacity="0.3" />
        <path d="M14 34l3-2 3 1.5 3-3 3 1" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Web Solution',
    description:
      'Tempor lacus sodaleset conub accumsan ornare lifeTempor lacus sodaleset conub',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 6c-4 4-6 10-6 16h12c0-6-2-12-6-16z" fill="currentColor" opacity="0.1" />
        <path d="M22 6c-4 4-6 10-6 16h12c0-6-2-12-6-16z" />
        <circle cx="22" cy="16" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="22" cy="16" r="3" />
        <circle cx="22" cy="16" r="1.2" fill="currentColor" opacity="0.3" />
        <path d="M16 22c-3 0-5 3-6 6h6" fill="currentColor" opacity="0.08" />
        <path d="M16 22c-3 0-5 3-6 6h6" />
        <path d="M28 22c3 0 5 3 6 6h-6" fill="currentColor" opacity="0.08" />
        <path d="M28 22c3 0 5 3 6 6h-6" />
        <path d="M19 28c0 3 1 5 3 7 2-2 3-4 3-7" strokeWidth="1" />
        <ellipse cx="22" cy="20" rx="18" ry="5" strokeDasharray="4 3" strokeWidth="0.8" />
        <circle cx="5" cy="22" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="8" cy="8" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Web Development',
    description:
      'Tempor lacus sodaleset conub accumsan ornare lifeTempor lacus sodaleset conub',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 13l-8 9 8 9" strokeWidth="1.5" />
        <path d="M30 13l8 9-8 9" strokeWidth="1.5" />
        <path d="M24 8l-4 28" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="22" cy="22" r="5" fill="currentColor" opacity="0.12" />
        <circle cx="22" cy="22" r="5" />
        <circle cx="22" cy="22" r="2" fill="currentColor" opacity="0.25" />
        <line x1="22" y1="15" x2="22" y2="17" strokeWidth="2" />
        <line x1="22" y1="27" x2="22" y2="29" strokeWidth="2" />
        <line x1="15" y1="22" x2="17" y2="22" strokeWidth="2" />
        <line x1="27" y1="22" x2="29" y2="22" strokeWidth="2" />
        <circle cx="8" cy="8" r="2.5" />
        <line x1="10" y1="10" x2="14" y2="13" strokeDasharray="2 1.5" />
        <circle cx="36" cy="8" r="2.5" />
        <line x1="34" y1="10" x2="30" y2="13" strokeDasharray="2 1.5" />
        <circle cx="8" cy="36" r="2.5" />
        <line x1="10" y1="34" x2="14" y2="31" strokeDasharray="2 1.5" />
        <circle cx="36" cy="36" r="2.5" />
        <line x1="34" y1="34" x2="30" y2="31" strokeDasharray="2 1.5" />
      </svg>
    ),
  },
]

// ✅ Exact blob path from original HTML
const BLOB_PATH =
  'M114 70.3999C114 101.88 88.4802 127.4 57 127.4C25.5198 127.4 0 101.88 0 70.3999C1.82688e-05 19.8999 41 -15.6001 50.4737 6.8999C70.4737 54.3999 114 28.9 114 70.3999Z'

function SectionHeading() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="w-full flex flex-col items-center pt-4 md:pt-6 mb-6 md:mb-10">
      {/* Pill label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-5"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[12px] text-primary font-semibold tracking-[0.12em] uppercase">Our Services</span>
        </span>
      </motion.div>

      {/* Title with blur reveal */}
      <motion.h2
        initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-dark text-center mb-4"
      >
        What We Offer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] text-gray-subtle leading-[24px] max-w-[460px] text-center"
      >
        We deliver end-to-end digital solutions tailored to your business needs.
      </motion.p>
    </div>
  )
}

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        delay: 0.1 + index * 0.12,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // overflow: visible so the rotated blue card can peek out
      style={{ position: 'relative', overflow: 'visible', cursor: 'pointer' }}
      className="flex flex-col items-center text-center px-5 pt-7 pb-6"
    >

      {/* ── LAYER 0: Rotated blue card behind ── */}
      {/* Same size as card, rotated ~5deg → top-right & bottom-left corners poke out */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '20px',
          background: hovered ? '#765EED' : 'transparent',
          transform: hovered ? 'rotate(5deg)' : 'rotate(0deg)',
          transition: 'background 0.35s ease, transform 0.35s ease',
          zIndex: 0,
        }}
      />

      {/* ── LAYER 1: White card surface ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '20px',
          background: hovered ? '#ffffff' : 'transparent',
          boxShadow: hovered
            ? '0 16px 50px rgba(118,94,237,0.12), 0 2px 12px rgba(0,0,0,0.06)'
            : 'none',
          transition: 'background 0.35s ease, box-shadow 0.35s ease',
          zIndex: 1,
        }}
      />

      {/* ── LAYER 2: All card content ── */}
      <div
        className="relative flex flex-col items-center text-center w-full"
        style={{ zIndex: 2 }}
      >
        {/* Icon blob */}
        <div className="relative w-[100px] h-[114px] flex items-center justify-center mb-4">
          <svg
            viewBox="0 0 114 128"
            className="absolute inset-0 w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={BLOB_PATH}
              fill={hovered ? '#765EED' : 'rgba(210, 200, 245, 0.55)'}
              style={{ transition: 'fill 0.35s ease' }}
            />
          </svg>
          <div
            className="relative z-10"
            style={{
              color: hovered ? '#ffffff' : '#765EED',
              transition: 'color 0.35s ease',
            }}
          >
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-[16px] md:text-[18px] leading-[1.3] mb-2 text-gray-900">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] text-gray-400 leading-[20px] max-w-[200px] mb-4">
          {service.description}
        </p>

        {/* Arrow button */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: hovered ? '#765EED' : 'rgba(210, 200, 245, 0.5)',
            color: hovered ? '#ffffff' : '#765EED',
            transition: 'background 0.35s ease, color 0.35s ease',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M4.5 2.5L8 6L4.5 9.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-[50px] md:py-[80px]">
      <SectionHeading />
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 items-start">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}