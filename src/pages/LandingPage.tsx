import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

import { PlanTier } from '../types/schema';

interface Props {
  onNavigate: (tier?: PlanTier) => void;
  onViewSample: () => void;
}

export default function LandingPage({ onNavigate, onViewSample }: Props) {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTravelStyle, setSelectedTravelStyle] = useState<string | null>(null);
  const [selectedFoodOptions, setSelectedFoodOptions] = useState<string[]>([]);

  const toggleFoodOption = (option: string) => {
    setSelectedFoodOptions(prev => 
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcf9f5]/80 dark:bg-[#1c1c1a]/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-8 py-4 max-w-full border-b border-outline-variant/10">
        <div className="text-xl font-bold tracking-tighter text-[#1c1c1a] dark:text-[#fcf9f5] z-50">Modern Scholar Travel</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('destinations')} className="text-[#1c1c1a] dark:text-[#fcf9f5] opacity-70 hover:opacity-100 transition-opacity duration-300 font-headline">{t.nav.destinations}</button>
          <button onClick={() => scrollToSection('experiences')} className="text-[#1c1c1a] dark:text-[#fcf9f5] opacity-70 hover:opacity-100 transition-opacity duration-300 font-headline">{t.nav.experiences}</button>
          <button onClick={() => scrollToSection('pricing')} className="text-[#1c1c1a] dark:text-[#fcf9f5] opacity-70 hover:opacity-100 transition-opacity duration-300 font-headline">{t.nav.pricing}</button>
          <button onClick={() => scrollToSection('about')} className="text-[#1c1c1a] dark:text-[#fcf9f5] opacity-70 hover:opacity-100 transition-opacity duration-300 font-headline">{t.nav.about}</button>
        </div>

        <div className="flex items-center gap-4 z-50">
          <button onClick={toggleLanguage} className="text-xs font-bold uppercase tracking-widest text-primary border border-primary px-3 py-1 rounded-sm">
            {language === 'en' ? 'KO' : 'EN'}
          </button>
          <button 
            onClick={onNavigate}
            className="hidden md:block bg-[#9a0e28] text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest active:scale-95 transition-transform"
          >
            {t.nav.planTrip}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-background p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
          <button onClick={() => scrollToSection('destinations')} className="text-3xl font-headline font-bold text-on-background">{t.nav.destinations}</button>
          <button onClick={() => scrollToSection('experiences')} className="text-3xl font-headline font-bold text-on-background">{t.nav.experiences}</button>
          <button onClick={() => scrollToSection('pricing')} className="text-3xl font-headline font-bold text-on-background">{t.nav.pricing}</button>
          <button onClick={() => scrollToSection('about')} className="text-3xl font-headline font-bold text-on-background">{t.nav.about}</button>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onNavigate(); }}
            className="mt-8 bg-primary text-white px-10 py-4 rounded-sm text-lg font-bold uppercase tracking-widest shadow-lg"
          >
            {t.nav.planTrip}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Seoul Cityscape with Namsan Tower" className="w-full h-full object-cover grayscale-[0%]" src="images/namsan.png" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 max-w-6xl">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-bold tracking-widest uppercase mb-6">{t.hero.badge}</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-on-background">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-body mb-10 max-w-lg border-l-2 border-primary pl-6 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onNavigate} className="primary-gradient text-white px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:scale-105 hover:shadow-2xl transition-all duration-300">
                {t.hero.ctaPlan}
              </button>
              <button onClick={onViewSample} className="bg-surface-container-highest/50 backdrop-blur-md text-on-surface px-10 py-5 rounded-sm text-sm font-bold uppercase tracking-widest border border-outline-variant/30 hover:scale-105 hover:bg-surface-container-highest transition-all duration-300">
                {t.hero.ctaSample}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="experiences" className="py-24 bg-surface-container-low scroll-mt-20">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6 p-8 bg-surface-container-lowest rounded-sm transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-fixed text-primary rounded-full">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              </div>
              <h3 className="text-2xl font-bold">{t.whyUs.localExpertise.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t.whyUs.localExpertise.desc}</p>
            </div>
            <div className="flex flex-col gap-6 p-8 bg-surface-container-lowest rounded-sm transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-fixed text-primary rounded-full">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>family_restroom</span>
              </div>
              <h3 className="text-2xl font-bold">{t.whyUs.familyFriendly.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t.whyUs.familyFriendly.desc}</p>
            </div>
            <div className="flex flex-col gap-6 p-8 bg-surface-container-lowest rounded-sm transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-fixed text-primary rounded-full">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
              </div>
              <h3 className="text-2xl font-bold">{t.whyUs.seamlessBookings.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t.whyUs.seamlessBookings.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Form Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tighter mb-8">{t.consultation.title}</h2>
              <p className="text-on-surface-variant mb-12 text-lg">{t.consultation.description}</p>
              <div className="space-y-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t.consultation.accommodation}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="flex items-start gap-4 p-4 text-left border border-outline-variant/30 rounded-sm hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined text-primary mt-1">shopping_bag</span>
                      <div>
                        <p className="font-bold">Myeongdong</p>
                        <p className="text-xs text-on-surface-variant">The Heart of Shopping</p>
                      </div>
                    </button>
                    <button className="flex items-start gap-4 p-4 text-left border border-outline-variant/30 rounded-sm hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined text-primary mt-1">celebration</span>
                      <div>
                        <p className="font-bold">Hongdae</p>
                        <p className="text-xs text-on-surface-variant">Vibrant Youth Culture</p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t.consultation.travelStyle}</label>
                  <div className="flex gap-4">
                    {t.consultation.travelOptions.map((option, index) => (
                      <button 
                        key={index}
                        type="button"
                        onClick={() => setSelectedTravelStyle(option)}
                        className={`flex-1 py-3 px-4 font-bold rounded-full text-sm transition-all ${selectedTravelStyle === option ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t.consultation.foodPalette}</label>
                  <div className="flex flex-wrap gap-2">
                    {t.consultation.foodOptions.map((option, index) => (
                      <button 
                        key={index}
                        type="button"
                        onClick={() => toggleFoodOption(option)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedFoodOptions.includes(option) ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-10 rounded-sm shadow-sm border border-outline-variant/10">
              <h3 className="text-2xl font-bold mb-6">Inquiry Details</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNavigate(); }}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t.consultation.name}</label>
                  <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 py-2 outline-none transition-all placeholder:text-outline/50" placeholder="Scholar traveler" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t.consultation.dates}</label>
                  <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 py-2 outline-none transition-all placeholder:text-outline/50" placeholder="Spring 2025" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{t.consultation.family}</label>
                  <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 py-2 outline-none transition-all appearance-none cursor-pointer">
                    <option>Solo traveler</option>
                    <option>Couple</option>
                    <option>Family with children</option>
                    <option>Family with elderly</option>
                  </select>
                </div>
                <button type="submit" className="w-full primary-gradient text-white py-5 font-bold uppercase tracking-widest rounded-sm mt-8 shadow-md">
                  {t.consultation.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Detail Section (Bento Grid Style) */}
      <section id="destinations" className="py-24 bg-surface scroll-mt-20">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tighter mb-4">{t.destinations.title}</h2>
              <p className="text-on-surface-variant max-w-md">{t.destinations.description}</p>
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-bold uppercase tracking-widest text-sm underline underline-offset-8">{t.destinations.mapLink}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[800px] md:h-[600px]">
            {/* Jongno */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest rounded-sm">
              <img alt="" className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" src="/images/cafe_2.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-3xl font-bold mb-2">{t.destinations.jongno.title}</h4>
                <p className="text-white/80 max-w-sm">{t.destinations.jongno.desc}</p>
              </div>
            </div>
            {/* Seongsu */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-highest rounded-sm">
              <img alt="" className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" src="/images/seoul_4.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-2xl font-bold mb-2">{t.destinations.seongsu.title}</h4>
                <p className="text-white/80 text-sm">{t.destinations.seongsu.desc}</p>
              </div>
            </div>
            {/* Gangnam */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-highest rounded-sm">
              <img alt="Gangnam District" className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" src="/images/seoul.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-2xl font-bold mb-2">{t.destinations.gangnam.title}</h4>
                <p className="text-white/80 text-sm">{t.destinations.gangnam.desc}</p>
              </div>
            </div>
            {/* Busan */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest rounded-sm">
              <img alt="Busan" className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" src="/images/busan.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-3xl font-bold mb-2">{t.destinations.busan?.title || 'Busan'}</h4>
                <p className="text-white/80 max-w-sm">{t.destinations.busan?.desc || 'Coastal beauty, vibrant seafood markets, and stunning beachside culture.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-24 bg-surface-container-lowest scroll-mt-20">
        <div className="container mx-auto px-8 max-w-6xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tighter mb-4">{t.pricing.title}</h2>
          <p className="text-on-surface-variant mb-16 max-w-2xl mx-auto">{t.pricing.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="p-10 bg-surface border border-outline-variant/20 rounded-sm flex flex-col text-left group hover:bg-surface-container-low transition-colors relative z-10">
              <h3 className="text-xl font-bold mb-1">{t.pricing.basic.title}</h3>
              <p className="text-sm text-secondary mb-4">{t.pricing.basic.subtitle}</p>
              <div className="text-4xl font-black text-on-background mb-6">{t.pricing.basic.price}<span className="text-sm font-normal text-secondary">/plan</span></div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Target: {t.pricing.basic.target}</p>
              <ul className="space-y-3 mb-8 flex-grow text-on-surface-variant text-sm">
                {t.pricing.basic.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-lg">check</span> {f}</li>
                ))}
              </ul>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Add-ons</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.basic.addons.map((a, i) => <li key={i}>+ {a}</li>)}
                </ul>
              </div>
              <button onClick={() => onNavigate('basic')} className="w-full py-4 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">{t.pricing.basic.btn}</button>
            </div>
            {/* Custom */}
            <div className="p-10 bg-surface-container-highest border-2 border-primary rounded-sm flex flex-col text-left relative transform md:scale-105 shadow-xl z-30">
              <div onClick={() => onNavigate('custom')} className="cursor-pointer absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#bc2c3d] transition-colors">Most Popular</div>
              <h3 className="text-xl font-bold mb-1">{t.pricing.custom.title}</h3>
              <p className="text-sm text-secondary mb-4">{t.pricing.custom.subtitle}</p>
              <div className="text-4xl font-black text-on-background mb-6">{t.pricing.custom.price}<span className="text-sm font-normal text-secondary">/plan</span></div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Target: {t.pricing.custom.target}</p>
              <ul className="space-y-3 mb-6 flex-grow text-on-surface-variant text-sm">
                {t.pricing.custom.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-lg">check</span> {f}</li>
                ))}
              </ul>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Extra Features</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.custom.extraFeatures.map((f, i) => <li key={i}>✔ {f}</li>)}
                </ul>
              </div>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Add-ons</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.custom.addons.map((a, i) => <li key={i}>+ {a}</li>)}
                </ul>
              </div>
              <button onClick={() => onNavigate('custom')} className="w-full py-4 primary-gradient text-white font-bold uppercase tracking-widest text-xs shadow-md hover:opacity-90 transition-opacity">{t.pricing.custom.btn}</button>
            </div>
            {/* Premium */}
            <div className="p-10 bg-surface border border-outline-variant/20 rounded-sm flex flex-col text-left group hover:bg-surface-container-low transition-colors relative z-10">
              <h3 className="text-xl font-bold mb-1 text-primary">{t.pricing.premium.title}</h3>
              <p className="text-sm text-secondary mb-4">{t.pricing.premium.subtitle}</p>
              <div className="text-4xl font-black text-on-background mb-6">{t.pricing.premium.price}<span className="text-sm font-normal text-secondary">/plan</span></div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Target: {t.pricing.premium.target}</p>
              <ul className="space-y-3 mb-6 flex-grow text-on-surface-variant text-sm">
                {t.pricing.premium.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-lg">check</span> {f}</li>
                ))}
              </ul>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Concierge</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.premium.concierge.map((f, i) => <li key={i}>✔ {f}</li>)}
                </ul>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Priority Booking</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.premium.priorityBooking.map((f, i) => <li key={i}>✔ {f}</li>)}
                </ul>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Emergency</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.premium.emergency.map((f, i) => <li key={i}>✔ {f}</li>)}
                </ul>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Premium Features</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.premium.premiumFeatures.map((f, i) => <li key={i}>✔ {f}</li>)}
                </ul>
              </div>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Add-ons</p>
                <ul className="space-y-1 text-on-surface-variant text-xs">
                  {t.pricing.premium.addons.map((a, i) => <li key={i}>+ {a}</li>)}
                </ul>
              </div>
              <button onClick={() => onNavigate('premium')} className="w-full py-4 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">{t.pricing.premium.btn}</button>
            </div>
          </div>
          {/* Optional Add-ons */}
          <div className="mt-16 p-10 bg-surface-container-low rounded-sm">
            <h3 className="text-xl font-bold mb-8">{t.pricing.optionalAddons.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t.pricing.optionalAddons.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-surface rounded-sm border border-outline-variant/20 text-sm">
                  <span className="font-medium text-on-surface">{item.name}</span>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="about" className="py-24 bg-surface relative overflow-hidden scroll-mt-20">
        <div className="pattern-overlay absolute inset-0 pointer-events-none"></div>
        <div className="container mx-auto px-8 max-w-6xl relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-16 text-center">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-surface-container-low border-l-4 border-primary">
              <p className="text-lg italic text-on-surface mb-6">"Our family trip to Seoul would have been a logistical nightmare without Modern Scholar. They found us restaurants that were both authentic and welcoming to my elderly parents. Truly seamless."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-outline-variant rounded-full overflow-hidden">
                  <img alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"/>
                </div>
                <div>
                  <p className="font-bold">David Richardson</p>
                  <p className="text-xs text-secondary uppercase tracking-widest">Sydney, Australia</p>
                </div>
              </div>
            </div>
            <div className="p-10 bg-surface-container-low border-l-4 border-primary">
              <p className="text-lg italic text-on-surface mb-6">"I wanted to see the spots from my favorite K-Dramas and eat where the locals eat. They curated a 'Local Style' plan that blew my mind. I never would have found those Seongsu cafes on my own."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-outline-variant rounded-full overflow-hidden">
                  <img alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"/>
                </div>
                <div>
                  <p className="font-bold">Elena Gomez</p>
                  <p className="text-xs text-secondary uppercase tracking-widest">Madrid, Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/seoul_3.png')] bg-cover bg-center mix-blend-multiply opacity-30"></div>
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">Ready to experience the real Korea?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Skip the generic tours. Embark on a curated journey designed specifically for your interests and needs.</p>
          <button onClick={onNavigate} className="bg-white text-primary px-12 py-6 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-surface-container transition-all shadow-2xl">
            Start Planning Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f6f3ef] dark:bg-[#2a2a28] w-full border-t border-[#e5e2de]/20 flex flex-col md:flex-row justify-between items-center px-12 py-16">
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <div className="text-lg font-black text-[#1c1c1a] dark:text-[#fcf9f5]">MODERN SCHOLAR TRAVEL</div>
          <p className="text-sm font-body text-[#1c1c1a]/60 dark:text-[#fcf9f5]/60 max-w-xs text-center md:text-left">Sophisticated travel consulting for the modern explorer of Korea.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8 md:mb-0">
          <a className="text-[#1c1c1a]/60 dark:text-[#fcf9f5]/60 hover:text-[#9a0e28] transition-colors text-sm font-headline uppercase tracking-widest" href="#">Instagram</a>
          <a className="text-[#1c1c1a]/60 dark:text-[#fcf9f5]/60 hover:text-[#9a0e28] transition-colors text-sm font-headline uppercase tracking-widest" href="#">LinkedIn</a>
          <a className="text-[#1c1c1a]/60 dark:text-[#fcf9f5]/60 hover:text-[#9a0e28] transition-colors text-sm font-headline uppercase tracking-widest" href="#">Contact Us</a>
          <a className="text-[#1c1c1a]/60 dark:text-[#fcf9f5]/60 hover:text-[#9a0e28] transition-colors text-sm font-headline uppercase tracking-widest" href="#">Privacy Policy</a>
        </div>
        <div className="text-sm font-body text-[#1c1c1a]/60 dark:text-[#fcf9f5]/60">
          © 2024 Modern Scholar Travel Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
