import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "INQUIRY",
    sub: "사전 문의 및 파악",
    desc: "혼자 오시는지, 모임인지, 원하시는 분위기는 무엇인지. 디테일한 파악이 성공적인 자리를 만듭니다.",
    image: "/images/hero.jpg" // 재사용하거나 다른 이미지 사용
  },
  {
    num: "02",
    title: "ARRIVAL",
    sub: "도착 및 즉시 입실",
    desc: "많은 룸 개수를 보유하여 대기 시간을 최소화했습니다. 도착 즉시 쾌적한 룸으로 안내해 드립니다.",
    image: "/images/system.jpg"
  },
  {
    num: "03",
    title: "BRIEFING",
    sub: "투명한 시스템 설명",
    desc: "주대, 이용 시간, 진행 방식. 입장 후 다시 한번 명확하게 짚어드려 계산 시 오해가 없도록 합니다.",
    image: "/images/intro.jpg"
  },
  {
    num: "04",
    title: "CHOICE",
    sub: "압도적 초이스",
    desc: "150명+ 출근율의 힘. 취향에 맞지 않는 인원은 담당이 먼저 거르고, 확실한 스타일만 보여드립니다.",
    image: "/images/room.jpg"
  }
];

export default function System() {
  return (
    <section id="system" className="py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">SYSTEM GUIDE</h2>
          <p className="text-gray-400">강남 달토를 가장 완벽하게 즐기는 4단계 흐름</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={step.image} 
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-auto transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-6xl font-black text-white/10">{step.num}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-gold transition-colors">{step.title}</h3>
                <p className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wider">{step.sub}</p>
                
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/20 pt-4">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}