export enum ContentType {
  Experience = 'Experience',
  Project = 'Project',
  Education = 'Education',
  Skill = 'Skill',
  Achievement = 'Achievement'
}

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  subtitle: string;
  date?: string;
  location?: string;
  description: string[];
  image: string;
  isLogo?: boolean;
  matchPercentage: number;
  tags: string[];
  link?: string;
}

export interface CategoryRow {
  title: string;
  items: ContentItem[];
}