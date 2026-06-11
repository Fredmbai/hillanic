import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Eye } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description:
    'Hillanic Health Care Ltd is a registered Kenyan healthcare institution providing professional rehabilitation, mental health care, and psychosocial support. Learn about our mission, vision, and values.',
  keywords: [
    'about Hillanic Health Care',
    'healthcare institution Kenya',
    'rehabilitation center Nairobi',
    'mental health clinic Kenya',
    'registered healthcare Kenya',
    'counseling center Nairobi',
  ],
  alternates: { canonical: 'https://hillanic.co.ke/about' },
  openGraph: {
    url: 'https://hillanic.co.ke/about',
    title: 'About Us | Hillanic Health Care',
    description:
      'Hillanic Health Care Ltd is a registered Kenyan healthcare institution dedicated to transforming lives through compassionate rehabilitation and mental health services.',
    images: [{ url: '/about_hero.webp', width: 1200, height: 630, alt: 'About Hillanic Health Care' }],
  },
}

const WA_HREF =
  'https://wa.me/254725475443?text=Hello%20Hillanic%20Health%20Care%2C%20I%20would%20like%20to%20book%20a%20consultation.'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.9 12.9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const values = [
  { emoji: '💙', title: 'Compassion',   desc: 'We approach every individual with empathy, warmth, and genuine care — recognizing that each person deserves dignity throughout their healing journey.' },
  { emoji: '🛡️', title: 'Integrity',    desc: 'We uphold the highest standards of confidentiality, professional ethics, and honest communication in all our interactions.' },
  { emoji: '⭐',  title: 'Excellence',   desc: 'We are committed to evidence-based, best-practice approaches in all our programs, continuously improving to deliver the highest quality of care.' },
  { emoji: '🤲', title: 'Inclusivity',  desc: 'We believe healing is a right, not a privilege. We ensure equal access to quality care regardless of background, age, or circumstance.' },
  { emoji: '🌱', title: 'Empowerment',  desc: 'We equip clients with the skills, confidence, and support networks needed to take ownership of their recovery and rebuild their lives.' },
  { emoji: '🏘️', title: 'Community',   desc: 'Healing extends beyond the individual. We work with families and communities to build sustainable environments where recovery can flourish.' },
]

const approach = [
  { step: '01', title: 'Initial Assessment',     desc: "A thorough, confidential assessment to understand each client's unique history, needs, and goals." },
  { step: '02', title: 'Personalized Care Plan', desc: "A tailored treatment plan is developed in collaboration with the client, their family, and a multidisciplinary care team." },
  { step: '03', title: 'Active Treatment',        desc: "Evidence-based therapies, counseling sessions, and structured programs are implemented within a safe and supportive environment." },
  { step: '04', title: 'Reintegration & Aftercare', desc: "We support clients back into family and community life with continued follow-up, coaching, and relapse prevention strategies." },
]

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[480px] lg:h-[540px] overflow-hidden">
        <Image src="/about_hero.webp" fill className="object-cover object-center" priority sizes="100vw" alt="About Hillanic Healthcare" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2D42]/90 to-[#1A4A6A]/70" />
        <div className="relative z-10 h-full flex items-end pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D9E8E] animate-pulse" />
              <span className="text-white/75 text-xs font-body tracking-wide">Who We Are</span>
            </div>
            <h1 className="font-display font-light text-white leading-[1.1] mb-4 animate-fade-up" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              About Hillanic<br />
              <em className="font-medium not-italic text-gradient">Health Care</em>
            </h1>
            <p className="text-white/65 font-body text-lg max-w-2xl leading-relaxed animate-fade-up delay-100">
              A registered Kenyan healthcare institution dedicated to transforming lives through compassionate, professional rehabilitation and mental health services.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — slides in from left */}
            <div className="reveal-left">
              <p className="text-[#2D9E8E] font-body font-semibold text-sm tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-display text-4xl font-semibold text-[#2C2C2C] mb-6 leading-tight">
                A Place of Healing<br />and Renewed Purpose
              </h2>
              <div className="space-y-4 text-[#5A6B7A] font-body leading-relaxed">
                <p>
                  Hillanic Health Care Ltd (HHC) is a registered healthcare institution in Kenya specializing in
                  rehabilitation, mental health care, and psychosocial support services. We exist to serve
                  individuals and families navigating the deeply challenging experiences of addiction, mental
                  illness, and emotional distress.
                </p>
                <p>
                  Our team of trained professionals — including clinical counselors, psychologists, social
                  workers, and rehabilitation specialists — works collaboratively to deliver holistic,
                  individualized care that honors the dignity of every person we serve.
                </p>
                <p>
                  We partner closely with families, community leaders, and other healthcare providers to create
                  a network of sustainable recovery and long-term wellness for our clients.
                </p>
              </div>
            </div>

            {/* Right — slides in from right */}
            <div className="reveal-right">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image src="/pic1.webp" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" alt="Hillanic care environment" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A4A6A]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="bg-[#EAF5F2] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-6">
          {/* Mission — slides from left */}
          <div className="bg-white border border-[#D5EDE8] rounded-2xl p-8 shadow-sm card-hover reveal-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-[#EAF5F2] rounded-xl flex items-center justify-center text-[#1A4A6A]">
                <Target size={20} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#2C2C2C]">Our Mission</h3>
            </div>
            <p className="text-[#5A6B7A] font-body leading-relaxed">
              To provide accessible, high-quality rehabilitation and mental health care services that empower
              individuals to overcome addiction, manage mental health conditions, and rebuild meaningful lives
              within their families and communities.
            </p>
          </div>

          {/* Vision — slides from right */}
          <div className="bg-[#0D2D42] rounded-2xl p-8 shadow-sm card-hover reveal-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center text-[#7DCFC6]">
                <Eye size={20} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-white/70 font-body leading-relaxed">
              To be Kenya&apos;s leading centre of excellence in rehabilitation and mental health care — a beacon
              of hope that transforms communities through professional, compassionate, and innovative healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES — 6-card grid with auto-stagger ===== */}
      <section className="bg-[#EAF5F2] pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <p className="text-[#2D9E8E] font-body font-semibold text-sm tracking-widest uppercase mb-3">What Guides Us</p>
            <h2 className="font-display text-4xl font-semibold text-[#2C2C2C] mb-4">Our Core Values</h2>
            <p className="text-[#5A6B7A] font-body max-w-xl mx-auto">
              These principles shape every interaction, every decision, and every program we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {values.map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-[#D5EDE8] card-hover border-hover group text-center reveal-scale">
                <div className="w-12 h-12 bg-[#EAF5F2] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-[#1A4A6A] transition-all duration-300">
                  {emoji}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#2C2C2C] mb-3">{title}</h3>
                <p className="text-sm text-[#5A6B7A] font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROACH — steps stagger in ===== */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <p className="text-[#2D9E8E] font-body font-semibold text-sm tracking-widest uppercase mb-3">How We Work</p>
            <h2 className="font-display text-4xl font-semibold text-[#2C2C2C] mb-4">Our Care Approach</h2>
            <p className="text-[#5A6B7A] font-body max-w-xl mx-auto">
              A structured, compassionate process that guides each client from initial contact all the way through to lasting recovery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            {approach.map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-7 border border-[#E2EBF0] card-hover text-center reveal">
                <div className="w-14 h-14 bg-[#1A4A6A] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-[#EAF5F2] font-semibold text-lg">{step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#2C2C2C] mb-3">{title}</h3>
                <p className="text-sm text-[#5A6B7A] font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#EAF5F2] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center reveal-scale">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[#2C2C2C] mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-[#5A6B7A] font-body mb-8">
            Reach out to our team today — through WhatsApp for quick bookings or our contact form for detailed enquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: 'linear-gradient(135deg,#25D366 0%,#20ba5a 100%)', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
            >
              <WaIcon /> Book via WhatsApp
            </a>
            <Link href="/contact" className="btn-primary btn-navy">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
