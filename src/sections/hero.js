
import { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const pics =[
  "./assets/images/project/artikel-desktop.webp",
  "./assets/images/project/artikel-mobile.webp",
  "./assets/images/project/e-report-desktop.webp",
  "./assets/images/project/e-report-mobile.webp",
  "./assets/images/project/idn-desktop.webp",
  "./assets/images/project/login-twiahh-desktop.webp",
  "./assets/images/project/rama-desktop.webp",
  "./assets/images/project/rama-mobile.webp",
  "./assets/images/project/technova-desktop.webp",
  "./assets/images/project/technova-mobile.webp",
  "./assets/images/project/twiaah-desktop.webp"
];

  return (
    <section id='beranda' className='mt-20 w-full min-h-screen flex flex-col items-center justify-center bg-background text-text' aria-label='hero'>
      <div className='w-full max-w-5xl flex items-center justify-between px-8'>
        <h1 className='text-4xl md:text-6xl mt-10 font-sans font-medium leading-normal  md:leading-loose tracking-tighter text-center'>
          Punya Website dan Aplikasi Sekarang Semudah <span className='text-background bg-primary px-5 font-semibold'>Nge-Teh</span>.
        </h1>
      </div>

      <div className='w-full text-center flex flex-col items-center mt-10'>
        <p className='px-5 text-text text-xs md:text-sm lg:text-base w-auto mx-auto md:w-1/2 mb-4'>
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
  const containerRef = useRef();
  const [width, setWidth] = useState(0);

  // Hitung total lebar setelah semua gambar ke-load
  useLayoutEffect(() => {
    const imgEls = containerRef.current.querySelectorAll('img');
    let loadedCount = 0;

    function checkLoaded() {
      loadedCount += 1;
      if (loadedCount === imgEls.length) {
        // semua gambar siap
        const rect = containerRef.current.getBoundingClientRect();
        setWidth(rect.width / 2); // karena kita duplikat array
      }
    }

    imgEls.forEach((img) => {
      if (img.complete) {
        checkLoaded();
      } else {
        img.addEventListener('load', checkLoaded, { once: true });
      }
    });
  }, [images]);

  // update on resize dengan debounce
  useLayoutEffect(() => {
    let tid;
    const handleResize = () => {
      clearTimeout(tid);
      tid = setTimeout(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setWidth(rect.width / 2);
        }
      }, 100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(tid);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // duplikat array untuk looping
  const duo = [...images, ...images];

  return (
    <div className='relative overflow-hidden py-5'>
      <motion.div
        ref={containerRef}
        className='flex whitespace-nowrap'
        animate={{ x: [0, -width] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        role='img'
        aria-label='image marquee'
      >
        {duo.map((src, idx) => (
          <div key={idx} className='flex-shrink-0 w-auto h-60 mr-2'>
            <img
              src={src}
              alt={`marquee ${idx}`}
              className='w-full h-full object-cover rounded-2xl shadow-lg'
              loading='lazy'
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;


