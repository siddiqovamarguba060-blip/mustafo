import React from 'react';
import { X, HelpCircle, BookOpen, CheckCircle2, Printer, Sparkles, FileText } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                USTOZ AI — Foydalanish bo‘yicha qo‘llanma
              </h3>
              <p className="text-xs text-slate-500">
                O‘qituvchilar uchun tez-tez so‘raladigan savollar va tavsiyalar
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-6 text-sm text-slate-700">
          
          {/* Step by step */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Dars ishlanmasini qanday yaratish mumkin?</span>
            </h4>
            <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm pl-1 text-slate-600">
              <li><strong>Sinf va fanni tanlang:</strong> 1-dan 11-sinfgacha barcha maktab fanlari qo‘llab-quvvatlanadi.</li>
              <li><strong>Mavzuni kiriting:</strong> Masalan: «Gap bo‘laklari», «Ko‘p xonali sonlarni qo‘shish», «Algoritm turlari».</li>
              <li><strong>Dars davomiyligi va turini belgilang:</strong> 45, 40 yoki 90 daqiqalik dars turlaridan birini tanlang.</li>
              <li><strong>«Dars ishlanmasini yaratish»</strong> tugmasini bosing — AI bir necha soniyada to‘liq konspekt tuzadi.</li>
            </ol>
          </div>

          {/* DTS compliance */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
            <h4 className="font-bold text-blue-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Davlat Ta’lim Standartlariga (DTS) moslik</span>
            </h4>
            <p className="text-xs text-blue-950 leading-relaxed">
              USTOZ AI tomonidan yaratilgan dars ishlanmalari Maktabgacha va maktab ta’limi vazirligi tomonidan tasdiqlangan talablarga to‘liq javob beradi: dars maqsadlari (ta’limiy, tarbiyaviy, rivojlantiruvchi), kutilayotgan natijalar, vaqt taqsimoti, o‘qituvchi va o‘quvchi faoliyati hamda baholash mezonlari o‘z ichiga oladi.
            </p>
          </div>

          {/* Printing & PDF tips */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Printer className="w-4 h-4 text-teal-600" />
              <span>Chop etish va PDF/Word ko‘rinishida saqlash</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Chop etish (A4):</strong> «Chop etish» tugmasini bosganingizda keraksiz menyular yashirilib, faqat rasmiy vazirlik andozasidagi toza konspekt chiqadi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Word (.doc) yuklab olish:</strong> Kompyuteringizda Microsoft Word dasturida ochib, mustaqil o‘zgartirishlar kiritishingiz mumkin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>PDF saqlash:</strong> Chop etish oynasida printerni «Save as PDF» (PDF sifatida saqlash) ga o‘tkazsangiz, elektron fayl saqlanadi.</span>
              </li>
            </ul>
          </div>

          {/* Primary school specificity */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5 text-xs text-amber-900">
            <div className="font-bold flex items-center gap-1.5">
              <span>💡 Boshlang‘ich sinf o‘qituvchilari diqqatiga:</span>
            </div>
            <p className="leading-relaxed">
              1-4-sinflarni tanlaganingizda, USTOZ AI o‘quvchilarning yosh xususiyatlarini hisobga olgan holda qiziqarli didaktik o‘yinlar, sodda jumlalar, ko‘rgazmali obrazlar va jismoniy daqiqalarni avtomatik tarzda kiritadi.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-bold cursor-pointer transition-colors"
          >
            Tushundim
          </button>
        </div>

      </div>
    </div>
  );
};
