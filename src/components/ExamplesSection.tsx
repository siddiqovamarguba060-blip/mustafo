import React from 'react';
import { BookOpen, Sparkles, ArrowRight, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { POPULAR_EXAMPLES } from '../data/sampleLessonPlan';

interface ExamplesSectionProps {
  onSelectExample: (example: {
    sinf: string;
    fan: string;
    mavzu: string;
    davomiyligi: string;
    turi: string;
  }) => void;
  onViewMainSample: () => void;
}

export const ExamplesSection: React.FC<ExamplesSectionProps> = ({
  onSelectExample,
  onViewMainSample,
}) => {
  return (
    <section className="py-12 bg-linear-to-b from-transparent via-slate-100/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tayyor namunalar</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Namunaviy dars ishlanmalari bilan tanishing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Bir marta bosish orqali haqiqiy sinflar uchun tayyorlangan to‘liq dars konspektini ko‘rishingiz yoki o‘z darsingiz uchun andoza sifatida ishlatishingiz mumkin.
          </p>
        </div>

        {/* Featured Example Card - Required: 3-sinf Ona tili: Gap bo'laklari */}
        <div className="relative mb-8 rounded-3xl bg-linear-to-r from-blue-600 via-indigo-600 to-teal-600 p-1 shadow-xl">
          <div className="rounded-[22px] bg-white p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-3xl shadow-inner shrink-0">
                📚
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                    3-sinf • Ona tili
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 45 daqiqa
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
                    Yangi bilim beruvchi
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Mavzu: Gap bo‘laklari
                </h3>
                <p className="text-slate-600 text-sm max-w-xl">
                  Boshlang‘ich sinf o‘quvchilari uchun ega va kesimni bolalarbop ertak, «Sehrli so‘roqlar» o‘yini hamda amaliy kartochkalar orqali o‘rgatuvchi namunaviy dars ishlanmasi.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={onViewMainSample}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Namunani ko‘rish</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Other Popular Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POPULAR_EXAMPLES.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                    {item.sinf} • {item.fan}
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-medium">Mavzu:</div>
                  <h4 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {item.mavzu}
                  </h4>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {item.davomiyligi}
                  </span>
                  <span>•</span>
                  <span>{item.turi}</span>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  onClick={() => onSelectExample(item)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-blue-600 bg-blue-50/70 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Shu mavzuda yaratish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
