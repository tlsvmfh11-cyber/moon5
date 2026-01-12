import { Phone, MessageSquare } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import System from './components/sections/System';
import Pricing from './components/sections/Pricing';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import { useProtection } from './hooks/use-protection';

function App() {
  useProtection();

  return (
    <div className="bg-holo-black min-h-screen text-white selection:bg-neon-cyan selection:text-black font-pretendard">
      <Navbar />

        <main>
          <Hero />
          <Intro />
          <System />
          <Pricing />
          <Reviews />
          <Contact />
        </main>

        <Footer />

        {/* Floating Action Buttons for Mobile */}
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-white/10">
          <a
            href="tel:01023033778"
            className="flex-1 bg-holo-black/90 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-lg border-r border-white/10 active:bg-neon-cyan/20 transition-colors"
          >
            <Phone size={20} className="text-neon-cyan" />
            전화문의
          </a>
          <a
            href="sms:01023033778"
            className="flex-1 bg-holo-black/90 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-lg active:bg-neon-purple/20 transition-colors"
          >
            <MessageSquare size={20} className="text-neon-purple" />
            문자문의
          </a>
        </div>
    </div>
  );
}

export default App;