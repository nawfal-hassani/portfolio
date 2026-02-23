export const languages = ['en', 'fr', 'zh', 'ar'] as const;
export type Lang = (typeof languages)[number];

export const langLabels: Record<Lang, string> = {
  en: 'EN',
  fr: 'FR',
  zh: '中文',
  ar: 'عر',
};

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    role: 'Full-Stack Developer',
    name: 'Nawfal<br />Hassani',
    tagline: 'Building digital experiences that blend design and engineering.',
    cta: 'Get in Touch',
    internshipBadge: 'Looking for an internship · March – June 2027',
    contactLabel: 'Contact',
    contactTitle: "Let's work together",
    contactDesc: 'Interested in collaborating or have a project in mind? Feel free to reach out.',
  },
  fr: {
    role: 'Développeur Full-Stack',
    name: 'Nawfal<br />Hassani',
    tagline: 'Créer des expériences digitales qui allient design et ingénierie.',
    cta: 'Me contacter',
    internshipBadge: 'Recherche de stage · Mars – Juin 2027',
    contactLabel: 'Contact',
    contactTitle: 'Travaillons ensemble',
    contactDesc: 'Un projet en tête ou envie de collaborer\u00a0? N\'hésitez pas à me contacter.',
  },
  zh: {
    role: '全栈开发者',
    name: 'Nawfal<br />Hassani',
    tagline: '构建融合设计与工程的数字体验。',
    cta: '联系我',
    internshipBadge: '寻找实习 · 2027年3月 – 6月',
    contactLabel: '联系方式',
    contactTitle: '一起合作',
    contactDesc: '有项目想法或者想合作？欢迎联系我。',
  },
  ar: {
    role: 'مطور ويب متكامل',
    name: 'Nawfal<br />Hassani',
    tagline: 'بناء تجارب رقمية تجمع بين التصميم والهندسة.',
    cta: 'تواصل معي',
    internshipBadge: 'أبحث عن تدريب · مارس – يونيو 2027',
    contactLabel: 'اتصل',
    contactTitle: 'لنعمل معًا',
    contactDesc: 'هل لديك مشروع في ذهنك أو ترغب في التعاون؟ لا تتردد في التواصل.',
  },
};
