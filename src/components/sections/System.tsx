import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "문의 단계",
    desc: "혼자 방문인지, 여러 명 모임인지, 조용한 분위기인지, 편하게 놀다 가는 자리인지. 손님 성향부터 정리합니다. 이걸 먼저 파악해야 출근 인원이 많은 하이퍼블릭 구조가 제대로 작동합니다.",
  },
  {
    num: "02",
    title: "도착 및 입실",
    desc: "강남 달토는 룸 수가 많아 대기 시간이 길지 않은 편입니다. 가능하면 도착 후 바로 입실을 진행합니다.",
  },
  {
    num: "03",
    title: "설명 진행",
    desc: "입실 후 강남 달토 주대, 이용 시간, 진행 방식을 먼저 설명합니다. 이 단계에서 애매하게 넘어가면 뒤에서 꼭 문제가 생깁니다. 그래서 처음에 정확히 짚고 갑니다.",
  },
  {
    num: "04",
    title: "초이스",
    desc: "출근율이 높은 하이퍼블릭의 장점은 여러 조를 보고 선택할 수 있다는 점입니다. 담당이 손님 성향에 맞지 않는 조는 걸러주고, 괜히 시간만 끌지 않게 진행합니다.",
  },
  {
    num: "05",
    title: "이용 후 선택",
    desc: "연장은 손님 선택입니다. 분위기 괜찮으면 하시고, 아니면 정리하셔도 전혀 문제 없습니다.",
  }
];

export default function System() {
  return (
    <section id="system" className="py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-accent-cyan font-bold tracking-wider text-sm mb-4 block">시스템</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">강남 달토 하이퍼블릭 실제 이용 흐름</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            겉보기엔 단순해 보여도 담당이 어떻게 진행하느냐에 따라 체감이 완전히 달라집니다.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-black text-accent-purple/30 group-hover:text-accent-purple/50 transition-colors">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
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
