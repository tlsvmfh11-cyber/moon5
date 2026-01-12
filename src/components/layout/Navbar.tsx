import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '소개', href: '#intro' },
    { name: '시스템', href: '#system' },
    { name: '가격', href: '#pricing' },
    { name: '후기', href: '#reviews' },
    { name: '문의', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-holo-black/80 backdrop-blur-md border-white/10 py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          DALTO<span className="text-neon-cyan">.5</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white hover:text-neon-cyan transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:01023033778"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
          >
            <Phone size={16} />
            <span className="font-bold">010.2303.3778</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-holo-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-center py-2 border-b border-white/5 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
