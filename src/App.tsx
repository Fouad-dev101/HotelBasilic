import { useLanguage } from './i18n/LanguageContext';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './sections/Introduction';
import RoomsSection from './sections/RoomsSection';
import DiningSection from './sections/DiningSection';
import AmenitiesSection from './sections/AmenitiesSection';
import GallerySection from './sections/GallerySection';
import DestinationSection from './sections/DestinationSection';
import InfoSection from './sections/InfoSection';
import ReservationSection from './sections/ReservationSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const { locale, t } = useLanguage();
  useRevealOnScroll([locale]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.common.skip}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Introduction />
        <RoomsSection />
        <DiningSection />
        <AmenitiesSection />
        <GallerySection />
        <DestinationSection />
        <InfoSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}