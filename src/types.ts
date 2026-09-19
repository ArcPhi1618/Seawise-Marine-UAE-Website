export type PageId = 
  | 'home' 
  | 'about' 
  | 'ship-management' 
  | 'maritime-trading' 
  | 'marine-services' 
  | 'why-seawise' 
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  isService?: boolean;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  scope: string[];
  iconName: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface QualitativePillar {
  title: string;
  highlight: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  firstName?: string;
  lastName?: string;
  company: string;
  email: string;
  phone: string;
  serviceRequired: string;
  vesselProject: string;
  message: string;
}
