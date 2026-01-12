import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    content: "강남 달토 처음이었는데 출근 인원이 많아서 선택하기 편했습니다. 하이퍼블릭이 이런 구조구나 이해됐어요.",
    tag: "첫 방문"
  },
  {
    content: "예전에 달리는토끼로 알던 곳인데 지금은 달토라고 하더군요. 운영 방식은 그대로라서 익숙했습니다.",
    tag: "재방문"
  },
  {
    content: "담당이 계속 붙어서 설명해줘서 편했습니다. 혼자 방문이라 걱정했는데 그 부분이 제일 좋았습니다.",
    tag: "혼자 방문"
  },
  {
    content: "가격 설명을 먼저 해줘서 마음이 편했어요. 나중에 계산할 때 당황할 일은 없었습니다.",
    tag: "가격 만족"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-brand-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent-purple font-bold tracking-wider text-sm mb-4 block">후기</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">실제 이용자 기준 후기</h2>
          <div className="w-20 h-1 bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] p-10 hover:bg-[#161616] transition-colors border border-white/5 group"
            >
              <Quote className="text-accent-purple mb-6 w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                "{review.content}"
              </p>
              <div className="flex items-center justify-end border-t border-white/10 pt-6">
                <span className="text-xs font-bold px-3 py-1 bg-white/10 text-gray-400 rounded-full">
                  {review.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
