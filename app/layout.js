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
    default: 'Hillanic Health Care | Rehabilitation & Mental Health Kenya',
    template: '%s | Hillanic Health Care',
  },

  description:
    'Hillanic Health Care Ltd provides compassionate, evidence-based rehabilitation, mental health care, counseling, and psychosocial support in Nairobi, Kenya. Restoring hope, rebuilding lives.',

  keywords: [
    'rehabilitation Kenya',
    'mental health Kenya',
    'drug rehabilitation Nairobi',
    'substance abuse treatment Kenya',
    'counseling Nairobi',
    'psychosocial support Kenya',
    'addiction recovery Kenya',
    'mental health clinic Nairobi',
    'rehab center Kenya',
    'Hillanic Health Care',
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
    title: 'Hillanic Health Care | Rehabilitation & Mental Health Kenya',
    description:
      'Compassionate rehabilitation, mental health care, counseling, and psychosocial support in Nairobi, Kenya.',
    images: [
      {
        url: '/home_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Hillanic Health Care — Rehabilitation & Mental Health Kenya',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hillanic Health Care | Rehabilitation & Mental Health Kenya',
    description:
      'Compassionate rehabilitation, mental health care, counseling, and psychosocial support in Nairobi, Kenya.',
    images: ['/home_hero.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
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
