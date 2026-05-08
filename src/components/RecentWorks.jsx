import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
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

const cursorSpring = { damping: 30, stiffness: 200, mass: 0.4 }
const glowSpring = { damping: 25, stiffness: 120 }

function StickyProjectCard({ project, index }) {
  const ref = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Smooth scroll-based scale
  const scrollScaleRaw = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.97, 1, 1, 0.97])
  const scrollScale = useSpring(scrollScaleRaw, { damping: 40, stiffness: 90 })

  // Cursor tilt — motion values only, zero re-renders
  const cursorX = useMotionValue(0.5)
  const cursorY = useMotionValue(0.5)
  const hoverOpacity = useMotionValue(0)

  const tiltX = useSpring(useTransform(cursorY, [0, 1], [3, -3]), cursorSpring)
  const tiltY = useSpring(useTransform(cursorX, [0, 1], [-3, 3]), cursorSpring)

  const hoverScaleRaw = useTransform(hoverOpacity, [0, 1], [1, 1.01])
  const hoverScale = useSpring(hoverScaleRaw, cursorSpring)
  const smoothGlow = useSpring(hoverOpacity, glowSpring)

  // Combined scale: scroll * hover
  const combinedScale = useTransform([scrollScale, hoverScale], ([s, h]) => s * h)

  // Glow radial gradient
  const glowBg = useTransform(
    [cursorX, cursorY],
    ([cx, cy]) =>
      `radial-gradient(700px circle at ${cx * 100}% ${cy * 100}%, rgba(118,94,237,0.22) 0%, transparent 65%)`
  )

  // Border & shadow driven by glow
  const borderColor = useTransform(smoothGlow, (v) => `rgba(118,94,237,${v * 0.35})`)
  const cardShadow = useTransform(
    smoothGlow,
    (v) =>
      `0 4px 32px rgba(0,0,0,${0.5 - v * 0.1}), 0 ${4 + v * 16}px ${32 + v * 28}px -15px rgba(118,94,237,${v * 0.35})`
  )

  // Image hover zoom
  const imgScale = useTransform(smoothGlow, (v) => 1 + v * 0.03)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    cursorX.set((e.clientX - rect.left) / rect.width)
    cursorY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseEnter = () => hoverOpacity.set(1)
  const handleMouseLeave = () => {
    hoverOpacity.set(0)
    cursorX.set(0.5)
    cursorY.set(0.5)
  }

  const stickyTop = 50 + index * 30

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="w-full lg:sticky"
      style={{ top: `${stickyTop}px`, zIndex: index + 1, perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          scale: combinedScale,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="relative will-change-transform"
      >
        {/* CARD */}
        <motion.div
          className="relative rounded-3xl overflow-hidden border border-gray-800 bg-black"
          style={{ borderColor, boxShadow: cardShadow }}
        >
          {/* Cursor glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: glowBg, opacity: smoothGlow }}
          />

          {/* Glass overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-white/5 via-transparent to-primary/10"
            style={{ opacity: smoothGlow }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_580px_1fr] relative z-1">
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
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ scale: imgScale }}
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
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function RecentWorks() {
  return (
    <section id="works" className="relative bg-white pb-[30px] md:pb-[50px]">
      <SectionHeading />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-10 -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-10">
        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, i) => (
            <StickyProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}