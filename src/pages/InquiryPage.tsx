import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface Props {
  onNavigate: () => void;
}

export default function InquiryPage({ onNavigate }: Props) {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="min-h-screen bg-surface text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col md:flex-row">
      
      {/* Sidebar (Progress) */}
      <aside className="w-full md:w-64 bg-surface-container-lowest border-r border-outline-variant/30 p-8 flex flex-col hidden md:flex sticky top-0 h-screen overflow-y-auto">
        <div className="text-xl font-bold tracking-tighter text-on-background mb-12 cursor-pointer" onClick={onNavigate}>Modern Scholar</div>
        <div className="flex-grow">
          <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6">{t.inquiry.progress}</h3>
          <ul className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/30 before:to-transparent">
            <li className="relative flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <span className="font-bold text-sm text-primary">District & Stay</span>
            </li>
            <li className="relative flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-primary-fixed text-primary border-2 border-primary flex items-center justify-center z-10 shadow-sm">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </div>
              <span className="font-bold text-sm text-on-background">The Party</span>
            </li>
            <li className="relative flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center z-10">
                <span className="text-[10px] text-secondary font-bold">3</span>
              </div>
              <span className="font-medium text-sm text-secondary">Transport & Pace</span>
            </li>
            <li className="relative flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center z-10">
                <span className="text-[10px] text-secondary font-bold">4</span>
              </div>
              <span className="font-medium text-sm text-secondary">Narrative Style</span>
            </li>
            <li className="relative flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center z-10">
                <span className="text-[10px] text-secondary font-bold">5</span>
              </div>
              <span className="font-medium text-sm text-secondary">Culinary Palette</span>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-8 border-t border-outline-variant/30">
          <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-lg">save</span> {t.inquiry.saveDraft}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-16 lg:p-24 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">{t.inquiry.step}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">{t.inquiry.title}</h1>
          <p className="text-on-surface-variant text-lg">{t.inquiry.description}</p>
        </div>

        <form className="space-y-16">
          {/* Section 1: Composition */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">group</span> {t.inquiry.composition}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <label className="cursor-pointer group">
                <input type="radio" name="party_type" className="peer sr-only" />
                <div className="h-full border-2 border-outline-variant/30 rounded-sm p-4 hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/30 transition-all text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden group-hover:scale-105 transition-transform">
                    <img alt="Solo" className="w-full h-full object-cover grayscale-[50%]" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop"/>
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">{t.inquiry.partyTypes.solo}</div>
                    <div className="text-[10px] text-secondary uppercase tracking-widest">1 Person</div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="party_type" className="peer sr-only" defaultChecked />
                <div className="h-full border-2 border-outline-variant/30 rounded-sm p-4 hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/30 transition-all text-center flex flex-col items-center gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-bl-sm">Selected</div>
                  <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden group-hover:scale-105 transition-transform">
                    <img alt="Couple" className="w-full h-full object-cover grayscale-[50%]" src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=150&auto=format&fit=crop"/>
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">{t.inquiry.partyTypes.duo}</div>
                    <div className="text-[10px] text-secondary uppercase tracking-widest">2 People</div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="party_type" className="peer sr-only" />
                <div className="h-full border-2 border-outline-variant/30 rounded-sm p-4 hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/30 transition-all text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden group-hover:scale-105 transition-transform">
                    <img alt="Family" className="w-full h-full object-cover grayscale-[50%]" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=150&auto=format&fit=crop"/>
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">{t.inquiry.partyTypes.family}</div>
                    <div className="text-[10px] text-secondary uppercase tracking-widest">3-5 People</div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="party_type" className="peer sr-only" />
                <div className="h-full border-2 border-outline-variant/30 rounded-sm p-4 hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/30 transition-all text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden group-hover:scale-105 transition-transform">
                    <img alt="Group" className="w-full h-full object-cover grayscale-[50%]" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=150&auto=format&fit=crop"/>
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">{t.inquiry.partyTypes.group}</div>
                    <div className="text-[10px] text-secondary uppercase tracking-widest">6+ People</div>
                  </div>
                </div>
              </label>
            </div>
          </section>

          {/* Section 2: Special Considerations */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">accessible_forward</span> {t.inquiry.considerations.title}
            </h2>
            <p className="text-sm text-on-surface-variant mb-6">{t.inquiry.considerations.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-start gap-4 p-4 border border-outline-variant/30 rounded-sm cursor-pointer hover:bg-surface-container-low transition-colors">
                <div className="pt-1">
                  <input type="checkbox" className="w-5 h-5 accent-primary border-outline-variant rounded-sm" />
                </div>
                <div>
                  <div className="font-bold text-sm">{t.inquiry.considerations.options[0]}</div>
                  <div className="text-xs text-secondary mt-1">Requires stroller-friendly paths and nursing room access.</div>
                </div>
              </label>
              <label className="flex items-start gap-4 p-4 border border-outline-variant/30 rounded-sm cursor-pointer hover:bg-surface-container-low transition-colors">
                <div className="pt-1">
                  <input type="checkbox" className="w-5 h-5 accent-primary border-outline-variant rounded-sm" defaultChecked />
                </div>
                <div>
                  <div className="font-bold text-sm">{t.inquiry.considerations.options[1]}</div>
                  <div className="text-xs text-secondary mt-1">Minimize steep hills and stairs; prioritize frequent rest stops.</div>
                </div>
              </label>
              <label className="flex items-start gap-4 p-4 border border-outline-variant/30 rounded-sm cursor-pointer hover:bg-surface-container-low transition-colors">
                <div className="pt-1">
                  <input type="checkbox" className="w-5 h-5 accent-primary border-outline-variant rounded-sm" />
                </div>
                <div>
                  <div className="font-bold text-sm">{t.inquiry.considerations.options[2]}</div>
                  <div className="text-xs text-secondary mt-1">Wheelchair accessible routes and transport required.</div>
                </div>
              </label>
              <label className="flex items-start gap-4 p-4 border border-outline-variant/30 rounded-sm cursor-pointer hover:bg-surface-container-low transition-colors">
                <div className="pt-1">
                  <input type="checkbox" className="w-5 h-5 accent-primary border-outline-variant rounded-sm" />
                </div>
                <div>
                  <div className="font-bold text-sm">{t.inquiry.considerations.options[3]}</div>
                  <div className="text-xs text-secondary mt-1">Severe allergies, Halal, Vegan, or other strict requirements.</div>
                </div>
              </label>
            </div>
          </section>

          {/* Section 3: Additional Notes */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">edit_note</span> {t.inquiry.notes.title}
            </h2>
            <div className="relative">
              <textarea 
                className="w-full bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-sm p-4 outline-none transition-all min-h-[120px] text-sm resize-y" 
                placeholder={t.inquiry.notes.placeholder}
              ></textarea>
              <div className="absolute bottom-4 right-4 text-[10px] text-secondary uppercase tracking-widest">{t.inquiry.notes.optional}</div>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-outline-variant/30">
            <button type="button" onClick={onNavigate} className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-secondary hover:text-on-background transition-colors">
              <span className="material-symbols-outlined">arrow_back</span> {t.inquiry.nav.prev}
            </button>
            <button type="button" className="flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-md">
              {t.inquiry.nav.next} <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>

      {/* Summary Sidebar (Right) */}
      <aside className="w-full lg:w-80 bg-surface-container-low border-l border-outline-variant/30 p-8 hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-8 border-b border-outline-variant/30 pb-4">{t.inquiry.sidebar.title}</h3>
        
        <div className="space-y-6">
          {/* Step 1 Summary */}
          <div className="group">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-sm text-on-background">District & Stay</h4>
              <button className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">{t.inquiry.sidebar.edit}</button>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-sm border border-outline-variant/20 text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                <span className="font-medium">Jongno / Bukchon</span>
              </div>
              <div className="flex items-center gap-2 text-secondary text-xs">
                <span className="material-symbols-outlined text-[16px]">hotel</span>
                <span>Traditional Hanok Stay</span>
              </div>
            </div>
          </div>

          {/* Step 2 Summary (Current) */}
          <div className="group opacity-50">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-sm text-on-background">The Party</h4>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-sm border border-outline-variant/20 text-sm border-dashed">
              <div className="text-secondary text-xs italic">Currently editing...</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-tertiary-fixed/50 p-4 rounded-sm border border-tertiary-fixed-dim">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-on-tertiary-fixed mt-0.5">lightbulb</span>
            <div>
              <h5 className="font-bold text-sm text-on-tertiary-fixed mb-1">{t.inquiry.sidebar.noteTitle}</h5>
              <p className="text-xs text-on-tertiary-fixed/80 leading-relaxed">Jongno is beautiful but hilly. If traveling with elderly companions, we will ensure taxi drop-offs are prioritized over subway navigation.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
