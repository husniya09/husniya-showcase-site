import { useLanguage } from '@/contexts/LanguageContext';
import { Code2 } from 'lucide-react';

const technologies = [
  'HTML5',
  'CSS3',
  'Git',
  'GitHub',
  'TailwindCSS',
  'Responsive Design',
  'JavaScript',
  'TypeScript',
];

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('aboutTitle')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-soft animate-scale-in">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">{t('technologies')}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="glass-effect rounded-lg p-4 text-center hover:shadow-soft transition-smooth animate-fade-in hover:scale-105"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
