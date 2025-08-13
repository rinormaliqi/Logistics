import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-green-100 via-green-50 to-gray-50 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-gray-800 text-center md:text-start z-10'>
            <p className='text-green-700 text-xm font-medium'>Personalized Care</p>
            <h1 className='text-gray-900 text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
              Heal. Recover. Thrive.
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link
                href="/book-appointment"
                className='px-8 py-4 border border-green-600 bg-green-600 text-white hover:bg-green-500 hover:border-green-500 duration-300 text-base font-semibold rounded-full'
              >
                Book Appointment
              </Link>
              <button className='px-8 py-4 border border-green-600 bg-transparent text-green-700 hover:bg-green-50 duration-300 text-base font-semibold rounded-full'>
                Contact Us
              </button>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-68'>
            <Image
              src={'/images/physio/hero4.jpeg'}
              alt='Physio Doctor'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24 shadow-lg'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center text-gray-800'>
            
            <div className='flex flex-col sm:items-center gap-3'>
              <Icon icon="mdi:human-male" width={32} className="text-green-700" />
              <p className='text-sm sm:text-base font-normal'>20+ Years Experience</p>
            </div>

            <div className='flex flex-col sm:items-center gap-3'>
              <Icon icon="mdi:hand-heart" width={32} className="text-green-700" />
              <p className='text-sm sm:text-base font-normal'>Personalized Treatment Plans</p>
            </div>

            <div className='flex flex-col sm:items-center gap-3'>
              <Icon icon="mdi:clock-outline" width={32} className="text-green-700" />
              <p className='text-sm sm:text-base font-normal'>Flexible Scheduling</p>
            </div>

            <div className='flex flex-col sm:items-center gap-3'>
              <p className='text-2xl sm:text-3xl font-medium text-green-700'>
                08:00-18:00
              </p>
              <p className='text-sm sm:text-base font-normal text-gray-500'>
                E hene - E premte
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
