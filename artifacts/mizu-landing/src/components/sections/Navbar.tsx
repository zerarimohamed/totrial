import { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'كيف يعمل', href: '#timeline' },
    { name: 'للسائقين', href: '#driver' },
    { name: 'للعملاء', href: '#customer' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Droplet className="w-8 h-8 text-primary group-hover:text-primary transition-colors" style={{ filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.6))' }} />
            <span className="text-2xl font-bold text-white tracking-tight">Mizu</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-hierarchy-2 hover:text-white transition-colors text-sm font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 border-r border-white/10 pr-6">
              <button
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold glow-primary glow-primary-hover transition-all"
              >
                تواصل معنا
              </button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 px-4 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-hierarchy-2 hover:text-white transition-colors text-lg font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-center px-5 py-3 rounded-xl bg-primary text-white font-semibold glow-primary"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
