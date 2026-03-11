import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('sendMessage') + ' ✓');
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contactTitle')}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8 shadow-soft animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('fullName')}
                  </label>
                  <Input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                    className="bg-background/50" />
                  
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('email')}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50" />
                  
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('message')}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background/50 resize-none" />
                  
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary shadow-soft hover:shadow-glow transition-smooth group">
                  
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  {t('sendMessage')}
                </Button>
              </form>
            </div>

            <div className="glass-effect rounded-2xl p-8 shadow-soft animate-slide-in-right flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth group cursor-pointer">
                  <div className="p-3 gradient-primary rounded-lg group-hover:scale-110 transition-smooth">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('email')}</p>
                    <a
                      href="mailto:husniya@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-smooth">
                      
                      rozimboyevahusniya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth group cursor-pointer">
                  <div className="p-3 gradient-primary rounded-lg group-hover:scale-110 transition-smooth">
                    <Github className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <a
                      href="https://github.com/husniya09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth">
                      
                      github.com/husniya09
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};