import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, Layers, FileEdit, AlertCircle, Wand2, User, Building, HelpCircle } from 'lucide-react';
import { LessonPlanRequest } from '../types';

interface LessonPlanFormProps {
  formData: LessonPlanRequest;
  setFormData: React.Dispatch<React.SetStateAction<LessonPlanRequest>>;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  errorMessage: string | null;
}

export const SINFLAR = [
  '1-sinf',
  '2-sinf',
  '3-sinf',
  '4-sinf',
  '5-sinf',
  '6-sinf',
  '7-sinf',
  '8-sinf',
  '9-sinf',
  '10-sinf',
  '11-sinf'
];

export const FANLAR = [
  'Ona tili',
  'O‘qish',
  'Matematika',
  'Informatika',
  'Tabiiy fan',
  'Tasviriy san’at',
  'Musiqa',
  'Tarbiya',
  'Ingliz tili',
  'Rus tili',
  'Jismoniy tarbiya',
  'Boshqa'
];

export const DAVOMIYLIKLAR = [
  '45 daqiqa',
  '40 daqiqa',
  '90 daqiqa'
];

export const DARS_TURLARI = [
  'Yangi bilim beruvchi',
  'Mustahkamlovchi',
  'Takrorlash',
  'Aralash',
  'Nazorat darsi'
];

// Quick topic suggestions per subject to help teachers fill quickly
const TOPIC_SUGGESTIONS: Record<string, string[]> = {
  'Ona tili': ['Gap bo‘laklari', 'Ot so‘z turkumi', 'Sifat va uning darajalari', 'Undosh tovushlar va harflar', 'Ega va kesim munosabati'],
  'O‘qish': ['Ona tabiatni sevamiz', 'Alisher Navoiy ibratli hikmatlari', 'Kitob — bilim manbai', 'Do‘stlik va sadoqat'],
  'Matematika': ['Ko‘p xonali sonlarni qo‘shish', 'Oddiy kasrlar', 'Tenglamalar yechish', 'Yuzani hisoblash', 'Ko‘paytirish jadvali'],
  'Informatika': ['Algoritm tushunchasi va turlari', 'Axborot xavfsizligi asoslari', 'Python dasturlash tili', 'Matn muharririda ishlash'],
  'Tabiiy fan': ['Suvning tabiatda aylanishi', 'O‘simliklar dunyosi', 'Quyosh sistemasi', 'Havo va uning xossalari'],
  'Ingliz tili': ['Present Simple Tense', 'My Family and Friends', 'Daily Routine', 'Animals and Nature'],
  'Tarbiya': ['Ota-onaga hurmat', 'Vatanni sevish imondandir', 'Muomala madaniyati', 'Kasblar olami']
};

export const LessonPlanForm: React.FC<LessonPlanFormProps> = ({
  formData,
  setFormData,
  onSubmit,
  isLoading,
  errorMessage,
}) => {
  const [showTeacherInfo, setShowTeacherInfo] = useState(false);

  const handleQuickTopic = (topic: string) => {
    setFormData((prev) => ({ ...prev, mavzu: topic }));
  };

  const suggestions = TOPIC_SUGGESTIONS[formData.fan] || [];

  return (
    <div id="lesson-plan-form-card" className="scroll-mt-24">
      <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden transition-all">
        {/* Top decorative accent bar */}
        <div className="h-2.5 bg-linear-to-r from-blue-600 via-indigo-600 to-teal-500" />

        <div className="p-6 sm:p-10">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📚</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Yangi dars ishlanmasi
                </h2>
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Kerakli maydonlarni to‘ldiring va sun’iy intellekt darsingiz uchun to‘liq konspekt tuzib beradi.
              </p>
            </div>

            {/* Optional Teacher Details Toggle */}
            <button
              type="button"
              onClick={() => setShowTeacherInfo(!showTeacherInfo)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200/80 transition-all cursor-pointer self-start sm:self-auto"
            >
              <User className="w-4 h-4 text-indigo-500" />
              <span>{showTeacherInfo ? 'O‘qituvchi ma’lumotini yopish' : 'O‘qituvchi & Maktab (Ixtiyoriy)'}</span>
            </button>
          </div>

          {/* Error Message Box */}
          {errorMessage && (
            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-amber-800 text-sm font-medium animate-shake">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={onSubmit} className="mt-8 space-y-6">

            {/* Optional Teacher & School fields */}
            {showTeacherInfo && (
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    O‘qituvchi F.I.SH (Ixtiyoriy)
                  </label>
                  <input
                    type="text"
                    value={formData.oqituvchiIsmi || ''}
                    onChange={(e) => setFormData({ ...formData, oqituvchiIsmi: e.target.value })}
                    placeholder="Masalan: Zilola Rahimova"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-indigo-600" />
                    Maktab raqami yoki nomi (Ixtiyoriy)
                  </label>
                  <input
                    type="text"
                    value={formData.maktabRaqami || ''}
                    onChange={(e) => setFormData({ ...formData, maktabRaqami: e.target.value })}
                    placeholder="Masalan: 12-sonli umumta’lim maktabi"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Row 1: Sinf & Fan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Field 1: Sinfni tanlang */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  1. Sinfni tanlang <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.sinf}
                    onChange={(e) => setFormData({ ...formData, sinf: e.target.value })}
                    className="w-full appearance-none px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all pr-10 cursor-pointer"
                  >
                    <option value="" disabled>Sinfni tanlang...</option>
                    {SINFLAR.map((sinf) => (
                      <option key={sinf} value={sinf}>
                        {sinf}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field 2: Fanni tanlang */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  2. Fanni tanlang <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.fan}
                    onChange={(e) => setFormData({ ...formData, fan: e.target.value })}
                    className="w-full appearance-none px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all pr-10 cursor-pointer"
                  >
                    <option value="" disabled>Fanni tanlang...</option>
                    {FANLAR.map((fan) => (
                      <option key={fan} value={fan}>
                        {fan}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Field 3: Mavzu (Large input) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-slate-800">
                  3. Mavzu <span className="text-red-500">*</span>
                </label>
                {suggestions.length > 0 && (
                  <span className="text-xs text-indigo-600 font-medium hidden sm:inline">
                    Tavsiya etilgan mavzular mavjud
                  </span>
                )}
              </div>
              <input
                type="text"
                value={formData.mavzu}
                onChange={(e) => setFormData({ ...formData, mavzu: e.target.value })}
                placeholder="Masalan: Gap bo‘laklari"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-900 text-base font-semibold placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 shadow-2xs transition-all"
              />

              {/* Quick suggestions pills */}
              {suggestions.length > 0 && (
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-400 font-medium">Tezkor tanlash:</span>
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickTopic(s)}
                      className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium transition-colors cursor-pointer"
                    >
                      + {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Row 2: Davomiyligi & Dars turi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Field 4: Dars davomiyligi */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  4. Dars davomiyligi <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.davomiyligi}
                    onChange={(e) => setFormData({ ...formData, davomiyligi: e.target.value })}
                    className="w-full appearance-none px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all pr-10 cursor-pointer"
                  >
                    {DAVOMIYLIKLAR.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Field 5: Dars turi */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  5. Dars turi <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.turi}
                    onChange={(e) => setFormData({ ...formData, turi: e.target.value })}
                    className="w-full appearance-none px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all pr-10 cursor-pointer"
                  >
                    {DARS_TURLARI.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Field 6: Qo‘shimcha talablar (Textarea) */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                6. Qo‘shimcha talablar
                <span className="ml-1.5 text-xs font-normal text-slate-500">(Ixtiyoriy)</span>
              </label>
              <textarea
                rows={3}
                value={formData.talablar || ''}
                onChange={(e) => setFormData({ ...formData, talablar: e.target.value })}
                placeholder="Masalan: 3-sinf o‘quvchilariga mos bo‘lsin, interaktiv metodlardan foydalanilsin, didaktik o‘yinlar kiritilsin..."
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all resize-y"
              />
            </div>

            {/* Bottom Gradient Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 sm:py-5 px-8 rounded-2xl text-base sm:text-lg font-extrabold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-teal-500 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-600 disabled:opacity-60 shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Dars ishlanmasi tayyorlanmoqda...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                    <span>✨ DARS ISHLANMASINI YARATISH</span>
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-2.5">
                AI tizimi dars maqsadlari, borishi, o‘quvchi-o‘qituvchi faoliyati va baholash mezonlarini to‘liq tayyorlaydi.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
