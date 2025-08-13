import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Gleamer Physiotherapy",
};

export default function ContactUs() {
  return (
    <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
      <div className='mb-16'>
        <div className='flex gap-2.5 items-center justify-center mb-3'>
          <span>
            <Icon
              icon={'mdi:medical-bag'}
              width={20}
              height={20}
              className='text-green-600'
            />
          </span>
          <p className='text-base font-semibold text-green-700 dark:text-green-300'>
            Contact Our Clinic
          </p>
        </div>
        <div className='text-center max-w-3xl mx-auto'>
          <h3 className='text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14'>
            Need physiotherapy or rehabilitation support?
          </h3>
          <p className='text-xm font-normal tracking-tight text-black/60 dark:text-white/60 leading-6'>
            Whether you need injury recovery, chronic pain treatment, or mobility support, our expert physiotherapists are here to help.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className='border border-green-200 dark:border-green-800 rounded-2xl p-4 shadow-xl bg-gradient-to-br from-green-50 via-gray-50 to-white dark:from-green-900/20 dark:via-gray-900 dark:to-gray-950'>
        <div className='flex flex-col lg:flex-row gap-12'>
          
          {/* Image */}
          <div className='relative w-full lg:w-[55%] aspect-[3/4] lg:aspect-auto lg:h-[700px]'>
            <Image
              src="/images/physio/hero3.jpg"
              alt='Physiotherapy Support'
              fill
              className='rounded-2xl object-cover shadow-lg'
              unoptimized={true}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl p-6 lg:p-12 flex flex-col justify-between'>
              <div>
                <h5 className='text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4'>
                  Our Care Team
                </h5>
                <p className='text-base md:text-lg font-normal text-white/80 max-w-md'>
                  Speak directly with a physiotherapist or book your initial consultation.
                </p>
              </div>
              <div className='flex flex-col gap-6 text-white'>
                <Link href={'tel:+38344695321'} className='w-fit'>
                  <div className='flex items-center gap-4 group w-fit'>
                    <Icon icon={'ph:phone'} width={32} height={32} className='flex-shrink-0' />
                    <p className='text-lg font-normal group-hover:text-green-400 transition-colors'>
                      +383 44 695 321
                    </p>
                  </div>
                </Link>
                <Link href={'mailto:office@gleamerphysio.com'} className='w-fit'>
                  <div className='flex items-center gap-4 group w-fit'>
                    <Icon icon={'ph:envelope-simple'} width={32} height={32} className='flex-shrink-0' />
                    <p className='text-lg font-normal group-hover:text-green-400 transition-colors'>
                      office@gleamerphysio.com
                    </p>
                  </div>
                </Link>
                <div className='flex items-center gap-4'>
                  <Icon icon={'ph:map-pin'} width={32} height={32} className='flex-shrink-0' />
                  <p className='text-lg font-normal'>
                    Prishtine, Kosove
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className='w-full lg:w-[45%] flex items-center'>
            <div className='w-full'>
              <h4 className='text-2xl md:text-3xl font-medium mb-8 text-black dark:text-white'>
                Book an Appointment
              </h4>
              <form>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-col lg:flex-row gap-6'>
                    <input
                      type='text'
                      name='fullName'
                      placeholder='Full Name*'
                      required
                      className='px-6 py-4 border border-green-200 dark:border-green-800 rounded-full outline-green-500 focus:outline w-full'
                    />
                    <input
                      type='tel'
                      name='phone'
                      placeholder='Phone number*'
                      required
                      className='px-6 py-4 border border-green-200 dark:border-green-800 rounded-full outline-green-500 focus:outline w-full'
                    />
                  </div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email*'
                    required
                    className='px-6 py-4 border border-green-200 dark:border-green-800 rounded-full outline-green-500 focus:outline'
                  />
                  <textarea
                    rows={6}
                    name='message'
                    placeholder='Tell us about your injury, pain, or recovery needs.'
                    required
                    className='px-6 py-4 border border-green-200 dark:border-green-800 rounded-2xl outline-green-500 focus:outline min-h-[180px]'></textarea>
                  <button className='px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold w-full mobile:w-fit transition-colors duration-300'>
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
