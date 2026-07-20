'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const WA_HREF =
  'https://wa.me/254725475443?text=Hello%20Hillanic%20Health%20Care%2C%20I%20would%20like%20to%20book%20a%20consultation.'

const services = [
  'Drug & Substance Abuse Rehabilitation',
  'Mental Health Care',
  'Counseling & Psychosocial Support',
  'Community Outreach & Awareness',
  'Recovery & Reintegration Support',
  'Youth & Adolescent Programs',
  'Home-Based & Aftercare Services',
  'General Enquiry',
]

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    lines: ['hillanichealthcare@gmail.com', 'info@hillanichealthcare.com'],
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    lines: ['Nairobi, Kenya'],
  },
  {
    icon: <Clock size={18} />,
    label: 'Hours',
    lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 2:00 PM'],
  },
]

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.9 12.9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus]   = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res  = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative h-[440px] lg:h-[500px] overflow-hidden">
        <Image
          src="/pic4.webp"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          alt="Contact Hillanic"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2D42]/92 via-[#1A4A6A]/80 to-[#0D2D42]/55" />

        <div className="relative z-10 h-full flex items-end pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D9E8E] animate-pulse" />
              <span className="text-white/75 text-xs font-body tracking-wide">Reach Out</span>
            </div>
            <h1
              className="font-display font-light text-white leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {"Let's"} <em className="font-medium not-italic text-gradient">Talk</em>
            </h1>
            <p className="text-white/65 font-body text-lg max-w-2xl leading-relaxed">
              Whether you're seeking help for yourself or a loved one, our team is here to listen,
              guide, and support you — with complete confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ---- LEFT: Contact info + WhatsApp ---- */}
            <div className="lg:col-span-2 space-y-5 reveal-left">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#2C2C2C] mb-2">Get in Touch</h2>
                <p className="text-[#5A6B7A] font-body text-sm leading-relaxed">
                  Fill in the form and we'll respond within 24 hours, or reach us directly by email.
                </p>
              </div>

              {/* Contact detail cards — auto-stagger */}
              <div className="space-y-3" data-stagger>
                {contactInfo.map(({ icon, label, lines }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#E2EBF0] card-hover reveal"
                  >
                    <div className="w-10 h-10 bg-[#EAF5F2] rounded-xl flex items-center justify-center text-[#1A4A6A] flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#2D9E8E] font-body font-semibold uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      {lines.map((line) => (
                        <p key={line} className="text-sm text-[#2C2C2C] font-body">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA card — disabled until number is confirmed
              <div className="bg-gradient-to-br from-[#0D2D42] to-[#1A4A6A] rounded-2xl p-6 text-center">
                <p className="text-white/60 font-body text-sm mb-2">Prefer a quicker response?</p>
                <p className="font-display text-xl font-semibold text-white mb-4">Book via WhatsApp</p>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-semibold w-full py-3 rounded-xl hover:bg-[#20ba5a] transition-all"
                >
                  <WaIcon />
                  Start WhatsApp Chat
                </a>
              </div>
              */}
            </div>

            {/* ---- RIGHT: Contact form ---- */}
            <div className="lg:col-span-3 reveal-right">
              <div className="bg-white rounded-3xl border border-[#E2EBF0] p-8 lg:p-10 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-[#2C2C2C] mb-1">Send a Message</h2>
                <p className="text-[#5A6B7A] font-body text-sm mb-8">All enquiries are strictly confidential.</p>

                {/* Success */}
                {status === 'success' && (
                  <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl p-5 mb-6">
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-semibold text-sm">Message sent successfully!</p>
                      <p className="font-body text-sm text-green-700 mt-0.5">
                        Thank you for reaching out. Our team will respond within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl p-5 mb-6">
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-semibold text-sm">Failed to send message</p>
                      <p className="font-body text-sm text-red-700 mt-0.5">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold text-[#2C2C2C] uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. John Kamau"
                        className="field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-[#2C2C2C] uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="field"
                      />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold text-[#2C2C2C] uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className="field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-[#2C2C2C] uppercase tracking-wider mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="field"
                      >
                        <option value="">Select a service&hellip;</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-body font-semibold text-[#2C2C2C] uppercase tracking-wider mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you&hellip;"
                      className="field resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-[#5A6B7A] font-body">
                    🔒 Your information is kept strictly confidential and will only be used to respond to your enquiry.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary btn-navy w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending&hellip;
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
