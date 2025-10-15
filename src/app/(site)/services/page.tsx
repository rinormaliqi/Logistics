import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-gray-50 to-white py-12">
      {/* Përmbajtja */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          
          {/* Seksioni i Tekstit */}
          <div className="lg:col-span-6 col-span-12">
            <p className="text-green-700 text-base font-semibold flex gap-2.5">
              <Icon icon="mdi:medical-bag" className="text-2xl text-green-600" />
              Trajtimet Tona
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] mt-4 mb-3 font-medium leading-[1.2] text-gray-900">
              Fizioterapi e bazuar në prova për shërim më të shpejtë.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:max-w-3/4 leading-relaxed">
              Ofrojmë programe trajtimi të personalizuara për të rivendosur lëvizshmërinë tuaj,
              reduktuar dhimbjen dhe për t’ju ndihmuar të jetoni më mirë.
            </p>
            <Link
              href="/services"
              className="py-3 px-6 sm:py-4 sm:px-8 bg-green-600 text-base block w-fit text-white rounded-full font-semibold mt-6 hover:bg-green-500 duration-300"
            >
              Shiko të gjitha trajtimet
            </Link>
          </div>

          {/* Kartat e Kategorive */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/services">
                <Image
                  src="/images/physio/manual.jpg"
                  alt="Terapi Manuale"
                  width={680}
                  height={386}
                  className="w-full object-cover"
                  unoptimized
                />
              </Link>
              <Link
                href="/services"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-6 sm:p-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end">
                  <div className="bg-white text-green-700 rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-xl sm:text-2xl">Terapi Manuale</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-6">
                    Teknika praktike për reduktimin e dhimbjes dhe rivendosjen e lëvizjes.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Rreshti i dytë */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group h-full">
              <Link href="/services">
                <Image
                  src="/images/physio/sports.jpg"
                  alt="Rehabilitim Sportiv"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </Link>
              <Link
                href="/services"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-6 sm:p-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end">
                  <div className="bg-white text-green-700 rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-xl sm:text-2xl">Rehabilitim Sportiv</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-6">
                    Plane rikuperimi të personalizuara për sportistët e të gjitha niveleve.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Dy Kartat e Fundit */}
          <div className="lg:col-span-6 col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-auto lg:h-[386px]">
              
              {/* Karta 3 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="/services">
                  <Image
                    src="/images/physio/posts.jpg"
                    alt="Rehabilitim Pas Operacionit"
                    width={680}
                    height={386}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </Link>
                <Link
                  href="/services"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:p-6 group-hover:top-0 duration-500"
                >
                  <div className="flex justify-end">
                    <div className="bg-white text-green-700 rounded-full w-fit p-3 sm:p-4">
                      <Icon icon="ph:arrow-right" width={20} height={20} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-base sm:text-lg">Rehabilitim Pas Operacionit</h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-5">
                      Rikthim i sigurt dhe i udhëhequr pas procedurave kirurgjikale.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Karta 4 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="/services">
                  <Image
                    src="/images/physio/child.jpg"
                    alt="Fizioterapi Pediatrike"
                    width={680}
                    height={386}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </Link>
                <Link
                  href="/services"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:p-6 group-hover:top-0 duration-500"
                >
                  <div className="flex justify-end">
                    <div className="bg-white text-green-700 rounded-full w-fit p-3 sm:p-4">
                      <Icon icon="ph:arrow-right" width={20} height={20} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-base sm:text-lg">Fizioterapi Pediatrike</h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-5">
                      Trajtime të buta dhe efektive për nevojat e fëmijëve.
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

