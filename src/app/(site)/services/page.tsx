import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background vector */}
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector dark"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          
          {/* Text Section */}
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon="ph:truck-fill" className="text-2xl text-primary" />
              Our Services
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
              Smart logistics solutions to move your business forward.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg md:max-w-3/4 leading-[1.3]">
              From freight and warehouse management to last-mile delivery—our logistics
              solutions are optimized to deliver efficiency and speed.
            </p>
            <Link
              href="/services"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
            >
              View all services
            </Link>
          </div>

          {/* Category Cards */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/freight-shipping">
                <Image
                  src="/images/categories/freight.jpg"
                  alt="Freight Shipping"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="/freight-shipping"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Freight Shipping</h3>
                  <p className="text-white/80 text-base leading-6">
                    Full truckload (FTL) and less-than-truckload (LTL) shipping across the region.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Second Row - Consistent Height Cards */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-full">
              <Link href="/warehouse-management">
                <Image
                  src="/images/categories/warehouse.jpg"
                  alt="Warehouse"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </Link>
              <Link
                href="/warehouse-management"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Warehousing</h3>
                  <p className="text-white/80 text-base leading-6">
                    Secure, scalable storage and real-time inventory management.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Wrapper for last two cards to ensure same height */}
      {/* Wrapper for last two cards to ensure same height */}
<div className="lg:col-span-6 col-span-12">
  <div className="grid grid-cols-2 gap-6 h-[386px]"> {/* Match warehouse card height here */}
    <div className="relative rounded-2xl overflow-hidden group">
      <Link href="/last-mile-delivery">
        <Image
          src="/images/categories/last-mile.jpg"
          alt="Last Mile"
          width={680}
          height={386}
          className="w-full h-full object-cover"
          unoptimized
        />
      </Link>
      <Link
        href="/last-mile-delivery"
        className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
      >
        <div className="flex justify-end mt-6 mr-6">
          <div className="bg-white text-dark rounded-full w-fit p-4">
            <Icon icon="ph:arrow-right" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-white text-2xl">Last Mile</h3>
          <p className="text-white/80 text-base leading-6">
            Fast and flexible last-mile delivery tailored for businesses.
          </p>
        </div>
      </Link>
    </div>

    <div className="relative rounded-2xl overflow-hidden group">
      <Link href="/express-courier">
        <Image
          src="/images/categories/courier.jpg"
          alt="Courier"
          width={680}
          height={386}
          className="w-full h-full object-cover"
          unoptimized
        />
      </Link>
      <Link
        href="/express-courier"
        className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
      >
        <div className="flex justify-end mt-6 mr-6">
          <div className="bg-white text-dark rounded-full w-fit p-4">
            <Icon icon="ph:arrow-right" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-white text-2xl">Express Courier</h3>
          <p className="text-white/80 text-base leading-6">
            Door-to-door same-day delivery across major cities.
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
