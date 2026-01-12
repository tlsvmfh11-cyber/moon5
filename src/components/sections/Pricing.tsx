import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative flex items-center min-h-screen">
      {/* Background with Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dalto4.jpg"
          alt="강남 달토 가격 안내 배경"
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
            <span className="text-accent-gold font-bold tracking-wider text-sm mb-4 block">가격</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              강남 달토 가격 구조에 대해<br />
              솔직하게 말씀드립니다
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                강남 달토 가격은 요일, 시간대, 상황에 따라 달라질 수 있습니다.
                그래서 정확한 금액은 <strong className="text-white">문의 시점 기준으로 안내</strong>합니다.
              </p>
              <p>
                중요한 건 <strong className="text-white">사전에 안내한 기준에서 벗어나지 않는다</strong>는 점입니다.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "설명 없이 추가되는 비용 없음",
                "현장에서 말 바뀌는 구조 아님",
                "달리는토끼, 런닝레빗 시절부터 유지된 방식"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-white/90">
                  <Check className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-10 text-gray-400 italic border-l-2 border-accent-gold pl-6">
              강남 달토는 "무조건 싸다"는 말 대신<br />
              "이 정도면 이해할 수 있다"는 기준으로 운영합니다.<br />
              그래서 계산할 때 문제 생기는 경우가 거의 없습니다.
            </p>
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

              <h3 className="text-2xl font-bold text-white mb-2">달토 견적 안내</h3>
              <p className="text-gray-400 mb-10 text-sm">문의 시점 기준 정확한 가격 안내</p>

              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-gray-300 text-lg">기본 주대</span>
                  <span className="text-2xl font-bold text-white">문의 시 안내</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-gray-300 text-lg">TC / 룸비</span>
                  <span className="text-2xl font-bold text-white">정찰제 운영</span>
                </div>
                <div className="flex justify-between items-end pb-4">
                  <span className="text-gray-300 text-lg">발렛 / 픽업</span>
                  <span className="text-accent-gold font-bold">서비스 가능</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center">
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
