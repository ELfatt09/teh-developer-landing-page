import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function Hero() {
  const pics =[
  "./assets/images/project/artikel-desktop.png",
  "./assets/images/project/artikel-mobile.png",
  "./assets/images/project/e-report-desktop.png",
  "./assets/images/project/e-report-mobile.png",
  "./assets/images/project/idn-desktop.png",
  "./assets/images/project/login-twiahh-desktop.png",
  "./assets/images/project/rama-desktop.png",
  "./assets/images/project/rama-mobile.png",
  "./assets/images/project/technova-desktop.png",
  "./assets/images/project/technova-mobile.png",
  "./assets/images/project/twiaah-desktop.png"
];

  return (
    <section id='beranda' className='mt-20 w-full min-h-screen flex flex-col items-center justify-center bg-background text-text' aria-label='hero'>
      <div className='w-full max-w-5xl flex items-center justify-between px-8'>
        <h1 className='text-5xl md:text-6xl mt-10 font-sans font-medium leading-normal  md:leading-loose tracking-tighter text-center'>
          Punya Website dan Aplikasi Sekarang Semudah <span className='text-background bg-primary px-5 font-semibold'>Nge-Teh</span>.
        </h1>
      </div>

      <div className='w-full text-center flex flex-col items-center mt-10'>
        <p className='px-5 text-text text-sm md:text-base w-auto mx-auto lg:w-1/2 mb-4'>
          Dapatkan website profesional, Aplikasi web dan bantuan IT untuk usaha Anda tanpa perlu coding atau desain rumit. Mudah, cepat, dan terjangkau.
        </p>
        <a href='#layanan' className='no-underline transition duration-300 bg-transparent text-primary border-2 border-primary shadow-primary hover:bg-primary hover:text-background hover:shadow-xl px-5 py-2 mt-6 text-md font-sans font-bold uppercase '>
          Layanan Kami
        </a>
        <div className='mt-24 h-72 overflow-hidden w-full mb-10 bg-primary shadow-primary/50 shadow-[inset_10px_4px_8px_1px_rgba(1,0,0,1)]' role='img' aria-label='marquee'>
          <Marquee images={pics} duration={40} />
        </div>
      </div>
    </section>
  );
}

function Marquee({ images, duration = 20 }) {
  const measureRef = useRef();
  const [singleWidth, setSingleWidth] = useState(0);

  useEffect(() => {

    const calc = () => {
      if (measureRef.current) {
        setSingleWidth(measureRef.current.getBoundingClientRect().width);
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const duo = [...images, ...images];

  return (
    <div className='relative py-5'>
      {/* invisible wrapper buat ukur 1x set gambar */}
      <div
        ref={measureRef}
        className='flex invisible absolute top-0 left-0 pointer-events-none whitespace-nowrap'
        role='img'
        aria-hidden='true'
      >
        {images.map((src, idx) => (
          <div key={idx} className='flex-shrink-0 w-[10rem] h-60 mr-2'>
            <img src={src} alt={`measure ${idx}`} className='w-full h-full object-cover rounded-2xl shadow-lg' />
          </div>
        ))}
      </div>

      {/* actual marquee */}
      <motion.div
        className='flex'
        animate={{ x: [0, -singleWidth] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        role='img'
        aria-label='marquee'
      >
        {duo.map((src, idx) => (
          <div key={idx} className='flex-shrink-0 h-60 mr-2'>
            <img src={src} alt={`hero ${idx}`} className='w-full h-full object-cover rounded-2xl shadow-lg' />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;


