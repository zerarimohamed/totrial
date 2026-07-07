import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import InstallGuide from './InstallGuide';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      
      {/* Intense Glow Background */}
      <div className="absolute inset-0 bg-background z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[150px] z-0 rounded-full pointer-events-none"></div>
      
      {/* Ripple Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white mb-4"
        >
          جاهز لتجربة <span className="text-primary drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">Mizu</span>؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-white/50 text-base mb-10"
        >
          حمّل التطبيق مباشرةً على هاتفك الأندرويد وابدأ الآن
        </motion.p>

        {/* Primary Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center w-full"
        >
          <a
            href="/downloads/mizu.apk"
            download="Mizu.apk"
            className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-primary text-white text-xl font-bold glow-primary glow-primary-hover transition-all flex items-center justify-center gap-3 group"
          >
            <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
            حمّل التطبيق الآن
          </a>
          <p className="mt-2 text-xs text-white/40 font-medium">
            الإصدار الحالي: تجريبي (Debug) — الحجم: 14 ميجابايت
          </p>

          {/* Install Guide accordion */}
          <InstallGuide />
        </motion.div>


      </div>
    </section>
  );
}
