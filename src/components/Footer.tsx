import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-primary py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary-foreground font-medium">
          © {currentYear} Husniya. {t('allRightsReserved')}.
        </p>
      </div>
    </footer>
  );
};
