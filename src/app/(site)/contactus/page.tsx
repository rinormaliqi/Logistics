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
            tanë ekspertë janë këtu për tju ndihmuar.
          </p>
        </div>
      </div>

      {/* Seksioni Kryesor */}
<div className="border border-black dark:border-green-800 rounded-2xl p-4 shadow-xl">
  <div className="flex flex-col lg:flex-row lg:gap-12">
    {/* Contact Content - Improved responsive layout */}
    <div className="w-full lg:w-2/3 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
      <div className="mb-8 lg:mb-12">
        <h5 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black mb-4">
          Ekipi ynë Mjekësor
        </h5>
        <p className="text-base md:text-lg font-normal text-black max-w-md">
          Bisedoni direkt me një fizioterapist ose rezervoni konsultimin tuaj fillestar.
        </p>
      </div>

      {/* Kontaktet - Equal spacing for all items */}
      <div className="flex flex-col gap-6 md:gap-6 text-black">
        {/* Phone */}
        <Link href={`tel:${phoneNumber}`} className="w-fit">
          <div className="flex items-center gap-4 group w-fit p-2 rounded-lg transition-all duration-300 hover:bg-gray-100/50 hover:scale-[1.02]">
            <Icon icon="ph:phone" width={32} height={32} className="flex-shrink-0" />
            <p className="text-lg font-normal group-hover:text-green-400 transition-colors">
              {phoneNumber}
            </p>
          </div>
        </Link>

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-2 rounded-lg w-fit transition-all duration-300 hover:bg-green-500/10 hover:scale-[1.02]"
        >
          <Icon
            icon="ph:whatsapp-logo"
            width={32}
            height={32}
            className="flex-shrink-0 text-black group-hover:text-green-400 transition-colors"
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
          className="group flex items-center gap-4 p-2 rounded-lg w-fit transition-all duration-300 hover:bg-[#7360F2]/10 hover:scale-[1.02]"
        >
          <Icon
            icon="ph:phone"
            width={32}
            height={32}
            className="flex-shrink-0 text-black group-hover:text-[#8a7df5] transition-colors"
          />
          <p className="text-lg font-normal group-hover:text-[#8a7df5] transition-colors">
            Na shkruaj ne Viber
          </p>
        </Link>

        {/* Email */}
        <Link href={"mailto:fizioterapiabiocenter@gmail.com"} className="w-fit">
          <div className="flex items-center gap-4 group w-fit p-2 rounded-lg transition-all duration-300 hover:bg-gray-100/50 hover:scale-[1.02]">
            <Icon icon="ph:envelope-simple" width={32} height={32} className="flex-shrink-0" />
            <p className="text-lg font-normal group-hover:text-green-400 transition-colors">
              fizioterapiabiocenter@gmail.com
            </p>
          </div>
        </Link>

        {/* Location */}
        <div className="flex items-start gap-4 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100/50">
          <Icon icon="ph:map-pin" width={32} height={32} className="flex-shrink-0 mt-1" />
          <p className="text-lg font-normal">
            Qendra e Fizioterapisë Bio Center, Prishtinë, Kosovë
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE - LOGO (visible only on large screens) */}
    <div className="hidden lg:flex items-center justify-center w-1/3">
      <Image
        src="/physio.png"
        alt="Bio Center Logo"
        width={500}
        height={500}
        className="object-contain max-h-[400px] opacity-90"
        unoptimized
      />
    </div>
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
