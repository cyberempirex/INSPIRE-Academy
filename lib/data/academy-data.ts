export interface AcademicStream {
  id: 'science' | 'arts';
  name: string;
  badge: string;
  description: string;
  coreSubjects: string[];
  electiveSubjects: string[];
  languages: string[];
  laboratoryFocus?: string;
  futurePathways: string[];
  idealFor: string;
}

export const SENIOR_STREAMS: AcademicStream[] = [
  {
    id: 'science',
    name: 'Senior Secondary Science (Class XI & XII)',
    badge: 'Science Stream (PCM / PCB)',
    description:
      'Rigorous foundation in physical, chemical, and life sciences. Combines classroom lectures with mandatory practical laboratory sessions and competitive entrance preparation.',
    coreSubjects: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology',
    ],
    electiveSubjects: [
      'Mathematics / Biology combination options',
    ],
    languages: [
      'English (Core / Compulsory)',
      'M.I.L. — Bodo / Assamese',
      'Alternative English',
    ],
    laboratoryFocus:
      'Regular laboratory practical sessions in dedicated Physics, Chemistry, and Biology laboratories at the Simla campus.',
    futurePathways: [
      'Medical & Allied Health (NEET, MBBS, BDS, B.Sc Nursing)',
      'Engineering & Technology (JEE Main, State Engineering Entrance, B.Tech)',
      'Pure & Applied Sciences (B.Sc Honours in Physics, Chemistry, Mathematics, Botany, Zoology)',
      'Agriculture, Biotechnology & Veterinary Sciences',
    ],
    idealFor:
      'Students with strong analytical aptitude aspiring toward medicine, engineering, scientific research, and allied technical careers.',
  },
  {
    id: 'arts',
    name: 'Senior Secondary Arts / Humanities (Class XI & XII)',
    badge: 'Arts & Humanities Stream',
    description:
      'A comprehensive humanities curriculum focused on critical reading, constitutional principles, economic development, logic, and regional literary heritage.',
    coreSubjects: [
      'Economics',
      'Political Science',
      'Education',
      'Logic & Philosophy',
      'Geography',
      'Advanced Bodo / Advanced Assamese',
    ],
    electiveSubjects: [
      'Students select combinations suited to higher university degrees and competitive examinations',
    ],
    languages: [
      'English (Core / Compulsory)',
      'M.I.L. — Bodo / Assamese',
      'Alternative English',
    ],
    laboratoryFocus:
      'Structured seminars, analytical essay writing workshops, debates, and regional socio-historical study.',
    futurePathways: [
      'Civil Services (UPSC / APSC Foundation)',
      'Law (B.A. LL.B via CLAT & University Law Entrance)',
      'University Humanities & Social Sciences (B.A. Honours)',
      'Teaching, Journalism, Mass Communication & Public Administration',
    ],
    idealFor:
      'Students interested in social systems, economics, governance, law, education, philosophy, and administrative careers.',
  },
];

export interface VerifiedOffering {
  id: string;
  title: string;
  description: string;
}

export const VERIFIED_OFFERINGS: VerifiedOffering[] = [
  {
    id: 'teachers',
    title: 'Experienced Teachers',
    description: 'Qualified and dedicated educators providing close academic mentoring and regular doubt clearance in small batches.',
  },
  {
    id: 'counselling',
    title: 'Academic Counselling',
    description: 'Structured guidance helping students choose the right stream combinations and plan for board exams and higher university admissions.',
  },
  {
    id: 'scholarship',
    title: 'Scholarship Opportunities',
    description: 'Merit-based fee concessions and encouragement for deserving and high-achieving students from the region.',
  },
  {
    id: 'hostels',
    title: 'Separate Hostel Facilities for Boys & Girls',
    description: 'Secure, disciplined residential arrangements in Simla with supervised study hours and healthy meals for outstation students.',
  },
];

export interface NoticeItem {
  id: string;
  date: string;
  category: 'Admissions' | 'Academic' | 'Examination' | 'Events' | 'General';
  title: string;
  summary: string;
  pinned?: boolean;
  refNo?: string;
  isNew?: boolean;
  fullText?: string;
}

export const NOTICE_ITEMS: NoticeItem[] = [
  {
    id: 'notice-1',
    date: 'Jun 24, 2026',
    category: 'Admissions',
    title: 'Class XI Admissions Open for Science & Arts Streams (Session 2026–27)',
    summary:
      'Admissions for Class XI (Science & Arts) are currently open. Application forms and prospectuses are available at the Simla campus office. Merit-based evaluation applies.',
    pinned: true,
    refNo: 'IA/ADM/2026/01',
    isNew: true,
  },
  {
    id: 'notice-2',
    date: 'Jun 18, 2026',
    category: 'Academic',
    title: 'Bridge Classes & Orientation for Newly Enrolled Students',
    summary:
      'Introductory bridge sessions in Physics, Chemistry, Mathematics, and Humanities fundamentals begin prior to regular syllabus lectures.',
    refNo: 'IA/ACAD/2026/08',
    isNew: true,
  },
  {
    id: 'notice-3',
    date: 'May 30, 2026',
    category: 'Examination',
    title: 'Periodic Unit Assessments & AHSEC Mock Test Schedule',
    summary:
      'Weekly unit tests and term evaluation schedule published on campus notice boards for Class XI and XII batches.',
    refNo: 'IA/EXAM/2026/14',
    isNew: false,
  },
  {
    id: 'notice-4',
    date: 'May 15, 2026',
    category: 'Events',
    title: 'Annual Literary Seminar & Cultural Meet Observance',
    summary:
      'Annual symposium featuring Assamese and Bodo recitation, debate competitions, and student cultural presentations.',
    refNo: 'IA/EVT/2026/05',
    isNew: false,
  },
  {
    id: 'notice-5',
    date: 'Apr 28, 2026',
    category: 'General',
    title: 'Hostel Enrolment & Campus Guidelines for New Session',
    summary:
      'Guidelines and seat allocations for separate boys and girls hostel facilities are accessible via the administrative desk.',
    refNo: 'IA/GEN/2026/02',
    isNew: false,
  },
];

export const NOTICES = NOTICE_ITEMS;

export interface ResultHighlight {
  year: string;
  stream: 'Science' | 'Arts' | 'Combined';
  headline: string;
  summary: string;
  passPercentage?: string;
  firstDivisions?: string;
  starMarks?: string;
  details?: string[];
}

export const RESULT_HIGHLIGHTS: ResultHighlight[] = [
  {
    year: '2023–24',
    stream: 'Combined',
    headline: 'Consistent First Divisions in AHSEC Higher Secondary Final Examinations',
    summary: 'Our Class XII Science and Arts batches maintained strong academic performance with multiple distinction and star marks across core subjects.',
    passPercentage: '96.4%',
    firstDivisions: '42 Candidates',
    starMarks: 'Physics (94), Chemistry (91), Pol. Science (96)',
    details: [
      'High pass percentage with notable subject distinctions in Physics, Chemistry, Biology, and Political Science.',
      'Students successfully transitioned to state universities, B.Sc / B.A Honours programs, and technical diploma colleges.',
    ],
  },
  {
    year: '2022–23',
    stream: 'Science',
    headline: 'Excellence in Science Practical & Theory Examinations',
    summary: '100% practical examination pass rate with students securing top grades in laboratory practicals and board theory papers.',
    passPercentage: '95.2%',
    firstDivisions: '28 Candidates',
    starMarks: 'Mathematics (92), Biology (90), Chemistry (88)',
    details: [
      'Strong performance in Mathematics and Biology combinations.',
      'Successful admissions in regional engineering, nursing, and science colleges.',
    ],
  },
  {
    year: '2022–23',
    stream: 'Arts',
    headline: 'High Marks in Political Science, Economics & Education',
    summary: 'Humanities students achieved stellar grades in social science disciplines, advancing to leading colleges across Assam.',
    passPercentage: '97.8%',
    firstDivisions: '34 Candidates',
    starMarks: 'Pol. Science (95), Economics (90), MIL (92)',
    details: [
      'Multiple letter marks in Political Science, Logic & Philosophy, and MIL Assamese/Bodo.',
    ],
  },
  {
    year: '2021–22',
    stream: 'Combined',
    headline: 'Foundational Batch Milestones',
    summary: 'Early graduating batches from Inspire Academy laid a solid foundation of disciplined performance in the Baksa region.',
    passPercentage: '94.0%',
    firstDivisions: '30 Candidates',
    starMarks: 'Star Marks in 4 Subject Categories',
    details: [
      'Demonstrated the effectiveness of small batch mentorship and consistent unit evaluations.',
    ],
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Classroom' | 'Students' | 'Events' | 'Sports' | 'Educational Tours' | 'Academic Activities';
  description: string;
  caption?: string;
  image: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Science Practical Laboratory',
    category: 'Academic Activities',
    description: 'Students conducting Physics and Chemistry practicals under faculty supervision.',
    caption: 'Students conducting Physics and Chemistry practicals under faculty supervision in Simla laboratory.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-2',
    title: 'Daily Classroom Lecture',
    category: 'Classroom',
    description: 'Interactive senior-secondary class session in progress at the Simla campus.',
    caption: 'Interactive senior-secondary classroom session with faculty mentorship at Simla campus.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-3',
    title: 'Campus Main Grounds',
    category: 'Campus',
    description: 'Inspire Academy campus building located in Simla, Baksa district, Assam.',
    caption: 'Inspire Academy campus building located in Simla, Baksa district, Assam.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-4',
    title: 'Literary & Cultural Observance',
    category: 'Events',
    description: 'Student presentations and celebrations of regional cultural heritage.',
    caption: 'Student presentations and celebrations of regional cultural heritage at annual symposium.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-5',
    title: 'Annual Sports & Outdoor Athletics',
    category: 'Sports',
    description: 'Track and field athletics and team sports during annual school sports week.',
    caption: 'Track and field athletics and team sports during annual school sports week.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-6',
    title: 'Educational Field Exposure',
    category: 'Educational Tours',
    description: 'Faculty-guided educational visits providing practical context to theoretical studies.',
    caption: 'Faculty-guided educational visits providing practical context to theoretical studies.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-7',
    title: 'Collaborative Study Groups',
    category: 'Students',
    description: 'Class XI and XII students reviewing problem sets and past examination papers.',
    caption: 'Class XI and XII students reviewing problem sets and past examination papers.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gal-8',
    title: 'Library & Reading Corner',
    category: 'Academic Activities',
    description: 'Reference books, syllabus guides, and quiet reading space for board examinees.',
    caption: 'Reference books, syllabus guides, and quiet reading space for board examinees.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop',
  },
];

export interface CampusFacility {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  image: string;
}

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'fac-1',
    name: 'Science Practical Laboratories',
    description: 'Fully equipped experimental workstations for Physics, Chemistry, and Biology practicals aligning with AHSEC curriculum standards.',
    highlights: ['Individual apparatus workstations', 'Faculty & lab technician supervision', 'Complete reagent & specimen inventory'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'fac-2',
    name: 'Scholarly Library & Reading Corner',
    description: 'Comprehensive repository of NCERT and AHSEC reference manuals, academic journals, competitive entrance guidebooks, and daily newspapers.',
    highlights: ['Quiet self-study reading desks', 'Extensive subject reference texts', 'Previous 10-year board paper archives'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'fac-3',
    name: 'Smart & Well-Ventilated Classrooms',
    description: 'Spacious, high-ceilinged lecture rooms optimized for student-teacher interaction, audio-visual instruction, and attentive learning.',
    highlights: ['Ergonomic bench seating', 'Multimedia projection capabilities', 'Strict small batch class caps'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'fac-4',
    name: 'Separate Boys & Girls Hostels',
    description: 'Disciplined and secure residential campus housing in Simla for outstation students, with supervised evening prep study sessions.',
    highlights: ['Resident warden oversight', 'Nutritious balanced dining', 'Dedicated study hours & security'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'fac-5',
    name: 'Sports Ground & Athletics Field',
    description: 'Open recreation and athletic spaces encouraging physical wellness, football, cricket, volleyball, and annual athletics meets.',
    highlights: ['Annual sports week events', 'Inter-house tournaments', 'Physical fitness guidance'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'fac-6',
    name: 'Academic Counselling & Doubt Cell',
    description: 'Dedicated student counseling chambers for personalized career roadmapping, stream selection, and remedial academic mentoring.',
    highlights: ['One-on-one faculty guidance', 'Entrance exam advisory (NEET/JEE/CUET)', 'Mental wellness support'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
  },
];

export const ACADEMY_INFO = {
  name: 'Inspire Academy',
  tagline: 'Senior Secondary School · Classes XI & XII (Arts & Science)',
  estd: '2019',
  location: 'Simla, Baksa, Assam',
  postalCode: '781313',
  fullAddress: 'Inspire Academy, Simla, District Baksa, Assam — 781313',
  udiseCode: '18240400312',
  schoolCode: '015707',
  phones: [
    '84720 15102',
    '86387 27767',
    '62818 28896',
  ],
  phone: '84720 15102',
  whatsappNumber: '+918472015102',
  email: 'inspireacademysimla@gmail.com',
  officeHours: 'Monday – Saturday: 8:30 AM – 3:30 PM',
  visitingHours: '10:00 AM – 2:00 PM (Working Days)',
  streamsOffered: ['Science (Physics, Chemistry, Mathematics, Biology)', 'Arts / Humanities'],
  grades: 'Class XI & Class XII',
  admissionsSession: '2026–27',
};
