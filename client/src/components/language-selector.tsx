import { useState } from 'react';
import { Languages, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export default function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage();
  const [showSelector, setShowSelector] = useState(() => {
    return !localStorage.getItem('language-selected');
  });

  const handleLanguageSelect = (selectedLang: 'en' | 'te') => {
    if (selectedLang !== language) {
      toggleLanguage();
    }
    localStorage.setItem('language-selected', 'true');
    setShowSelector(false);
  };

  if (!showSelector) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="max-w-md w-full mx-4 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-amber-500/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Languages className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Choose Your Language</h2>
          <h2 className="text-xl font-bold text-amber-400 mb-4">మీ భాష ఎంచుకోండి</h2>
          <p className="text-gray-300 text-sm">Select your preferred language to continue</p>
          <p className="text-gray-300 text-sm">కొనసాగించడానికి మీ ఇష్టమైన భాష ఎంచుకోండి</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleLanguageSelect('te')}
            className="w-full p-4 rounded-2xl border-2 border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-600/10 hover:from-amber-500/20 hover:to-orange-600/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-lg font-semibold text-white">తెలుగు</div>
                <div className="text-sm text-gray-300">Telugu - Local Language</div>
              </div>
              <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full p-4 rounded-2xl border-2 border-gray-600 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/60 hover:to-gray-600/60 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-lg font-semibold text-white">English</div>
                <div className="text-sm text-gray-300">International Language</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">You can change this later from the navigation menu</p>
          <p className="text-xs text-gray-400">మీరు దీన్ని తర్వాత నావిగేషన్ మెనూ నుండి మార్చవచ్చు</p>
        </div>
      </div>
    </div>
  );
}