import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="mt-40 relative z-10 bg-white">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        
        {/* Contact & Links */}
        <div className="py-16 border-b-4 border-primary border-t-4">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            
            {/* Contact CTA */}
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-gray-800 leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Start your recovery journey — book your session today.
              </h2>
              <Link
                href="/book-appointment"
                className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-primary/90 duration-300 hover:cursor-pointer"
              >
                Book Appointment
              </Link>
            </div>

            {/* Footer Navigation */}
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

        {/* Bottom Bar */}
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-gray-500 text-sm">
            ©2025 Dr. John Doe Physiotherapy — Built by Rinor Maliqi.
          </p>
          <div className="flex gap-8 items-center">
            <Link href="#" className="text-gray-500 hover:text-primary text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
