export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Hillanic Health Care (Hillanic Healthcare), a rehabilitation center and mental health care provider in Nairobi, Kenya. Book a confidential consultation via our online contact form.',
  keywords: [
    'contact Hillanic Health Care',
    'Hillanic Healthcare',
    'book consultation Kenya',
    'mental health consultation Nairobi',
    'rehabilitation center Kenya',
    'mental health hospital Kenya',
    'confidential counseling Kenya',
  ],
  alternates: {
    canonical: 'https://hillanic.co.ke/contact',
  },
  openGraph: {
    url: 'https://hillanic.co.ke/contact',
    title: 'Contact Us | Hillanic Health Care',
    description:
      'Book a confidential consultation with Hillanic Health Care Ltd in Nairobi, Kenya via our contact form.',
    images: [
      {
        url: '/pic4.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Hillanic Health Care',
      },
    ],
  },
}

export default function ContactLayout({ children }) {
  return children
}
