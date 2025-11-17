import React, { createContext, useContext, useState } from 'react';

type Language = 'uz' | 'en';

interface Translations {
  [key: string]: {
    uz: string;
    en: string;
  };
}

const translations: Translations = {
  // Header
  home: { uz: 'Bosh sahifa', en: 'Home' },
  skills: { uz: "Ko'nikmalar", en: 'Skills' },
  about: { uz: 'Men haqimda', en: 'About' },
  projects: { uz: 'Loyihalar', en: 'Projects' },
  contact: { uz: 'Aloqa', en: 'Contact' },
  
  // Hero
  backendDeveloper: { uz: 'Backend Dasturchi', en: 'Backend Developer' },
  heroDescription: {
    uz: "Men tizimli fikrlayman va ma'lumotlar va backend bilan ishlash mening qiziqishlarim va ko'nikmalarimga juda mos keladi.",
    en: "I think systematically, and working with data and backend development perfectly matches my interests and skills."
  },
  viewPortfolio: { uz: 'Portfolioni ko\'rish', en: 'View Portfolio' },
  contactMe: { uz: 'Bog\'lanish', en: 'Contact Me' },
  
  // Skills
  skillsTitle: { uz: "Ko'nikmalar", en: 'Skills' },
  skillsSubtitle: { uz: "Ko'nikmalarimning o'zlashtirgan darajasi", en: 'My Proficiency Levels' },
  
  // About
  aboutTitle: { uz: 'Men haqimda', en: 'About Me' },
  aboutDescription: {
    uz: "Men Husniya, tez, xavfsiz va foydalanuvchilarga qulay tizimlarni yaratishga ishtiyoqli yosh backend dasturchiman. Hozirda IT Park da tahsil olaman.",
    en: "I'm Husniya, a young backend developer passionate about creating fast, secure, and user-friendly systems. Currently studying at IT Park."
  },
  technologies: { uz: 'Texnologiyalar', en: 'Technologies' },
  
  // Projects
  projectsTitle: { uz: 'Amaliyot', en: 'Projects' },
  projectTitle: { uz: 'AI Homeworks Assistant', en: 'AI Homeworks Assistant' },
  projectDescription: {
    uz: "O'quvchilarga uy vazifalarini samarali bajarishga yordam beradigan zamonaviy tizim.",
    en: "A modern system that helps students efficiently complete their homework."
  },
  viewProject: { uz: 'Loyihani ko\'rish', en: 'View Project' },
  
  // Contact
  contactTitle: { uz: 'Bog\'lanish', en: 'Contact' },
  fullName: { uz: 'To\'liq ism', en: 'Full Name' },
  email: { uz: 'Email', en: 'Email' },
  message: { uz: 'Xabar', en: 'Message' },
  sendMessage: { uz: 'Xabar yuborish', en: 'Send Message' },
  
  // Footer
  allRightsReserved: { uz: 'Barcha huquqlar himoyalangan', en: 'All rights reserved' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
