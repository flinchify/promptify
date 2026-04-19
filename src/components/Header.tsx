import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="InpromptiFy"
            className="h-6 w-auto"
          />
        </Link>

        {/* Desktop Nav — centered */}
        <nav className="hidden md:flex items-center gap-7 ml-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[13px] tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                location.pathname === link.href
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-px opacity-40">
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions — right side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://agentmail.to/enterprise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-white/60 hover:text-white transition-colors px-4 py-2"
          >
            Book a Demo
          </a>
          <Link
            to="/login"
            className="text-[13px] text-white/60 hover:text-white transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-[13px] font-medium text-white border border-white/20 hover:border-orange-400/60 hover:text-orange-400 rounded-full px-5 py-2 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative w-5 h-4 flex flex-col justify-between"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-full bg-white transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-px w-full bg-white transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-full bg-white transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <a
                href="https://agentmail.to/enterprise"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-white"
              >
                Book a Demo
              </a>
              <Link to="/login" className="block text-sm text-white/60 hover:text-white">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium text-white border border-white/20 rounded-full w-full py-2.5 block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
