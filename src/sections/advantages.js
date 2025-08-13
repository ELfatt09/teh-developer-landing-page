import { motion } from 'framer-motion';

const AdvantageItem = ({ number, title, imgSrc, description }) => (
  <motion.div
    initial={{y: -25}}
    animate={{ y: 25}}
    transition={{ delay: 2, duration: Math.random() * 6 + 2, repeat: Infinity, repeatType: 'reverse',  ease: 'easeInOut' }}
    className='group transition border text-text shadow-2xl duration-300 w-full max-w-sm px-4 bg-white/50 hover:scale-105 hover:bg-primary hover:text-background min-h-[30rem] flex flex-col items-center justify-center mt-10'>
    <div className='flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-primary text-background text-xl md:text-2xl lg:text-3xl font-sans rounded-full'>
      {number}
    </div>
    <h3 className='text-lg md:text-xl lg:text-2xl font-sans mt-5 text-center'>{title}</h3>
    <img src={imgSrc} alt={title} className='w-1/2 mt-5' />
    <p className='text-text/70 group-hover:text-background/70 text-xs md:text-sm lg:text-md inline-block font-semibold text-center mt-5'>
      {description}
    </p>
  </motion.div>
);

function Advantages() {
  const advantages = [
    {
      number: '01',
      title: 'Harga Murah',
      imgSrc: './assets/images/murah.svg',
      description:
        'Menyediakan solusi pembuatan website custom dengan tarif kompetitif, khusus untuk pemilik UMKM, minimarket, café, apotek, dan usaha kecil lainnya.',
    },
    {
      number: '02',
      title: 'Proses Mudah',
      imgSrc: './assets/images/mudah.svg',
      description:
        'Cukup berikan gambaran kebutuhan dan pilihan hosting/domain, tim kami yang urus semua teknis hingga live.',
    },
    {
      number: '03',
      title: 'Dukungan Penuh',
      imgSrc: './assets/images/dukungan.svg',
      description:
        'Support responsif via chat atau email selama dan setelah project berjalan, sehingga Anda dapat fokus kepada bisnis Anda tanpa perlu khawatirkan website Anda.',
    },
  ];

  return (
      <section id='keunggulan' className='w-full mb-32 md:mb-40 lg:mb-48 flex flex-col items-center  bg-background text-text' aria-label='hero'>
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
         className='w-full max-w-5xl flex flex-col justify-center items-center px-8 leading-loose group'>
            <h2 id='advantages-heading' className='text-3xl md:text-5xl mt-10 font-sans leading-relaxed text-center  tracking-tighter font-medium'>
          Keunggulan <span className='bg-primary text-background px-3 font-semibold'>kami</span>
        </h2>
        <div className='transition duration-1000 bg-text w-3 md:bg-text/0 group-hover:bg-text/100 scale-x-[3000%] md:scale-x-0 group-hover:scale-x-[5000%] max-w-lg h-0.5 mt-3'></div>
      </motion.header>
      <motion.div
          
        className='w-full flex flex-wrap items-start justify-center mt-10 gap-5 px-10'>
        {advantages.map((advantage, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3 + index * 0.3, staggerChildren: 0.2 }}
          >
            <AdvantageItem {...advantage} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Advantages;

