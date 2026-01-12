import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="py-32 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section 1: Introduction (Text Left, Image Right) */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-purple font-bold tracking-wider text-sm mb-4 block">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              분위기보다 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">구조의 차이</span>를<br />
              경험하세요.
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                강남 달토(달리는토끼, 런닝레빗)는 화려한 인테리어보다 
                <strong className="text-white font-medium"> 압도적인 출근율과 시스템</strong>에 집중합니다.
              </p>
              <p>
                하루 평균 150~200명 수준의 출근율.
                손님이 몰리는 시간에도 막힘없는 초이스.
                이것이 바로 하이퍼블릭의 본질입니다.
              </p>
              <p className="border-l-2 border-accent-purple pl-6 py-2 text-white italic">
                “가성비로 여러 명 보고 선택하는 구조”
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img 
                src="/images/intro.jpg" 
                alt="Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-accent-purple/50 hidden md:block" />
          </motion.div>
        </div>

        {/* Section 2: Philosophy (Image Left, Text Right) */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video overflow-hidden">
               <img 
                src="/images/room.jpg" 
                alt="Room Atmosphere" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-3xl font-bold text-white">HONESTY</p>
                 <p className="text-sm text-gray-400 tracking-widest">CORE VALUE</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-cyan font-bold tracking-wider text-sm mb-4 block">OUR PROMISE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              애매한 약속은<br />
              하지 않습니다.
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                “얼마 나올까요?” “어떤가요?”<br />
                문의 단계부터 담당이 직접, 솔직하게 답변합니다.
              </p>
              <p>
                확실하지 않은 건 안 된다고 말하고, 
                지금 상황에서 가능한 최선의 선택지만을 안내합니다.
                한 번 잘못된 시작은 결국 손님에게 가장 큰 불편함으로 돌아오기 때문입니다.
              </p>
              <div className="mt-8">
                 <a href="#contact" className="text-white border-b border-accent-cyan pb-1 hover:text-accent-cyan transition-colors">
                    담당자 마인드 확인하기 &rarr;
                 </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}