import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/30 z-10" />
        <img 
          src="/images/hero.jpg" 
          alt="Gangnam Luxury Lounge" 
          className="w-full h-[120%] object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-accent-cyan tracking-[0.5em] text-sm md:text-base font-bold mb-6 uppercase">
            Gangnam Hyper Public
          </p>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-2 tracking-tighter mix-blend-overlay opacity-90">
            DALTO
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-white/90 mb-10 tracking-widest">
            RUNNING RABBIT
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 drop-shadow-md">
            시스템을 속이지 않는 정직한 하이퍼블릭.<br className="hidden md:block"/>
            당신의 밤을 위한 가장 합리적인 선택, <strong className="text-white font-medium">강남 달토</strong>
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
             <a 
              href="#contact"
              className="group relative px-10 py-4 bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">RESERVATION</span>
              <div className="absolute inset-0 bg-accent-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </a>
            <a 
              href="#intro"
              className="px-10 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              DISCOVER MORE
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}