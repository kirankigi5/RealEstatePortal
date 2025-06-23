import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";

export default function About() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <section className={`py-20 ${theme === 'dark' ? 'dark-card-bg' : 'bg-gray-50 dark:bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800 dark:text-white'}`} data-aos="fade-up">
            {t('about.title')} <span className="text-amber-500">{t('about.highlight')}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern gated community with landscaped gardens" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <div data-aos="fade-left">
              <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}>
                {t('about.description1')}
              </p>
              
              <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}>
                {t('about.description2')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-md ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white dark:bg-gray-800 dark:border-gray-700'}`}>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800 dark:text-white'}`}>{t('about.badge1')}</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-md ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white dark:bg-gray-800 dark:border-gray-700'}`}>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800 dark:text-white'}`}>{t('about.badge2')}</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-md ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white dark:bg-gray-800 dark:border-gray-700'}`}>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800 dark:text-white'}`}>{t('about.badge3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
