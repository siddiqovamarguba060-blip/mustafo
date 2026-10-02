import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { LessonPlanData } from '../types';

interface SavedPlansDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedPlans: LessonPlanData[];
  onSelectPlan: (plan: LessonPlanData) => void;
  onDeletePlan: (id: string) => void;
}

export const SavedPlansDrawer: React.FC<SavedPlansDrawerProps> = ({
  isOpen,
  onClose,
  savedPlans,
  onSelectPlan,
  onDeletePlan,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200">
        
        {/* Top Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Saqlangan darslar
              </h3>
              <p className="text-xs text-slate-500">
                Jami: {savedPlans.length} ta dars ishlanmasi
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

        {/* List of plans */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedPlans.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3 text-slate-400">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl">
                📝
              </div>
              <p className="text-sm font-semibold text-slate-600">
                Hozircha saqlangan darslar yo‘q
              </p>
              <p className="text-xs text-slate-400 max-w-xs">
                Dars ishlanmasini yaratgach, yuqoridagi «Saqlash» tugmasini bossangiz, bu yerda ko‘rinadi.
              </p>
            </div>
          ) : (
            savedPlans.map((plan) => (
              <div
                key={plan.id}
                className="group p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white shadow-2xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                    {plan.umumiy.sinf} • {plan.umumiy.fan}
                  </span>
                  <button
                    onClick={() => onDeletePlan(plan.id)}
                    title="O‘chirish"
                    className="text-slate-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {plan.umumiy.mavzu}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{plan.umumiy.davomiyligi}</span>
                    <span>•</span>
                    <span>{new Date(plan.createdAt).toLocaleDateString('uz-UZ')}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectPlan(plan);
                    onClose();
                  }}
                  className="w-full py-2 px-3 rounded-xl text-xs font-bold text-blue-600 bg-white group-hover:bg-blue-600 group-hover:text-white border border-slate-200 group-hover:border-blue-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Darsni ochish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <p className="text-[11px] text-slate-500">
            Dars ishlanmalari brauzeringiz xotirasida xavfsiz saqlanadi
          </p>
        </div>

      </div>
    </div>
  );
};
