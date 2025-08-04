const AdvantageItem = ({ number, title, imgSrc, description }) => (
  <div className='group transition border text-text border-primary duration-300 w-full max-w-sm p-8 bg-white/50 hover:scale-105 hover:bg-primary hover:text-background min-h-[30rem] flex flex-col items-center justify-center mt-10'>
    <div className='flex items-center justify-center w-16 h-16 bg-primary text-background text-3xl font-sans rounded-full'>
      {number}
    </div>
    <h3 className='text-2xl font-sans mt-5 text-center'>{title}</h3>
    <img src={imgSrc} alt={title} className='w-1/2 mt-5' />
    <p className='text-text/70 group-hover:text-background/70 text-sm md:text-md inline-block font-semibold text-center mt-5'>
      {description}
    </p>
  </div>
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
    <section id='keunggulan' className='w-full min-h-screen flex flex-col items-center bg-background text-text mt-20 pt-10 pb-20'>
      <div className='w-full max-w-5xl flex flex-col justify-center items-center px-8 leading-loose group'>
        <h1 className='text-4xl md:text-5xl mt-10 font-sans leading-relaxed tracking-tighter text-center font-medium'>
          Keunggulan <span className='bg-primary text-background px-3 font-semibold'>kami</span>
        </h1>
        <div className='transition duration-1000 bg-text w-3 md:bg-text/0 group-hover:bg-text/100 scale-x-[3000%] md:scale-x-0 group-hover:scale-x-[5000%] max-w-lg h-0.5 mt-3'></div>
      </div>
      <div className='w-full flex flex-wrap items-start justify-center mt-10 gap-5 px-10'>
        {advantages.map((advantage, index) => (
          <>
          <AdvantageItem key={index} {...advantage} />
          </>
        ))}
      </div>
    </section>
  );
}

export default Advantages;

