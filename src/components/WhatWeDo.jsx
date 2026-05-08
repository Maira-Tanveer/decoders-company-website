import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

function SectionHeading() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="w-full flex flex-col items-center pt-4 md:pt-6 mb-10 md:mb-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-5"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[12px] text-primary font-semibold tracking-[0.12em] uppercase">Our Expertise</span>
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-dark text-center mb-4"
      >
        What we do
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] text-gray-subtle leading-[24px] max-w-[520px] text-center"
      >
        We build intelligent systems and automate workflows to help businesses scale smarter.
      </motion.p>
    </div>
  )
}

/* ── Chat Mockup with rotating conversations ── */
const chatConversations = [
  {
    user: 'Schedule a Google meeting with John for 3:45PM tomorrow!',
    ai: "I've successfully scheduled a Google meeting with John for 3:45PM tomorrow.",
    time: '8:15 AM',
  },
  {
    user: 'Summarize all unread emails from this morning.',
    ai: 'You have 5 unread emails — 2 urgent from the design team, 1 invoice, and 2 newsletters.',
    time: '9:02 AM',
  },
  {
    user: 'Draft a follow-up email to Sarah about the proposal.',
    ai: "Done! I've drafted a professional follow-up referencing your last meeting with Sarah.",
    time: '10:30 AM',
  },
  {
    user: 'Cancel my 2PM meeting and notify all attendees.',
    ai: 'Meeting cancelled. All 4 attendees have been notified with your apology note.',
    time: '1:45 PM',
  },
]

function ChatMockup() {
  const [index, setIndex] = useState(0)
  const [showAi, setShowAi] = useState(false)

  useEffect(() => {
    // Show user msg → wait 1.5s → show AI reply → wait 2.5s → next conversation
    setShowAi(false)
    const aiTimer = setTimeout(() => setShowAi(true), 1500)
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % chatConversations.length)
    }, 4500)
    return () => { clearTimeout(aiTimer); clearTimeout(nextTimer) }
  }, [index])

  const convo = chatConversations[index]

  return (
    <div className="bg-[#1a1d23] rounded-2xl overflow-hidden p-4 sm:p-4 flex flex-col gap-3 h-[130px] sm:h-[140px]">
      {/* User message */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`user-${index}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-2.5"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/60 to-primary/30 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-semibold text-primary-light">You</span>
              <span className="text-[11px] text-gray-500">{convo.time}</span>
            </div>
            <p className="text-[12px] sm:text-[13px] text-gray-300 leading-[18px]">
              {convo.user}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* AI response — appears after delay */}
      <AnimatePresence mode="wait">
        {showAi ? (
          <motion.div
            key={`ai-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-2.5"
          >
            <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-primary">AI</span>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold text-primary-light">AI Assistant</span>
                <span className="text-[11px] text-gray-500">{convo.time}</span>
              </div>
              <p className="text-[12px] sm:text-[13px] text-gray-300 leading-[18px]">
                {convo.ai}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`typing-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-primary">AI</span>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gray-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Image Gen Mockup (dark area only — no input bar) ── */
function ImageGenMockup() {
  return (
    <div className="bg-[#1a1d23] rounded-2xl overflow-hidden relative h-[140px] sm:h-[150px]">
      {/* Floating particles */}
      {[
        { top: '3%', left: '5%', size: 3, delay: 0 },
        { top: '6%', left: '18%', size: 2, delay: 1.4 },
        { top: '4%', left: '32%', size: 3, delay: 0.3 },
        { top: '8%', left: '48%', size: 2, delay: 2.1 },
        { top: '3%', left: '62%', size: 4, delay: 0.8 },
        { top: '7%', left: '78%', size: 2, delay: 1.7 },
        { top: '5%', right: '5%', size: 3, delay: 0.5 },
        { top: '15%', left: '3%', size: 2, delay: 1.1 },
        { top: '18%', left: '15%', size: 3, delay: 2.4 },
        { top: '14%', left: '28%', size: 2, delay: 0.2 },
        { top: '20%', left: '42%', size: 3, delay: 1.9 },
        { top: '16%', left: '58%', size: 2, delay: 0.6 },
        { top: '13%', left: '72%', size: 4, delay: 2.7 },
        { top: '19%', right: '8%', size: 2, delay: 1.3 },
        { top: '28%', left: '7%', size: 3, delay: 0.9 },
        { top: '32%', left: '20%', size: 2, delay: 2.0 },
        { top: '26%', left: '35%', size: 3, delay: 0.4 },
        { top: '30%', left: '52%', size: 2, delay: 1.6 },
        { top: '27%', left: '68%', size: 3, delay: 2.3 },
        { top: '33%', right: '10%', size: 2, delay: 0.7 },
        { top: '35%', right: '3%', size: 3, delay: 1.8 },
        { top: '42%', left: '4%', size: 2, delay: 2.6 },
        { top: '45%', left: '18%', size: 3, delay: 0.1 },
        { top: '40%', left: '33%', size: 2, delay: 1.5 },
        { top: '48%', left: '55%', size: 4, delay: 0.8 },
        { top: '43%', left: '70%', size: 2, delay: 2.2 },
        { top: '46%', right: '6%', size: 3, delay: 1.0 },
        { top: '55%', left: '8%', size: 2, delay: 0.3 },
        { top: '58%', left: '22%', size: 3, delay: 1.7 },
        { top: '52%', left: '40%', size: 2, delay: 2.5 },
        { top: '60%', left: '60%', size: 3, delay: 0.6 },
        { top: '56%', left: '75%', size: 2, delay: 1.2 },
        { top: '62%', right: '4%', size: 3, delay: 2.0 },
        { top: '68%', left: '6%', size: 2, delay: 0.9 },
        { top: '72%', left: '25%', size: 3, delay: 1.4 },
        { top: '65%', left: '45%', size: 2, delay: 2.8 },
        { top: '70%', left: '65%', size: 4, delay: 0.5 },
        { top: '75%', right: '12%', size: 2, delay: 1.8 },
        { top: '78%', left: '10%', size: 3, delay: 2.3 },
        { top: '82%', left: '30%', size: 2, delay: 0.2 },
        { top: '80%', left: '50%', size: 3, delay: 1.6 },
        { top: '85%', left: '72%', size: 2, delay: 0.7 },
        { top: '88%', right: '8%', size: 3, delay: 2.1 },
        { top: '90%', left: '15%', size: 2, delay: 1.0 },
        { top: '92%', left: '42%', size: 3, delay: 0.4 },
        { top: '87%', left: '58%', size: 2, delay: 1.9 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/60"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Generating badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#12141a] border border-primary/30">
          <motion.div
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-[13px] text-gray-300 font-medium">
            Generating <span className="text-primary">image</span>...
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Input bar that sits on the white card ── */
function ChatInputBar() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2">
      <div className="w-6 h-6 rounded-md border border-gray-300 flex items-center justify-center text-gray-400">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
      <span className="text-[13px] text-gray-400 flex-1">Message AI Assistant...</span>
      <div className="w-7 h-7 rounded-lg bg-primary/80 flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </div>
    </div>
  )
}

function GenerateInputBar() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2">
      <span className="text-[13px] text-gray-400 flex-1">Generate an image of...</span>
      <span className="px-4 py-1.5 rounded-lg border border-gray-300 text-[12px] text-gray-600 font-medium">
        Generate
      </span>
    </div>
  )
}

/* ── Web / Mobile Mockup — marquee icon rows with circular badge ── */
function IconRow({ icons, direction = 'left', duration = 20 }) {
  const items = [...icons, ...icons]
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((icon, i) => (
          <div key={i} className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function WebMobileMockup() {
  const row1 = [
    <svg key="slack" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>,
    <svg key="cursor" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5"><path d="M5 3l14 9-7 2-3 7z"/></svg>,
    <svg key="discord" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round"><path d="M9 12h.01M15 12h.01M8 17s1.5 2 4 2 4-2 4-2"/><path d="M18.8 7.2A16.5 16.5 0 0 0 15 6a12 12 0 0 0-1 2 14 14 0 0 0-4 0A12 12 0 0 0 9 6a16.5 16.5 0 0 0-3.8 1.2"/></svg>,
    <svg key="figma" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5"><path d="M12 2H8.5A3.5 3.5 0 0 0 5 5.5 3.5 3.5 0 0 0 8.5 9H12V2z"/><path d="M12 9H8.5A3.5 3.5 0 0 0 5 12.5 3.5 3.5 0 0 0 8.5 16H12V9z"/><circle cx="15.5" cy="5.5" r="3.5"/></svg>,
    <svg key="code" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  ]

  const row2 = [
    <svg key="notion" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/></svg>,
    <svg key="play" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5"><polygon points="5,3 19,12 5,21"/></svg>,
    <svg key="mail" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>,
    <svg key="flag" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
    <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  ]

  return (
    <div className="bg-[#1a1d23] rounded-2xl overflow-hidden relative p-4 h-[150px] sm:h-[165px]">
      {/* Marquee rows */}
      <div className="flex flex-col gap-3 justify-center h-full">
        <IconRow icons={row1} direction="left" duration={18} />
        <IconRow icons={row2} direction="right" duration={22} />
      </div>

      {/* Center circular badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[110px] h-[110px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]" />
          <div className="absolute inset-[3px] rounded-full border border-cyan-400/20" />
          <div className="flex flex-col items-center bg-[#1a1d23] rounded-full w-[94px] h-[94px] justify-center">
            <span className="text-[26px] font-bold text-white leading-none">100+</span>
            <span className="text-[9px] text-gray-400 mt-1">Apps & Interfaces</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Product Strategy Mockup ── */
const strategyPrompts = [
  {
    question: 'What should we',
    highlight: 'build first',
    suffix: '?',
    detail: 'Define the right MVP scope and priorities.',
  },
  {
    question: 'How do we',
    highlight: 'validate faster',
    suffix: '?',
    detail: 'Test assumptions before writing a single line of code.',
  },
  {
    question: 'Where should we',
    highlight: 'focus next',
    suffix: '?',
    detail: 'Prioritize features by impact and engineering effort.',
  },
  {
    question: 'When is the right time to',
    highlight: 'scale',
    suffix: '?',
    detail: 'Identify growth signals and infrastructure readiness.',
  },
]

function ProductStrategyMockup() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % strategyPrompts.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const prompt = strategyPrompts[index]

  return (
    <div className="bg-[#1a1d23] rounded-2xl overflow-hidden relative p-4 h-[150px] sm:h-[165px] flex flex-col">
      {/* Wireframe box with content inside */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="absolute top-0 left-0 right-0 h-[1px] border-t border-dashed border-white/10" />
        <div className="absolute top-0 left-0 w-[1px] h-full border-l border-dashed border-white/10" />
        <div className="absolute top-0 right-0 w-[1px] h-full border-r border-dashed border-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] border-t border-dashed border-white/10" />

        {/* Content inside the box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex items-start gap-3 px-4"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="shrink-0 mt-0.5">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" />
            </svg>
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] text-white font-medium leading-tight">
                {prompt.question} <span className="text-primary">{prompt.highlight}</span>{prompt.suffix}
              </span>
              <span className="text-[11px] text-gray-400 leading-tight">
                {prompt.detail}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function PromptInputBar() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2">
      <span className="text-[13px] text-gray-400 flex-1">Write your prompt...</span>
      <div className="w-7 h-7 rounded-lg bg-primary/80 flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </div>
    </div>
  )
}

/* ── B2B & AI Consulting Mockup — chart with badges ── */
function B2BConsultingMockup() {
  return (
    <div className="bg-[#1a1d23] rounded-2xl overflow-hidden relative p-4 h-[150px] sm:h-[165px]">
      {/* Chart area */}
      <svg className="absolute bottom-0 left-0 w-full h-[70%]" viewBox="0 0 400 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(45,212,191,0.3)" />
            <stop offset="100%" stopColor="rgba(45,212,191,0)" />
          </linearGradient>
        </defs>
        {/* Fill area */}
        <path d="M0,140 Q60,130 120,110 T200,80 T300,40 T400,10 L400,150 L0,150Z" fill="url(#chartGrad)" />
        {/* Line */}
        <path d="M0,140 Q60,130 120,110 T200,80 T300,40 T400,10" fill="none" stroke="rgba(45,212,191,0.7)" strokeWidth="2" />
      </svg>

      {/* Chart dots */}
      <div className="absolute bottom-[55%] left-[30%] w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
      <div className="absolute bottom-[70%] right-[25%] w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />

      {/* Efficiency badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1.5 rounded-full bg-[#12141a] border border-teal-400/30 text-[11px] text-teal-300 font-medium">
          Efficiency +103%
        </span>
      </div>

      {/* Cost badge */}
      <div className="absolute bottom-8 right-4">
        <span className="px-3 py-1.5 rounded-full bg-[#12141a] border border-teal-400/30 text-[11px] text-teal-300 font-medium">
          Cost -67%
        </span>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, mockup, inputBar, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl bg-[#111318] border border-gray-200 p-4 sm:p-5 flex flex-col"
    >
      {/* Dark mockup area */}
      {mockup}

      {/* Input bar (optional) — fixed height slot so title aligns */}
      <div className="h-[48px] flex items-center mt-3 w-full">
        <div className="w-full">{inputBar || <div />}</div>
      </div>

      {/* Title & description */}
      <div className="flex flex-col gap-1.5 mt-4">
        <h3 className="text-[20px] md:text-[24px] leading-[1.2] tracking-tight text-white font-semibold">
          {title}
        </h3>
        <p className="text-[13px] md:text-[14px] text-gray-400 leading-[22px]">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-white pt-[50px] md:pt-[80px] pb-[30px] md:pb-[50px]">
      <SectionHeading />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 md:px-10">
        {/* Row 1 — 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <FeatureCard
            index={0}
            title="AI Automation"
            description={`We help teams automate real workflows using AI.\nFrom email handling and scheduling to internal tools and operations, we build systems that save time, reduce manual work, and scale with your business.`}
            mockup={<ChatMockup />}
            inputBar={<ChatInputBar />}
          />

          <FeatureCard
            index={1}
            title="AI Solutions"
            description={`We build custom AI features tailored to your product and use case.\nThis includes intelligent interfaces, AI-powered tools, and data-driven systems that enhance user experience and unlock new product capabilities.`}
            mockup={<ImageGenMockup />}
            inputBar={<GenerateInputBar />}
          />
        </div>

        {/* Row 2 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
          <FeatureCard
            index={2}
            title="Web / Mobile Solutions"
            description="We craft high-performance web and mobile applications with seamless interfaces and robust backends, delivering custom solutions that drive growth and scale with your vision."
            mockup={<WebMobileMockup />}
          />

          <FeatureCard
            index={3}
            title="Product Strategy"
            description="We help founders make the right product and technical decisions early. From defining MVP scope to prioritizing features and architecture, we bring clarity so teams build the right thing."
            mockup={<ProductStrategyMockup />}
            inputBar={<PromptInputBar />}
          />

          <FeatureCard
            index={4}
            title="B2B & AI Consulting"
            description="Our experts offer strategic guidance to help your business implement AI solutions that foster transformative growth."
            mockup={<B2BConsultingMockup />}
          />
        </div>
      </div>
    </section>
  )
}
