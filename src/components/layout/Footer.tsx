export default function Footer() {
    return (
      <footer className="bg-holo-dark border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">GANGNAM DALTO</h2>
          <p className="text-gray-500 text-sm mb-8">
            강남 달토 | 달리는토끼 | 런닝레빗 하이퍼블릭<br />
            서울특별시 강남구 봉은사로 429
          </p>
          <div className="flex justify-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-neon-cyan transition-colors">이용약관</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">개인정보처리방침</a>
          </div>
          <p className="mt-8 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} DALTO. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
