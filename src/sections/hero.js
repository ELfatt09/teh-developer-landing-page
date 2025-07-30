import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function Hero() {
  const pics = [...Array(10)].map((_, i) => `https://picsum.photos/seed/${i}/400/300`);

  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center bg-background text-text'>
      <div className='w-full max-w-5xl flex items-center justify-between px-8'>
        <h1 className='text-5xl md:text-7xl mt-10 font-sans leading-relaxed  md:leading-loose tracking-tighter text-center'>
          Punya Website Usaha Sekarang Semudah <span className='text-background bg-primary px-5 font-semibold'>Nge-Teh</span>.
        </h1>
      </div>

      <div className='w-full text-center flex flex-col items-center'>
        <p className='px-5 text-text text-md md:text-lg w-full  max-w-2xl mx-auto'>
          Dapatkan website profesional, Aplikasi web dan bantuan IT untuk usaha Anda tanpa perlu coding atau desain rumit. Mudah, cepat, dan terjangkau.
        </p>
        <a href='#kontak' className='transition duration-300 bg-primary shadow-primary text-background hover:bg-secondary/50 hover:scale-105 hover:text-primary hover:shadow-xl px-5 py-2 mt-6 text-xl font-sans font-medium tracking-tight'>
          Kontak Kami
        </a>
        <div className='mt-24 h-60 overflow-hidden w-full mb-10'>
          <Marquee images={pics} duration={20} />
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
    <div className='relative'>
      {/* invisible wrapper buat ukur 1x set gambar */}
      <div
        ref={measureRef}
        className='flex invisible absolute top-0 left-0 pointer-events-none whitespace-nowrap'
      >
        {images.map((src, idx) => (
          <div key={idx} className='flex-shrink-0 w-72 h-60 mr-2'>
            <img src={src} alt={`measure ${idx}`} className='w-full h-full object-cover rounded-2xl' />
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
      >
        {duo.map((src, idx) => (
          <div key={idx} className='flex-shrink-0 w-100 h-60 mr-2'>
            <img src={src} alt={`hero ${idx}`} className='w-full h-full object-cover rounded-2xl' />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;
