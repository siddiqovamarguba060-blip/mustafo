import React, { useState } from 'react';
import { X, Save, Edit3 } from 'lucide-react';
import { LessonPlanData } from '../types';

interface EditLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: LessonPlanData;
  onSave: (updated: LessonPlanData) => void;
}

export const EditLessonModal: React.FC<EditLessonModalProps> = ({
  isOpen,
  onClose,
  plan,
  onSave,
}) => {
  const [editedPlan, setEditedPlan] = useState<LessonPlanData>({ ...plan });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedPlan);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <Edit3 className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl font-bold text-slate-900">
              Dars ishlanmasini tahrirlash
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          {/* Mavzu */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Mavzu
            </label>
            <input
              type="text"
              value={editedPlan.umumiy.mavzu}
              onChange={(e) =>
                setEditedPlan({
                  ...editedPlan,
                  umumiy: { ...editedPlan.umumiy, mavzu: e.target.value }
                })
              }
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Dars maqsadlari */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Dars maqsadlari
            </h4>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Ta’limiy maqsad:
              </label>
              <textarea
                rows={2}
                value={editedPlan.maqsad.talimiy}
                onChange={(e) =>
                  setEditedPlan({
                    ...editedPlan,
                    maqsad: { ...editedPlan.maqsad, talimiy: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tarbiyaviy maqsad:
              </label>
              <textarea
                rows={2}
                value={editedPlan.maqsad.tarbiyaviy}
                onChange={(e) =>
                  setEditedPlan({
                    ...editedPlan,
                    maqsad: { ...editedPlan.maqsad, tarbiyaviy: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Rivojlantiruvchi maqsad:
              </label>
              <textarea
                rows={2}
                value={editedPlan.maqsad.rivojlantiruvchi}
                onChange={(e) =>
                  setEditedPlan({
                    ...editedPlan,
                    maqsad: { ...editedPlan.maqsad, rivojlantiruvchi: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Uyga vazifa */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Uyga vazifa
            </h4>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Vazifa matni:
              </label>
              <input
                type="text"
                value={editedPlan.uygaVazifa.vazifa}
                onChange={(e) =>
                  setEditedPlan({
                    ...editedPlan,
                    uygaVazifa: { ...editedPlan.uygaVazifa, vazifa: e.target.value }
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Ko‘rsatma:
              </label>
              <textarea
                rows={2}
                value={editedPlan.uygaVazifa.korsatma}
                onChange={(e) =>
                  setEditedPlan({
                    ...editedPlan,
                    uygaVazifa: { ...editedPlan.uygaVazifa, korsatma: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 font-semibold cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-bold shadow-md shadow-blue-500/25 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>O‘zgarishlarni saqlash</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
