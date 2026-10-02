import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExamplesSection } from './components/ExamplesSection';
import { LessonPlanForm } from './components/LessonPlanForm';
import { LessonPlanView } from './components/LessonPlanView';
import { LoadingStepsModal } from './components/LoadingStepsModal';
import { TeacherSettingsModal } from './components/TeacherSettingsModal';
import { SavedPlansDrawer } from './components/SavedPlansDrawer';
import { EditLessonModal } from './components/EditLessonModal';
import { HelpModal } from './components/HelpModal';
import { Footer } from './components/Footer';
import { LessonPlanData, LessonPlanRequest } from './types';
import { SAMPLE_LESSON_PLAN_GAP_BOLAKLARI } from './data/sampleLessonPlan';

export default function App() {
  // Teacher profile & default settings
  const [teacherName, setTeacherName] = useState<string>(() => {
    return localStorage.getItem('ustoz_ai_teacher_name') || '';
  });
  const [schoolName, setSchoolName] = useState<string>(() => {
    return localStorage.getItem('ustoz_ai_school_name') || '';
  });
  const [defaultSinf, setDefaultSinf] = useState<string>(() => {
    return localStorage.getItem('ustoz_ai_default_sinf') || '3-sinf';
  });
  const [defaultFan, setDefaultFan] = useState<string>(() => {
    return localStorage.getItem('ustoz_ai_default_fan') || 'Ona tili';
  });

  // Form State
  const [formData, setFormData] = useState<LessonPlanRequest>({
    sinf: defaultSinf,
    fan: defaultFan,
    mavzu: '',
    davomiyligi: '45 daqiqa',
    turi: 'Yangi bilim beruvchi',
    talablar: '',
    oqituvchiIsmi: teacherName,
    maktabRaqami: schoolName,
  });

  // Keep form synced with teacher settings
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      oqituvchiIsmi: prev.oqituvchiIsmi || teacherName,
      maktabRaqami: prev.maktabRaqami || schoolName,
    }));
  }, [teacherName, schoolName]);

  // Lesson Plan Result State
  const [currentPlan, setCurrentPlan] = useState<LessonPlanData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Saved plans in local storage
  const [savedPlans, setSavedPlans] = useState<LessonPlanData[]>(() => {
    try {
      const stored = localStorage.getItem('ustoz_ai_saved_plans');
      return stored ? JSON.parse(stored) : [SAMPLE_LESSON_PLAN_GAP_BOLAKLARI];
    } catch {
      return [SAMPLE_LESSON_PLAN_GAP_BOLAKLARI];
    }
  });

  // Modals state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Save plans to localStorage on update
  useEffect(() => {
    localStorage.setItem('ustoz_ai_saved_plans', JSON.stringify(savedPlans));
  }, [savedPlans]);

  // Form submission handler
  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.sinf || !formData.fan || !formData.mavzu.trim() || !formData.davomiyligi || !formData.turi) {
      setErrorMessage('⚠️ Iltimos, barcha kerakli maydonlarni to‘ldiring.');
      const formEl = document.getElementById('lesson-plan-form-card');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-lesson-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sinf: formData.sinf,
          fan: formData.fan,
          mavzu: formData.mavzu.trim(),
          davomiyligi: formData.davomiyligi,
          turi: formData.turi,
          talablar: formData.talablar?.trim(),
          oqituvchiIsmi: formData.oqituvchiIsmi || teacherName || undefined,
          maktabRaqami: formData.maktabRaqami || schoolName || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Dars ishlanmasini yaratishda xatolik yuz berdi.');
      }

      setCurrentPlan(data.data);

      // Smooth scroll to generated plan
      setTimeout(() => {
        const resultEl = document.getElementById('lesson-plan-result');
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } catch (error: any) {
      console.error('Error generating lesson plan:', error);
      setErrorMessage('❌ Dars ishlanmasini yaratishda xatolik yuz berdi. Qaytadan urinib ko‘ring.');
    } finally {
      setIsLoading(false);
    }
  };

  // View the required Main Sample: 3-sinf • Ona tili: Gap bo‘laklari
  const handleViewMainSample = () => {
    setFormData({
      sinf: '3-sinf',
      fan: 'Ona tili',
      mavzu: 'Gap bo‘laklari',
      davomiyligi: '45 daqiqa',
      turi: 'Yangi bilim beruvchi',
      talablar: '3-sinf o‘quvchilariga mos bo‘lsin, interaktiv ertak va didaktik o‘yinlar qo‘llansin',
      oqituvchiIsmi: teacherName || 'Zilola Rahimova',
      maktabRaqami: schoolName || '12-sonli umumta’lim maktabi',
    });

    const sample = {
      ...SAMPLE_LESSON_PLAN_GAP_BOLAKLARI,
      umumiy: {
        ...SAMPLE_LESSON_PLAN_GAP_BOLAKLARI.umumiy,
        oqituvchiIsmi: teacherName || SAMPLE_LESSON_PLAN_GAP_BOLAKLARI.umumiy.oqituvchiIsmi,
        maktabRaqami: schoolName || SAMPLE_LESSON_PLAN_GAP_BOLAKLARI.umumiy.maktabRaqami,
      },
    };

    setCurrentPlan(sample);

    setTimeout(() => {
      const resultEl = document.getElementById('lesson-plan-result');
      if (resultEl) {
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  // Quick select an example
  const handleSelectExample = (ex: {
    sinf: string;
    fan: string;
    mavzu: string;
    davomiyligi: string;
    turi: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      sinf: ex.sinf,
      fan: ex.fan,
      mavzu: ex.mavzu,
      davomiyligi: ex.davomiyligi,
      turi: ex.turi,
    }));

    const formEl = document.getElementById('lesson-plan-form-card');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Save current plan to saved plans
  const handleSaveToLocal = () => {
    if (!currentPlan) return;
    const exists = savedPlans.some((p) => p.id === currentPlan.id);
    if (!exists) {
      setSavedPlans((prev) => [currentPlan, ...prev]);
    }
  };

  const isCurrentPlanSaved = Boolean(
    currentPlan && savedPlans.some((p) => p.id === currentPlan.id)
  );

  const handleDeletePlan = (id: string) => {
    setSavedPlans((prev) => prev.filter((p) => p.id !== id));
  };

  const handleUpdatePlan = (updated: LessonPlanData) => {
    setCurrentPlan(updated);
    setSavedPlans((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById('lesson-plan-form-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExamples = () => {
    const el = document.getElementById('examples-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Header */}
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedPlans.length}
        onScrollToForm={scrollToForm}
        onScrollToExamples={scrollToExamples}
      />

      {/* Main Container */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartClick={scrollToForm}
          onExploreSample={handleViewMainSample}
        />

        {/* Examples Section */}
        <div id="examples-section">
          <ExamplesSection
            onSelectExample={handleSelectExample}
            onViewMainSample={handleViewMainSample}
          />
        </div>

        {/* Lesson Plan Generator Form & Results Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          
          {/* Form */}
          <div className="form-section">
            <LessonPlanForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleGenerate}
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
          </div>

          {/* AI Generated Lesson Plan Display */}
          {currentPlan && (
            <LessonPlanView
              plan={currentPlan}
              onRegenerate={() => handleGenerate()}
              onEdit={() => setIsEditModalOpen(true)}
              onSaveToLocal={handleSaveToLocal}
              isSaved={isCurrentPlanSaved}
            />
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Loading Steps Modal */}
      <LoadingStepsModal isOpen={isLoading} />

      {/* Teacher Settings Modal */}
      <TeacherSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        teacherName={teacherName}
        setTeacherName={setTeacherName}
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        defaultSinf={defaultSinf}
        setDefaultSinf={setDefaultSinf}
        defaultFan={defaultFan}
        setDefaultFan={setDefaultFan}
      />

      {/* Saved Plans Drawer */}
      <SavedPlansDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedPlans={savedPlans}
        onSelectPlan={(plan) => {
          setCurrentPlan(plan);
          setFormData({
            sinf: plan.umumiy.sinf,
            fan: plan.umumiy.fan,
            mavzu: plan.umumiy.mavzu,
            davomiyligi: plan.umumiy.davomiyligi,
            turi: plan.umumiy.turi,
            oqituvchiIsmi: plan.umumiy.oqituvchiIsmi || teacherName,
            maktabRaqami: plan.umumiy.maktabRaqami || schoolName,
          });
          setTimeout(() => {
            const el = document.getElementById('lesson-plan-result');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }}
        onDeletePlan={handleDeletePlan}
      />

      {/* Edit Lesson Plan Modal */}
      {currentPlan && (
        <EditLessonModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          plan={currentPlan}
          onSave={handleUpdatePlan}
        />
      )}

      {/* Help & Guide Modal */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

    </div>
  );
}
