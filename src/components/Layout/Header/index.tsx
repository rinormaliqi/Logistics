'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavLink from './Navigation/NavLink'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  const isHomepage = pathname === '/'

  return (
    <header className={`fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 ${sticky ? "top-3" : "top-0"}`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 ${sticky ? "shadow-lg bg-white dark:bg-dark rounded-full top-5 px-4 " : "shadow-none top-0"}`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div>
            <Link href='/'>
              <Image
                src={'/physio.png'}
                alt='logo'
                width={50}
                height={30}
                unoptimized={true}
                className={`${isHomepage ? sticky ? "block dark:hidden" : "hidden" : sticky ? "block dark:hidden" : "block dark:hidden"}`}
              />
              <Image
                src={'/physio.png'}
                alt='logo'
                width={50}
                height={30}
                unoptimized={true}
                className={`${isHomepage ? sticky ? "hidden dark:block" : "block" : sticky ? "dark:block hidden" : "dark:block hidden"}`}
              />
            </Link>
          </div>
          <div className='flex items-center gap-2 sm:gap-6'>
            {/* <button
              className='hover:cursor-pointer'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Icon
                icon={'solar:sun-bold'}
                width={32}
                height={32}
                className={`dark:hidden block ${isHomepage
                  ? sticky
                    ? 'text-dark'
                    : 'text-white'
                  : 'text-dark'
                  }`}
              />
              <Icon
                icon={'solar:moon-bold'}
                width={32}
                height={32}
                className='dark:block hidden text-white'
              />
            </button> */}
            
            {/* <LanguageSwitcher/> */}
   <div className="flex gap-4">
              <Link 
                href="https://www.facebook.com/share/1BRCWLGMpf/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon 
                  icon="fa6-brands:facebook" 
                  width={24} 
                  height={24} 
                  className="text-blue-600 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
                />
              </Link>
              <Link 
                href="https://www.instagram.com/fizioterapi.biocenter?igsh=azFxMnlyNnp6Z25k&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon 
                  icon="fa6-brands:instagram" 
                  width={24} 
                  height={24} 
                  className="text-pink-600 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
                />
              </Link>
              <Link 
                href="https://www.tiktok.com/@physiotherapy_biocenter?_t=ZM-903Tw6n8gYN&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-black hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon 
                  icon="fa6-brands:tiktok" 
                  width={24} 
                  height={24} 
                  className="text-black transition-all duration-300 group-hover:text-white group-hover:scale-105" 
                />
              </Link>
            </div>
            <div className={`hidden md:block`}>
<div
  onClick={() => {
    const phoneNumber = '+38344468100';
    window.location.href = `tel:${phoneNumber}`;
  }}
  className={`cursor-pointer text-base text-inherit flex items-center gap-2 border-r pr-6 ${
    isHomepage
      ? sticky
        ? 'text-dark dark:text-dark hover:text-primary border-dark dark:border-white'
        : 'text-dark hover:text-primary'
      : 'text-dark hover:text-primary'
  }`}
>
  <Icon icon={'ph:phone-bold'} width={24} height={24} />
  +383 44 468 100
</div>





              
            </div>
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border ${isHomepage
                  ? sticky
                    ? 'text-white bg-green-300 dark:bg-white dark:text-dark dark:hover:text-white dark:hover:bg-dark hover:text-dark hover:bg-white border-none dark:border-none'
                    : 'text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-none'
                  : 'bg-green-500 text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white duration-300'
                  }`}
                aria-label='Toggle mobile menu'>
                <span>
                  <Icon icon={'ph:list'} width={24} height={24} />
                </span>
                <span className='hidden sm:block'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {
        navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )
      }

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-green-300 shadow-lg transition-transform duration-300 max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50 px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-10'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-3 rounded-full hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className='flex flex-col items-start gap-4'>
              <ul className='w-full'>
                {navLinks.map((item, index) => (
                  <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                ))}
                {/* <li className='flex items-center gap-4'>
                  <Link href="/signin" className='py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300'>
                    Sign In
                  </Link>
                  <Link href="/" className='py-4 px-8 bg-transparent border border-primary text-base leading-4 block w-fit text-primary rounded-full font-semibold mt-3 hover:bg-primary hover:text-white duration-300'>
                    Sign up
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-1 my-16 text-black'>
            <p className='text-base sm:text-xm font-normal text-white/40'>
              Contact
            </p>
            <Link href="#" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
fizioterapiabiocenter@gmail.com
            </Link>
<div
  onClick={() => {
    const phoneNumber = '+38344468100';
    window.location.href = `tel:${phoneNumber}`;
  }}
  className={`cursor-pointer text-base text-inherit flex items-center gap-2 border-r pr-6 ${
    isHomepage
      ? sticky
        ? 'text-dark dark:text-dark hover:text-primary border-dark dark:border-white'
        : 'text-dark hover:text-primary'
      : 'text-dark hover:text-primary'
  }`}
>
  <Icon icon={'ph:phone-bold'} width={24} height={24} />
  +383 44 468 100
</div>




            {/* Social Media Icons */}
        <div className="flex gap-4 mt-6">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon 
                  icon="fa6-brands:facebook" 
                  width={24} 
                  height={24} 
                  className="text-blue-600 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
                />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon 
                  icon="fa6-brands:instagram" 
                  width={24} 
                  height={24} 
                  className="text-pink-600 transition-all duration-300 group-hover:text-white group-hover:scale-105" 
                />
              </Link>
              <Link 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-black hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon 
                  icon="fa6-brands:tiktok" 
                  width={24} 
                  height={24} 
                  className="text-black transition-all duration-300 group-hover:text-white group-hover:scale-105" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header