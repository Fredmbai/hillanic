import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import CountUp from '@/components/CountUp'

export const metadata = {
  title: {
    absolute: 'Hillanic Health Care | Rehabilitation & Mental Health Kenya',
  },
  description:
    'Hillanic Health Care Ltd provides compassionate, evidence-based rehabilitation, mental health care, counseling, and psychosocial support in Nairobi, Kenya. Book a confidential consultation today.',
  keywords: [
    'rehabilitation Kenya',
    'mental health Kenya',
    'drug rehab Nairobi',
    'counseling services Kenya',
    'substance abuse treatment',
    'psychosocial support Kenya',
    'addiction recovery Kenya',
    'mental health clinic Nairobi',
  ],
  alternates: { canonical: 'https://hillanic.co.ke' },
  openGraph: {
    url: 'https://hillanic.co.ke',
    title: 'Hillanic Health Care | Rehabilitation & Mental Health Kenya',
    description:
      'Compassionate rehabilitation, mental health care, and psychosocial support in Nairobi, Kenya. Restoring hope, rebuilding lives.',
    images: [{ url: '/home_hero.webp', width: 1200, height: 630, alt: 'Hillanic Health Care' }],
  },
}

const WA_HREF =
  'https://wa.me/254700000000?text=Hello%20Hillanic%20Health%20Care%2C%20I%20would%20like%20to%20book%20a%20consultation.'

const WaIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="white" width={size} height={size} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.9 12.9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const services = [
  { icon: '🧠', title: 'Mental Health Care',    desc: 'Comprehensive psychological support for depression, anxiety, trauma, and emotional wellbeing.' },
  { icon: '🌿', title: 'Rehabilitation',         desc: "Structured recovery programs for drug and substance addiction with relapse prevention." },
  { icon: '🤝', title: 'Counseling & Support',   desc: "Individual, family, and group therapy sessions to navigate life's most challenging moments." },
  { icon: '🌟', title: 'Youth Programs',          desc: 'Specialized adolescent support addressing behavioral challenges, peer pressure, and emotional growth.' },
  { icon: '🏘️', title: 'Community Outreach',    desc: 'Awareness campaigns and preventive education empowering communities across Kenya.' },
  { icon: '🏠', title: 'Aftercare Services',      desc: "Continued home-based support and recovery coaching for lasting long-term wellness." },
]

const values = [
  { emoji: '💙', title: 'Compassion',  desc: 'Empathy and dignity for every individual.' },
  { emoji: '🛡️', title: 'Integrity',   desc: 'Confidentiality and professional ethics.' },
  { emoji: '⭐',  title: 'Excellence',  desc: 'Evidence-based, high-quality care.' },
  { emoji: '🤲', title: 'Inclusivity', desc: 'Equal access to healing for all.' },
]

const stats = [
  { to: 500, suffix: '+', label: 'Lives Transformed' },
  { to: 7,   suffix: '',  label: 'Core Programs' },
  { to: 100, suffix: '%', label: 'Confidential' },
  { display: '24/7',      label: 'Support Available' },
]

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <Image src="/home_hero.webp" fill className="object-cover object-center" priority sizes="100vw" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2D42]/95 via-[#1A4A6A]/85 to-[#0D2D42]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2D42]/80 via-transparent to-transparent" />

        <div className="orb absolute top-24 left-16 w-80 h-80 rounded-full bg-[#2D9E8E]/10 blur-[100px] pointer-events-none" />
        <div className="orb-2 absolute bottom-32 right-16 w-64 h-64 rounded-full bg-[#2D9E8E]/8 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-36 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#2D9E8E] animate-pulse flex-shrink-0" />
            <span className="text-white/80 text-sm font-body tracking-wide">
              Premier Mental Health Care &middot; Kenya
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-light text-white leading-[1.08] mb-6 animate-fade-up"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            Restoring{' '}
            <em className="font-medium not-italic text-gradient">Hope.</em>
            <br />
            Rebuilding{' '}
            <em className="font-medium not-italic text-gradient">Lives.</em>
          </h1>

          <p className="text-white/65 text-lg leading-relaxed font-body max-w-xl mb-10 animate-fade-up delay-100">
            Hillanic Health Care Ltd provides compassionate, evidence-based rehabilitation,
            mental health care, and psychosocial support — helping individuals and families
            reclaim stability, dignity, and hope.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WaIcon size={18} /> Book via WhatsApp
            </a>
            <Link href="/services" className="btn-outline">Explore Services</Link>
          </div>

          {/* Stat cards — numbers count up on entry */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 animate-fade-up delay-300"
            data-stagger
          >
            {stats.map(({ to, suffix, display, label }) => (
              <div key={label} className="glass rounded-2xl p-5 text-center reveal-scale">
                <p className="font-display text-3xl font-semibold text-white mb-1">
                  {display ? display : <CountUp to={to} suffix={suffix} duration={1600} />}
                </p>
                <p className="text-white/55 text-xs font-body tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll bounce */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 lg:h-20">
            <path d="M0 80L1440 80L1440 30C1200 70 960 0 720 30C480 60 240 10 0 30L0 80Z" fill="#FAFAF8" />
          </svg>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Split header — left slides in from left, description from right */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
            <div className="reveal-left">
              <p className="text-[#2D9E8E] font-body font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#2C2C2C] leading-tight">
                Comprehensive Care<br />Services
              </h2>
            </div>
            <p className="text-[#5A6B7A] font-body leading-relaxed lg:pt-6 reveal-right">
              Evidence-based, holistic programs tailored to individual needs — from rehabilitation
              and mental health to community outreach and aftercare.
            </p>
          </div>

          {/* Top row — image scales in, cards stagger */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="relative h-72 lg:h-auto min-h-[320px] rounded-3xl overflow-hidden reveal-scale">
              <Image src="/pic3.webp" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" alt="Healthcare professionals" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D9E8E]/60 to-[#0D2D42]/85" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl italic text-white/90 leading-snug">
                  "Every journey to recovery begins with a single compassionate step."
                </p>
                <p className="text-white/50 text-xs font-body mt-2">&mdash; Hillanic Health Care</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-stagger>
              {services.slice(0, 3).map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-[#E2EBF0] p-5 card-hover border-hover group reveal">
                  <div className="w-10 h-10 bg-[#EAF5F2] rounded-xl flex items-center justify-center text-xl mb-3">{icon}</div>
                  <h3 className="font-display text-base font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#1A4A6A] transition-colors leading-snug">{title}</h3>
                  <p className="text-xs text-[#5A6B7A] font-body leading-relaxed mb-3">{desc}</p>
                  <p className="text-[#2D9E8E] text-xs font-semibold font-body opacity-0 group-hover:opacity-100 transition-opacity">Learn more &rarr;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row — 3 cards stagger in */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {services.slice(3).map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-[#E2EBF0] p-6 card-hover border-hover group reveal">
                <div className="w-10 h-10 bg-[#EAF5F2] rounded-xl flex items-center justify-center text-xl mb-3">{icon}</div>
                <h3 className="font-display text-lg font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#1A4A6A] transition-colors">{title}</h3>
                <p className="text-sm text-[#5A6B7A] font-body leading-relaxed mb-3">{desc}</p>
                <p className="text-[#2D9E8E] text-sm font-semibold font-body opacity-0 group-hover:opacity-100 transition-opacity">Learn more &rarr;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-[#0D2D42] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left slides from left */}
            <div className="reveal-left">
              <p className="text-[#7DCFC6] font-body font-semibold text-sm tracking-widest uppercase mb-3">Our Commitment</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                Why Choose Hillanic Health Care?
              </h2>
              <p className="text-white/65 font-body leading-relaxed mb-8">
                We believe healing is most effective when families, communities, and professionals work together.
                Our approach is guided by professional ethics, evidence-based treatment, and deep respect for human dignity.
              </p>

              <ul className="space-y-4 mb-10" data-stagger>
                {[
                  'Trauma-informed, client-centered care',
                  'Confidential and ethical healthcare practices',
                  'Holistic treatment — mind, body, and spirit',
                  'Strong family and community involvement',
                  'Partnerships with government & healthcare providers',
                  'Structured programs with measurable outcomes',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/75 font-body text-sm reveal">
                    <CheckCircle size={18} className="text-[#2D9E8E] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-primary">Learn About Us</Link>
            </div>

            {/* Right slides from right */}
            <div className="space-y-6 reveal-right">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/pic2.webp" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" alt="Hillanic care team" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2D42]/60 to-transparent" />
              </div>
              {/* Values 2×2 — stagger */}
              <div className="grid grid-cols-2 gap-4" data-stagger>
                {values.map(({ emoji, title, desc }) => (
                  <div key={title} className="glass rounded-2xl p-5 reveal">
                    <span className="text-xl mb-2 block">{emoji}</span>
                    <h4 className="font-display text-base font-semibold text-white mb-1">{title}</h4>
                    <p className="text-white/55 text-xs font-body leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="bg-[#EAF5F2] py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/pic5.webp" fill className="object-cover opacity-20" sizes="100vw" alt="" />
          <div className="absolute inset-0 bg-[#EAF5F2]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="font-display select-none" style={{ fontSize: '8rem', lineHeight: 1, color: 'rgba(45,158,142,0.18)', marginBottom: '-2rem' }} aria-hidden="true">&ldquo;</div>
          <blockquote className="font-display text-3xl lg:text-4xl font-medium text-[#1A4A6A] italic leading-tight mb-8 reveal-scale">
            Recovery is possible for every individual when provided with dignity, professional support,
            and a safe healing environment.
          </blockquote>
          <div className="flex items-center justify-center gap-4 reveal-fade">
            <div className="h-px w-16 bg-[#2D9E8E]/40" />
            <p className="text-[#5A6B7A] font-body text-sm">Hillanic Health Care Ltd Core Belief</p>
            <div className="h-px w-16 bg-[#2D9E8E]/40" />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden reveal-scale">
            <div className="absolute inset-0">
              <Image src="/pic5.webp" fill className="object-cover opacity-15" sizes="100vw" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A4A6A] to-[#0D2D42]" />
            <div className="relative z-10 text-center py-16 px-8 lg:py-20">
              <p className="text-[#7DCFC6] font-body font-semibold text-sm tracking-widest uppercase mb-4">Take The First Step</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-4">
                <span className="text-gradient">Ready to Begin</span>
                <br />
                <span className="text-white">Your Journey?</span>
              </h2>
              <p className="text-white/65 font-body max-w-xl mx-auto mb-10 mt-4">
                Whether for yourself or a loved one, our team is here to guide you with compassion
                and expertise. Reach out today — a consultation is the first step toward healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ background: 'linear-gradient(135deg,#25D366 0%,#20ba5a 100%)', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
                >
                  <WaIcon size={18} /> Book via WhatsApp
                </a>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
