import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1724]">
      <Navigation />
      <Hero />
      <Speakers />
      <Schedule />
      <Pricing />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
