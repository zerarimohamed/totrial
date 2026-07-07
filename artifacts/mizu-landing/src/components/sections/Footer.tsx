import { Droplet } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#05070a] pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <Droplet className="w-8 h-8 text-primary" />
              <span className="text-3xl font-bold text-white tracking-tight">Mizu</span>
            </a>
            <p className="text-hierarchy-3 font-medium">مياه نقية، توصيل منظم.</p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-center md:text-right">
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-hierarchy-3 hover:text-white transition-colors">الرئيسية</a>
              <a href="#timeline" className="text-hierarchy-3 hover:text-white transition-colors">كيف يعمل</a>
              <a href="#faq" className="text-hierarchy-3 hover:text-white transition-colors">الأسئلة الشائعة</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#customer" className="text-hierarchy-3 hover:text-white transition-colors">العملاء</a>
              <a href="#driver" className="text-hierarchy-3 hover:text-white transition-colors">السائقين</a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1BxkymfTDG/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 transition-all"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/wmizu1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="إنستغرام"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 transition-all"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-hierarchy-3 text-sm">© {currentYear} Mizu. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-hierarchy-3 hover:text-white">شروط الاستخدام</a>
            <a href="#" className="text-hierarchy-3 hover:text-white">سياسة الخصوصية</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
