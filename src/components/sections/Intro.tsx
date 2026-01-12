import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="py-32 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section 1: 소개 */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-purple font-bold tracking-wider text-sm mb-4 block">소개</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white">
              강남 달토 하이퍼블릭이<br />
              어떤 구조인지 먼저 설명드립니다
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-normal leading-relaxed">
              <p>
                강남 달토는 흔히 <strong className="text-white font-medium">달리는토끼, 런닝레빗, 달토</strong>라는 이름으로 불리는 하이퍼블릭 업종입니다.
                이 업종의 핵심은 분위기나 인테리어보다 <strong className="text-white font-medium">구조</strong>에 있습니다.
              </p>
              <p>
                강남 달토 하이퍼블릭은 하루 평균 <strong className="text-white font-medium">150명~200명</strong> 수준의 출근율을 유지하고 있고,
                룸 개수도 많아 손님이 몰리는 시간대에도 초이스가 막히는 경우가 적은 편입니다.
              </p>
              <p>
                하이퍼블릭 구조 자체가 텐프로, 쩜오 같은 상위 업종보다는 가격 부담이 낮게 형성되어 있습니다.
                그렇다고 해서 사이즈나 마인드가 크게 떨어지는 구조는 아닙니다.
              </p>
              <p className="border-l-2 border-accent-purple pl-6 py-2 text-white italic">
                "가성비로 여러 명 보고 선택하는 구조"
              </p>
              <p>
                출근 인원이 적은 업종은 처음부터 선택지가 제한되지만,
                강남 달토처럼 출근율이 높은 하이퍼블릭은 여러 조를 보고 비교할 수 있는 여유가 있습니다.
                이 차이가 처음 방문하시는 분들한테는 생각보다 크게 느껴지는 부분입니다.
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
                src="/images/dalto2.jpg"
                alt="강남 달토 인테리어"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-accent-purple/50 hidden md:block" />
          </motion.div>
        </div>

        {/* Section 2: 인사말 */}
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
                src="/images/dalto3.jpg"
                alt="강남 달토 룸 분위기"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-3xl font-bold text-white">HONESTY</p>
                 <p className="text-sm text-gray-400 tracking-widest">담당의 역할</p>
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
            <span className="text-accent-cyan font-bold tracking-wider text-sm mb-4 block">인사말</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white">
              현장에서 직접 안내하면서<br />
              느낀 점을 말씀드립니다
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-normal leading-relaxed">
              <p>
                강남 달토 문의를 받다 보면 처음부터 조심스럽게 묻는 분들이 많습니다.
              </p>
              <p className="text-white/80">
                "달토가 정확히 어떤 업종이냐"<br />
                "달리는토끼랑 같은 곳이냐"<br />
                "가격은 어느 정도 생각해야 하냐"
              </p>
              <p>
                이런 질문은 다 겪어봐서 나오는 질문이라고 생각합니다.
                그래서 강남 달토에서는 <strong className="text-white font-medium">애매하게 말하지 않으려고 합니다.</strong>
              </p>
              <p>
                확실하지 않은 건 안 된다고 말하고, 지금 상황에서 가능한 것만 안내합니다.
                이 업종은 한 번 잘못 시작하면 처음 온 분이 제일 불편해질 수 있습니다.
                그래서 담당 역할이 정말 중요합니다.
              </p>
              <p>
                강남 달토는 문의 단계부터 담당이 직접 응대하고,
                입실부터 초이스, 마무리까지 <strong className="text-white font-medium">같은 사람이 계속 케어하는 방식</strong>으로 운영합니다.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
