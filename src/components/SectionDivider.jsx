import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <div ref={ref} className="w-full flex justify-center py-6 md:py-10 bg-white overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-[600px] px-5 md:px-10">
        {/* Left line with fade */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 origin-right"
        >
          <div className="h-px w-full" style={{ background: 'linear-gradient(to left, rgba(118,94,237,0.2), transparent)' }} />
        </motion.div>

        {/* Center ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          className="relative mx-6 shrink-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {/* Outer rotating ring */}
            <motion.circle
              cx="12" cy="12" r="10"
              stroke="rgba(118,94,237,0.12)"
              strokeWidth="0.5"
              strokeDasharray="3 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: 'center' }}
            />
            {/* Inner diamond */}
            <motion.rect
              x="8.5" y="8.5" width="7" height="7" rx="1.5"
              fill="none"
              stroke="rgba(118,94,237,0.2)"
              strokeWidth="0.8"
              style={{ transform: 'rotate(45deg)', transformOrigin: 'center' }}
            />
            {/* Center dot */}
            <circle cx="12" cy="12" r="1.5" fill="rgba(118,94,237,0.25)" />
          </svg>
        </motion.div>

        {/* Right line with fade */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 origin-left"
        >
          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, rgba(118,94,237,0.2), transparent)' }} />
        </motion.div>
      </div>
    </div>
  )
}
