export type GKCategorySlug =
  | 'all'
  | 'india'
  | 'world'
  | 'history'
  | 'geography'
  | 'polity'
  | 'economy'
  | 'science'
  | 'environment'
  | 'art-culture'
  | 'literature'
  | 'important-people'
  | 'awards-honours'
  | 'books-authors'
  | 'sports'
  | 'defence'
  | 'space'
  | 'computers'
  | 'organisations'
  | 'important-days'
  | 'assam-northeast'
  | 'miscellaneous'
  | 'mixed-gk';

export type GKDifficulty = 'Basic' | 'Intermediate' | 'Advanced';

export interface GKItem {
  id: string;
  question: string;
  answer: string;
  explanation?: string;
  primaryCategory: GKCategorySlug;
  categoryLabel: string;
  subCategoryLabel?: string;
  tags: string[];
  difficulty: GKDifficulty;
  source?: string;
  updatedDate: string;
  isPopular?: boolean;
}

export interface GKCategoryMeta {
  id: GKCategorySlug;
  name: string;
  shortLabel: string;
  description?: string;
  badgeColor?: string;
}

export const GK_CATEGORIES_LIST: GKCategoryMeta[] = [
  { id: 'all', name: 'All Categories', shortLabel: 'All' },
  { id: 'india', name: 'India', shortLabel: 'India' },
  { id: 'world', name: 'World', shortLabel: 'World' },
  { id: 'history', name: 'History', shortLabel: 'History' },
  { id: 'geography', name: 'Geography', shortLabel: 'Geography' },
  { id: 'polity', name: 'Polity & Constitution', shortLabel: 'Polity' },
  { id: 'economy', name: 'Economy', shortLabel: 'Economy' },
  { id: 'science', name: 'Science & Technology', shortLabel: 'Science' },
  { id: 'environment', name: 'Environment & Nature', shortLabel: 'Environment' },
  { id: 'art-culture', name: 'Art & Culture', shortLabel: 'Art & Culture' },
  { id: 'literature', name: 'Literature & Languages', shortLabel: 'Literature' },
  { id: 'important-people', name: 'Important People', shortLabel: 'People' },
  { id: 'awards-honours', name: 'Awards & Honours', shortLabel: 'Awards' },
  { id: 'books-authors', name: 'Books & Authors', shortLabel: 'Books' },
  { id: 'sports', name: 'Sports', shortLabel: 'Sports' },
  { id: 'defence', name: 'Defence & Security', shortLabel: 'Defence' },
  { id: 'space', name: 'Space & Astronomy', shortLabel: 'Space' },
  { id: 'computers', name: 'Computers & IT', shortLabel: 'Computers' },
  { id: 'organisations', name: 'Organisations & Institutions', shortLabel: 'Organisations' },
  { id: 'important-days', name: 'Important Days & Events', shortLabel: 'Important Days' },
  { id: 'assam-northeast', name: 'Assam & Northeast', shortLabel: 'Assam & NE' },
  { id: 'miscellaneous', name: 'Miscellaneous GK', shortLabel: 'Misc' },
  { id: 'mixed-gk', name: 'Mixed GK', shortLabel: 'Mixed GK' },
];
