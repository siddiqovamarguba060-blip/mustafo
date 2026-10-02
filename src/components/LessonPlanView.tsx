import React, { useState } from 'react';
import {
  Printer,
  Copy,
  RotateCcw,
  Edit3,
  Download,
  Bookmark,
  Check,
  Clock,
  Sparkles,
  Lightbulb,
  BookOpen,
  Target,
  Wrench,
  Compass,
  UserCheck,
  Users,
  Award,
  HelpCircle,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Share2
} from 'lucide-react';
import { LessonPlanData } from '../types';

interface LessonPlanViewProps {
  plan: LessonPlanData;
  onRegenerate: () => void;
  onEdit: () => void;
  onSaveToLocal: () => void;
  isSaved: boolean;
}

export const LessonPlanView: React.FC<LessonPlanViewProps> = ({
  plan,
  onRegenerate,
  onEdit,
  onSaveToLocal,
  isSaved,
}) => {
  const [copied, setCopied] = useState(false);
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswer = (idx: number) => {
    setShowAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Printable action
  const handlePrint = () => {
    window.print();
  };

  // Copy to clipboard with formatted text
  const handleCopy = async () => {
    const text = `
📖 DARS ISHLANMASI (KONSPEKT)
Fan: ${plan.umumiy.fan}
Sinf: ${plan.umumiy.sinf}
Mavzu: ${plan.umumiy.mavzu}
Dars davomiyligi: ${plan.umumiy.davomiyligi}
Dars turi: ${plan.umumiy.turi}
${plan.umumiy.oqituvchiIsmi ? `O‘qituvchi: ${plan.umumiy.oqituvchiIsmi}` : ''}
${plan.umumiy.maktabRaqami ? `Maktab: ${plan.umumiy.maktabRaqami}` : ''}

1. DARS MAQSADI:
- Ta’limiy: ${plan.maqsad.talimiy}
- Tarbiyaviy: ${plan.maqsad.tarbiyaviy}
- Rivojlantiruvchi: ${plan.maqsad.rivojlantiruvchi}

2. KUTILAYOTGAN NATIJALAR:
${plan.kutilayotganNatijalar.map((n, i) => `${i + 1}. ${n}`).join('\n')}

3. DARS JIHOZLARI:
${plan.jihozlar.map((j) => `• ${j}`).join('\n')}

4. DARS METODLARI:
${plan.metodlar.map((m) => `• ${m.nomi}: ${m.tavsifi}`).join('\n')}

5. DARSNING BORISHI (XRONOMETRAJ):
${plan.borishi.map((b) => `[${b.vaqt}] ${b.bosqich}:\n${b.mazmuni}\nMetod: ${b.metod || 'Interaktiv'}`).join('\n\n')}

6. O‘QITUVCHI FAOLIYATI:
${plan.oqituvchiFaoliyati.map((f, i) => `${i + 1}. ${f}`).join('\n')}

7. O‘QUVCHI FAOLIYATI:
${plan.oquvchiFaoliyati.map((f, i) => `${i + 1}. ${f}`).join('\n')}

8. MUSTAHKAMLASH UCHUN TOPSHIRIQLAR:
${plan.topshiriqlar.map((t) => `${t.raqam}-topshiriq: ${t.nomi}\n${t.tavsifi}\n${t.javobi ? `Javobi: ${t.javobi}` : ''}`).join('\n\n')}

9. BAHOLASH MEZONLARI:
${plan.baholash.map((b) => `• ${b.ball}: ${b.mezon}`).join('\n')}

10. UYGA VAZIFA:
${plan.uygaVazifa.vazifa}
Ko‘rsatma: ${plan.uygaVazifa.korsatma}

11. REFLEKSIYA:
Metod: ${plan.refleksiya.metod}
${plan.refleksiya.savollar.map((s) => `• ${s}`).join('\n')}

💡 USTOZ AI TAVSIYALARI:
${plan.tavsiyalar.map((t, i) => `${i + 1}. ${t}`).join('\n')}
    `.trim();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Nusxa olishda xatolik:', err);
    }
  };

  // Download as Word Document (.doc format with standard HTML table/styles)
  const handleDownloadDoc = () => {
    const headerHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${plan.umumiy.mavzu} - Dars ishlanmasi</title>
      <style>
        body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.3; }
        h1 { font-size: 16pt; text-align: center; font-weight: bold; }
        h2 { font-size: 13pt; font-weight: bold; color: #1e3a8a; margin-top: 15pt; }
        table { border-collapse: collapse; width: 100%; margin-top: 8pt; margin-bottom: 8pt; }
        th, td { border: 1px solid #333333; padding: 6pt; text-align: left; }
        th { background-color: #f1f5f9; }
      </style>
      </head>
      <body>
        <div style="text-align: center; margin-bottom: 20px;">
          <p style="font-weight: bold; margin: 0;">O‘ZBEKISTON RESPUBLIKASI MAKTABGACHA VA MAKTAB TA’LIMI VAZIRLIGI</p>
          <p style="margin: 0;">${plan.umumiy.maktabRaqami || 'Umumiy o‘rta ta’lim maktabi'}</p>
          <p style="margin: 0;">Fan: <strong>${plan.umumiy.fan}</strong> | Sinf: <strong>${plan.umumiy.sinf}</strong></p>
          <p style="margin: 0;">O‘qituvchi: <strong>${plan.umumiy.oqituvchiIsmi || 'Fan o‘qituvchisi'}</strong></p>
          <h1 style="margin-top: 15px;">DARS ISHLANMASI (KONSPEKT)</h1>
          <h2 style="text-align: center; color: #000;">MAVZU: ${plan.umumiy.mavzu.toUpperCase()}</h2>
        </div>

        <h2>1. UMUMIY MA’LUMOTLAR</h2>
        <ul>
          <li><strong>Fan:</strong> ${plan.umumiy.fan}</li>
          <li><strong>Sinf:</strong> ${plan.umumiy.sinf}</li>
          <li><strong>Mavzu:</strong> ${plan.umumiy.mavzu}</li>
          <li><strong>Dars davomiyligi:</strong> ${plan.umumiy.davomiyligi}</li>
          <li><strong>Dars turi:</strong> ${plan.umumiy.turi}</li>
        </ul>

        <h2>2. DARSNING MAQSADLARI</h2>
        <ul>
          <li><strong>Ta’limiy maqsad:</strong> ${plan.maqsad.talimiy}</li>
          <li><strong>Tarbiyaviy maqsad:</strong> ${plan.maqsad.tarbiyaviy}</li>
          <li><strong>Rivojlantiruvchi maqsad:</strong> ${plan.maqsad.rivojlantiruvchi}</li>
        </ul>

        <h2>3. KUTILAYOTGAN NATIJALAR</h2>
        <ul>
          ${plan.kutilayotganNatijalar.map(n => `<li>${n}</li>`).join('')}
        </ul>

        <h2>4. DARS JIHOZLARI</h2>
        <ul>
          ${plan.jihozlar.map(j => `<li>${j}</li>`).join('')}
        </ul>

        <h2>5. DARS METODLARI</h2>
        <ul>
          ${plan.metodlar.map(m => `<li><strong>${m.nomi}:</strong> ${m.tavsifi}</li>`).join('')}
        </ul>

        <h2>6. DARSNING BORISHI (XRONOMETRAJ)</h2>
        <table>
          <thead>
            <tr>
              <th style="width: 20%;">Vaqti</th>
              <th style="width: 25%;">Bosqich nomi</th>
              <th style="width: 40%;">Mazmuni va faoliyat</th>
              <th style="width: 15%;">Metod</th>
            </tr>
          </thead>
          <tbody>
            ${plan.borishi.map(b => `
              <tr>
                <td><strong>${b.vaqt}</strong></td>
                <td><strong>${b.bosqich}</strong></td>
                <td>${b.mazmuni}</td>
                <td>${b.metod || 'Interaktiv'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <h2>7. O‘QITUVCHI FAOLIYATI</h2>
        <ol>
          ${plan.oqituvchiFaoliyati.map(f => `<li>${f}</li>`).join('')}
        </ol>

        <h2>8. O‘QUVCHI FAOLIYATI</h2>
        <ol>
          ${plan.oquvchiFaoliyati.map(f => `<li>${f}</li>`).join('')}
        </ol>

        <h2>9. MUSTAHKAMLASH UCHUN TOPSHIRIQLAR</h2>
        ${plan.topshiriqlar.map(t => `
          <div style="margin-bottom: 10pt;">
            <p><strong>${t.raqam}-topshiriq: ${t.nomi}</strong></p>
            <p>${t.tavsifi.replace(/\n/g, '<br/>')}</p>
            ${t.javobi ? `<p><em>Javobi: ${t.javobi}</em></p>` : ''}
          </div>
        `).join('')}

        <h2>10. BAHOLASH MEZONLARI</h2>
        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Baho / Ball</th>
              <th>Mezon va talablar</th>
            </tr>
          </thead>
          <tbody>
            ${plan.baholash.map(b => `
              <tr>
                <td><strong>${b.ball}</strong></td>
                <td>${b.mezon}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <h2>11. UYGA VAZIFA</h2>
        <p><strong>Vazifa:</strong> ${plan.uygaVazifa.vazifa}</p>
        <p><strong>Ko‘rsatma:</strong> ${plan.uygaVazifa.korsatma}</p>

        <h2>12. REFLEKSIYA</h2>
        <p><strong>Metod:</strong> ${plan.refleksiya.metod}</p>
        <ul>
          ${plan.refleksiya.savollar.map(s => `<li>${s}</li>`).join('')}
        </ul>

        <div style="margin-top: 30pt; display: flex; justify-content: space-between;">
          <p>O‘quv ishlari bo‘yicha direktor o‘rinbosari: ____________ (Imzo)</p>
          <p>Fan metodbirlashma rahbari: ____________ (Imzo)</p>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', headerHtml], {
      type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dars_ishlanmasi_${plan.umumiy.fan}_${plan.umumiy.sinf}_${plan.umumiy.mavzu.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="lesson-plan-result" className="scroll-mt-24 space-y-6">
      
      {/* Top Action Bar */}
      <div className="action-buttons-bar bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-bold text-slate-800">
            Dars ishlanmasi muvaffaqiyatli tayyorlandi!
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Print */}
          <button
            onClick={handlePrint}
            title="A4 qog‘ozida toza chop etish"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Chop etish</span>
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            title="Matndan nusxa olish"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Nusxa olindi!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Nusxa olish</span>
              </>
            )}
          </button>

          {/* Edit */}
          <button
            onClick={onEdit}
            title="Dars rejasini tahrirlash"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-amber-50 hover:text-amber-700 transition-all cursor-pointer"
          >
            <Edit3 className="w-4 h-4" />
            <span>Tahrirlash</span>
          </button>

          {/* PDF / Word Save */}
          <button
            onClick={handleDownloadDoc}
            title="Microsoft Word (.doc) formatida yuklab olish"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Word (.doc)</span>
          </button>

          <button
            onClick={handlePrint}
            title="Brauzer orqali PDF sifatida saqlash"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>PDF saqlash</span>
          </button>

          {/* Save to Local */}
          <button
            onClick={onSaveToLocal}
            title="Mening darslarimga saqlash"
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isSaved
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-emerald-600 text-emerald-600' : ''}`} />
            <span>{isSaved ? 'Saqlandi' : 'Saqlash'}</span>
          </button>

          {/* Regenerate */}
          <button
            onClick={onRegenerate}
            title="Qaytadan boshqa variant yaratish"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Qayta yaratish</span>
          </button>
        </div>
      </div>

      {/* Main Document Card: 📖 DARS ISHLANMASI */}
      <div
        id="printable-lesson-plan"
        className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 space-y-8"
      >
        {/* Official Header Badge (Shows in print and screen) */}
        <div className="border-b-2 border-slate-900/10 pb-6 text-center space-y-2">
          <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">
            O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-600">
            {plan.umumiy.maktabRaqami || 'Umumta’lim maktabi'}
          </div>
          <div className="inline-block mt-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-extrabold tracking-wide uppercase">
            📖 DARS ISHLANMASI
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-2">
            {plan.umumiy.mavzu}
          </h1>
          {plan.umumiy.oqituvchiIsmi && (
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Fan o‘qituvchisi: <strong className="text-slate-800 font-semibold">{plan.umumiy.oqituvchiIsmi}</strong>
            </p>
          )}
        </div>

        {/* 1. Umumiy ma’lumot */}
        <div className="print-card-section bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs flex items-center justify-center font-extrabold">
              1
            </span>
            <span>Umumiy ma’lumot</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-xs sm:text-sm">
            <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="text-slate-400 block text-[11px] font-semibold uppercase">Fan</span>
              <strong className="text-slate-900 text-sm font-bold">{plan.umumiy.fan}</strong>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="text-slate-400 block text-[11px] font-semibold uppercase">Sinf</span>
              <strong className="text-slate-900 text-sm font-bold">{plan.umumiy.sinf}</strong>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="text-slate-400 block text-[11px] font-semibold uppercase">Davomiyligi</span>
              <strong className="text-blue-700 text-sm font-bold">{plan.umumiy.davomiyligi}</strong>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[11px] font-semibold uppercase">Dars turi</span>
              <strong className="text-indigo-700 text-sm font-bold">{plan.umumiy.turi}</strong>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs col-span-2 sm:col-span-2 lg:col-span-1">
              <span className="text-slate-400 block text-[11px] font-semibold uppercase">Sana</span>
              <strong className="text-slate-800 text-sm font-semibold">
                {new Date(plan.createdAt).toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' })}
              </strong>
            </div>
          </div>
        </div>

        {/* 2. Dars maqsadi */}
        <div className="print-card-section space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs flex items-center justify-center font-extrabold">
              2
            </span>
            <span>Dars maqsadi</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>Ta’limiy maqsad</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {plan.maqsad.talimiy}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Tarbiyaviy maqsad</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {plan.maqsad.tarbiyaviy}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Rivojlantiruvchi maqsad</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {plan.maqsad.rivojlantiruvchi}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Kutilayotgan natijalar & 4. Jihozlar */}
        <div className="print-card-section grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 3. Kutilayotgan natijalar */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-teal-600 text-white text-xs flex items-center justify-center font-extrabold">
                3
              </span>
              <span>Kutilayotgan natijalar (O‘quvchi nimalarni biladi?)</span>
            </h3>
            <ul className="space-y-2">
              {plan.kutilayotganNatijalar.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-md bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Dars jihozlari */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-amber-600 text-white text-xs flex items-center justify-center font-extrabold">
                4
              </span>
              <span>Dars jihozlari va vositalari</span>
            </h3>
            <ul className="space-y-2">
              {plan.jihozlar.map((tool, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    📌
                  </span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5. Dars metodlari */}
        <div className="print-card-section space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-violet-600 text-white text-xs flex items-center justify-center font-extrabold">
              5
            </span>
            <span>Dars metodlari va texnologiyalari</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {plan.metodlar.map((metod, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-violet-50/50 border border-violet-100 space-y-1">
                <div className="text-xs font-bold text-violet-900">
                  {metod.nomi}
                </div>
                <div className="text-xs text-slate-600 leading-normal">
                  {metod.tavsifi}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Darsning borishi (Timeline) */}
        <div className="print-card-section space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-700 text-white text-xs flex items-center justify-center font-extrabold">
                6
              </span>
              <span>Darsning borishi (Xronometraj)</span>
            </h3>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              Jami: {plan.umumiy.davomiyligi}
            </span>
          </div>

          {/* Table layout for printing & mobile list */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold">
                  <tr>
                    <th className="py-3 px-4 w-32">Vaqt</th>
                    <th className="py-3 px-4 w-44">Bosqich nomi</th>
                    <th className="py-3 px-4">Mazmuni va faoliyat</th>
                    <th className="py-3 px-4 w-40">Metod</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {plan.borishi.map((step, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-3.5 px-4 font-bold text-blue-700 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 text-blue-800">
                          <Clock className="w-3.5 h-3.5" />
                          {step.vaqt}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {step.bosqich}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                        {step.mazmuni}
                      </td>
                      <td className="py-3.5 px-4 text-xs font-medium text-indigo-700">
                        {step.metod || 'Interaktiv usul'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 7. O‘qituvchi faoliyati & 8. O‘quvchi faoliyati */}
        <div className="print-card-section grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 7. O‘qituvchi faoliyati */}
          <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-3">
            <h3 className="text-sm font-bold text-sky-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-sky-600 text-white text-[10px] flex items-center justify-center font-bold">
                7
              </span>
              <span>O‘qituvchi faoliyati</span>
            </h3>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
              {plan.oqituvchiFaoliyati.map((act, i) => (
                <li key={i} className="pl-1">
                  <span>{act}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 8. O‘quvchi faoliyati */}
          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
            <h3 className="text-sm font-bold text-indigo-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">
                8
              </span>
              <span>O‘quvchi faoliyati</span>
            </h3>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
              {plan.oquvchiFaoliyati.map((act, i) => (
                <li key={i} className="pl-1">
                  <span>{act}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* 9. Mustahkamlash uchun topshiriqlar */}
        <div className="print-card-section space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs flex items-center justify-center font-extrabold">
              9
            </span>
            <span>Mustahkamlash uchun topshiriqlar va amaliy mashqlar</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plan.topshiriqlar.map((task, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {task.raqam}-topshiriq
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {task.nomi}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                    {task.tavsifi}
                  </p>
                </div>

                {task.javobi && (
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => toggleAnswer(i)}
                      className="no-print text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{showAnswers[i] ? 'Javobni yashirish' : 'Namunaviy javobni ko‘rish'}</span>
                      {showAnswers[i] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    {/* In print, answers are always visible */}
                    <div className={`mt-1.5 p-2 rounded-lg bg-slate-50 text-xs text-slate-600 ${showAnswers[i] ? 'block' : 'hidden print:block'}`}>
                      <strong>Javobi:</strong> {task.javobi}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 10. Baholash mezonlari */}
        <div className="print-card-section space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-orange-600 text-white text-xs flex items-center justify-center font-extrabold">
              10
            </span>
            <span>Baholash mezonlari (Formativ va jamlovchi mezonlar)</span>
          </h3>

          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-800 font-bold">
                <tr>
                  <th className="py-2.5 px-4 w-36">Baho / Ball</th>
                  <th className="py-2.5 px-4">Talablar va o‘quvchi ko‘rsatkichlari</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {plan.baholash.map((b, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 font-bold text-xs sm:text-sm">
                        {b.ball}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700 leading-relaxed">
                      {b.mezon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 11. Uyga vazifa & 12. Refleksiya */}
        <div className="print-card-section grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 11. Uyga vazifa */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2.5">
            <h3 className="text-sm font-bold text-amber-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-amber-600 text-white text-[10px] flex items-center justify-center font-bold">
                11
              </span>
              <span>Uyga vazifa</span>
            </h3>
            <div className="text-sm font-bold text-slate-900">
              {plan.uygaVazifa.vazifa}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              <strong>Ko‘rsatma:</strong> {plan.uygaVazifa.korsatma}
            </p>
          </div>

          {/* 12. Refleksiya */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">
                  12
                </span>
                <span>Refleksiya (Dars yakunidagi o‘z-o‘zini baholash)</span>
              </h3>
            </div>
            <div className="text-xs font-semibold text-emerald-800">
              Metod: {plan.refleksiya.metod}
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {plan.refleksiya.savollar.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* EXTRA FEATURE: 💡 USTOZ AI tavsiyasi */}
        {plan.tavsiyalar && plan.tavsiyalar.length > 0 && (
          <div className="print-card-section p-6 rounded-3xl bg-linear-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-base">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg shadow-xs">
                💡
              </div>
              <span>USTOZ AI tavsiyasi</span>
            </div>

            <p className="text-xs text-amber-800 font-medium">
              Ushbu mavzuni yanada jonli, oson va samarali o‘tish uchun pedagogik maslahatlar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              {plan.tavsiyalar.map((tavsiya, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/80 border border-amber-200 text-xs sm:text-sm text-slate-800 space-y-1">
                  <div className="text-amber-700 font-bold flex items-center gap-1.5">
                    <span>Tavsiya #{idx + 1}</span>
                  </div>
                  <p className="leading-relaxed text-slate-700">
                    {tavsiya}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Official Signatures Section (Visible in Print & Screen) */}
        <div className="pt-8 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row justify-between gap-6">
          <div className="space-y-1">
            <div className="font-semibold text-slate-800">O‘quv ishlari bo‘yicha direktor o‘rinbosari:</div>
            <div className="text-slate-400">________________________ (Imzo / F.I.SH)</div>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-slate-800">Fan metodbirlashma rahbari:</div>
            <div className="text-slate-400">________________________ (Imzo / F.I.SH)</div>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-slate-800">Dars o‘tuvchi o‘qituvchi:</div>
            <div className="text-slate-400">________________________ (Imzo / F.I.SH)</div>
          </div>
        </div>

      </div>
    </div>
  );
};
