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
          src="/images/dalto1.jpg"
          alt="강남 달토 하이퍼블릭 프리미엄 라운지"
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
          <p className="text-accent-cyan tracking-[0.3em] text-sm md:text-base font-bold mb-6 uppercase">
            강남 하이퍼블릭
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            강남 달토 예약안내
            <span className="block text-2xl md:text-3xl font-normal text-white/80 mt-4">
              달리는토끼 · 런닝레빗
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed mb-12 drop-shadow-md">
            높은 출근율과 많은 룸을 기반으로<br className="hidden md:block"/>
            합리적인 가격 구조를 운영합니다.<br/>
            현장에서 실제 안내하는 방식 그대로 정리했습니다.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
             <a
              href="#contact"
              className="group relative px-10 py-4 bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">예약 문의하기</span>
              <div className="absolute inset-0 bg-accent-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </a>
            <a
              href="#intro"
              className="px-10 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              자세히 보기
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
