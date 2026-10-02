export interface LessonPlanRequest {
  sinf: string;
  fan: string;
  mavzu: string;
  davomiyligi: string;
  turi: string;
  talablar?: string;
  oqituvchiIsmi?: string;
  maktabRaqami?: string;
}

export interface TimelineItem {
  vaqt: string;
  bosqich: string;
  mazmuni: string;
  metod?: string;
}

export interface TaskItem {
  raqam: number;
  nomi: string;
  tavsifi: string;
  javobi?: string;
}

export interface ScoringCriterion {
  ball: string;
  mezon: string;
  izoh?: string;
}

export interface LessonMethod {
  nomi: string;
  tavsifi: string;
}

export interface LessonPlanData {
  id: string;
  createdAt: string;
  umumiy: {
    fan: string;
    sinf: string;
    mavzu: string;
    davomiyligi: string;
    turi: string;
    oqituvchiIsmi?: string;
    maktabRaqami?: string;
  };
  maqsad: {
    talimiy: string;
    tarbiyaviy: string;
    rivojlantiruvchi: string;
  };
  kutilayotganNatijalar: string[];
  jihozlar: string[];
  metodlar: LessonMethod[];
  borishi: TimelineItem[];
  oqituvchiFaoliyati: string[];
  oquvchiFaoliyati: string[];
  topshiriqlar: TaskItem[];
  baholash: ScoringCriterion[];
  uygaVazifa: {
    vazifa: string;
    korsatma: string;
  };
  refleksiya: {
    metod: string;
    savollar: string[];
  };
  tavsiyalar: string[];
}
