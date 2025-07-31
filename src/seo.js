import React from 'react'
import { Helmet } from 'react-helmet'

function Seo() {
  return (
      <Helmet>
           <title>Punya Website dan Aplikasi Semudah Nge-Teh | Teh Developer</title>
  <meta
    name="description"
    content="Dapatkan website profesional & aplikasi web tanpa ribet. Cepat, terjangkau, support penuh buat UMKM, café, minimarket, apotek, dan toko kecil."
  />
  <link rel="canonical" href="https://tehdeveloper.com/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
           <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tehdeveloper.com/" />
  <meta property="og:title" content="Punya Website dan Aplikasi Semudah Nge-Teh | Teh Developer" />
  <meta property="og:description" content="Dapatkan website profesional & aplikasi web tanpa ribet. Cepat, terjangkau, support penuh buat UMKM & toko kecil." />
  <meta property="og:image" content="https://tehdeveloper.com/og-image.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Punya Website dan Aplikasi Usaha Semudah Nge-Teh | Teh Developer" />
  <meta name="twitter:description" content="Dapatkan website & aplikasi web tanpa ribet, ready support penuh buat UMKM." />
          <meta name="twitter:image" content="https://tehdeveloper.com/twitter-image.png" />
          
          <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://tehdeveloper.com/",
        "name": "Teh Developer - Website & Aplikasi Web UMKM",
        "description": "Layanan pembuatan website & aplikasi web profesional untuk UMKM, minimarket, café, apotek, dan usaha kecil.",
        "publisher": {
          "@type": "Organization",
          "name": "Teh Developer",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tehdeveloper.com/logo.png"
          }
        },
        "faqPage": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Berapa biaya pembuatan landing page?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mulai dari Rp 350.000, belum termasuk hosting & domain. Termasuk desain responsif, SEO, & revisi."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana proses pembuatan website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cukup berikan gambaran kebutuhan & pilihan hosting/domain, kami kerjain sampai live."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah ada support setelah project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Iya, ada dukungan penuh via chat atau email selama & setelah project berjalan."
              }
            }
          ]
        }
      }
    `}
  </script>
    </Helmet>
  )
}

export default Seo