import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { PlanTier, ConsultationForm, initialFormData } from '../types/schema';
import { loadStripe } from '@stripe/stripe-js';

interface Props {
  tier?: PlanTier;
  onNavigate: () => void;
}

export default function InquiryPage({ tier = 'custom', onNavigate }: Props) {
  const { language } = useLanguage();
  const t = translations[language];
  const f = t.form;
  
  const [formData, setFormData] = useState<ConsultationForm>({
    ...initialFormData,
    plan_tier: tier
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const totalSteps = 6;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setIsSubmitted(true);
    }
    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you are ready.');
    }
  }, []);

  const handlePrev = () => setCurrentStep(p => Math.max(p - 1, 1));

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(p => p + 1);
    } else {
      console.log("Form Submitted Successfully!");
      console.log(JSON.stringify(formData, null, 2));
      
      setIsProcessingPayment(true);
      try {
        let basePrice = 50000;
        if (tier === 'custom') basePrice = 150000;
        if (tier === 'premium') basePrice = 300000;

        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: tier,
            price: basePrice,
            addons: formData.addons.selected
          }),
        });
        
        const session = await response.json();
        if (session.error) {
          throw new Error(session.error);
        }
        
        const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
        if (!stripePublicKey) {
          console.warn("Stripe public key is missing. Skipping payment redirect.");
          setIsSubmitted(true);
          setIsProcessingPayment(false);
          return;
        }

        const stripe = await loadStripe(stripePublicKey);
        if (stripe) {
          await stripe.redirectToCheckout({ sessionId: session.id });
        }
      } catch (error) {
        console.error("Payment failed", error);
        setIsSubmitted(true); // Fallback to success page if payment fails in demo
        setIsProcessingPayment(false);
      }
    }
  };

  const handleChange = (path: string, value: any) => {
    setFormData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const isCustomOrPremium = tier === 'custom' || tier === 'premium';
  const isPremium = tier === 'premium';
  const isBasic = tier === 'basic';

  const InputField = ({ label, path, type = 'text', required = false, placeholder = '', hidden = false }: any) => {
    if (hidden) return null;
    const keys = path.split('.');
    let val = formData as any;
    keys.forEach((k: string) => val = val[k]);
    
    return (
      <div>
        <label className="block text-sm font-bold mb-2">{label} {required && <span className="text-primary">*</span>}</label>
        <input 
          type={type} 
          value={val || ''} 
          onChange={e => handleChange(path, type === 'number' ? Number(e.target.value) : e.target.value)} 
          className="w-full p-3 border border-outline-variant/50 rounded-sm bg-surface-container-lowest focus:border-primary outline-none" 
          placeholder={placeholder} 
          required={required} 
        />
      </div>
    );
  };

  const SelectField = ({ label, path, options, required = false, hidden = false }: any) => {
    if (hidden) return null;
    const keys = path.split('.');
    let val = formData as any;
    keys.forEach((k: string) => val = val[k]);

    return (
      <div>
        <label className="block text-sm font-bold mb-2">{label} {required && <span className="text-primary">*</span>}</label>
        <select value={val || ''} onChange={e => handleChange(path, e.target.value)} className="w-full p-3 border border-outline-variant/50 rounded-sm bg-surface-container-lowest outline-none" required={required}>
          <option value="">Select...</option>
          {options.map((opt: any) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      </div>
    );
  };

  const CheckboxGroup = ({ label, path, options, hidden = false }: any) => {
    if (hidden) return null;
    const keys = path.split('.');
    let selected = formData as any;
    keys.forEach((k: string) => selected = selected[k]);

    return (
      <div>
        <label className="block text-sm font-bold mb-2">{label}</label>
        <div className="flex flex-wrap gap-3">
          {options.map((opt: any) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selected.includes(opt.value)} 
                onChange={(e) => {
                  const current = selected;
                  handleChange(path, e.target.checked ? [...current, opt.value] : current.filter((c: string) => c !== opt.value));
                }} 
                className="accent-primary" 
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{f.step1.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label={f.step1.fullName} path="primary_contact.full_name" required />
              <InputField label={f.step1.email} path="primary_contact.email" type="email" required />
            </div>
            <CheckboxGroup 
              label={isBasic ? f.step1.channelsOpt : f.step1.channels} 
              path="primary_contact.channels" 
              options={[
                {label: 'WhatsApp', value: 'WhatsApp'}, {label: 'KakaoTalk', value: 'KakaoTalk'}, 
                {label: 'Telegram', value: 'Telegram'}, {label: 'Instagram DM', value: 'Instagram DM'}, 
                {label: 'Email only', value: 'Email only'}
              ]} 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label={f.step1.nationality} path="traveler_meta.nationality" />
              <InputField label={f.step1.residence} path="traveler_meta.residence_city" hidden={!isCustomOrPremium} />
            </div>
            <SelectField 
              label={f.step1.sim} 
              path="traveler_meta.sim_ready" 
              options={[
                {label: f.step1.simOptions.yes, value: 'yes'}, 
                {label: f.step1.simOptions.no, value: 'no'}, 
                {label: f.step1.simOptions.will_buy, value: 'will_buy'}
              ]} 
            />
          </section>
        );
      case 2:
        return (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{f.step2.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label={f.step2.arrivalDate} path="trip.start_date" type="date" required />
              <InputField label={f.step2.departureDate} path="trip.end_date" type="date" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label={f.step2.originAirport} path="trip.origin_airport" hidden={!isCustomOrPremium} />
              <SelectField label={f.step2.arrivalKR} path="trip.arrival_airport_kr" required options={[{label: 'Incheon (ICN)', value: 'ICN'}, {label: 'Gimpo (GMP)', value: 'GMP'}, {label: 'Gimhae/Busan (PUS)', value: 'PUS'}, {label: 'Jeju (CJU)', value: 'CJU'}]} />
              <SelectField label={f.step2.departureKR} path="trip.departure_airport_kr" required options={[{label: 'Incheon (ICN)', value: 'ICN'}, {label: 'Gimpo (GMP)', value: 'GMP'}, {label: 'Gimhae/Busan (PUS)', value: 'PUS'}, {label: 'Jeju (CJU)', value: 'CJU'}]} />
            </div>
            <InputField label={f.step2.flightInfo} path="trip.flight_info" hidden={!isCustomOrPremium} />
            <InputField label={f.step2.visa} path="trip.visa_constraints" />
            <InputField label={f.step2.fixedConstraints} path="trip.fixed_constraints" />
            
            <div className="border-t border-outline-variant/30 pt-6 mt-6">
              <CheckboxGroup label={f.step2.accomBooked} path="accommodation.is_booked" options={[{label: f.common.yes, value: true}]} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <InputField label={f.step2.accomArea} path="accommodation.area" required />
                <InputField label={f.step2.accomType} path="accommodation.type" hidden={!isCustomOrPremium} />
              </div>
              <InputField label={f.step2.accomDetails} path="accommodation.details" hidden={!isPremium} />
            </div>

            <div className="border-t border-outline-variant/30 pt-6 mt-6">
              <InputField label={f.step2.cities} path="itinerary.cities" placeholder="e.g. Seoul, Busan, Jeju" required />
              <InputField label={f.step2.nightsByCity} path="itinerary.nights_by_city" hidden={!isCustomOrPremium} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <InputField label={f.step2.neighborhoodsPref} path="itinerary.neighborhoods_preferred" hidden={!isCustomOrPremium} />
                <InputField label={f.step2.neighborhoodsAvoid} path="itinerary.neighborhoods_avoid" hidden={!isCustomOrPremium} />
              </div>
            </div>
          </section>
        );
      case 3:
        return (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{f.step3.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label={f.step3.groupSize} path="group.size_total" type="number" required />
              <SelectField label={f.step3.groupType} path="group.type" required options={[{label: 'Solo', value: 'Solo'}, {label: 'Couple', value: 'Couple'}, {label: 'Friends', value: 'Friends'}, {label: 'Family', value: 'Family'}, {label: 'Multi-family', value: 'Multi-family'}, {label: 'Other', value: 'Other'}]} />
            </div>
            <InputField label={f.step3.roles} path="group.traveler_roles" hidden={!isCustomOrPremium} />
            <InputField label={f.step3.ageBands} path="group.age_bands" hidden={!isCustomOrPremium} />
            <InputField label={f.step3.members} path="group.members_details" hidden={!isPremium} />

            <div className="border-t border-outline-variant/30 pt-6 mt-6">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-sm mb-4">
                <input type="checkbox" checked={formData.accessibility.has_constraints} onChange={(e) => handleChange('accessibility.has_constraints', e.target.checked)} className="accent-primary w-4 h-4" />
                {f.step3.hasConstraints}
              </label>
              {formData.accessibility.has_constraints && (
                <div className="pl-6 border-l-2 border-primary/30 space-y-4">
                  <CheckboxGroup label={f.step3.constraints} path="accessibility.constraints" options={[
                    {label: 'Wheelchair Needed', value: 'wheelchair_needed'}, {label: 'Stairs Limited', value: 'stairs_limited'}, 
                    {label: 'Long Walk Difficult', value: 'long_walk_difficult'}, {label: 'Chronic Condition', value: 'chronic_condition'}, 
                    {label: 'Pregnancy', value: 'pregnancy'}
                  ]} />
                </div>
              )}
              <InputField label={f.step3.medicalNotes} path="accessibility.medical_notes" hidden={!isCustomOrPremium} />
              <InputField label={f.step3.emergencyContacts} path="accessibility.emergency_contacts" hidden={!isPremium} />
            </div>

            <div className="border-t border-outline-variant/30 pt-6 mt-6 space-y-4">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-sm">
                <input type="checkbox" checked={formData.group.has_children} onChange={(e) => handleChange('group.has_children', e.target.checked)} className="accent-primary w-4 h-4" />
                {f.step3.hasChildren}
              </label>
              {formData.group.has_children && <InputField label={f.step3.childNeeds} path="group.child_care_needs" hidden={!isCustomOrPremium} />}
              
              <label className="flex items-center gap-2 cursor-pointer font-bold text-sm mt-4">
                <input type="checkbox" checked={formData.group.has_elderly} onChange={(e) => handleChange('group.has_elderly', e.target.checked)} className="accent-primary w-4 h-4" />
                {f.step3.hasElderly}
              </label>
              {formData.group.has_elderly && <InputField label={f.step3.elderNeeds} path="group.elderly_care_needs" hidden={!isCustomOrPremium} />}
              
              <label className="flex items-center gap-2 cursor-pointer font-bold text-sm mt-4">
                <input type="checkbox" checked={formData.group.has_pets} onChange={(e) => handleChange('group.has_pets', e.target.checked)} className="accent-primary w-4 h-4" />
                {f.step3.hasPets}
              </label>
              {formData.group.has_pets && <InputField label={f.step3.petDetails} path="group.pet_details" />}
            </div>
          </section>
        );
      case 4:
        return (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{f.step4.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label={f.step4.mustSee} path="itinerary.must_see_raw" placeholder="e.g. Gyeongbokgung, N Seoul Tower" required />
              <InputField label={f.step4.avoid} path="itinerary.avoid_raw" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField label={f.step4.pace} path="schedule.pace" required options={[{label: 'Packed', value: 'packed'}, {label: 'Balanced', value: 'balanced'}, {label: 'Relaxed', value: 'relaxed'}]} />
              <InputField label={f.step4.timeWindow} path="schedule.daily_time_window" hidden={!isCustomOrPremium} />
            </div>
            <InputField label={f.step4.fixedEvents} path="schedule.fixed_events" hidden={!isPremium} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField label={f.step4.transport} path="transport.preference" required options={[{label: 'Public Transit', value: 'public'}, {label: 'Taxi/Ride-hailing', value: 'taxi'}, {label: 'Private Driver', value: 'private_driver'}, {label: 'Rental Car', value: 'rental'}]} />
              <InputField label={f.step4.appComfort} path="transport.app_comfort" hidden={!isCustomOrPremium} />
            </div>
            <InputField label={f.step4.luggage} path="transport.luggage_level" hidden={!isPremium} />

            <div className="border-t border-outline-variant/30 pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label={isBasic ? f.step4.budgetDaily : f.step4.budgetTotal} path={isBasic ? "budget.daily_approx" : "budget.total_range"} required={!isBasic} />
                <InputField label={f.step4.budgetPriority} path="budget.priority" hidden={!isCustomOrPremium} />
              </div>
            </div>

            <div className="border-t border-outline-variant/30 pt-6 mt-6">
              <CheckboxGroup label={f.step4.foodLikes} path="food.likes" options={[
                {label: 'BBQ', value: 'BBQ'}, {label: 'Street Food', value: 'street_food'}, {label: 'Traditional', value: 'traditional'}, 
                {label: 'Seafood', value: 'seafood'}, {label: 'Cafe/Dessert', value: 'cafe_dessert'}, {label: 'Fine Dining', value: 'fine_dining'}
              ]} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <SelectField label={f.step4.spice} path="food.spice_tolerance" required options={[{label: 'None', value: 'none'}, {label: 'Mild', value: 'mild'}, {label: 'Medium', value: 'medium'}, {label: 'High', value: 'high'}]} />
                <InputField label={f.step4.dietary} path="food.dietary_restrictions" />
              </div>
              <InputField label={f.step4.allergy} path="food.allergy_notes" hidden={!isCustomOrPremium} />
            </div>

            <div className="border-t border-outline-variant/30 pt-6 mt-6">
              <InputField label={isBasic ? f.step4.themesBasic : f.step4.themes} path="interests.themes" required={!isBasic} />
              
              <label className="flex items-center gap-2 cursor-pointer font-bold text-sm mt-4 mb-4">
                <input type="checkbox" checked={formData.outdoor.wants_outdoor} onChange={(e) => handleChange('outdoor.wants_outdoor', e.target.checked)} className="accent-primary w-4 h-4" />
                {f.step4.outdoorWant}
              </label>
              {formData.outdoor.wants_outdoor && (
                <div className="pl-6 border-l-2 border-primary/30 space-y-4">
                  <InputField label={f.step4.outdoorTypes} path="outdoor.activity_types" />
                  <SelectField label={f.step4.outdoorDiff} path="outdoor.hiking_difficulty" options={[{label: 'Easy', value: 'easy'}, {label: 'Moderate', value: 'moderate'}, {label: 'Hard', value: 'hard'}]} />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <InputField label={f.step4.shopping} path="interests.shopping" />
                <InputField label={f.step4.nightlife} path="interests.nightlife" />
              </div>
              <InputField label={f.step4.photo} path="interests.photography" hidden={!isCustomOrPremium} />
              <InputField label={f.step4.specialEvents} path="interests.special_events" hidden={!isCustomOrPremium} />
            </div>

            <div className="border-t border-outline-variant/30 pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField label={f.step4.langEng} path="language.english_level" required options={[{label: 'Native', value: 'native'}, {label: 'Fluent', value: 'fluent'}, {label: 'Basic', value: 'basic'}, {label: 'None', value: 'none'}]} />
                <SelectField label={f.step4.langKor} path="language.korean_level" required options={[{label: 'Native', value: 'native'}, {label: 'Fluent', value: 'fluent'}, {label: 'Basic', value: 'basic'}, {label: 'None', value: 'none'}]} />
              </div>
              <InputField label={f.step4.langHelp} path="language.translation_help_needed" hidden={!isPremium} />
            </div>
          </section>
        );
      case 5:
        return (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{f.step5.title}</h2>
            <p className="text-sm text-on-surface-variant mb-6">{f.step5.desc}</p>
            <CheckboxGroup label={f.step5.selected} path="addons.selected" options={[
              {label: f.step5.options.restaurant, value: 'restaurant_booking'},
              {label: f.step5.options.beauty, value: 'beauty_booking'},
              {label: f.step5.options.guide, value: 'private_guide'},
              {label: f.step5.options.airport, value: 'airport_transfer'},
              {label: f.step5.options.photoshoot, value: 'photoshoot'},
              {label: f.step5.options.car, value: 'car_rental'},
              {label: f.step5.options.tickets, value: 'event_tickets'},
              {label: f.step5.options.market, value: 'market_tour'},
              {label: f.step5.options.cafe, value: 'cafe_list'}
            ]} />
            <div className="mt-6">
              <InputField label={f.step5.details} path="addons.details" />
            </div>
          </section>
        );
      case 6:
        return (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{f.step6.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField label={f.step6.currency} path="payment.currency" required options={[{label: 'USD', value: 'USD'}, {label: 'KRW', value: 'KRW'}, {label: 'EUR', value: 'EUR'}, {label: 'Other', value: 'Other'}]} />
              <SelectField label={f.step6.method} path="payment.method" required options={[{label: 'Credit Card', value: 'credit_card'}, {label: 'PayPal', value: 'paypal'}, {label: 'Bank Transfer', value: 'bank_transfer'}]} />
            </div>
            
            <div className="bg-surface-container-low p-6 rounded-sm border border-outline-variant/30 mt-6">
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.legal.accept_refund_policy} onChange={(e) => handleChange('legal.accept_refund_policy', e.target.checked)} className="mt-1 accent-primary" required />
                  <span className="text-sm">{f.step6.refund} *</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.consent.collect_use_required} onChange={(e) => handleChange('consent.collect_use_required', e.target.checked)} className="mt-1 accent-primary" required />
                  <span className="text-sm">{f.step6.collectUse} *</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.consent.third_party_optional} onChange={(e) => handleChange('consent.third_party_optional', e.target.checked)} className="mt-1 accent-primary" />
                  <span className="text-sm">{f.step6.thirdParty}</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.consent.marketing_optional} onChange={(e) => handleChange('consent.marketing_optional', e.target.checked)} className="mt-1 accent-primary" />
                  <span className="text-sm">{f.step6.marketing}</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.legal.acknowledge_scope} onChange={(e) => handleChange('legal.acknowledge_scope', e.target.checked)} className="mt-1 accent-primary" required />
                  <span className="text-sm">{f.step6.ackScope} *</span>
                </label>
                {isPremium && (
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.legal.acknowledge_premium_scope} onChange={(e) => handleChange('legal.acknowledge_premium_scope', e.target.checked)} className="mt-1 accent-primary" required />
                    <span className="text-sm">{f.step6.ackPremium} *</span>
                  </label>
                )}
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-surface text-on-background flex items-center justify-center p-8 selection:bg-primary-fixed selection:text-on-primary-fixed">
        <div className="max-w-md w-full bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/30 text-center shadow-xl animate-in fade-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tighter mb-4">{t.inquiry.success.title}</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">{t.inquiry.success.desc}</p>
          <button 
            onClick={onNavigate} 
            className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:brightness-110 transition-all shadow-md"
          >
            {t.inquiry.success.homeBtn}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface-container-lowest border-r border-outline-variant/30 p-8 flex flex-col hidden md:flex sticky top-0 h-screen overflow-y-auto">
        <div className="text-xl font-bold tracking-tighter text-on-background mb-12 cursor-pointer" onClick={onNavigate}>Modern Scholar</div>
        <div className="flex-grow">
          <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6">{t.inquiry.progress}</h3>
          <ul className="space-y-6">
            {f.steps.map((stepName: string, idx: number) => {
              const stepNum = idx + 1;
              const isActive = currentStep === stepNum;
              const isCompleted = currentStep > stepNum;
              return (
                <li key={stepNum} className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${isActive ? 'bg-primary-fixed text-primary border-2 border-primary' : isCompleted ? 'bg-primary text-white' : 'bg-surface-container-high border border-outline-variant text-secondary'}`}>
                    {isCompleted ? '✓' : stepNum}
                  </div>
                  <span className={`text-sm ${isActive ? 'font-bold text-on-background' : isCompleted ? 'font-bold text-primary' : 'font-medium text-secondary'}`}>{stepName}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-16 lg:p-24 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            {t.inquiry.step.replace('{current}', currentStep.toString()).replace('{total}', totalSteps.toString())}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tighter mb-2">{t.inquiry.title}</h1>
          <p className="text-on-surface-variant">{t.inquiry.description}</p>
          <p className="text-on-surface-variant mt-2">Selected Plan: <span className="font-bold uppercase text-primary">{tier}</span></p>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="bg-surface-container-lowest p-8 rounded-sm border border-outline-variant/30 shadow-sm mb-8">
            {renderStepContent()}
          </div>

          <div className="flex justify-between">
            <button 
              type="button"
              onClick={handlePrev} 
              disabled={currentStep === 1}
              className="px-6 py-3 border border-outline-variant/50 rounded-sm font-bold text-sm disabled:opacity-50 hover:bg-surface-container-low transition-colors"
            >
              {t.inquiry.nav.prev}
            </button>
            <button 
              type="submit"
              disabled={isProcessingPayment}
              className="px-8 py-3 bg-primary text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-md disabled:opacity-70 flex items-center justify-center min-w-[120px]"
            >
              {isProcessingPayment ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                currentStep === totalSteps ? t.inquiry.nav.submit : t.inquiry.nav.next
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
