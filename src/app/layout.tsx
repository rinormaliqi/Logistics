import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from '@/components/nextauth/SessionProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fizioterapi në Prishtinë | BioCenter KS – Fizioterapeutë Profesionalë",
  description:
    "BioCenter KS ofron terapi fizike, rehabilitim sportiv dhe kujdes profesional në Prishtinë. Rezervo tani një seancë me fizioterapeutët tanë të kualifikuar.",
  keywords: [
    "fizioterapi",
    "fizioterapeut Prishtinë",
    "rehabilitim sportiv",
    "terapi fizike",
    "fizioterapi në Kosovë",
    "fizioterapi BioCenter KS",
  ],
  openGraph: {
    title: "BioCenter KS – Fizioterapi dhe Rehabilitim në Prishtinë",
    description:
      "Klinikë profesionale fizioterapie në Prishtinë. Ne ofrojmë terapi për dhimbje shpine, rehabilitim pas operacionit, terapi sportive dhe më shumë.",
    url: "https://www.biocenter-ks.com",
    siteName: "BioCenter KS",
    images: [
      {
        url: "https://www.biocenter-ks.com/physio.png",
        width: 800,
        height: 600,
        alt: "BioCenter KS Logo",
      },
    ],
    locale: "sq_AL",
    type: "website",
  },
  alternates: {
    canonical: "https://www.biocenter-ks.com",
  },
};


export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode
  session: any
}>) {
  return (
<html lang='sq'>
           <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physiotherapy",
              name: "BioCenter KS",
              image: "https://www.biocenter-ks.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rruga e Prishtinës",
                addressLocality: "Prishtinë",
                addressCountry: "Kosovo",
              },
              telephone: "+38344468100",
              url: "https://www.biocenter-ks.com",
              openingHours: "Mo-Fr 12:00-20:00",
            }),
          }}
        />
      </head>
      <LanguageProvider>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp session={session}>
          <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='light'>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProviderComp>
      </body>
      </LanguageProvider>
    </html>
  )
}
