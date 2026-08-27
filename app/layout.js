import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollReveal from '@/components/ScrollReveal'
import ScrollProgress from '@/components/ScrollProgress'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const BASE_URL = 'https://hillanic.co.ke'

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Hillanic Health Care | Rehabilitation Center & Mental Health Kenya',
    template: '%s | Hillanic Health Care',
  },

  description:
    'Hillanic Health Care (Hillanic Healthcare) is a rehabilitation center and mental health care provider in Nairobi, Kenya, offering drug rehabilitation, counseling, and psychosocial support. Restoring hope, rebuilding lives.',

  keywords: [
    'Hillanic',
    'Hillanic Health Care',
    'Hillanic Healthcare',
    'rehabilitation center Kenya',
    'rehabilitation center',
    'mental health care Kenya',
    'drug rehabilitation Kenya',
    'mental health',
    'mental health hospital Kenya',
    'counseling services Nairobi',
    'psychosocial support Kenya',
    'addiction recovery Kenya',
    'mental health clinic Nairobi',
  ],

  authors: [{ name: 'Hillanic Health Care Ltd', url: BASE_URL }],
  creator: 'Hillanic Health Care Ltd',
  publisher: 'Hillanic Health Care Ltd',

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: BASE_URL,
    siteName: 'Hillanic Health Care Ltd',
    title: 'Hillanic Health Care | Rehabilitation Center & Mental Health Kenya',
    description:
      'Compassionate rehabilitation center and mental health care, counseling, and psychosocial support in Nairobi, Kenya.',
    images: [
      {
        url: '/home_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Hillanic Health Care — Rehabilitation Center & Mental Health Kenya',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hillanic Health Care | Rehabilitation Center & Mental Health Kenya',
    description:
      'Compassionate rehabilitation center and mental health care, counseling, and psychosocial support in Nairobi, Kenya.',
    images: ['/home_hero.webp'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Hillanic Health Care',
  alternateName: ['Hillanic', 'Hillanic Healthcare', 'Hillanic Health Care Ltd'],
  url: BASE_URL,
  logo: `${BASE_URL}/logo_hillanic.svg`,
  image: `${BASE_URL}/home_hero.webp`,
  description:
    'Hillanic Health Care is a registered rehabilitation center and mental health care provider in Nairobi, Kenya, offering drug rehabilitation, counseling, community outreach, and psychosocial support.',
  email: 'hillanichealthcare@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: 'Kenya',
  medicalSpecialty: ['Mental Health', 'Addiction', 'Psychiatric'],
  knowsAbout: [
    'Drug & Substance Abuse Rehabilitation',
    'Mental Health Care',
    'Counseling & Psychosocial Support',
    'Community Outreach & Awareness',
    'Youth & Adolescent Programs',
    'Home-Based & Aftercare Services',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollProgress />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
