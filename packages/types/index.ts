export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  role: 'customer' | 'admin' | 'installer';
  createdAt: string;
}

export interface Project {
  id: string;
  userId: string;
  title: string;
  status: 'consultation' | 'design' | 'permitting' | 'installation' | 'inspection' | 'active';
  systemSizeKw?: number;
  panelCount?: number;
  estimatedSavingsMonthly?: number;
  address?: string;
  createdAt: string;
}

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed' | 'delayed';
  sortOrder: number;
}

export interface EnergyReading {
  id: string;
  projectId: string;
  timestamp: string;
  productionKwh: number;
  consumptionKwh: number;
}

export interface Ticket {
  id: string;
  userId: string;
  subject: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  createdAt: string;
}

export interface Referral {
  id: string;
  referrerId: string;
  refereeName: string;
  status: 'pending' | 'contacted' | 'converted' | 'paid';
  rewardAmount: number;
  createdAt: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  monthlyBill?: string;
  status: 'new' | 'contacted' | 'quoted' | 'converted' | 'lost';
  createdAt: string;
}
