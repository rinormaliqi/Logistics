import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
import ContactUs from './(site)/contactus/page'
import ClinicTour from '@/components/ClinicTour'
import ConditionsTreated from '@/components/ConditionsTreated'
import AboutAndBenefits from '@/components/AboutAndBenefits'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutAndBenefits/>
      <ConditionsTreated/>
      <ClinicTour/>
      <FAQ />
      <ContactUs/>
    </main>
  )
}
