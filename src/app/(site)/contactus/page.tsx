"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  const phoneNumber = "+38344468100";
  const encodedNumber = encodeURIComponent(phoneNumber);

  return (
    <div
      id="contact"
      className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28"
    >
      {/* Titulli */}
      <div className="mb-16">
        <div className="flex gap-2.5 items-center justify-center mb-3">
          <Icon
            icon="mdi:medical-bag"
            width={20}
            height={20}
            className="text-green-600"
          />
          <p className="text-base font-semibold text-green-700 dark:text-green-300">
            Kontaktoni Klinikën Tonë
          </p>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
            Keni nevojë për fizioterapi apo ndihmë në rikuperim?
          </h3>
          <p className="text-xm font-normal tracking-tight text-black/60 dark:text-white/60 leading-6">
            Pavarësisht nëse keni nevojë për rikuperim nga lëndime, trajtim të
            dhimbjeve kronike apo mbështetje për lëvizshmëri, fizioterapistët
            tanë ekspertë janë këtu për t'ju ndihmuar.
          </p>
        </div>
      </div>

      {/* Seksioni Kryesor */}
      <div className="border border-green-200 dark:border-green-800 rounded-2xl p-4 shadow-xl bg-gradient-to-br from-green-50 via-gray-50 to-white dark:from-green-900/20 dark:via-gray-900 dark:to-gray-950">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Fotoja dhe Kontaktet */}
          <div className="relative w-full lg:w-[100%] aspect-[3/4] lg:aspect-auto lg:h-[700px]">
            <Image
              src="/images/physio/hero3.jpg"
              alt="Ndihmë Fizioterapike"
              fill
              className="rounded-2xl object-cover shadow-lg"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl p-6 lg:p-12 flex flex-col justify-between">
              <div>
                <h5 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
                  Ekipi ynë Mjekësor
                </h5>
                <p className="text-base md:text-lg font-normal text-white/80 max-w-md">
                  Bisedoni direkt me një fizioterapist ose rezervoni konsultimin
                  tuaj fillestar.
                </p>
              </div>

              {/* Kontaktet */}
              <div className="flex flex-col gap-6 text-white">
                {/* Thirrje direkte */}
                <Link href={`tel:${phoneNumber}`} className="w-fit">
                  <div className="flex items-center gap-4 group w-fit">
                    <Icon
                      icon="ph:phone"
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <p className="text-lg font-normal group-hover:text-green-400 transition-colors">
                      {phoneNumber}
                    </p>
                  </div>
                </Link>

                {/* WhatsApp & Viber */}
                <div className="flex flex-col sm:flex-col gap-3 sm:gap-4 mt-1 ml-[-12]">
                  {/* WhatsApp */}
                  <Link
                    href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl w-fit transition-all duration-300 hover:bg-green-500/10 hover:scale-[1.02]"
                  >
                    <Icon
                      icon="ph:whatsapp-logo"
                      width={30}
                      height={30}
                      className="flex-shrink-0 text-white group-hover:text-green-400 transition-colors cursor-pointer"
                    />
                    <p className="text-lg font-normal group-hover:text-green-400 transition-colors">
                      Na shkruaj ne WhatsApp
                    </p>
                  </Link>

                  {/* Viber */}
                  <Link
                    href={`viber://chat?number=${encodedNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl w-fit transition-all duration-300 hover:bg-[#7360F2]/10 hover:scale-[1.02]"
                  >
                    <Icon
                      icon="ph:phone"
                      width={30}
                      height={30}
                      className="flex-shrink-0 text-white group-hover:text-[#8a7df5] transition-colors cursor-pointer"
                    />
                    <p className="text-lg font-normal group-hover:text-[#8a7df5] transition-colors">
                      Na shkruaj ne Viber
                    </p>
                  </Link>
                </div>

                {/* Email */}
                <Link
                  href={"mailto:fizioterapiabiocenter@gmail.com"}
                  className="w-fit"
                >
                  <div className="flex items-center gap-4 group w-fit">
                    <Icon
                      icon="ph:envelope-simple"
                      width={32}
                      height={32}
                      className="flex-shrink-0"
                    />
                    <p className="text-lg font-normal group-hover:text-green-400 transition-colors">
                      fizioterapiabiocenter@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Adresa */}
                <div className="flex items-center gap-4">
                  <Icon
                    icon="ph:map-pin"
                    width={32}
                    height={32}
                    className="flex-shrink-0"
                  />
                  <p className="text-lg font-normal">
                    Qendra e Fizioterapisë Bio Center, Prishtinë, Kosovë
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Forma */}
          {/* (mund të vendosësh formën këtu më vonë) */}
        </div>
      </div>

      {/* Harta Google */}
      <div className="mt-16 w-full h-[650px] rounded-2xl overflow-hidden shadow-lg border border-green-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.559268305933!2d21.160087!3d42.663355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe97bac593cb2754c!2sPhysiotherapy%20Bio%20Center%20-%20Fizioterapi!5e0!3m2!1sen!2s!4v1693488400000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
