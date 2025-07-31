import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Gleamer Logistics",
};

export default function ContactUs() {
  return (
    <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28'>
      <div className='mb-16'>
        <div className='flex gap-2.5 items-center justify-center mb-3'>
          <span>
            <Icon
              icon={'fluent:vehicle-truck-profile-24-filled'}
              width={20}
              height={20}
              className='text-primary'
            />
          </span>
          <p className='text-base font-semibold text-badge dark:text-white/90'>
            Contact Logistics
          </p>
        </div>
        <div className='text-center max-w-3xl mx-auto'>
          <h3 className='text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14'>
            Need reliable delivery or freight support?
          </h3>
          <p className='text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6'>
            Whether you are managing high-volume shipments or need custom logistics planning, we are ready to help.
          </p>
        </div>
      </div>

      {/* Form Section - Updated layout */}
      <div className='border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10'>
        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Image Container - Now larger and full-height */}
          <div className='relative w-full lg:w-[55%] aspect-[3/4] lg:aspect-auto lg:h-[700px]'>
            <Image
              src="/images/categories/freight.jpg"
              alt='Logistics Support'
              fill
              className='rounded-2xl brightness-50 object-cover'
              unoptimized={true}
            />
            <div className='absolute inset-0 flex flex-col justify-between p-6 lg:p-12'>
              <div>
                <h5 className='text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4'>
                  Logistics Support Team
                </h5>
                <p className='text-base md:text-lg font-normal text-white/80 max-w-md'>
                  Speak with a fleet expert or request a custom delivery quote.
                </p>
              </div>
              <div className='flex flex-col gap-6 text-white'>
                <Link href={'tel:+38344695321'} className='w-fit'>
                  <div className='flex items-center gap-4 group w-fit'>
                    <Icon icon={'ph:phone'} width={32} height={32} className='flex-shrink-0' />
                    <p className='text-lg font-normal group-hover:text-primary transition-colors'>
                      +383 44 695 321
                    </p>
                  </div>
                </Link>
                <Link href={'mailto:office@amr-logistics.com'} className='w-fit'>
                  <div className='flex items-center gap-4 group w-fit'>
                    <Icon icon={'ph:envelope-simple'} width={32} height={32} className='flex-shrink-0' />
                    <p className='text-lg font-normal group-hover:text-primary transition-colors'>
                      office@amr-logistics.com
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

          {/* Form Container - Better alignment */}
          <div className='w-full lg:w-[45%] flex items-center'>
            <div className='w-full'>
              <h4 className='text-2xl md:text-3xl font-medium mb-8 text-black dark:text-white'>
                Get a Custom Quote
              </h4>
              <form>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-col lg:flex-row gap-6'>
                    <input
                      type='text'
                      name='companyName'
                      placeholder='Company or Full Name*'
                      required
                      className='px-6 py-4 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                    />
                    <input
                      type='number'
                      name='phone'
                      placeholder='Phone number*'
                      required
                      className='px-6 py-4 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full'
                    />
                  </div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Business Email*'
                    required
                    className='px-6 py-4 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline'
                  />
                  <textarea
                    rows={6}
                    name='message'
                    placeholder='Tell us about your transport needs, delivery areas, or fleet questions.'
                    required
                    className='px-6 py-4 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline min-h-[180px]'></textarea>
                  <button className='px-8 py-4 rounded-full bg-primary text-white text-lg font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300 transition-colors'>
                    Request Quote
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
