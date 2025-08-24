import React from 'react';
import { motion } from 'motion/react';

function ContactCard({ icon, title, description, contactLink, contactText, contact, BGColorClass, FontColorClass }) {
    return (
        <div className="w-full max-w-md group bg-white shadow-md rounded-lg flex flex-row transition duration-300 hover:scale-105">
            <div className={`${BGColorClass} w-2 rounded-s-lg`} />
            <div className={`flex flex-col justify-center my-4 group-hover:${FontColorClass} text-primary items-center w-1/3 border-r border-text px-2 mr-2`}>
                <i className={`fas ${icon} fa-3x  mb-4 `} aria-hidden="true" />
                <h3 className="text-md md:text-lg font-semibold mb-2">{title}</h3>
            </div>
            <div className='flex flex-col w-2/3 py-4'>

                <p className="text-text text-sm md:text-base mb-4" aria-label={contact}>{contact}</p>
            <p className="text-text/80 text-xs md:text-sm mb-4">{description}</p>
            <a className="transition duration-300 text-primary border-2-primary hover:border-none border-primary hover:bg-primary hover:text-background py-2 px-4 no-underline" href={contactLink} target="_blank" rel="noopener noreferrer" aria-label={contactText}>
                {contactText}
            </a>
            </div>
            
        </div>
    );
}

function Contact() {
    return (
      <section id='kontak' className='mt-20 w-full mb-32 md:mb-40 lg:mb-48 flex flex-col items-center  bg-background text-text' aria-label='hero'>
                  <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }} className="w-full max-w-5xl flex flex-col justify-center items-center px-8 leading-loose group">
                <h2 id='contact-heading' className='text-3xl md:text-5xl mt-10 font-sans leading-relaxed text-center  tracking-tighter font-medium'>
                    Kontak <span className="bg-primary text-background px-3 font-semibold">kami</span>
                </h2>
                <div className="transition duration-1000 bg-text w-3 md:bg-text/0 group-hover:bg-text/100 scale-x-[3000%] md:scale-x-0 group-hover:scale-x-[5000%] max-w-lg h-0.5"></div>
            </motion.header>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl gap-3 px-8">
                <div className='flex flex-col justify-center items-center w-full lg:w-1/2'>
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex flex-col items-center justify-center gap-4 w-full mt-10 px-5">
                <ContactCard
                    icon="fa-brands fa-whatsapp"
                    title="WhatsApp"
                    description="Hubungi kami via WhatsApp untuk diskusi cepat dan pengajuan layanan secara langsung."
                    contactLink="https://wa.me/6281381593080"
                    contact="+62 813-8159-3080"
                    contactText="Chat via WhatsApp"
                    BGColorClass={"bg-whatsapp"}
                    FontColorClass={"text-whatsapp"}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col items-center justify-center gap-4 w-full mt-10 px-5">
                <ContactCard
                    icon="fa-solid fa-envelope"
                    title="Email"
                    description="Kirim detail kebutuhan Anda melalui email untuk penawaran resmi dan komunikasi yang lebih terstruktur."
                    contactLink="mailto:sevalinoelfata@gmail.com"
                    contact="sevalinoelfata@gmail.com"
                    contactText="Kirim Email"
                    BGColorClass={"bg-blue-500"}
                    FontColorClass={"text-blue-500"}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col items-center justify-center gap-4 w-full mt-10 px-5">
                <ContactCard
                    icon="fa-brands fa-instagram"
                    title="Instagram"
                    description="Terhubung melalui Instagram untuk pertanyaan layanan, portofolio terbaru, dan update informasi."
                    contactLink="https://instagram.com/tehdancode"
                    contact="@tehdancode"
                    contactText="Lihat di Instagram"
                    BGColorClass={"bg-instagram"}
                    FontColorClass={"text-instagram"}
                />
            </motion.div>
                </div>
                <motion.div
                    initial={{ y: -5}}
                    whileInView={{ y: [-5, 5, -5] }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center w-full max-w-lg p-8  mt-10 bg-white shadow-xl rounded-2xl"
                >
                    <h3 className="text-2xl font-semibold mb-4">Formulir Kontak</h3>
                    <form className="flex flex-col gap-4 w-full" action="https://formspree.io/f/mwpqdzko" method="POST">
                        <label className="flex flex-col gap-2 text-base font-medium" htmlFor="name">
                            Nama
                            <input className="p-2 border-2 border-text/50 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full" type="text" id="name" name="name" required placeholder="Sevalino Elfata" />
                        </label>
                        <label className="flex flex-col gap-2 text-base font-medium" htmlFor="kontak">
                            Email/No. HP
                            <input className="p-2 border-2 border-text/50 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full" type="kontak" id="kontak" name="kontak" required placeholder="sevalinoelfata8@gmail.com / +62 813-8159-3080" />
                        </label>

                        <label className="flex flex-col gap-2 text-base font-medium" htmlFor="message">
                            Pesan
                            <textarea className="p-2 border-2 border-text/50 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full" id="message" name="message" rows="5" placeholder="Saya ingin meminta layanan..." required></textarea>
                        </label>
                        <button className="bg-primary text-background py-2 px-4 rounded-lg outline-none w-full hover:bg-primary/90" type="submit">Kirim</button>
                    </form>

                </motion.div>
            </div>
            
        </section>
    );
}

export default Contact;




