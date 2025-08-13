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
                    
                    {/* Fotoja Majtas */}
                    <div className='lg:h-full h-auto flex'>
                        <Image
                            src="/images/physio/hero5.jpg"
                            alt='Ilustrim për pyetjet e bëra shpesht në fizioterapi'
                            width={680}
                            height={800}
                            className='object-cover w-full h-full rounded-2xl shadow-lg'
                            unoptimized={true}
                        />
                    </div>

                    {/* Përmbajtja Djathtas */}
                    <div className='lg:px-12 flex flex-col justify-center'>
                        <p className="text-green-700 dark:text-green-300 text-base font-semibold flex gap-2">
                            <Icon icon="mdi:medical-bag" className="text-2xl text-green-600 dark:text-green-400" />
                            Pyetjet e Bëra Shpesht
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white mt-2'>
                            Pyetjet Më të Shpeshta
                        </h2>
                        <p className='text-dark/60 dark:text-white/60 pr-0 md:pr-20 mt-4'>
                            Këtu gjeni përgjigje për pyetjet më të shpeshta rreth shërbimeve tona të fizioterapisë,
                            programeve të rikuperimit dhe procesit për marrjen e takimeve.
                        </p>

                        <div className="my-8">
                            <Accordion
                                type="single"
                                defaultValue="item-1"
                                collapsible
                                className="w-full flex flex-col gap-6"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Çfarë gjendjesh trajtoni?</AccordionTrigger>
                                    <AccordionContent>
                                        Trajtojmë një shumëllojshmëri gjendjesh, përfshirë lëndime sportive, dhimbje kronike, rehabilitim pas operacioneve, artrit dhe probleme të lëvizshmërisë.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. A kam nevojë për referim mjeku?</AccordionTrigger>
                                    <AccordionContent>
                                        Ndërsa një referim nuk kërkohet gjithmonë, disa ofrues sigurimesh mund të kërkojnë një. Kontrolloni me ofruesin tuaj ose na kontaktoni për udhëzime.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Sa zgjat një seancë tipike?</AccordionTrigger>
                                    <AccordionContent>
                                        Vlerësimet fillestare zakonisht zgjasin 45–60 minuta. Seancat pasuese janë tipikisht 30–45 minuta, në varësi të planit tuaj të trajtimit.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. Çfarë duhet të vesh për takimin?</AccordionTrigger>
                                    <AccordionContent>
                                        Vishni rroba të rehatshme dhe të lira që lejojnë lëvizje të lehta dhe qasje në zonën që do të trajtohet.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. A mbulohet fizioterapia nga sigurimi?</AccordionTrigger>
                                    <AccordionContent>
                                        Shumë plane sigurimi mbulojnë shërbimet e fizioterapisë. Mund tju ndihmojmë të verifikoni mbulimin tuaj para vizitës së parë.
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
