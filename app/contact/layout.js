export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Hillanic Health Care Ltd in Nairobi, Kenya. Book a confidential consultation for rehabilitation or mental health support via WhatsApp or our online contact form.',
  keywords: [
    'contact Hillanic Health Care',
    'book consultation Kenya',
    'mental health consultation Nairobi',
    'rehabilitation enquiry Kenya',
    'confidential counseling Kenya',
    'WhatsApp mental health Kenya',
  ],
  alternates: {
    canonical: 'https://hillanic.co.ke/contact',
  },
  openGraph: {
    url: 'https://hillanic.co.ke/contact',
    title: 'Contact Us | Hillanic Health Care',
    description:
      'Book a confidential consultation with Hillanic Health Care Ltd in Nairobi, Kenya via WhatsApp or our contact form.',
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
