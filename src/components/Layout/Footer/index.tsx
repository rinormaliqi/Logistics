import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="mt-40 relative z-10 bg-white">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        
        {/* Kontakt & Lidhje */}
        <div className="py-16 border-b-4 border-primary border-t-4">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            
            {/* Thirrja për Veprim */}
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-gray-800 leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Filloni udhëtimin tuaj drejt shërimit — rezervoni seancën sot.
              </h2>
              <Link
                href="/book-appointment"
                className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-primary/90 duration-300 hover:cursor-pointer"
              >
                Rezervo Seancë
              </Link>
            </div>

            {/* Navigimi i Footer-it */}
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shirit i Poshtëm */}
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-gray-500 text-sm">
            ©2025 Fizioterapi Prishtinë Bio Center — Ndërtuar nga Rinor Maliqi.
          </p>
          <div className="flex gap-8 items-center">
            <Link href="#" className="text-gray-500 hover:text-primary text-sm">
              Kushtet e Shërbimit
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary text-sm">
              Politika e Privatësisë
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
