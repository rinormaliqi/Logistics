"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProprty } from "@/app/api/featuredproperty";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const FeaturedService: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // 👇 Cleaned up effect — removed auto-scroll interval
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) api.scrollTo(index);
  };

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Carousel */}
          <div className="relative">
            <Carousel setApi={setApi} opts={{ loop: true }}>
              <CarouselContent>
                {featuredProprty.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540 object-cover"
                      unoptimized
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots */}
            <div className="absolute left-2/5 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    current === index + 1 ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Textual Content */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon icon="mdi:truck-fast-outline" className="text-2xl text-primary" />
                Featured Service
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                Express Cargo Delivery
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon icon="mdi:map-marker-outline" width={28} height={26} className="text-dark/50 dark:text-white/50" />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  Available Nationwide & Cross-Border
                </p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50">
              Our Express Cargo Delivery service ensures urgent shipments reach their destination fast. With real-time tracking, guaranteed delivery windows, and secure handling, we help businesses keep their operations running smoothly and on time.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="mdi:clock-fast" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6>Same-Day Delivery</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="mdi:shield-lock-outline" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6>Secure Handling</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="mdi:map-clock-outline" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6>Real-Time Tracking</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="mdi:thermometer-lines" width={24} height={24} className="text-dark dark:text-white" />
                </div>
                <h6>Temperature Control</h6>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-10">
              <Link href="/contactus" className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white">
                Request a Quote
              </Link>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">
                  From €49 / shipment
                </h4>
                <p className="text-base text-dark/50">Flexible pricing based on route & urgency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
