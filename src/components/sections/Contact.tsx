import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-brand-dark overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto opacity-30 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 blur-[150px] rounded-full" />
        </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-accent-cyan font-bold tracking-[0.3em] text-sm uppercase mb-6 block">
            Make a Reservation
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">ENJOY?</span>
          </h2>

          <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto">
            화려한 말로 포장하지 않습니다. <br />
            출근율, 구조, 담당의 역할. 이 세 가지가 완벽하게 맞아떨어지는 <br />
            강남 달토의 밤을 경험해보세요.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
             <a 
              href="tel:01023033778"
              className="w-full md:w-auto px-12 py-6 bg-white text-black font-black text-2xl rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              010.2303.3778
            </a>
            <a 
              href="sms:01023033778"
              className="w-full md:w-auto px-12 py-6 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-2xl rounded-full hover:bg-white/10 transition-colors"
            >
              문자 문의하기
            </a>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-16">
            <div>
                <h4 className="text-white font-bold mb-2">PICK-UP SERVICE</h4>
                <p className="text-gray-500 text-sm">
                    강남권 무료 픽업 가능<br />
                    예약 시 미리 말씀해주세요.
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-2">LOCATION</h4>
                <p className="text-gray-500 text-sm">
                    서울특별시 강남구 봉은사로 429<br />
                    (구) 달리는토끼 / 런닝레빗
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-2">OPENING HOURS</h4>
                <p className="text-gray-500 text-sm">
                    365일 연중무휴<br />
                    오후 6시 ~ 다음날 오후 3시
                </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}