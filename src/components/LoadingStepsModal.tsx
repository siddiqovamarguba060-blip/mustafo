import React, { useEffect, useState } from 'react';
import { Check, Sparkles, BrainCircuit } from 'lucide-react';

interface LoadingStepsModalProps {
  isOpen: boolean;
}

const STEPS = [
  'Mavzu tahlil qilinmoqda',
  'Dars maqsadi tuzilmoqda',
  'Topshiriqlar tayyorlanmoqda',
  'Baholash mezonlari yaratilmoqda',
  'Dars ishlanmasi tayyorlanmoqda'
];

export const LoadingStepsModal: React.FC<LoadingStepsModalProps> = ({ isOpen }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStepIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden text-center space-y-6">
        
        {/* Decorative background glow */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-teal-300/30 rounded-full blur-2xl pointer-events-none" />

        {/* Animated Robot / AI Icon */}
        <div className="relative mx-auto w-20 h-20 rounded-3xl bg-linear-to-tr from-blue-600 via-indigo-600 to-teal-500 p-0.5 shadow-xl shadow-blue-500/25">
          <div className="w-full h-full rounded-[22px] bg-white flex items-center justify-center text-4xl animate-pulse">
            🤖
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500"></span>
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            USTOZ AI darsingizni tayyorlamoqda...
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Davlat ta’lim standartlari asosida metodik qismlar shakllantirilmoqda
          </p>
        </div>

        {/* Animated Step List */}
        <div className="space-y-2.5 text-left py-2">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={idx}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 ${
                  isCurrent
                    ? 'bg-blue-50/90 border border-blue-200 shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-50/60 border border-emerald-100'
                    : 'bg-slate-50/50 opacity-40 border border-transparent'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    isCompleted
                      ? 'bg-emerald-500 text-white'
                      : isCurrent
                      ? 'bg-blue-600 text-white animate-spin'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : isCurrent ? (
                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </div>

                <span
                  className={`text-xs sm:text-sm font-semibold transition-colors ${
                    isCompleted
                      ? 'text-emerald-900'
                      : isCurrent
                      ? 'text-blue-900 font-bold'
                      : 'text-slate-500'
                  }`}
                >
                  {step}
                </span>

                {isCompleted && (
                  <span className="ml-auto text-xs font-bold text-emerald-600">
                    ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom indicator */}
        <div className="pt-2">
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-blue-600 to-teal-500 h-full transition-all duration-700 ease-out"
              style={{ width: `${((currentStepIndex + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
