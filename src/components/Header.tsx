import React, { useState } from 'react';
import { BookOpen, GraduationCap, Settings, Sparkles, Bookmark, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenHelp: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  onScrollToForm: () => void;
  onScrollToExamples: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSettings,
  onOpenHelp,
  onOpenSaved,
  savedCount,
  onScrollToForm,
  onScrollToExamples,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-blue-600 via-indigo-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 ring-4 ring-blue-50">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 bg-linear-to-r from-blue-700 via-indigo-700 to-teal-600 bg-clip-text text-transparent">
                  USTOZ AI
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  v2.0
                </span>
              </div>
              <p className="hidden sm:block text-xs font-medium text-slate-500">
                Sun’iy intellekt yordamida darslaringizni oson yarating
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
            >
              Bosh sahifa
            </button>
            <button
              onClick={onScrollToForm}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white rounded-xl transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              Dars ishlanma
            </button>
            <button
              onClick={onScrollToExamples}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
            >
              Namunalar
            </button>
            <button
              onClick={onOpenHelp}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white rounded-xl transition-all flex items-center gap-1"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              Yordam
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSaved}
              title="Saqlangan dars ishlanmalari"
              className="relative p-2.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-200 sm:border-transparent"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenSettings}
              title="O‘qituvchi sozlamalari"
              className="p-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all border border-slate-200 sm:border-transparent flex items-center gap-1.5"
            >
              <Settings className="w-5 h-5" />
              <span className="hidden lg:inline text-xs font-semibold">Sozlamalar</span>
            </button>

            <button
              onClick={onScrollToForm}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-teal-500 hover:opacity-95 shadow-md shadow-blue-500/20 transition-all active:scale-98"
            >
              <Sparkles className="w-4 h-4" />
              <span>Yaratish</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100"
              aria-label="Menyu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md space-y-2">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg"
            >
              🏠 Bosh sahifa
            </button>
            <button
              onClick={() => {
                onScrollToForm();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Dars ishlanma yaratish
            </button>
            <button
              onClick={() => {
                onScrollToExamples();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg"
            >
              📚 Namunalar
            </button>
            <button
              onClick={() => {
                onOpenSaved();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-indigo-500" /> Saqlangan darslar
              </span>
              {savedCount > 0 && (
                <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 font-bold rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                onOpenHelp();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" /> Yordam va Qo‘llanma
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
