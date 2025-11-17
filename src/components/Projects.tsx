import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import projectImage from '@/assets/project-image.jpg';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projectsTitle')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-smooth group animate-scale-in">
            <div className="relative overflow-hidden">
              <img
                src={projectImage}
                alt="AI Homeworks Assistant"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 gradient-primary opacity-20 group-hover:opacity-30 transition-smooth"></div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('projectTitle')}
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {t('projectDescription')}
              </p>
              <Button
                className="gradient-primary shadow-soft hover:shadow-glow transition-smooth group"
              >
                {t('viewProject')}
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
