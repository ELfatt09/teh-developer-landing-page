import {useState} from 'react'
import { motion } from 'motion/react'

function Services() {
  return (
      <section id='layanan' className='w-full mb-32 md:mb-40 lg:mb-48 flex flex-col items-center  bg-background text-text' aria-label='hero'>
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className='w-full max-w-5xl flex flex-col items-center px-8 leading-loose group'>
            <h2 id='services-heading' className='text-3xl md:text-5xl mt-10 font-sans leading-relaxed text-center  tracking-tighter font-medium'>
                Layanan <span className='bg-primary text-background px-3 font-semibold'>kami</span>
              </h2>
              <div className='transition duration-1000 bg-text w-3 md:bg-text/0  group-hover:bg-text/100 scale-x-[3000%] md:scale-x-0 group-hover:scale-x-[5000%] max-w-lg h-0.5 mt-3' aria-hidden='true'></div>
      </motion.header>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
        className='w-full max-w-5xl flex flex-col items-center justify-center mt-10 bg-white shadow-lg'>
            <div className='w-full flex flex-col items-center justify-center ' role='list'>
              <Service number="01"
                  title="Pembuatan Landing Page"
                  price="350.000+"
                  description="Bikin usaha kamu makin dipercaya pelanggan dengan landing page profesional. Desain menarik, responsif (bisa dibuka di HP/laptop), dan siap bantu naikin penjualan."
                  list={[ 
                "Desain modern sesuai brand usaha kamu",
                "Lebih mudah ditemukan di Google (SEO)",
                "Gratis revisi (2x kecil, 1x besar)",
                "Dibantu sampai website benar-benar online (domain + hosting + deployment)",
                  ]} />
              <Service number="02"
                  title="Pembuatan Aplikasi Web"
                  price="1.000.000+"
                  description="Butuh sistem khusus buat usaha? Kami bisa bikin aplikasi web sesuai kebutuhan bisnis kamu, aman dan mudah dipakai."
                  list={[ 
                    "Kode rapi, gampang dikembangkan lagi di masa depan",
                    "Sistem login & manajemen pengguna yang aman",
                    "Dibantu sampai aplikasi jalan di server",
                    "Dokumentasi lengkap & panduan penggunaan",
                    "Bisa request fitur sesuai kebutuhan",
                  ]} />

      </div>
              </motion.div>
      </section>
  )
}

function Service(props) {
    const [hover, setHover] = useState(false);

    return (
      <motion.li
            onClick={() => setHover(!hover)}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className={`transition duration-500 w-full h-min-20 h-full py-5 first:border-b first:border-text/40 ${hover ? 'bg-secondary/70' : 'hover:bg-secondary/70'} flex flex-col justify-center items-center group`}
            role='listitem'
            aria-label={props.title}>
            <div className="w-full max-w-4xl flex flex-row justify-between items-center h-full">
              <div className="w-auto pr-3 md:w-1/3 h-full pl-5 ">
                    <span className="text-2xl font-sans text-primary inline-block">{props.number}</span>
              </div>
              <div className="w-full h-full flex flex-col pr-5">
                <div className="w-full flex flex-col sm:flex-row justify-between gap-3 items-center">
                        <h3 className="font text-2xl lg:text-3xl w-full sm:w-2/3 font-sans font-normal text-text inline-block tracking-tighter">{ props.title}</h3>
                  <span className="text-lg lg:text-xl font-sans w-full sm:w-1/3 text-primary inline-block tracking-tighter">Rp. {props.price}</span>
                </div>
                <p className="text-text/70 text-xs md:text-sm lg:text-md inline-block mt-5 font-sans">{props.description}</p>
<motion.ul
        layout            // ← enable layout animations
        initial={{ opacity: 0, height: 0 }}
        animate={hover ? { opacity: 1, height: 'auto' } : { opacity: 0, height: '0px' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
        className="flex flex-wrap w-full whitespace-nowrap mt-7"
        role='list'
      >
        {props.list.map((item, i) => (
          <li key={i} className="w-full text-text text-sm whitespace-break-spaces mt-1">
            {item}
          </li>
        ))}
      </motion.ul>
              </div>
            </div>
        </motion.li>
    );
}


export default Services
