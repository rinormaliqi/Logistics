import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-green-100 via-green-50 to-gray-50 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 sm:px-10 lg:px-20 pt-20 md:pt-32 md:pb-80'>
          
          {/* Teksti kryesor */}
          <div className='relative text-gray-800 text-center md:text-start z-10 md:mt-20'>
            <p className='text-green-700 text-sm sm:text-base font-medium'>Kujdes i Personalizuar</p>
            <h1 className='text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight md:max-w-2xl mt-4 mb-6'>
              Shërohu. Rikthehu...<br />
              Bio Center.
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link
                href="/contactus"
                className='px-6 sm:px-8 py-3 sm:py-4 border border-green-600 bg-green-600 text-white hover:bg-green-500 hover:border-green-500 duration-300 text-sm sm:text-base font-semibold rounded-full'
              >
                Rezervo Termin
              </Link>
              <button className='px-6 sm:px-8 py-3 sm:py-4 border border-green-600 bg-transparent text-green-700 hover:bg-green-50 duration-300 text-sm sm:text-base font-semibold rounded-full'>
                Na Kontakto
              </button>
            </div>
          </div>

          {/* Foto në mobile */}
          <div className="block md:hidden mt-8">
            <Image
              src={'/images/physio/hero4.jpeg'}
              alt='Fizioterapeut'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Foto në desktop */}
          <div className='hidden md:block absolute -top-2 -right-68'>
            <Image
              src={'/images/physio/hero4.jpeg'}
              alt='Fizioterapeut'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Info Cards */}
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white py-8 px-6 sm:px-12 md:px-16 rounded-2xl md:rounded-none md:rounded-tl-2xl mt-12 shadow-lg'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 text-gray-800'>
            
            <div className='flex flex-col items-center gap-2'>
              <Icon icon="mdi:human-male" width={28} className="text-green-700" />
              <p className='text-xs sm:text-sm md:text-base font-normal text-center'>20+ Vjet Përvojë</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <Icon icon="mdi:hand-heart" width={28} className="text-green-700" />
              <p className='text-xs sm:text-sm md:text-base font-normal text-center'>Trajtime të Personalizuara</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <Icon icon="mdi:clock-outline" width={28} className="text-green-700" />
              <p className='text-xs sm:text-sm md:text-base font-normal text-center'>Orar Fleksibel</p>
            </div>

            <div className='flex flex-col items-center gap-1'>
              <p className='text-xl sm:text-2xl md:text-3xl font-medium text-green-700 text-center'>
                08:00-18:00
              </p>
              <p className='text-xs sm:text-sm md:text-base font-normal text-gray-500 text-center'>
                E hënë - E premte
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

