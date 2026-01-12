import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative flex items-center min-h-screen">
      {/* Background with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/pricing.png" 
          alt="Pricing Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Reasonable<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-600">Price Policy</span>
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12 leading-relaxed">
              강남 달토의 가격 정책은 <strong className="text-white">투명함</strong>을 원칙으로 합니다.<br />
              요일, 시간대별 변동 사항을 숨기지 않고<br />
              문의 시점 기준으로 정확하게 안내해 드립니다.
            </p>
            
            <ul className="space-y-6">
                {[
                    "설명 없이 추가되는 비용 ZERO",
                    "현장에서 말이 바뀌는 상술 ZERO",
                    "달리는토끼 시절부터 이어온 정직한 운영"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-lg text-white/90">
                        <span className="w-2 h-2 rounded-full bg-accent-gold" />
                        {item}
                    </li>
                ))}
            </ul>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl relative overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent-gold/20 blur-[100px] rounded-full pointer-events-none" />
                
                <h3 className="text-2xl font-bold text-white mb-2">DALTO ESTIMATE</h3>
                <p className="text-gray-400 mb-10 text-sm">Real-time Cost Calculation Guide</p>

                <div className="space-y-8">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-gray-300 text-lg">기본 주대</span>
                        <span className="text-2xl font-bold text-white">문의 시 안내</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-gray-300 text-lg">TC / 룸티</span>
                        <span className="text-2xl font-bold text-white">정찰제 운영</span>
                    </div>
                    <div className="flex justify-between items-end pb-4">
                        <span className="text-gray-300 text-lg">발렛 / 픽업</span>
                        <span className="text-accent-gold font-bold">서비스 가능</span>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400 mb-6 text-sm">
                        "무조건 싸다"는 말보다 "합리적이다"는 말이<br/>
                        더 잘 어울리는 가격을 제시합니다.
                    </p>
                    <a href="#contact" className="inline-block w-full py-4 bg-accent-gold hover:bg-yellow-400 text-black font-bold text-lg rounded-xl transition-colors">
                        오늘의 정확한 견적 확인하기
                    </a>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}