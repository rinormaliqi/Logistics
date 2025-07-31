import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
  {/* Left Image */}
  <div className='lg:h-full h-auto flex'>
    <Image
      src="/images/categories/freight2.jpg"
      alt='FAQ illustration for logistics'
      width={680}
      height={800}
      className='object-cover w-full h-full rounded-2xl'
      unoptimized={true}
    />
  </div>
  <div className='lg:px-12 flex flex-col justify-center'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="mdi:truck-delivery" className="text-2xl text-primary" />
                            FAQs
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            Frequently Asked Questions
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                            Have questions about how our logistics and transportation services work?
                            We have compiled some of the most common inquiries from our clients.
                        </p>

                        <div className="my-8">
                            <Accordion
                                type="single"
                                defaultValue="item-1"
                                collapsible
                                className="w-full flex flex-col gap-6"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. What areas do you cover?</AccordionTrigger>
                                    <AccordionContent>
                                        We offer nationwide delivery services and can also arrange international shipments upon request. Contact us for more specific coverage details.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Can I track my shipment in real-time?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, all of our deliveries come with real-time tracking. Once your shipment is picked up, you will receive a tracking link with live updates.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. What types of cargo do you handle?</AccordionTrigger>
                                    <AccordionContent>
                                        We handle a wide range of cargo—from small parcels to palletized freight. We also provide temperature-controlled and fragile goods transport.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. How are shipping rates calculated?</AccordionTrigger>
                                    <AccordionContent>
                                        Rates are based on cargo size, weight, distance, and delivery urgency. You can request a custom quote through our online form.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. What if my package is delayed?</AccordionTrigger>
                                    <AccordionContent>
                                        We strive to maintain on-time delivery. If a delay occurs due to unforeseen events, our team will inform you immediately and provide alternate solutions.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
