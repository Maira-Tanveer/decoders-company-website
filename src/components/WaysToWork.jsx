import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.2" />
    <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ProjectBasedCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', damping: 40, stiffness: 200, delay: 0.1 }}
      className="w-full lg:sticky"
      style={{ top: '60px', zIndex: 1 }}
    >
      <div className="bg-white rounded-3xl overflow-hidden border border-black/8
                      shadow-[0_4px_32px_rgba(0,0,0,0.06)]
                      p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-dark/5 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-dark">
                <path d="M11 1l2.5 5 5.5.8-4 3.9.9 5.3L11 13.5 6.1 16l.9-5.3-4-3.9 5.5-.8L11 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-[24px] md:text-[28px] leading-[1.2] text-dark">
                Project Based
              </h3>
              <p className="text-[15px] text-gray-subtle leading-[24px] max-w-[380px]">
                Best for clearly defined product builds, MVPs, or specific feature development.
              </p>
            </div>

            {/* Delivery Time */}
            <div className="flex items-center gap-6 pt-4 mt-auto">
              <span className="text-[13px] text-gray-muted font-medium">Delivery Time</span>
              <span className="text-[14px] text-gray-subtle">Based on scope and complexity</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Pricing */}
            <div className="flex flex-col gap-1">
              <h4 className="font-display text-[36px] md:text-[48px] leading-[1.1] text-dark">
                Fixed
              </h4>
              <span className="text-[15px] text-gray-subtle">/ after discovery</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-black/8" />

            {/* Checklist */}
            <div className="flex flex-col gap-3.5">
              {[
                'Fixed scope agreed after discovery',
                'Clear milestones and delivery roadmap',
                'Senior engineers owning architecture and execution',
                'Ideal for MVPs and focused product builds',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-subtle">
                  <CheckIcon />
                  <span className="text-[14px] leading-[20px] text-dark/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full
                         bg-dark text-white text-[14px] font-medium mt-auto
                         hover:bg-primary transition-colors duration-300
                         shadow-[0_12px_12px_-6px_rgba(0,0,0,0.15)]"
            >
              Discuss Your Project
              <ArrowIcon />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function DedicatedTeamCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', damping: 40, stiffness: 200, delay: 0.25 }}
      className="w-full lg:sticky"
      style={{ top: '90px', zIndex: 2 }}
    >
      <div
        className="relative rounded-3xl overflow-hidden border border-white/10
                    shadow-[0_8px_48px_rgba(0,0,0,0.4)]
                    p-8 md:p-12"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(20,20,30,0.9) 100%)',
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=60)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-white">
                <path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M11 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-[24px] md:text-[28px] leading-[1.2] text-white">
                Dedicated Engineering Team
              </h3>
              <p className="text-[15px] text-white/50 leading-[24px] max-w-[380px]">
                A long-term engagement where a senior team works alongside you as your extended engineering department.
              </p>
            </div>

            {/* Delivery Time */}
            <div className="flex items-center gap-6 pt-4 mt-auto">
              <span className="text-[13px] text-white/40 font-medium">Delivery Time</span>
              <span className="text-[14px] text-white/60">Ongoing, sprint-based delivery</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Pricing */}
            <div className="flex flex-col gap-1">
              <h4 className="font-display text-[36px] md:text-[48px] leading-[1.1] text-white">
                Starting at
              </h4>
              <span className="font-display text-[36px] md:text-[48px] leading-[1.1] text-primary">
                $2,500
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Checklist */}
            <div className="flex flex-col gap-3.5">
              {[
                'Backend, frontend, mobile, and AI engineers',
                'Monthly engagement with flexible scaling',
                'Deep product ownership and continuity',
                'Best for growing and scaling products',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-primary/60">
                  <CheckIcon />
                  <span className="text-[14px] leading-[20px] text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full
                         bg-white/10 text-white text-[14px] font-medium mt-auto
                         border border-white/10
                         hover:bg-primary hover:border-primary transition-all duration-300
                         shadow-[0_12px_12px_-6px_rgba(0,0,0,0.3)]"
            >
              Build With Us
              <ArrowIcon />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WaysToWork() {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-white py-[30px] md:py-[50px]">
      {/* Section Heading */}
      <div ref={headingRef} className="w-full max-w-[1180px] mx-auto px-5 md:px-10 mb-8 md:mb-12">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Animated pill label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeadingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[12px] text-primary font-semibold tracking-[0.12em] uppercase">Engagement Models</span>
            </span>
          </motion.div>
          {/* Title with blur reveal */}
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={isHeadingInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-dark"
          >
            Ways to Work With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] text-gray-subtle leading-[26px] max-w-[520px]"
          >
            Whether you need a full product build or an embedded engineering team, we adapt to your workflow.
          </motion.p>
        </div>
      </div>

      {/* Cards — stacked vertically with sticky scroll overlap */}
      <div className="w-full max-w-[1000px] mx-auto px-5 md:px-10">
        <div className="flex flex-col gap-8">
          <ProjectBasedCard />
          <DedicatedTeamCard />
        </div>
      </div>
    </section>
  )
}
