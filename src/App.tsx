import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <div className="bg-holo-black min-h-screen text-white selection:bg-neon-cyan selection:text-black font-pretendard">
        <Helmet>
          <title>강남 달토 예약안내 | 달리는토끼·런닝레빗 가격 주대</title>
          <meta name="description" content="강남 달토는 달리는토끼·런닝레빗으로 불리는 하이퍼블릭 업종으로, 높은 출근율과 많은 룸을 기반으로 합리적인 가격 구조를 운영합니다. 현장에서 실제 안내하는 방식 그대로 정리했습니다." />
          <meta name="keywords" content="강남달토, 달리는토끼, 런닝레빗, 강남하이퍼블릭, 강남가라오케, 달토주대, 달토가격" />
          <link rel="canonical" href="https://moon5.example.com" />
        </Helmet>

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
    </HelmetProvider>
  );
}

export default App;