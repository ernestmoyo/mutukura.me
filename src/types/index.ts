export interface Publication {
  id: string;
  title: string;
  journal?: string;
  year: number;
  type: 'journal' | 'conference' | 'thesis' | 'working-paper';
  status: 'published' | 'under-review' | 'forthcoming' | 'in-progress';
  abstract?: string;
  doi?: string;
  tags: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'education' | 'fieldwork' | 'publication' | 'milestone';
}

export interface HumanSecurityDimension {
  dimension: string;
  threat: number;
  protection: number;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  [key: string]: string | number;
}

export interface DefenseSlide {
  id: number;
  type: 'cover' | 'outline' | 'content' | 'chart' | 'quote' | 'conclusion';
  title: string;
  subtitle?: string;
  body?: string[];
  chartKey?: string;
  quote?: { text: string; attribution: string };
  notes?: string;
}

export interface CVEntry {
  institution: string;
  role: string;
  period: string;
  description?: string;
  type: 'education' | 'work' | 'award';
}
