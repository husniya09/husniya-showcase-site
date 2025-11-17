import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 65 },
  { name: 'TailwindCSS', level: 68 },
  { name: 'Python', level: 89 },
];

export const Skills = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('skillsTitle')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('skillsSubtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-primary transition-all duration-1000 ease-out rounded-full shadow-glow"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
