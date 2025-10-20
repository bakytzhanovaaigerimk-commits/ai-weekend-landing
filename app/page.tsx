import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
