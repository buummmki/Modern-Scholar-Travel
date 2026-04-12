import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface Props {
  onNavigate: () => void;
}

export default function SamplePlanPage({ onNavigate }: Props) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-surface text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f5]/80 dark:bg-[#1c1c1a]/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="container mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-[#1c1c1a] dark:text-[#fcf9f5] cursor-pointer" onClick={onNavigate}>
            Modern Scholar
          </div>
          <button onClick={onNavigate} className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">arrow_back</span> {t.samplePlan?.back || 'Back to Home'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto w-full">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">Itinerary</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">{t.samplePlan?.title || 'Sample Itineraries'}</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{t.samplePlan?.description || 'Get a glimpse of what a Modern Scholar curated journey looks like.'}</p>
        </div>

        {/* Sample Plan 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-sm overflow-hidden shadow-sm">
          <div className="p-8 md:p-12 border-b border-outline-variant/30 bg-surface-container-low">
            <h2 className="text-3xl font-bold mb-2">{t.samplePlan?.plan1?.title || '3-Day Seoul Highlights'}</h2>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Target: {t.samplePlan?.plan1?.target || 'First-time visitors'}</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="relative border-l-2 border-outline-variant/30 ml-3 md:ml-4 space-y-12">
              
              {/* Day 1 */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest"></div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-3">
                  <span className="text-sm font-black uppercase tracking-widest text-secondary">{t.samplePlan?.plan1?.days[0]?.day || 'Day 1'}</span>
                  {t.samplePlan?.plan1?.days[0]?.title || 'The Royal Past'}
                </h3>
                <p className="text-on-surface-variant mt-3 leading-relaxed">
                  {t.samplePlan?.plan1?.days[0]?.desc || 'Gyeongbokgung Palace, Bukchon Hanok Village, and Insadong.'}
                </p>
              </div>

              {/* Day 2 */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest"></div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-3">
                  <span className="text-sm font-black uppercase tracking-widest text-secondary">{t.samplePlan?.plan1?.days[1]?.day || 'Day 2'}</span>
                  {t.samplePlan?.plan1?.days[1]?.title || 'Modern Pulse'}
                </h3>
                <p className="text-on-surface-variant mt-3 leading-relaxed">
                  {t.samplePlan?.plan1?.days[1]?.desc || 'Gangnam styling, COEX, and a Han River evening cruise.'}
                </p>
              </div>

              {/* Day 3 */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest"></div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-3">
                  <span className="text-sm font-black uppercase tracking-widest text-secondary">{t.samplePlan?.plan1?.days[2]?.day || 'Day 3'}</span>
                  {t.samplePlan?.plan1?.days[2]?.title || 'Trendy Alleys'}
                </h3>
                <p className="text-on-surface-variant mt-3 leading-relaxed">
                  {t.samplePlan?.plan1?.days[2]?.desc || 'Seongsu-dong cafe hopping and local market street food.'}
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
