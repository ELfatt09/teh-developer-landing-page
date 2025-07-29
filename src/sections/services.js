import {useState} from 'react'
import { motion } from 'motion/react'

function Services() {
  return (
    <section className='w-full min-h-screen flex flex-col items-center bg-background text-text mt-20 pt-10 pb-20'>
          <div className='w-full max-w-5xl flex flex-col justify-center items-center px-8 leading-loose group'>
            <h2 className='text-4xl md:text-5xl mt-10 font-sans leading-relaxed text-center  tracking-tighter'>
                Layanan <span className='bg-primary text-background px-3 font-semibold'>kami</span>
              </h2>
              <div className='transition duration-1000 bg-text w-3 md:bg-text/0  group-hover:bg-text/100 scale-x-[3000%] md:scale-x-0 group-hover:scale-x-[5000%] max-w-lg h-0.5'></div>
          </div>
          <div className='w-full flex flex-col items-center justify-center mt-10'>
              <Service number="01"
                  title="Pembuatan Landing Page"
                  price="350.000+"
                  description="layanan Pembuatan landing page profesional untuk usaha Anda—desain menarik, responsif, dan siap meningkatkan penjualan serta kepercayaan pelanggan."
                  list={[ 
                "Desain modern dan profesional yang sesuai dengan identitas brand Anda",
                "Optimasi SEO untuk meningkatkan peringkat di mesin pencari",
                "Gratis Revisi minor 2x dan major 1x",
                "Bantuan pendaftaran Hosting dan Domain",
                "Bantuan Deployment",
                  ]} />
              <Service number="02"
                  title="Pembuatan Aplikasi Web"
                  price="1.000.000+"
                  description="Layanan pengembangan aplikasi web berbasis Laravel, dirancang khusus untuk memenuhi kebutuhan bisnis Anda—dengan sistem yang aman, cepat, dan mudah dikembangkan."
                  list={[ 
                    "Dibangun dengan Laravel — framework PHP modern dan powerful",
                    "Struktur kode rapi, mudah dikembangkan & dipelihara",
                    "Sistem autentikasi aman (login, register, role management, dsb)",
                    "Gratis Revisi minor 2x dan major 1x",
                    "Bantuan deployment ke server & setup hosting",
                    "Dokumentasi penggunaan dan struktur database",
                    "Bisa request fitur khusus sesuai kebutuhan",
                  ]} />
          </div>
      </section>
  )
}

function Service(props) {
    const [hover, setHover] = useState(false);

    return (
      <motion.div
            onClick={() => setHover(!hover)}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className={`transition duration-500 w-full h-min-20 h-full py-5 border-b border-text/40 ${hover ? 'bg-secondary/70' : 'hover:bg-secondary/70'} flex flex-col justify-center items-center group`}>
            <div className="w-full max-w-4xl flex flex-row justify-between items-center h-full">
              <div className="w-auto pr-3 md:w-1/3 h-full pl-5 ">
                    <span className="text-3xl font-sans text-primary inline-block">{props.number}</span>
              </div>
              <div className="w-full h-full flex flex-col pr-5">
                <div className="w-full flex flex-col sm:flex-row justify-between gap-3 items-center">
                        <h3 className="text-3xl w-full sm:w-2/3 font-sans text-text inline-block tracking-tighter">{ props.title}</h3>
                  <span className="text-xl font-sans w-full sm:w-1/3 text-primary inline-block tracking-tighter">Rp. {props.price}</span>
                </div>
                <p className="text-text/70 text-sm md:text-md inline-block mt-5 font-sans">{props.description}</p>
<motion.ul
        layout            // ← enable layout animations
        initial={{ opacity: 0, height: 0 }}
        animate={hover ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
        className="flex flex-wrap w-full whitespace-nowrap mt-7"
      >
        {props.list.map((item, i) => (
          <li key={i} className="w-full text-text text-sm whitespace-break-spaces mt-1">
            <span className="font-medium">{i+1}. </span>
            {item}
          </li>
        ))}
      </motion.ul>
              </div>
            </div>
        </motion.div>
    );
}


export default Services