import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import InstallGuide from './InstallGuide';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/20 animate-ripple"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/20 animate-ripple animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          متوفر الآن في ولايات مختارة
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight md:leading-tight max-w-4xl mb-6 tracking-tight">
          {/* Line 1: مياه • نقية */}
          <span className="flex items-center gap-4 md:gap-6 mb-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              مياه
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
              className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(14,165,233,0.8), 0 0 20px rgba(14,165,233,0.4)' }}
            />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            >
              نقية
            </motion.span>
          </span>
          {/* Line 2: بضغطة زر */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
            className="block text-transparent bg-clip-text bg-gradient-to-l from-primary to-blue-300"
            style={{ filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.4))' }}
          >
            بضغطة زر
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-hierarchy-2 text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed"
        >
          Mizu يربط الأشخاص الذين يحتاجون إلى مياه الشرب بالسائقين في الوقت الفعلي، بطريقة منظمة وشفافة.
        </motion.p>

        {/* Primary Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center w-full mb-3"
        >
          <a
            href="/downloads/mizu.apk"
            download="Mizu.apk"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-white text-xl font-bold glow-primary glow-primary-hover transition-all flex items-center justify-center gap-3 group"
          >
            <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
            حمّل التطبيق الآن
          </a>
          <p className="mt-2 text-xs text-white/40 font-medium">
            الإصدار الحالي: تجريبي (Debug) — الحجم: 14 ميجابايت
          </p>

          {/* Install Guide */}
          <InstallGuide />
        </motion.div>

        {/* Secondary register CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-4"
        >
          <a 
            href="#register-customer" 
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-primary/40 text-primary text-base font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2 group"
          >
            تسجيل كعميل
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
          <a 
            href="#register-driver" 
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/15 text-white/70 text-base font-bold hover:border-white/40 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
          >
            تسجيل كسائق
          </a>
        </motion.div>
      </div>

      {/* Fade out to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
