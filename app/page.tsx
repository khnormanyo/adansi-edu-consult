import HeroSection from '../components/HeroSection';
import MissionBlock from '../components/MissionBlock';
import DestinationCountries from '../components/DestinationCountries';
import FeaturedPackages from '../components/FeaturedPackages';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionBlock />
      <DestinationCountries />
      <FeaturedPackages />
      <TestimonialsSection />
      <NewsletterSignup />
    </>
  );
}