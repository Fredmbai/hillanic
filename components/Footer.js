import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const services = [
  'Drug & Substance Rehabilitation',
  'Mental Health Care',
  'Counseling & Psychosocial Support',
  'Community Outreach',
  'Youth & Adolescent Programs',
  'Home-Based Aftercare',
]

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="16" height="16" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.9 12.9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0D2D42] text-white/40 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#1A4A6A] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
                  <path
                    d="M12 21C12 21 3 14.5 3 8.5C3 5.46 5.46 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.54 3 23 5.46 23 8.5C23 14.5 12 21 12 21Z"
                    fill="#7DCFC6"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-lg text-white leading-tight">Hillanic</p>
                <p className="text-[9px] tracking-[0.18em] uppercase text-[#5BB8AB]">Health Care Ltd</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-5">
              A registered healthcare institution in Kenya committed to transforming lives through professional rehabilitation and mental health care.
            </p>
            <p className="text-xs text-white/30 italic font-display">
              "Recovery is possible for every individual."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/',         label: 'Home' },
                { href: '/about',    label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/contact',  label: 'Contact Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/40 hover:text-[#2D9E8E] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-base">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/40 hover:text-[#2D9E8E] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-base">Get In Touch</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#2D9E8E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/40">hillanichealthcare@gmail.com</p>
                  <p className="text-sm text-white/40">info@hillanichealthcare.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#2D9E8E] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/40">Nairobi, Kenya</p>
              </li>
            </ul>

            {/* WhatsApp button — disabled until number is confirmed
            <a
              href="https://wa.me/254725475443?text=Hello%20Hillanic%20Health%20Care%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#20ba5a] transition-all"
            >
              <WaIcon />
              WhatsApp Us
            </a>
            */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Hillanic Health Care Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Registered in Kenya &middot; Compassionate Care
          </p>
          <p className="text-xs text-white/30">
            Developed &amp; maintained by{' '}
            <a
              href="https://nestiumsystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5BB8AB] hover:text-[#2D9E8E] transition-colors"
            >
              Nestium Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
