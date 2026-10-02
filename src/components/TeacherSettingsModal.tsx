import React, { useState } from 'react';
import { X, Save, User, Building, BookOpen, Check } from 'lucide-react';
import { SINFLAR, FANLAR } from './LessonPlanForm';

interface TeacherSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacherName: string;
  setTeacherName: (name: string) => void;
  schoolName: string;
  setSchoolName: (school: string) => void;
  defaultSinf: string;
  setDefaultSinf: (sinf: string) => void;
  defaultFan: string;
  setDefaultFan: (fan: string) => void;
}

export const TeacherSettingsModal: React.FC<TeacherSettingsModalProps> = ({
  isOpen,
  onClose,
  teacherName,
  setTeacherName,
  schoolName,
  setSchoolName,
  defaultSinf,
  setDefaultSinf,
  defaultFan,
  setDefaultFan,
}) => {
  const [localName, setLocalName] = useState(teacherName);
  const [localSchool, setLocalSchool] = useState(schoolName);
  const [localSinf, setLocalSinf] = useState(defaultSinf);
  const [localFan, setLocalFan] = useState(defaultFan);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setTeacherName(localName);
    setSchoolName(localSchool);
    setDefaultSinf(localSinf);
    setDefaultFan(localFan);

    localStorage.setItem('ustoz_ai_teacher_name', localName);
    localStorage.setItem('ustoz_ai_school_name', localSchool);
    localStorage.setItem('ustoz_ai_default_sinf', localSinf);
    localStorage.setItem('ustoz_ai_default_fan', localFan);

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                O‘qituvchi profil sozlamalari
              </h3>
              <p className="text-xs text-slate-500">
                Bu ma’lumotlar dars ishlanmasi chop etilganda avtomatik qo‘yiladi
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

        {savedSuccess && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Sozlamalar muvaffaqiyatli saqlandi!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4 text-sm">
          {/* F.I.SH */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-600" />
              O‘qituvchi F.I.SH
            </label>
            <input
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              placeholder="Masalan: Zilola Rahimova"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Maktab */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-indigo-600" />
              Maktab raqami yoki nomi
            </label>
            <input
              type="text"
              value={localSchool}
              onChange={(e) => setLocalSchool(e.target.value)}
              placeholder="Masalan: 12-sonli umumta’lim maktabi"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {/* Asosiy sinf */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Odatdagi sinf
              </label>
              <select
                value={localSinf}
                onChange={(e) => setLocalSinf(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
              >
                <option value="">Tanlanmagan</option>
                {SINFLAR.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Asosiy fan */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Odatdagi fan
              </label>
              <select
                value={localFan}
                onChange={(e) => setLocalFan(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
              >
                <option value="">Tanlanmagan</option>
                {FANLAR.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 font-semibold cursor-pointer"
            >
              Yopish
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 font-bold shadow-md shadow-indigo-500/20 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Saqlash</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
