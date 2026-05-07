import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import project1 from '../assets/project-1.avif'
import project2 from '../assets/project-2.avif'
import project3 from '../assets/project-3.avif'

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Meet-Ting',
    subtitle: 'AI Email Scheduling',
    stage: 'MVP → Growth',
    role: 'Full-Stack Engineering & AI',
    description:
      'An AI-powered scheduling assistant that reads emails, understands context, and books meetings automatically — eliminating back-and-forth.',
    deliverables: [
      'AI email parsing engine',
      'Calendar integration API',
      'Real-time availability sync',
      'Mobile-responsive dashboard',
    ],
    tags: ['AI / ML', 'React', 'Node.js', 'AWS'],
    image: project1,
  },
  {
    id: 2,
    num: '02',
    title: 'LifeCycle',
    subtitle: 'B2B SaaS Platform',
    stage: 'Production',
    role: 'Product Strategy & Engineering',
    description:
      'A comprehensive B2B SaaS platform for lifecycle management — from onboarding to renewal — with real-time analytics and automated workflows.',
    deliverables: [
      'Multi-tenant architecture',
      'Analytics dashboard',
      'Automated workflow engine',
      'Role-based access control',
    ],
    tags: ['SaaS', 'Next.js', 'PostgreSQL', 'Stripe'],
    image: project2,
  },
  {
    id: 3,
    num: '03',
    title: 'Heads Up Health',
    subtitle: 'Mobile Health Dashboard',
    stage: 'Live Product',
    role: 'Mobile Development & API',
    description:
      'A mobile health dashboard that aggregates data from wearables, labs, and manual entries into one unified view for health-conscious users.',
    deliverables: [
      'Cross-platform mobile app',
      'Wearable device integrations',
      'Health data visualization',
      'HIPAA-compliant backend',
    ],
    tags: ['Mobile', 'React Native', 'Python', 'FHIR'],
    image: project3,
  },
]

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
          <span className="text-[12px] text-primary font-semibold tracking-[0.12em] uppercase">Case Studies</span>
        </span>
      </motion.div>

      {/* Title with blur reveal */}
      <motion.h2
        initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-dark text-center mb-4"
      >
        Recent Works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] text-gray-subtle leading-[24px] max-w-[460px] text-center"
      >
        Real projects we've built for startups and enterprises — from MVP to scale.
      </motion.p>
    </div>
  )
}

function TagPill({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                     bg-primary/20 border border-primary/30
                     text-[12px] text-primary-light font-medium leading-4">
      {label}
    </span>
  )
}

function SlideUpLink({ text, href }) {
  return (
    <a
      href={href}
      className="group relative block w-full h-[50px] overflow-hidden cursor-pointer
                 border-t border-white/10"
    >
      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[14px] text-gray-300 font-medium
                       transition-all duration-300 group-hover:-top-[25px]">
        {text}
      </span>
      <span className="absolute left-0 -bottom-[25px] text-[14px] text-primary font-medium
                       transition-all duration-300 group-hover:bottom-[14px]">
        {text}
      </span>
    </a>
  )
}

function StickyProjectCard({ project, index }) {
  const ref = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Dramatic 3D tilt on scroll
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [15, -15])
  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [-12, 12])
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.94, 1.02])
  const scrollTranslateZ = useTransform(scrollYProgress, [0, 1], [-30, 20])

  // Cursor-based tilt
  const [cursorRotateX, setCursorRotateX] = useState(0)
  const [cursorRotateY, setCursorRotateY] = useState(0)
  const [glowPosition, setGlowPosition] = useState({ x: '50%', y: '50%' })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const percentX = (x - centerX) / centerX
    const percentY = (y - centerY) / centerY
    const maxTilt = 8
    setCursorRotateY(percentX * maxTilt)
    setCursorRotateX(percentY * maxTilt * -1)
    setGlowPosition({ x: `${(x / rect.width) * 100}%`, y: `${(y / rect.height) * 100}%` })
  }

  const handleMouseLeave = () => {
    setCursorRotateX(0)
    setCursorRotateY(0)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const stickyTop = 50 + index * 30
  const animDelay = index * 0.15

  const finalRotateX = isHovering
    ? cursorRotateX
    : scrollRotateX.get() + cursorRotateX * 0.2
  const finalRotateY = isHovering
    ? cursorRotateY
    : scrollRotateY.get() + cursorRotateY * 0.2

  const finalScale = isHovering ? 1.02 : scrollScale.get()
  const finalTranslateZ = isHovering ? 0 : scrollTranslateZ.get()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 160 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', damping: 40, stiffness: 200, delay: 0.2 + animDelay }}
      className="w-full lg:sticky perspective-[1500px]"
      style={{ top: `${stickyTop}px`, zIndex: index + 1 }}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX: finalRotateX,
          rotateY: finalRotateY,
          scale: finalScale,
          translateZ: finalTranslateZ,
          transformStyle: 'preserve-3d',
          transition: isHovering ? 'none' : 'transform 0.1s linear',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="relative will-change-transform"
      >
        {/* CARD with Black Background (only the card) */}
        <div
          className={`relative rounded-3xl overflow-hidden border transition-all duration-500 ${
            isHovering
              ? 'border-primary/40 bg-black/95 shadow-[0_20px_60px_-15px_rgba(118,94,237,0.4)] backdrop-blur-sm'
              : 'border-gray-800 bg-black shadow-[0_4px_32px_rgba(0,0,0,0.5),0_1px_4px_rgba(0,0,0,0.2)]'
          }`}
        >
          {/* Glow Following Cursor */}
          {isHovering && (
            <div
              className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-200"
              style={{
                background: `radial-gradient(circle at ${glowPosition.x} ${glowPosition.y}, rgba(118,94,237,0.35) 0%, rgba(118,94,237,0) 70%)`,
              }}
            />
          )}

          {/* Glass blur overlay */}
          {isHovering && (
            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-white/5 via-transparent to-primary/10 backdrop-blur-[2px]" />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_456px_1fr] relative z-1">
            {/* LEFT */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 gap-8 lg:gap-16">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] text-primary font-medium uppercase tracking-wider">
                    {project.role}
                  </span>
                  <h3 className="font-display text-[28px] md:text-[32px] leading-[1.25] text-white">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-gray-400">{project.subtitle}</p>
                </div>
                <p className="text-[15px] md:text-[16px] text-gray-300 leading-[26px] max-w-[480px]">
                  {project.description}
                </p>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[570px] overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ transform: isHovering ? 'scale(1.03)' : 'scale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-overlay" />

              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-[12px] text-white font-medium shadow-sm border border-white/10">
                  {project.num}/{projects.length.toString().padStart(2, '0')}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-primary/80 backdrop-blur-sm text-[12px] text-white font-medium shadow-sm">
                  {project.stage}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 gap-8 lg:gap-16">
              <div className="flex flex-col gap-3">
                <span className="text-[12px] text-gray-400 font-medium uppercase tracking-wider">
                  What We Delivered
                </span>
                <div className="flex flex-col gap-2">
                  {project.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-[14px] text-gray-300 leading-5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
                <SlideUpLink text="View Case Study" href={`#project-${project.id}`} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function RecentWorks() {
  return (
    <section id="works" className="relative bg-white pb-[30px] md:pb-[50px]">
      <SectionHeading />

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-5 md:px-10 -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-10">
        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, i) => (
            <StickyProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}