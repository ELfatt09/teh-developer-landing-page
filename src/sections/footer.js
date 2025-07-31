import React from 'react'

function Footer() {
    return (
        <>
        <div className='w-full bg-primary py-10 flex flex-col md:flex-row px-6 lg:px-16 items-center justify-between text-text space-y-10 md:space-y-0'>
            <div className='w-full md:w-1/2 px-4'>
                <img src="/assets/images/white-banner.svg" alt="Logo" className='w-full max-w-xs mb-6' />
                <div className='w-full flex flex-col text-lg space-y-4'>
                    <a className='text-background no-underline hover:underline' href="mailto:sevalinoelfata@gmail.com">
                        <i className="fa-regular fa-envelope mr-3"></i>sevalinoelfata@gmail.com
                    </a>
                    <a className='text-background no-underline hover:underline' href="https://wa.me/6281381593080" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp mr-3"></i>+62 813-8159-3080
                    </a>
                    <a className='text-background no-underline hover:underline' href="https://instagram.com/tehdancode" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram mr-3"></i>@tehdancode
                    </a>
                </div>
                <a href='#beranda' className='transition duration-300 mt-8 border-background hover:bg-background hover:text-primary border-4 text-background text-md font-semibold uppercase py-2 px-4 inline-flex items-center'>
                    <i className='fa-solid fa-angles-up mr-3'></i> Kembali ke atas
                </a>
            </div>
            <div className='w-full md:w-1/2 mt-8 md:mt-0 flex flex-col px-8'>
                <h4 className='text-2xl font-semibold text-background mb-6'>Navigasi</h4>
                <ul className='space-y-4 text-lg list-disc text-background'>
                    <li><a className='text-background no-underline hover:underline' href='#beranda'>Beranda</a></li>
                    <li><a className='text-background no-underline hover:underline' href='#keunggul'>Kelebihan</a></li>
                    <li><a className='text-background no-underline hover:underline' href='#services'>Layanan</a></li>
                    <li><a className='text-background no-underline hover:underline' href='#kontak'>Kontak</a></li>
                </ul>
            </div>
        </div>
        <p className='text-center text-background text-sm bg-primary py-4'> 2025 - <span className='font-semibold'>Sevalino Elfata</span>. All Rights Reserved.</p>
        </>
            );
}

export default Footer