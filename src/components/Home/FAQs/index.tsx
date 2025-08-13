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
        <section id='faqs' className="bg-gradient-to-b from-green-50 via-gray-50 to-white dark:from-[#4cb0a8]/20 dark:via-gray-800 dark:to-gray-900 py-16">
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                    
                    {/* Left Image */}
                    <div className='lg:h-full h-auto flex'>
                        <Image
                            src="/images/physio/hero5.jpg"
                            alt='Physiotherapy FAQ illustration'
                            width={680}
                            height={800}
                            className='object-cover w-full h-full rounded-2xl shadow-lg'
                            unoptimized={true}
                        />
                    </div>

                    {/* Right Content */}
                    <div className='lg:px-12 flex flex-col justify-center'>
                        <p className="text-green-700 dark:text-green-300 text-base font-semibold flex gap-2">
                            <Icon icon="mdi:medical-bag" className="text-2xl text-green-600 dark:text-green-400" />
                            FAQs
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white mt-2'>
                            Frequently Asked Questions
                        </h2>
                        <p className='text-dark/60 dark:text-white/60 pr-0 md:pr-20 mt-4'>
                            Here are answers to common questions about our physiotherapy services,
                            recovery programs, and appointment process.
                        </p>

                        <div className="my-8">
                            <Accordion
                                type="single"
                                defaultValue="item-1"
                                collapsible
                                className="w-full flex flex-col gap-6"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. What conditions do you treat?</AccordionTrigger>
                                    <AccordionContent>
                                        We treat a variety of conditions including sports injuries, chronic pain, post-surgical rehabilitation, arthritis, and mobility issues.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Do I need a doctor’s referral?</AccordionTrigger>
                                    <AccordionContent>
                                        While a referral is not always required, some insurance providers may request one. Check with your provider or contact us for guidance.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. How long is a typical session?</AccordionTrigger>
                                    <AccordionContent>
                                        Initial assessments usually take 45–60 minutes. Follow-up sessions are typically 30–45 minutes, depending on your treatment plan.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. What should I wear to my appointment?</AccordionTrigger>
                                    <AccordionContent>
                                        Wear comfortable, loose-fitting clothing that allows easy movement and access to the treatment area.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. Is physiotherapy covered by insurance?</AccordionTrigger>
                                    <AccordionContent>
                                        Many insurance plans cover physiotherapy services. We can help you verify your coverage before your first visit.
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

