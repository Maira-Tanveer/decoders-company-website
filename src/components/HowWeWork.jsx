import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ── Section Heading ── */
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
          <span className="text-[12px] text-primary font-semibold tracking-[0.12em] uppercase">Our Process</span>
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-dark text-center mb-4 font-medium"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        How we work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] leading-[24px] max-w-[520px] text-center"
        style={{ color: '#1a1a1a' }}
      >
        Our proven three-step process ensures we deliver results that exceed expectations.
      </motion.p>
    </div>
  )
}

/* ── Card 1: Analyze — Icons Grid ── */
function AnalyzeMockup() {
  const [hovered, setHovered] = useState(false)

  const icons = {
    box: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9ba8c2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    openai: <svg width="26" height="26" viewBox="0 0 320 320" fill="#9ba8c2"><path d="M297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68C189.21 10.12 168.6.15 147.04.15c-34.95 0-65.65 22.84-75.6 56.28-22.72 4.84-41.53 19.88-51.14 41.1-17.4 30.44-13.24 68.12 10.33 94.62-7.27 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 14.17 16.69 34.78 26.66 56.34 26.66 34.95 0 65.65-22.84 75.6-56.28 22.72-4.84 41.53-19.89 51.14-41.1 17.38-30.44 13.22-68.12-10.34-94.62zm-144.67 169.3c-18.45 0-35.28-6.58-48.95-17.53l2.43-1.39 81.24-46.92c4.15-2.42 6.71-6.86 6.71-11.66V130.4l34.35 19.83c.37.2.61.56.68.96v94.95c-.04 29.73-24.14 53.85-53.85 54.13h-22.61zm-117.76-49.52c-9.2-15.94-12.53-34.58-9.35-52.6l2.43 1.42 81.24 46.92c4.15 2.39 9.26 2.39 13.41 0l99.2-57.28v39.65c.02.42-.13.83-.42 1.13l-82.14 47.43c-25.74 14.89-58.61 6.03-73.49-19.72l-30.88-6.95zM44.95 105.61c9.23-15.97 24.07-27.34 41.34-31.72v96.61c-.02 4.78 2.54 9.2 6.68 11.64l99.2 57.28-34.35 19.83c-.35.23-.79.27-1.17.1L74.5 211.91c-25.7-14.93-34.52-47.82-19.55-73.5v-32.8zm203.09 47.3-99.2-57.28 34.35-19.83c.35-.23.79-.27 1.17-.1l82.15 47.43c25.74 14.88 34.56 47.8 19.52 73.51-9.2 15.93-24.07 27.34-41.35 31.72v-96.61c.04-4.81-2.52-9.24-6.64-11.66v.82zm34.18-52.83-2.43-1.42-81.24-46.92c-4.15-2.39-9.26-2.39-13.41 0l-99.2 57.28V69.37c-.02-.42.13-.83.42-1.13l82.14-47.43c25.74-14.85 58.58-6.02 73.49 19.69 9.23 15.97 12.56 34.58 9.35 52.6l30.88 47.78zM112.14 168.7l-34.35-19.83c-.37-.2-.61-.56-.68-.96V52.96c.04-29.73 24.14-53.86 53.86-54.13 18.45.04 35.27 6.6 48.95 17.53l-2.43 1.39-81.24 46.92c-4.15 2.42-6.71 6.86-6.71 11.66l.6 92.37zm18.65-33.44 44.21-25.53 44.21 25.53v51.06l-44.21 25.53-44.21-25.53V135.26z"/></svg>,
    gmail: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9ba8c2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    asterisk: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#765EED" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="3" x2="12" y2="21"/><line x1="4.2" y1="7.5" x2="19.8" y2="16.5"/><line x1="19.8" y1="7.5" x2="4.2" y2="16.5"/></svg>,
    sail: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9ba8c2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21h20"/><path d="M5 21V5l14 8H5"/><path d="M19 21v-4"/></svg>,
    zapier: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ba8c2" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"><line x1="12" y1="3" x2="12" y2="21"/><line x1="4.2" y1="7.5" x2="19.8" y2="16.5"/><line x1="19.8" y1="7.5" x2="4.2" y2="16.5"/></svg>,
    notion: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ba8c2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8 7h8"/><path d="M8 11h6"/><path d="M8 15h4"/></svg>,
  }

  // Row 1: 4 tiles (offset) — empty, cube, empty, chatgpt
  // Row 2: 5 tiles — gmail, empty, asterisk, empty, sail
  // Row 3: 4 tiles (offset) — zapier, empty, notion, empty
  const row1 = ['box', null, 'openai']
  const row2 = ['gmail', null, 'asterisk', null, 'sail']
  const row3 = ['zapier', null, 'notion']

  // Distance from center for ripple stagger (row, col relative to center tile)
  const rippleDelays = {
    0: [0.12, 0.08, 0.12],          // row1: further from center
    1: [0.1, 0.06, 0, 0.06, 0.1],   // row2: center = 0
    2: [0.12, 0.08, 0.12],          // row3: further from center
  }

  const renderTile = (key, rowIdx, colIdx, isCenter = false) => {
    const icon = key ? icons[key] : null
    const delay = rippleDelays[rowIdx]?.[colIdx] || 0

    return (
      <motion.div
        key={`${key || 'empty'}-${rowIdx}-${colIdx}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: hovered && icon ? 1.08 : 1,
          y: hovered && icon ? -3 : 0,
        }}
        transition={
          hovered && icon
            ? { type: 'spring', stiffness: 300, damping: 18, delay }
            : { duration: 0.4, delay: (rowIdx * 3 + colIdx) * 0.04 }
        }
        whileHover={icon && !isCenter ? { scale: 1.15, y: -5 } : {}}
        className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center cursor-default relative overflow-hidden ${
          isCenter
            ? 'border border-[#765EED]/30'
            : icon
              ? 'border border-white/[0.08]'
              : 'bg-white/[0.04] border border-white/[0.08]'
        }`}
        style={{
          background: isCenter
            ? 'rgba(118,94,237,0.15)'
            : hovered && icon
              ? 'rgba(118,94,237,0.1)'
              : 'rgba(255,255,255,0.04)',
          borderColor: isCenter
            ? 'rgba(118,94,237,0.3)'
            : hovered && icon
              ? 'rgba(118,94,237,0.25)'
              : undefined,
          boxShadow: isCenter
            ? '0 0 20px rgba(118,94,237,0.3), inset 0 1px 1px rgba(118,94,237,0.1)'
            : hovered && icon
              ? `0 4px 16px rgba(118,94,237,${0.15 + (0.1 - delay) * 0.5}), 0 0 12px rgba(118,94,237,0.15)`
              : 'none',
          transition: `background 0.3s ease ${delay}s, border-color 0.3s ease ${delay}s, box-shadow 0.4s ease ${delay}s`,
        }}
      >
        {/* Shimmer overlay on hover */}
        {icon && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay }}
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(118,94,237,0.08) 50%, transparent 60%)',
            }}
          />
        )}
        <span className="relative z-[1]">{icon}</span>
      </motion.div>
    )
  }

  return (
    <div
      className="bg-[#141419] rounded-xl overflow-hidden p-5 h-[220px] sm:h-[240px] flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col gap-[3px] items-center">
        <div className="flex gap-[3px]">
          {row1.map((key, i) => renderTile(key, 0, i))}
        </div>
        <div className="flex gap-[3px]">
          {row2.map((key, i) => renderTile(key, 1, i, key === 'asterisk'))}
        </div>
        <div className="flex gap-[3px]">
          {row3.map((key, i) => renderTile(key, 2, i))}
        </div>
      </div>
    </div>
  )
}

/* ── Card 2: Build & Implement — Interactive Code Editor ── */
const codeByTab = {
  CSS: [
    { num: 1, tokens: [{ text: 'body', color: '#c792ea' }, { text: ' {', color: '#fff' }] },
    { num: 2, tokens: [{ text: '  margin', color: '#82aaff' }, { text: ': ', color: '#fff' }, { text: '0', color: '#f78c6c' }, { text: ';', color: '#fff' }] },
    { num: 3, tokens: [{ text: '  font-family', color: '#82aaff' }, { text: ": ", color: '#fff' }, { text: "'Arial'", color: '#c3e88d' }, { text: ',', color: '#fff' }] },
    { num: 4, tokens: [{ text: '    sans-serif', color: '#c3e88d' }, { text: ';', color: '#fff' }] },
    { num: 5, tokens: [{ text: '  background-color', color: '#82aaff' }, { text: ': #', color: '#f78c6c' }, { text: '...', color: 'rgba(255,255,255,0.4)' }] },
    { num: 6, tokens: [{ text: '  color', color: '#82aaff' }, { text: ': ', color: '#fff' }, { text: '#333', color: '#f78c6c' }, { text: ';', color: '#fff' }] },
    { num: 7, tokens: [{ text: '}', color: '#fff' }] },
  ],
  React: [
    { num: 1, tokens: [{ text: 'import ', color: '#c792ea' }, { text: 'React,', color: '#fff' }] },
    { num: 2, tokens: [{ text: '  { us', color: '#fff' }, { text: 'eState', color: '#82aaff' }, { text: ' } ', color: '#fff' }, { text: "from ", color: '#c792ea' }, { text: "'react'", color: '#c3e88d' }, { text: ';', color: '#fff' }] },
    { num: 3, tokens: [{ text: '  import ', color: '#c792ea' }, { text: 'HaloI', color: '#fff' }, { text: 'tem', color: '#82aaff' }] },
    { num: 4, tokens: [{ text: "    from ", color: '#c792ea' }, { text: "'./HaloItem'", color: '#c3e88d' }, { text: ';', color: '#fff' }] },
    { num: 5, tokens: [{ text: "  import ", color: '#c792ea' }, { text: "'./App.css'", color: '#c3e88d' }, { text: ';', color: '#fff' }] },
    { num: 6, tokens: [] },
    { num: 7, tokens: [{ text: '  const ', color: '#c792ea' }, { text: 'HaloApp', color: '#82aaff' }, { text: ' = () => {', color: '#fff' }] },
  ],
  HTML: [
    { num: 1, tokens: [{ text: '<html ', color: '#c792ea' }, { text: 'lang', color: '#f78c6c' }, { text: '="en"', color: '#c3e88d' }, { text: '>', color: '#c792ea' }] },
    { num: 2, tokens: [{ text: '<head>', color: '#c792ea' }] },
    { num: 3, tokens: [{ text: '  <meta ', color: '#c792ea' }, { text: 'charset', color: '#f78c6c' }, { text: '="UTF-8"', color: '#c3e88d' }, { text: '>', color: '#c792ea' }] },
    { num: 4, tokens: [{ text: '  <meta ', color: '#c792ea' }, { text: 'name', color: '#f78c6c' }, { text: '="viewport"', color: '#c3e88d' }] },
    { num: 5, tokens: [{ text: '      content', color: '#f78c6c' }, { text: '=', color: '#fff' }, { text: '"width=device-', color: '#c3e88d' }] },
    { num: 6, tokens: [{ text: '      width, initial-', color: '#c3e88d' }] },
    { num: 7, tokens: [{ text: '      scale=1.0"', color: '#c3e88d' }, { text: '>', color: '#c792ea' }] },
  ],
}

/* Tibor cursor waypoints per tab — { line (0-indexed), col (ch offset), selStart, selLen } */
const tiborPositions = {
  HTML: [
    { line: 2, col: 14, selStart: 8, selLen: 14 },
    { line: 0, col: 12, selStart: 0, selLen: 18 },
    { line: 4, col: 10, selStart: 6, selLen: 14 },
    { line: 2, col: 8, selStart: 8, selLen: 14 },
    { line: 3, col: 16, selStart: 8, selLen: 16 },
  ],
  React: [
    { line: 0, col: 14, selStart: 7, selLen: 6 },
    { line: 2, col: 12, selStart: 10, selLen: 8 },
    { line: 4, col: 16, selStart: 10, selLen: 10 },
    { line: 6, col: 20, selStart: 8, selLen: 14 },
    { line: 1, col: 8, selStart: 4, selLen: 8 },
  ],
  CSS: [
    { line: 1, col: 10, selStart: 2, selLen: 6 },
    { line: 4, col: 20, selStart: 2, selLen: 18 },
    { line: 2, col: 18, selStart: 2, selLen: 16 },
    { line: 5, col: 12, selStart: 2, selLen: 8 },
    { line: 0, col: 5, selStart: 0, selLen: 4 },
  ],
}

const LINE_HEIGHT = 22
const CHAR_WIDTH = 7.8

function CodeEditorMockup() {
  const tabs = ['HTML', 'React', 'CSS']
  const [activeTab, setActiveTab] = useState('HTML')
  const [posIndex, setPosIndex] = useState(0)

  // Auto-cycle Tibor position
  useEffect(() => {
    setPosIndex(0)
    const interval = setInterval(() => {
      setPosIndex((prev) => (prev + 1) % tiborPositions[activeTab].length)
    }, 1800)
    return () => clearInterval(interval)
  }, [activeTab])

  // Auto-cycle tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const i = tabs.indexOf(prev)
        return tabs[(i + 1) % tabs.length]
      })
    }, 9000)
    return () => clearInterval(interval)
  }, [])

  const lines = codeByTab[activeTab]
  const pos = tiborPositions[activeTab][posIndex]
  const tiborX = 40 + pos.col * CHAR_WIDTH
  const tiborY = pos.line * LINE_HEIGHT
  const selX = 40 + pos.selStart * CHAR_WIDTH
  const selW = pos.selLen * CHAR_WIDTH

  return (
    <div className="bg-[#141419] rounded-xl overflow-hidden h-[220px] sm:h-[240px] flex flex-col">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-[3px].5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-[3px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md text-[12px] font-medium transition-colors cursor-pointer ${
                tab === activeTab
                  ? 'bg-white/10 text-white border border-[#765EED]/40'
                  : 'text-gray-500 hover:text-gray-400 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Code area */}
      <div className="relative flex-1 px-3 sm:px-4 pb-4 font-mono text-[11px] sm:text-[13px] leading-[20px] sm:leading-[22px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {lines.map((line) => (
              <div key={line.num} className="flex">
                <span className="text-gray-600 w-6 text-right mr-4 select-none shrink-0">{line.num}</span>
                <span>
                  {line.tokens.map((t, i) => (
                    <span key={i} style={{ color: t.color }}>{t.text}</span>
                  ))}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tibor line highlight */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[22px] bg-[#765EED]/[0.06] pointer-events-none z-[1]"
          animate={{ y: tiborY }}
          transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.6 }}
        />

        {/* Tibor selection box */}
        <motion.div
          className="absolute top-0 left-0 h-[20px] rounded-[3px] border border-[#765EED]/40 bg-[#765EED]/[0.08] pointer-events-none z-[2]"
          animate={{ x: selX, y: tiborY + 1, width: selW }}
          transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.6 }}
        />

        {/* Tibor auto-moving cursor */}
        <motion.div
          className="absolute top-0 left-0 pointer-events-none z-10 flex items-center gap-[3px]"
          animate={{ x: tiborX, y: tiborY }}
          transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.6 }}
        >
          <motion.div
            className="w-[2px] h-[18px] bg-[#765EED] rounded-full"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'steps(2)' }}
          />
          <span className="px-2 py-0.5 rounded bg-[#2a2d35] border border-[#765EED]/30 text-[11px] text-gray-200 whitespace-nowrap font-sans shadow-lg">
            Tibor
          </span>
        </motion.div>
      </div>
    </div>
  )
}

/* ── Card 3: Maintain & Improve — Metrics Dashboard ── */
const metricPages = [
  [
    { label: 'Software speed', value: '+38%' },
    { label: 'Workflow efficiency', value: '+25%' },
    { label: 'Operational cost', value: '-11%' },
  ],
  [
    { label: 'Response time', value: '-42%' },
    { label: 'User satisfaction', value: '+31%' },
    { label: 'Error rate', value: '-18%' },
  ],
  [
    { label: 'Uptime', value: '99.9%' },
    { label: 'Deploy frequency', value: '+55%' },
    { label: 'Bug resolution', value: '-33%' },
  ],
]

function MetricsMockup() {
  const [hovered, setHovered] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)

  // Auto-cycle pages, faster on hover
  useEffect(() => {
    const speed = hovered ? 1200 : 3500
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % metricPages.length)
    }, speed)
    return () => clearInterval(interval)
  }, [hovered])

  const metrics = metricPages[pageIndex]

  return (
    <div
      className="bg-[#141419] rounded-xl overflow-hidden p-5 h-[220px] sm:h-[240px] flex flex-col justify-center gap-3 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pageIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-3"
        >
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <span className="text-[13px] text-gray-400">{metric.label}</span>
              <span className="text-[14px] font-semibold text-[#765EED]">{metric.value}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-white/[0.03] border border-white/[0.06]"
      >
        <span className="text-[13px] text-gray-400">Update available</span>
        <span className="flex items-center gap-[3px].5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[12px] text-white font-medium">
          Update
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </span>
      </motion.div>
    </div>
  )
}

/* ── Step Card ── */
function StepCard({ step, title, description, mockup, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-[#111318] border border-white/[0.06] p-4 sm:p-5 flex flex-col"
    >
      {mockup}

      <div className="flex flex-col gap-[3px].5 mt-5">
        <div className="flex items-center gap-3">
          <span className="text-[22px] md:text-[26px] font-medium text-[#765EED]">{step}</span>
          <h3 className="text-[22px] md:text-[26px] leading-[1.2] tracking-tight text-white font-bold">
            {title}
          </h3>
        </div>
        <p className="text-[13px] md:text-[14px] text-gray-400 leading-[22px] mt-1">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative bg-white pt-0 pb-0">
      <SectionHeading />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <StepCard
            index={0}
            step="01"
            title="Analyze"
            description="We begin with a thorough analysis of your current workflows to identify opportunities for process improvement."
            mockup={<AnalyzeMockup />}
          />

          <StepCard
            index={1}
            step="02"
            title="Build & Implement"
            description="Our developers then craft custom solutions for your company, with a continuous focus on quality and security."
            mockup={<CodeEditorMockup />}
          />

          <StepCard
            index={2}
            step="03"
            title="Maintain & improve"
            description="After deployment, our team remains dedicated, providing ongoing support and continuously enhancing the implemented solutions."
            mockup={<MetricsMockup />}
          />
        </div>
      </div>
    </section>
  )
}