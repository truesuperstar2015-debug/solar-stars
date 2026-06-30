import { Hero } from '@/components/marketing/Hero';
import { Services } from '@/components/marketing/Services';
import { Calculator } from '@/components/marketing/Calculator';
import { Testimonials } from '@/components/marketing/Testimonials';
import { WhyChooseUs } from '@/components/marketing/WhyChooseUs';
import { ContactSection } from '@/components/marketing/ContactSection';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Calculator />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
