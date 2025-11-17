import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
          Husniya
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            {t('home')}
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            {t('skills')}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            {t('about')}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            {t('projects')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            {t('contact')}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}
            className="transition-smooth"
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="transition-smooth"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};
