import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Our Services',
  description:
    'Hillanic Health Care offers 7 professional programs: drug & substance rehabilitation, mental health care, counseling, community outreach, youth support, reintegration, and home-based aftercare in Kenya.',
  keywords: [
    'drug rehabilitation Kenya',
    'substance abuse rehab Nairobi',
    'mental health services Kenya',
    'counseling services Nairobi',
    'youth mental health Kenya',
    'community outreach Kenya',
    'aftercare services Kenya',
    'addiction treatment Nairobi',
    'reintegration support Kenya',
  ],
  alternates: {
    canonical: 'https://hillanic.co.ke/services',
  },
  openGraph: {
    url: 'https://hillanic.co.ke/services',
    title: 'Our Services | Hillanic Health Care',
    description:
      '7 core programs covering drug rehabilitation, mental health, counseling, youth support, community outreach, reintegration, and aftercare — all in Kenya.',
    images: [
      {
        url: '/service_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Hillanic Health Care Services — Comprehensive Care Programs',
      },
    ],
  },
}

const WA_HREF =
  'https://wa.me/254700000000?text=Hello%20Hillanic%20Health%20Care%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.9 12.9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const services = [
  {
    id: 'rehabilitation',
    emoji: '🌿',
    title: 'Drug & Substance Abuse Rehabilitation',
    shortDesc: 'Structured recovery programs for individuals struggling with addiction.',
    fullDesc:
      'Our rehabilitation programs offer a safe, structured environment for individuals seeking recovery from drug and substance addiction. We use evidence-based approaches including detoxification support, behavioral therapy, 12-step facilitation, and motivational interviewing to address both the physical and psychological dimensions of addiction.',
    features: [
      'Individualized treatment plans',
      'Medically supervised detox support',
      'Behavioral and cognitive therapies',
      'Relapse prevention strategies',
      'Family involvement and education',
    ],
  },
  {
    id: 'mental-health',
    emoji: '🧠',
    title: 'Mental Health Care Services',
    shortDesc: 'Comprehensive psychological support for a wide range of mental health conditions.',
    fullDesc:
      'We provide professional mental health assessment and treatment for individuals experiencing depression, anxiety disorders, PTSD, bipolar disorder, schizophrenia, and other mental health conditions. Our qualified mental health professionals deliver evidence-based therapies within a compassionate and confidential environment.',
    features: [
      'Psychiatric assessment and diagnosis',
      'Cognitive Behavioral Therapy (CBT)',
      'Medication management support',
      'Trauma-informed care',
      'Crisis intervention services',
    ],
  },
  {
    id: 'counseling',
    emoji: '🤝',
    title: 'Counseling & Psychosocial Support',
    shortDesc: "Individual, family, and group therapy for life's most difficult challenges.",
    fullDesc:
      "Our counseling services provide a safe space for individuals and families to process grief, relationship challenges, life transitions, trauma, and emotional distress. We offer individual therapy, couples counseling, family therapy, and structured support groups facilitated by licensed counselors.",
    features: [
      'Individual counseling sessions',
      'Family and couples therapy',
      'Grief and loss support',
      'Structured support groups',
      'School and workplace referrals',
    ],
  },
  {
    id: 'community',
    emoji: '🏘️',
    title: 'Community Outreach & Awareness',
    shortDesc: 'Prevention campaigns and mental health education across communities.',
    fullDesc:
      'We believe prevention is as vital as treatment. Our outreach programs take mental health and addiction awareness directly into schools, churches, workplaces, and community gatherings. We train community health volunteers, conduct sensitization forums, and work with local leaders to reduce stigma and promote early help-seeking behavior.',
    features: [
      'School and college sensitization programs',
      'Community health volunteer training',
      'Anti-stigma awareness campaigns',
      'Workplace wellness programs',
      'Partnerships with local authorities',
    ],
  },
  {
    id: 'reintegration',
    emoji: '🌟',
    title: 'Recovery & Reintegration Support',
    shortDesc: 'Helping clients rebuild their lives and reintegrate into society.',
    fullDesc:
      "Completing a treatment program is just the beginning. Our reintegration services help clients rebuild their confidence, relationships, and productive lives. We provide vocational guidance, life skills training, peer mentorship, and structured follow-up to support sustainable long-term recovery.",
    features: [
      'Life skills training',
      'Vocational and career guidance',
      'Peer mentorship programs',
      'Structured follow-up plans',
      'Social reintegration support',
    ],
  },
  {
    id: 'youth',
    emoji: '🎯',
    title: 'Youth & Adolescent Support Programs',
    shortDesc: 'Specialized programs addressing the unique needs of young people.',
    fullDesc:
      "Adolescence is a critical and vulnerable period. Our youth programs are designed specifically for young people dealing with behavioral challenges, substance experimentation, peer pressure, academic stress, family conflict, and identity issues. We create a safe, age-appropriate space for teens to heal and grow.",
    features: [
      'Age-appropriate counseling',
      'Peer support groups',
      'Parent and guardian coaching',
      'Behavioral intervention programs',
      'School reintegration support',
    ],
  },
  {
    id: 'aftercare',
    emoji: '🏠',
    title: 'Home-Based & Aftercare Services',
    shortDesc: 'Continued professional care and support within the comfort of home.',
    fullDesc:
      "For clients who are unable to attend in-person sessions or who require continued support after completing residential treatment, our home-based services bring professional care directly to them. Our trained staff provide monitoring, coaching, medication reminders, family education, and recovery support in the client's home environment.",
    features: [
      'In-home counseling visits',
      'Recovery coaching and monitoring',
      'Family psychoeducation',
      'Medication adherence support',
      'Crisis response and follow-up',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative h-[460px] lg:h-[520px] overflow-hidden">
        <Image
          src="/service_hero.webp"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          alt="Hillanic Services"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2D42]/92 via-[#1A4A6A]/80 to-[#0D2D42]/60" />

        <div className="relative z-10 h-full flex items-end pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D9E8E] animate-pulse" />
              <span className="text-[#7DCFC6] text-xs font-body tracking-wide">What We Offer</span>
            </div>
            <h1
              className="font-display font-light leading-[1.1] mb-4 text-gradient"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Our Services
            </h1>
            <p className="text-[#EAF5F2] font-body text-lg max-w-2xl leading-relaxed">
              Seven core programs designed to address the full spectrum of rehabilitation,
              mental health, and psychosocial needs — from crisis to long-term recovery.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-6">
            {services.map(({ id, emoji, title, shortDesc, fullDesc, features }, i) => (
              <div
                key={id}
                className={`bg-white rounded-3xl border border-[#E2EBF0] overflow-hidden card-hover border-hover group ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left: icon + header */}
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative w-16 h-16 bg-[#EAF5F2] rounded-2xl flex items-center justify-center group-hover:bg-[#EAF5F2] transition-colors flex-shrink-0">
                          <span className="text-3xl">{emoji}</span>
                          <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#1A4A6A] rounded-full flex items-center justify-center">
                            <span className="text-[#EAF5F2] text-[10px] font-body font-bold">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </span>
                        </div>
                        <div>
                          <h2 className="font-display text-xl font-semibold text-[#2C2C2C] group-hover:text-[#1A4A6A] transition-colors leading-snug">
                            {title}
                          </h2>
                          <p className="text-[#2D9E8E] font-body font-medium text-sm mt-1">{shortDesc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: full description + features */}
                    <div className="flex-1 lg:border-l lg:border-[#E2EBF0] lg:pl-8">
                      <p className="text-[#5A6B7A] font-body leading-relaxed mb-6">{fullDesc}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {features.map((f) => (
                          <div key={f} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D9E8E] flex-shrink-0" />
                            <span className="text-sm text-[#5A6B7A] font-body">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#EAF5F2] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-display text-3xl font-semibold text-[#2C2C2C] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[#5A6B7A] font-body mb-8">
            Reach out and our team will guide you to the right program. All consultations are confidential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #20ba5a 100%)', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
            >
              <WaIcon />
              Ask via WhatsApp
            </a>
            <Link href="/contact" className="btn-primary btn-navy">
              Send Us a Message <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
