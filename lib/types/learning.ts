export interface LearningCategoryMeta {
  id: string;
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
  description: string;
  iconName: string;
  badge?: string;
  targetAudience?: string;
}

export const LEARNING_CATEGORIES: LearningCategoryMeta[] = [
  {
    id: 'current-affairs',
    title: 'Current Affairs',
    slug: 'current-affairs',
    href: '/learning/current-affairs',
    shortDescription: 'National, regional (Assam/NE), and global events curated for competitive readiness.',
    description: 'Structured updates and monthly analytical digests covering national, regional, economic, science, and environmental developments.',
    iconName: 'Newspaper',
    targetAudience: 'AHSEC, APSC Foundation & Competitive Exams',
  },
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    slug: 'general-knowledge',
    href: '/learning/general-knowledge',
    shortDescription: 'Core static GK modules spanning history, polity, geography, and science fundamentals.',
    description: 'Foundational static GK modules covering Assam history & culture, Indian polity, physical geography, basic sciences, and global organizations.',
    iconName: 'Globe',
    targetAudience: 'All Senior-Secondary Students',
  },
  {
    id: 'subject-practice',
    title: 'Subject Practice',
    slug: 'subject-practice',
    href: '/learning/subject-practice',
    shortDescription: 'Curriculum-aligned question banks, practice problem sets, and chapter revision drills.',
    description: 'Chapter-wise practice sets, analytical questions, and model numerical problems for Science (Physics, Chemistry, Math, Bio) and Arts streams.',
    iconName: 'BookOpenCheck',
    targetAudience: 'Classes XI & XII (Science & Arts)',
  },
  {
    id: 'quizzes',
    title: 'Quizzes & Tests',
    slug: 'quizzes',
    href: '/learning/quizzes',
    shortDescription: 'Timed subject assessments, mock tests, and interactive knowledge checks.',
    description: 'Online timed tests, chapter-wise evaluations, and mock test papers with automated scoring and answer explanations.',
    iconName: 'HelpCircle',
    targetAudience: 'Self-evaluation & Board Preparation',
  },
  {
    id: 'resources',
    title: 'Study Resources',
    slug: 'resources',
    href: '/learning/resources',
    shortDescription: 'Syllabi, official question blueprints, reference notes, and downloadable guides.',
    description: 'Downloadable AHSEC syllabus guides, official model papers, reference summaries, and faculty-recommended study materials.',
    iconName: 'FolderDown',
    targetAudience: 'Students & Faculty',
  },
  {
    id: 'careers',
    title: 'Career Guidance',
    slug: 'careers',
    href: '/learning/careers',
    shortDescription: 'Post-Class XII roadmaps for higher education, entrance exams, and career pathways.',
    description: 'Comprehensive roadmaps for university entrance examinations (CUET, NEET, JEE), state civil services, law, and specialized degree options.',
    iconName: 'Compass',
    targetAudience: 'Senior-Secondary Aspirants & Guardians',
  },
  {
    id: 'tools',
    title: 'Student Tools',
    slug: 'tools',
    href: '/learning/tools',
    shortDescription: 'Academic calculators, revision planners, timetable templates, and study utilities.',
    description: 'Interactive utilities including CGPA/percentage converters, attendance tracking templates, study schedule generators, and formula sheets.',
    iconName: 'Wrench',
    targetAudience: 'Daily Academic Productivity',
  },
  {
    id: 'my-learning',
    title: 'My Learning',
    slug: 'my-learning',
    href: '/learning/my-learning',
    shortDescription: 'Personal learning dashboard, bookmarked topics, test history, and study progress.',
    description: 'Personalized student workspace to track completed quizzes, bookmarked study resources, revision schedules, and personal performance logs.',
    iconName: 'UserCheck',
    targetAudience: 'Registered Students',
  },
];
