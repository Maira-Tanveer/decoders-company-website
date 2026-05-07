import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const tags = [
  {
    label: 'AI Automation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <circle cx="8" cy="8" r="2.5" />
        <line x1="8" y1="2" x2="8" y2="4" />
        <line x1="8" y1="12" x2="8" y2="14" />
        <line x1="2" y1="8" x2="4" y2="8" />
        <line x1="12" y1="8" x2="14" y2="8" />
      </svg>
    ),
  },
  {
    label: 'AI Solutions',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <line x1="8" y1="2" x2="8" y2="14" />
        <line x1="2" y1="8" x2="14" y2="8" />
        <path d="M3 5q5-2 10 0" />
        <path d="M3 11q5 2 10 0" />
      </svg>
    ),
  },
  {
    label: 'Web & Mobile Apps',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="12" height="8" rx="1.5" />
        <line x1="5" y1="14" x2="11" y2="14" />
        <line x1="8" y1="11" x2="8" y2="14" />
      </svg>
    ),
  },
  {
    label: 'UI / UX Design',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13l3-1.5L13 4.5 11.5 3 4.5 10 3 13z" />
        <path d="M10 5l1.5 1.5" />
      </svg>
    ),
  },
  {
    label: 'B2B & AI Consulting',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="10" height="12" rx="1.5" />
        <line x1="6" y1="5" x2="10" y2="5" />
        <line x1="6" y1="8" x2="10" y2="8" />
        <line x1="6" y1="11" x2="9" y2="11" />
      </svg>
    ),
  },
  {
    label: 'Product Strategy',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4v4l2.5 2.5" />
      </svg>
    ),
  },
]

const revealText = 'scale real products with clarity, speed, and reliable execution.'
const letters = revealText.split('')

function ScrollLetter({ char, index, total, scrollYProgress }) {
  const start = 0.15 + (index / total) * 0.55
  const end = start + 0.55 / total
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['#d0d0d0', '#1a1a1a']
  )

  return (
    <motion.span style={{ color }}>
      {char}
    </motion.span>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const tagsRef = useRef(null)
  const isTagsInView = useInView(tagsRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section id="about" ref={sectionRef} className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="w-full max-w-[900px] mx-auto px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          {/* About Us badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-50 border border-primary-100">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[12px] text-primary font-semibold tracking-[0.12em] uppercase">About Us</span>
            </span>
          </motion.div>

          {/* Main heading — all italic, static + scroll-reveal */}
          <h2 className="font-display text-[22px] md:text-[32px] lg:text-[38px] leading-[1.2] tracking-tight font-semibold mb-10 max-w-[700px] italic">
            <span className="text-gray-900">We help fast-moving startups design, build, and </span>
            {letters.map((char, i) => (
              <ScrollLetter
                key={i}
                char={char}
                index={i}
                total={letters.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </h2>

          {/* Tags - Row 1: 3 items */}
          <div ref={tagsRef} className="flex flex-col items-center gap-2.5">
            <div className="flex flex-wrap justify-center gap-2.5">
              {tags.slice(0, 3).map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTagsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-[12px] md:text-[13px] font-medium"
                >
                  <span className="opacity-60">{tag.icon}</span>
                  {tag.label}
                </motion.div>
              ))}
            </div>
            {/* Row 2: 2 items */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {tags.slice(3, 5).map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isTagsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-[12px] md:text-[13px] font-medium"
                >
                  <span className="opacity-60">{tag.icon}</span>
                  {tag.label}
                </motion.div>
              ))}
            </div>
            {/* Row 3: 1 item */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isTagsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-[12px] md:text-[13px] font-medium"
              >
                <span className="opacity-60">{tags[5].icon}</span>
                {tags[5].label}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
