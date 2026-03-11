import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">​</span>
              

              
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              {t('heroDescription')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="gradient-primary shadow-soft hover:shadow-glow transition-smooth group">
                
                {t('viewPortfolio')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                
                <Mail className="mr-2 h-5 w-5" />
                {t('contactMe')}
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full opacity-20 blur-3xl animate-glow"></div>
              <img
                src={heroImage}
                alt="Husniya"
                className="relative rounded-2xl shadow-soft w-full max-w-lg mx-auto animate-float" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

};