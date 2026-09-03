export interface ProtocolCard {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  features: string[];
  graphicType: "radial" | "scan" | "wave";
}

export interface ServiceTier {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  priceLabel: string;
  isPopular?: boolean;
  features: {
    title: string;
    included: boolean;
  }[];
  ctaText: string;
  duration: string;
}

export interface DiagnosticItem {
  label: string;
  value: string;
  status: string;
  score: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "Optometrie" | "Brillen" | "Kontaktlinsen" | "Termin" | "Service";
}

export interface AppointmentFormData {
  serviceId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
}
