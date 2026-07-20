'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact' },
]

const WA_HREF =
  'https://wa.me/254725475443?text=Hello%20Hillanic%20Health%20Care%2C%20I%20would%20like%20to%20book%20a%20consultation.'

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isHome   = pathname === '/'
  const onWhite  = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        onWhite
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D5EDE8]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className={`relative w-11 h-11 rounded-full p-[2px] group-hover:scale-105 transition-transform flex-shrink-0 ${
            onWhite
              ? 'bg-gradient-to-br from-[#2D9E8E] to-[#1A4A6A] shadow-[0_2px_14px_rgba(45,158,142,0.4)]'
              : 'bg-gradient-to-br from-white/70 to-white/30 shadow-[0_2px_14px_rgba(0,0,0,0.25)]'
          }`}>
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/logo_hillanic.svg"
                alt="Hillanic Health Care"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-display font-semibold text-lg leading-tight transition-colors ${
                onWhite ? 'text-[#1A4A6A]' : 'text-white'
              }`}
            >
              Hillanic
            </span>
            <span
              className={`text-[9px] tracking-[0.18em] uppercase font-body transition-colors ${
                onWhite ? 'text-[#2D9E8E]' : 'text-[#7DCFC6]'
              }`}
            >
              Health Care
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`font-body text-sm font-medium transition-colors relative pb-0.5 ${
                  active
                    ? 'text-[#2D9E8E]'
                    : onWhite
                    ? 'text-[#2C2C2C] hover:text-[#1A4A6A]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {label}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2D9E8E]" />
                )}
              </Link>
            )
          })}

          {/* CTA — disabled until number is confirmed
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-1 text-sm font-semibold font-body px-5 py-2.5 rounded-full transition-all hover:shadow-md ${
              onWhite
                ? 'bg-[#1A4A6A] text-[#EAF5F2] hover:bg-[#0D2D42]'
                : 'bg-white text-[#1A4A6A] hover:bg-white/90'
            }`}
          >
            Book Consultation
          </a>
          */}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            onWhite ? 'text-[#1A4A6A] hover:bg-[#EAF5F2]' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-[#D5EDE8]`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm font-medium py-3 px-4 rounded-xl transition-colors ${
                pathname === href
                  ? 'bg-[#EAF5F2] text-[#1A4A6A] font-semibold'
                  : 'text-[#2C2C2C] hover:bg-[#EAF5F2]'
              }`}
            >
              {label}
            </Link>
          ))}
          {/* Mobile CTA — disabled until number is confirmed
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#1A4A6A] text-[#EAF5F2] text-sm font-semibold font-body px-5 py-3 rounded-xl text-center hover:bg-[#0D2D42] transition-all"
          >
            Book Consultation via WhatsApp
          </a>
          */}
        </nav>
      </div>
    </header>
  )
}
