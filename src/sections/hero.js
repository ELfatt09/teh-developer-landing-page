
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
    <motion.section
      id='beranda' className='mt-20 w-full mb-32 md:mb-40 lg:mb-48 flex flex-col items-center  bg-background text-text' aria-label='hero'>
      <motion.div
        className='w-full max-w-5xl flex items-center justify-between px-8'>
        <motion.h1
          className='text-4xl md:text-6xl mt-10 font-sans flex flex-wrap justify-center font-medium leading-normal  md:leading-loose tracking-tighter space-x-2 text-center'>
          {['Punya ', 'Website ', 'dan ', 'Aplikasi ', 'Sekarang ', 'Semudah '].map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className=' mr-2'>
              {word}
            </motion.span>
          ))}
          <motion.span
            
            initial={{ width: 0, }}
            whileInView={{ width: 'auto', }}
            transition={{ delay: 1.7, duration: 0.5 }}
            viewport={{ once: true }}
            className='text-background bg-primary font-semibold whitespace-nowrap overflow-hidden '>
            <span className='px-5'>Nge-Teh</span>
            
          </motion.span>

        </motion.h1>
      </motion.div>

      <motion.div className='w-full text-center flex flex-col items-center mt-6 md:mt-10 lg:mt-12'>
        <motion.p
          
          initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          
          className='px-5 text-text text-xs md:text-sm lg:text-base w-auto mx-auto md:w-1/2 mb-4'>
          Dapatkan website profesional, Aplikasi web dan bantuan IT untuk usaha Anda tanpa perlu coding atau desain rumit. Mudah, cepat, dan terjangkau.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className='mt-5 md:mt-7 lg:mt-10'
        >
          <a
            href='#layanan'
            className='no-underline transition duration-300 bg-transparent text-primary border-2 border-primary shadow-primary hover:bg-primary hover:text-background hover:shadow-xl px-5 py-2 text-md font-sans font-bold uppercase'
          >
            Layanan Kami
          </a>
        </motion.div>

      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        className='mt-12 md:mt-18 lg:mt-24 h-auto overflow-hidden w-full ' role='img' aria-label='marquee'>
          <Marquee images={pics} duration={40} />
        </motion.div>
    </motion.section>
  );
}

function Marquee({ images, duration = 20, speed = 1.5 }) {
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
        setWidth(rect.width / 2 * speed); // karena kita duplikat array
      }
    }

    imgEls.forEach((img) => {
      if (img.complete) {
        checkLoaded();
      } else {
        img.addEventListener('load', checkLoaded, { once: true });
      }
    });
  }, [images, speed]);

  // update on resize dengan debounce
  useLayoutEffect(() => {
    let tid;
    const handleResize = () => {
      clearTimeout(tid);
      tid = setTimeout(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setWidth(rect.width / 2 ); // update lebar sesuai ukuran baru
        }
      }, 100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(tid);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  // duplikat array untuk looping
  const duo = [...images, ...images];

  return (
    <motion.div
      className='relative overflow-hidden py-10'>
      
      <motion.div
        viewport={{ once: true }}
        ref={containerRef}
        className='flex whitespace-nowrap'
        animate={{ x: [0, -width] }}
        transition={{
          duration: duration / speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        role='img'
        aria-label='image marquee'
      >
        {duo.map((src, idx) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            key={idx} className='flex-shrink-0 w-auto h-40 lg:h-60 mr-3 shadow-lg shadow-text rounded-xl overflow-hidden'>
            <img
              src={src}
              alt={`marquee ${idx}`}
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Hero;



