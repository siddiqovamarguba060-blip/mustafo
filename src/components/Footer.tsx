import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenHelp: () => void;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
  onOpenHelp,
  onOpenSettings,
}) => {
  return (
    <footer className="footer-print-hide bg-white border-t border-slate-200 mt-20 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
                USTOZ AI
              </div>
              <p className="text-xs text-slate-500 font-medium">
                “Darsingizni sun’iy intellekt bilan oson yarating.”
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600">
            <button
              onClick={onScrollToTop}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Bosh sahifa
            </button>
            <button
              onClick={onOpenHelp}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Yordam va Yo‘riqnoma
            </button>
            <button
              onClick={onOpenSettings}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              O‘qituvchi sozlamalari
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} USTOZ AI. O‘zbekiston Respublikasi maktab o‘qituvchilari uchun maxsus yaratilgan.
          </p>
          <div className="flex items-center gap-1.5">
            <span>O‘qituvchilarimiz mehnati sharaflidir</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
