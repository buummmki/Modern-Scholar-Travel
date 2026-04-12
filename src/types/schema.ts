export type PlanTier = 'basic' | 'custom' | 'premium';

export interface ConsultationForm {
  plan_tier: PlanTier;
  primary_contact: {
    full_name: string;
    email: string;
    channels: string[];
    channels_optional?: string[];
  };
  traveler_meta: {
    nationality?: string;
    residence_city?: string;
    sim_ready?: 'yes' | 'no' | 'will_buy_in_korea' | '';
  };
  group: {
    size_total: number;
    type: string;
    roles: string[];
    age_bands: Record<string, number>;
  };
  accessibility: {
    has_constraints: boolean;
    constraints: string[];
    medical_notes?: string;
  };
  care: {
    has_children: boolean;
    child_needs: string[];
    has_elderly: boolean;
    elder_needs: string[];
  };
  pets: {
    traveling_with_pet: boolean;
    type_size?: string;
    pet_friendly_priority?: boolean;
  };
  trip: {
    start_date: string;
    end_date: string;
    origin_airport: string;
    arrival_airport_kr: string;
    departure_airport_kr: string;
  };
  accommodation: {
    booked: boolean;
    area: string;
    type: string;
  };
  itinerary: {
    cities: string[];
    must_see: string[];
    avoid: string[];
  };
  schedule: {
    pace: string;
    daily_time_window: { start_time: string; end_time: string };
  };
  transport: {
    preferences: string[];
    app_comfort: string;
    luggage_level: string;
  };
  budget: {
    daily_range?: string;
    total_range: string;
    priority: string[];
  };
  food: {
    likes: string[];
    spice_level: string;
    dietary: string[];
    allergy_notes?: string;
  };
  interests: {
    themes_basic?: string[];
    themes: string[];
  };
  outdoor: {
    want: boolean;
    types: string[];
    hiking_difficulty?: string;
  };
  extras: {
    shopping: string[];
    nightlife: string;
    photography_needs: string[];
  };
  language: {
    english_level: string;
    korean_level: string;
  };
  payment: {
    currency_preference: string;
    method_preference: string[];
  };
  addons: {
    selected: string[];
  };
  legal: {
    accept_refund_policy: boolean;
    acknowledge_scope: boolean;
  };
  consent: {
    collect_use_required: boolean;
  };
}

export const initialFormData: ConsultationForm = {
  plan_tier: 'custom',
  primary_contact: { full_name: '', email: '', channels: [] },
  traveler_meta: {},
  group: { size_total: 1, type: 'Solo', roles: [], age_bands: {} },
  accessibility: { has_constraints: false, constraints: [] },
  care: { has_children: false, child_needs: [], has_elderly: false, elder_needs: [] },
  pets: { traveling_with_pet: false },
  trip: { start_date: '', end_date: '', origin_airport: '', arrival_airport_kr: 'ICN', departure_airport_kr: 'ICN' },
  accommodation: { booked: false, area: '', type: '' },
  itinerary: { cities: ['Seoul'], must_see: [], avoid: [] },
  schedule: { pace: 'balanced', daily_time_window: { start_time: '09-11', end_time: '20-22' } },
  transport: { preferences: ['transit'], app_comfort: 'comfortable', luggage_level: 'medium' },
  budget: { total_range: 'mid', priority: [] },
  food: { likes: [], spice_level: 'ok', dietary: ['none'] },
  interests: { themes: [] },
  outdoor: { want: false, types: [] },
  extras: { shopping: [], nightlife: 'none', photography_needs: [] },
  language: { english_level: 'conversational', korean_level: 'none' },
  payment: { currency_preference: 'USD', method_preference: ['card'] },
  addons: { selected: [] },
  legal: { accept_refund_policy: false, acknowledge_scope: false },
  consent: { collect_use_required: false }
};
