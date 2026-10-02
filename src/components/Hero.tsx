import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, BookOpen, Award, Users, Lightbulb, FileText } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
  onExploreSample: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick, onExploreSample }) => {
  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-blue-100/60 via-indigo-50/40 to-transparent -z-10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>O‘zbekiston o‘qituvchilari uchun 1-raqamli AI yordamchi</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Darsingizni bir necha{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                soniyada
              </span>{' '}
              yarating
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Fan, sinf va mavzuni kiriting — <strong className="text-slate-900 font-semibold">USTOZ AI</strong> siz uchun zamonaviy va batafsil dars ishlanmasini tayyorlaydi.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Davlat Ta’lim Standarti (DTS)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>1-11-sinflar to‘liq qamrovi</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Daqiqalargacha aniq xronometraj</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-teal-500 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-600 shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="text-xl">🚀</span>
                <span>Dars ishlanmasini yaratish</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <button
                onClick={onExploreSample}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>👀 Namunani ko‘rish</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    U
                  </div>
                  <div className="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    S
                  </div>
                  <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    T
                  </div>
                </div>
                <span>12 000+ o‘qituvchilar tanlovi</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-1.5 text-amber-600 font-semibold">
                <span>★★★★★</span>
                <span className="text-slate-600">4.9 / 5.0</span>
              </div>
            </div>
          </div>

          {/* Right Column: Educational SaaS Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-linear-to-tr from-blue-600/10 via-indigo-600/10 to-teal-500/10 p-2 sm:p-3 border border-blue-200/60 shadow-2xl backdrop-blur-xl">
                <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100 space-y-4">
                  
                  {/* Top Teacher & Subject Header Card */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-2xl shadow-inner">
                        🧑‍🏫
                      </div>
                      <div>
                        <div className="text-xs font-bold text-blue-600 tracking-wide uppercase">
                          Dars ishlanmasi namunasi
                        </div>
                        <h4 className="text-base font-bold text-slate-800">
                          Ona tili • 3-sinf
                        </h4>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200/80 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 45 daqiqa
                    </span>
                  </div>

                  {/* Topic badge */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Mavzu:
                    </div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>Gap bo‘laklari (Ega va Kesim)</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-semibold">
                        Yangi bilim
                      </span>
                    </div>
                  </div>

                  {/* Mini Timelines Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                      <span>Darsning bosqichlari:</span>
                      <span className="text-[11px] font-medium text-indigo-600">6 ta qism</span>
                    </div>
                    
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50/70 border border-blue-100">
                        <span className="font-semibold text-blue-900">00–05 daqiqa</span>
                        <span className="text-slate-600">Tashkiliy qism & motivatsiya</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-indigo-50/70 border border-indigo-100">
                        <span className="font-semibold text-indigo-900">10–25 daqiqa</span>
                        <span className="text-slate-600">Yangi mavzu (Ko‘rgazmali)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-teal-50/70 border border-teal-100">
                        <span className="font-semibold text-teal-900">25–35 daqiqa</span>
                        <span className="text-slate-600">Mustahkamlash & o‘yin</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights tag bar */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      <span>Metodlar: Klaster, Didaktik o‘yin</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      ✓ Tayyor
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1 - AI Generation Speed */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-xl border border-slate-200/80 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white text-lg shadow-sm">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">10 soniyada tayyor!</div>
                  <div className="text-[10px] text-slate-500">To‘liq 12 bo‘limli konspekt</div>
                </div>
              </div>

              {/* Floating Badge 2 - Print & Word */}
              <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-white rounded-2xl p-3 shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-600 to-teal-500 flex items-center justify-center text-white shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">A4 Chop etish & PDF</div>
                  <div className="text-[10px] text-slate-500">Vazirlik andozasiga mos</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
