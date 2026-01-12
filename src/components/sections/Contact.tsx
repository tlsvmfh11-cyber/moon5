import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send, Car, Clock, Users } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-brand-dark overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 픽업 서비스 · 예약 안내 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-accent-cyan font-bold tracking-[0.3em] text-sm uppercase mb-6 block">
            픽업 서비스 · 예약 안내
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            편하게 문의 주세요
          </h2>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            강남 달토는 상황에 따라 픽업 안내도 가능합니다.<br />
            이동이 애매한 경우 미리 말씀 주시면 됩니다.
          </p>

          {/* 예약 시 필요한 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">방문 인원</h4>
              <p className="text-gray-500 text-sm">몇 명이서 오시는지</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">시간</h4>
              <p className="text-gray-500 text-sm">방문 예정 시간</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Car className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">혼자 방문 여부</h4>
              <p className="text-gray-500 text-sm">혼자인지 모임인지</p>
            </div>
          </div>

          <p className="text-gray-400 mb-12">
            강남 달토는 달리는토끼, 런닝레빗으로 알고 있던 분들도<br />
            편하게 문의 주셔도 되는 곳입니다.
          </p>

          {/* 연락 버튼 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-20">
            <a
              href="tel:01023033778"
              className="w-full md:w-auto px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              전화 문의
            </a>
            <a
              href="sms:01023033778"
              className="w-full md:w-auto px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-xl rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              문자 문의
            </a>
            <a
              href="https://t.me/hscompanyshs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-5 bg-[#0088cc] text-white font-bold text-xl rounded-full hover:bg-[#006699] transition-colors flex items-center justify-center gap-3"
            >
              <Send className="w-6 h-6" />
              텔레그램
            </a>
          </div>
        </motion.div>

        {/* 마무리 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center border-t border-white/10 pt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">마무리</h3>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              강남 달토 하이퍼블릭은<br />
              화려한 말로 포장하는 곳이 아닙니다.
            </p>
            <p className="text-white font-medium">
              출근율, 구조, 담당 역할<br />
              이 세 가지가 맞아떨어져야 만족도가 나옵니다.
            </p>
            <p>
              궁금한 게 있으면 오기 전에 물어보세요.<br />
              <strong className="text-accent-cyan">그게 제일 정확합니다.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
