import { useState } from 'react'
import { motion } from 'motion/react'

function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <nav className="bg-background shadow-lg fixed z-30 w-full flex flex-col" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex w-full justify-between">
        <div className="flex items-center justify-between py-2">
            <a href="#beranda" className="text-3xl font-bold text-primary" aria-label="Logo" tabIndex={-1}>
                <img src="./assets/images/Banner.svg" alt="Logo" className="h-14" />
          </a>
        </div>
        <div className="w-4/5 hidden md:flex items-center  justify-end mr-4 " role="menubar">
          <DesktopNavButton href="#beranda">Beranda</DesktopNavButton>
          <DesktopNavButton href="#layanan">Layanan</DesktopNavButton>
          <DesktopNavButton href="#keunggulan">Keunggulan</DesktopNavButton>
          <a href="#kontak" className="no-underline transition duration-500 bg-transparent text-primary hover:bg-primary hover:scale-105 border-2 border-primary hover:text-background px-3 lg:px-5 py-2 text-sm lg:text-base font-sans font-bold uppercase">kontak kami</a>
        </div>
        <div className="md:hidden h-20 flex items-center justify-end w-2/5 px-3">
          <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="text-primary hover:text-background hover:bg-primary p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Toggle menu" tabIndex={0}>
            <svg className="h-8 fill-current" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" />
            </svg>
          </button>
        </div>
                        
          </div>
          {openMobileMenu && (
            <div className="md:hidden w-full bg-white shadow-lg " role="menu">
              <MobileNavButton href="#beranda">Beranda</MobileNavButton>
              <MobileNavButton href="#layanan">Layanan</MobileNavButton>
              <MobileNavButton href="#keunggulan">Keunggulan</MobileNavButton>
              <MobileNavButton href="#kontak">Kontak</MobileNavButton>
            </div>
          )}
    </nav>
  )
}

function DesktopNavButton(props) {
    const [hovered, setHovered] = useState(false);
    return (
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className=" px-5 group flex flex-col justify-center items-start h-full transition duration-500">
        <a href={props.href} className="px-3 w-full text-center no-underline text-base lg:text-lg  font-san font-semibold text-text" role="menuitem" tabIndex={-1}>{props.children}</a>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hovered ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-primary rounded-xl h-0.5 w-1/2"
        />
      </motion.div>
    )
}

function MobileNavButton(props) {
    return (
        <a href={props.href} className="flex justify-center items-center w-full py-3 text-lg font-sans text-primary focus:text-background focus:bg-primary no-underline transition duration-500 hover:text-background hover:bg-primary hover:font-semibold" role="menuitem" tabIndex={-1}>
            {props.children}
        </a>
    );
}


export default Navbar

