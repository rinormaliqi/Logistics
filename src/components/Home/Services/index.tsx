import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-gray-50 to-white">
      {/* Content */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          
          {/* Text Section */}
          <div className="lg:col-span-6 col-span-12">
            <p className="text-green-700 text-base font-semibold flex gap-2.5">
              <Icon icon="mdi:medical-bag" className="text-2xl text-green-600" />
              Our Treatments
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 font-medium leading-[1.2] text-gray-900">
              Evidence-based physiotherapy for a faster recovery.
            </h2>
            <p className="text-gray-600 text-lg md:max-w-3/4 leading-[1.4]">
              We provide personalized treatment programs designed to restore your mobility, 
              reduce pain, and help you live your best life.
            </p>
            <Link
              href="/services"
              className="py-4 px-8 bg-green-600 text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-green-500 duration-300"
            >
              View all treatments
            </Link>
          </div>

          {/* Category Cards */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/services/manual-therapy">
                <Image
                  src="/images/physio/manual.jpg"
                  alt="Manual Therapy"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="/services/manual-therapy"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-green-700 rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Manual Therapy</h3>
                  <p className="text-white/80 text-base leading-6">
                    Hands-on techniques to reduce pain and restore movement.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Second Row */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-full">
              <Link href="/services/sports-rehabilitation">
                <Image
                  src="/images/physio/sports.jpg"
                  alt="Sports Rehabilitation"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </Link>
              <Link
                href="/services/sports-rehabilitation"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-green-700 rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Sports Rehabilitation</h3>
                  <p className="text-white/80 text-base leading-6">
                    Recovery plans tailored for athletes of all levels.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Last two cards */}
          <div className="lg:col-span-6 col-span-12">
            <div className="grid grid-cols-2 gap-6 h-[386px]">
              
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="/services/post-surgery-rehab">
                  <Image
                    src="/images/physio/posts.jpg"
                    alt="Post-Surgery Rehab"
                    width={680}
                    height={386}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </Link>
                <Link
                  href="/services/post-surgery-rehab"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-6 pb-6 group-hover:top-0 duration-500"
                >
                  <div className="flex justify-end mt-6 mr-6">
                    <div className="bg-white text-green-700 rounded-full w-fit p-4">
                      <Icon icon="ph:arrow-right" width={24} height={24} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-lg">Post-Surgery Rehab</h3>
                    <p className="text-white/80 text-sm leading-5">
                      Safe, guided recovery after surgical procedures.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="/services/pediatric-physio">
                  <Image
                    src="/images/physio/child.jpg"
                    alt="Pediatric Physiotherapy"
                    width={680}
                    height={386}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </Link>
                <Link
                  href="/services/pediatric-physio"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-6 pb-6 group-hover:top-0 duration-500"
                >
                  <div className="flex justify-end mt-6 mr-6">
                    <div className="bg-white text-green-700 rounded-full w-fit p-4">
                      <Icon icon="ph:arrow-right" width={24} height={24} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-lg">Pediatric Physio</h3>
                    <p className="text-white/80 text-sm leading-5">
                      Gentle, effective treatments for children’s needs.
                    </p>
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;
