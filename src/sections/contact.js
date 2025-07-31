import React from 'react'

function ContactCard({ icon, title, description, contactLink, contactText, contact }) {
    return (
        <div className="w-full max-w-xs p-6 bg-white shadow-lg rounded-lg flex flex-col transition duration-300 hover:scale-105">
            <div className="flex items-center">
                <i className={`fas ${icon} fa-3x mr-4 mb-4 text-primary`} />
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        </div>
                <p className="text-text mb-4">{ contact }</p>

        <p className="text-text/70 mb-4">{description}</p>            <a className="transition duration-300 text-primary border-2-primary hover:border-none border-primary hover:bg-primary hover:text-background py-2 px-4 no-underline" href={contactLink} target="_blank" rel="noopener noreferrer">
                {contactText}
            </a>
        </div>
    )
 }

function Contact() {
  return (
    <section id='kontak' className='w-full min-h-screen flex flex-col items-center bg-background text-text mt-20 pt-20 pb-20'>
      <div className='w-full max-w-5xl flex flex-col justify-center items-center px-8 leading-loose group'>
        <h2 className='text-4xl md:text-5xl mt-10 font-sans leading-relaxed tracking-tighter text-center font-medium'>
          Kontak <span className='bg-primary text-background px-3 font-semibold'>kami</span>
        </h2>
        <div className='transition duration-1000 bg-text w-3 md:bg-text/0 group-hover:bg-text/100 scale-x-[3000%] md:scale-x-0 group-hover:scale-x-[5000%] max-w-lg h-0.5'></div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mt-10 px-5'>
            <ContactCard
              icon="fa-brands fa-whatsapp"
              title="WhatsApp"
              description="“Hubungi kami via WhatsApp untuk diskusi cepat dan pengajuan layanan secara langsung."
          contactLink="https://wa.me/6281381593080"
          contact="+62 813-8159-3080"
          contactText="Chat via WhatsApp" />
            <ContactCard
              icon="fa-solid fa-envelope"
              title="Email"
              description="Kirim detail kebutuhan Anda melalui email untuk penawaran resmi dan komunikasi yang lebih terstruktur."
          contactLink="mailto:sevalinoelfata@gmail.com"
          contact="sevalinoelfata@gmail.com"
          contactText="Kirim Email" />
            <ContactCard
              icon="fa-brands fa-instagram"
              title="Instagram"
              description="Terhubung melalui Instagram untuk pertanyaan layanan, portofolio terbaru, dan update informasi."
          contactLink="https://instagram.com/tehdancode"
          contact="@tehdancode"
          contactText="Lihat di Instagram" />
          </div>
    
    </section>
  )
}

export default Contact