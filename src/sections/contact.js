import React from 'react'

function ContactCard({ icon, title, description, contactLink, contactText }) {
    return (
        <div className="w-full max-w-xs p-6 bg-white shadow-lg rounded-lg flex flex-col transition duration-300 hover:scale-105">
            <div className="flex items-center">
                <i className={`fas ${icon} fa-3x mr-4 mb-4 text-primary`} />
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            </div>
            <p className="text-text/70 mb-4">{description}</p>
            <a className="transition duration-300 text-primary border-2-primary hover:border-none border-primary hover:bg-primary hover:text-background py-2 px-4 no-underline" href={contactLink} target="_blank" rel="noopener noreferrer">
                {contactText}
            </a>
        </div>
    )
 }

function Contact() {
  return (
    <section className='w-full min-h-screen flex flex-col items-center bg-background text-text mt-20 pt-20 pb-20'>
      <div className='w-full max-w-5xl flex flex-col justify-center items-center px-8 leading-loose group'>
        <h2 className='text-4xl md:text-5xl mt-10 font-sans leading-relaxed tracking-tighter text-center font-medium'>
          Kontak <span className='bg-primary text-background px-3 font-semibold'>kami</span>
        </h2>
        <div className='transition duration-1000 bg-text w-3 md:bg-text/0 group-hover:bg-text/100 scale-x-[3000%] md:scale-x-0 group-hover:scale-x-[5000%] max-w-lg h-0.5'></div>
          </div>
          
          <div className='w-full flex flex-wrap items-center justify-center mt-10 px-5'>
            <ContactCard
              icon="fa-brands fa-whatsapp"
              title="WhatsApp"
              description="Hubungi kami melalui WhatsApp untuk respons cepat."
              contactLink="https://wa.me/6281381593080"
              contactText="Chat via WhatsApp" />
          </div>
    
    </section>
  )
}

export default Contact