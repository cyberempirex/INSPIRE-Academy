'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'as';

export interface Translations {
  // Navigation & Utility
  nav_home: string;
  nav_about: string;
  nav_academics: string;
  nav_admissions: string;
  nav_faculty: string;
  nav_results: string;
  nav_campus_life: string;
  nav_gallery: string;
  nav_notices: string;
  nav_learning: string;
  nav_contact: string;
  nav_enquire: string;
  top_results: string;
  top_mentorship: string;
  top_udise: string;
  top_ahsec: string;
  top_swayam: string;
  top_webmail: string;
  top_contact: string;

  // Masthead & Brand
  masthead_title_as: string;
  masthead_title_en: string;
  masthead_title_hi: string;
  masthead_subtitle: string;
  search_placeholder: string;
  search_btn: string;
  btn_admission_portal: string;
  search_on_inspire: string;
  campus_location_label: string;
  ahsec_recognized_label: string;
  latest_news_badge: string;

  // Hero & Dignitaries
  hero_title_1: string;
  hero_subtitle_1: string;
  hero_title_2: string;
  hero_subtitle_2: string;
  hero_title_3: string;
  hero_subtitle_3: string;
  dignitary_council_title: string;
  dignitary_council_name: string;
  dignitary_council_role: string;
  dignitary_council_msg: string;
  dignitary_principal_title: string;
  dignitary_principal_name: string;
  dignitary_principal_role: string;
  dignitary_principal_msg: string;
  read_full_message: string;

  // Quick Action Portal Bars
  action_1_title: string;
  action_2_title: string;
  action_3_title: string;
  action_4_title: string;
  action_5_title: string;
  action_6_title: string;
  action_7_title: string;
  click_here: string;

  // Institutional Portals
  portals_heading: string;
  portal_health_safety: string;
  portal_committees: string;
  portal_reports: string;
  portal_results: string;
  portal_syllabus: string;
  portal_forms: string;
  portal_student_corner: string;

  // About Section
  about_heading: string;
  about_subheading: string;
  about_pedagogy_title: string;
  about_pedagogy_desc: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  pillar_1_title: string;
  pillar_1_desc: string;
  pillar_2_title: string;
  pillar_2_desc: string;
  pillar_3_title: string;
  pillar_3_desc: string;
  pillar_4_title: string;
  pillar_4_desc: string;
  about_read_more: string;

  // Digital Library & MHRD
  ebsco_title: string;
  ebsco_subtitle: string;
  ebsco_search_placeholder: string;
  ebsco_search_btn: string;
  downloads_heading: string;
  download_btn_mhrd: string;
  download_btn_forms: string;
  download_btn_nep: string;
  mou_title: string;
  mou_desc: string;
  mou_btn: string;
  mhrd_heading: string;
  mhrd_subheading: string;
  access_portal: string;
  btn_newsletter: string;
  btn_iqac: string;

  // Academics
  academics_heading: string;
  academics_subheading: string;
  tab_science: string;
  tab_arts: string;
  science_div_title: string;
  science_div_desc: string;
  arts_div_title: string;
  arts_div_desc: string;
  th_subject: string;
  th_category: string;
  th_theory: string;
  th_practical: string;
  th_total: string;
  th_focus: string;
  view_syllabus_blueprint: string;

  // Results
  results_heading: string;
  results_subheading: string;
  th_session: string;
  th_stream: string;
  th_pass_rate: string;
  th_first_div: string;
  th_star_marks: string;
  th_board_status: string;
  results_footer_note: string;
  view_full_results: string;

  // News & Events
  news_heading: string;
  news_subheading: string;
  tab_all_notices: string;
  tab_admissions_notices: string;
  tab_exam_notices: string;
  view_notice_details: string;
  view_complete_gazette: string;

  // Campus Facilities
  campus_fac_heading: string;
  campus_fac_subheading: string;
  fac_1_title: string;
  fac_1_desc: string;
  fac_2_title: string;
  fac_2_desc: string;
  fac_3_title: string;
  fac_3_desc: string;

  // Admissions Guide
  admissions_guide_heading: string;
  admissions_guide_subheading: string;
  step_1_title: string;
  step_1_desc: string;
  step_2_title: string;
  step_2_desc: string;
  step_3_title: string;
  step_3_desc: string;
  step_4_title: string;
  step_4_desc: string;
  helpdesk_title: string;
  helpdesk_timing: string;
  btn_apply_online: string;
  btn_call_desk: string;

  // Campus Location
  campus_loc_heading: string;
  campus_loc_subheading: string;
  card_location_title: string;
  card_location_body: string;
  card_phones_title: string;
  card_hours_title: string;
  card_hours_body: string;
  btn_campus_directions: string;

  // Footer
  footer_about_text: string;
  footer_links_title: string;
  footer_contact_title: string;
  footer_rights: string;
  footer_badge_desc: string;
}

const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_academics: 'Academics',
    nav_admissions: 'Admissions 2026',
    nav_faculty: 'Faculty Directory',
    nav_results: 'Results & Honors',
    nav_campus_life: 'Campus Life',
    nav_gallery: 'Photo Gallery',
    nav_notices: 'Notice Board',
    nav_learning: 'Digital Learning',
    nav_contact: 'Contact',
    nav_enquire: 'Enquire Now',
    top_results: 'Results',
    top_mentorship: 'HS Mentorship',
    top_udise: 'UDISE: 18240400312',
    top_ahsec: 'AHSEC Code: 015707',
    top_swayam: 'SWAYAM / E-Library',
    top_webmail: 'Webmail / Portal',
    top_contact: 'Contact Us',

    masthead_title_as: 'ইন্সপায়াৰ একাডেমী, চিমলা',
    masthead_title_en: 'INSPIRE ACADEMY, SIMLA',
    masthead_title_hi: 'इन्स्पायर अकादमी, सिमला',
    masthead_subtitle: 'A Premier Senior Secondary Institution (Science & Arts) Recognized under AHSEC, Govt. of Assam · ESTD. 2019',
    search_placeholder: 'Search courses, syllabus, notices, e-books...',
    search_btn: 'Search',
    btn_admission_portal: 'Webmail / Admission Portal',
    search_on_inspire: 'Search on Inspire',
    campus_location_label: 'Simla, Baksa, Assam',
    ahsec_recognized_label: 'UDISE 18240400312',
    latest_news_badge: 'LATEST NEWS',

    hero_title_1: 'Senior Secondary Science & Arts Excellence',
    hero_subtitle_1: 'Dedicated academic preparation for AHSEC Board Exams, NEET, JEE & CUET in Simla, Baksa.',
    hero_title_2: 'Modern Science Laboratories & Faculty Guidance',
    hero_subtitle_2: 'Equipped Physics, Chemistry and Biology practical laboratories with individual apparatus.',
    hero_title_3: 'Consistent Board Merits & Higher Studies Mentorship',
    hero_subtitle_3: 'Guiding students to prestigious universities, engineering and medical colleges.',
    dignitary_council_title: 'Academic Advisory Council',
    dignitary_council_name: 'Dr. B. K. Sarma, Ph.D.',
    dignitary_council_role: 'Chief Academic Advisor & Former Dean',
    dignitary_council_msg: 'Inspire Academy is dedicated to providing students in Baksa district with national-standard science and humanities education, fostering analytical rigor and moral values.',
    dignitary_principal_title: 'Principal & Head of Institution',
    dignitary_principal_name: 'Sri Hemanta Kumar Das, M.Sc.',
    dignitary_principal_role: 'Principal, Inspire Academy, Simla',
    dignitary_principal_msg: 'Our commitment is to guide every student toward academic distinction in AHSEC board examinations and competitive gateways through dedicated mentorship.',
    read_full_message: 'Read Full Message →',

    action_1_title: 'CENTRE FOR AHSEC SPECIAL MENTORSHIP & CAREER GUIDANCE',
    action_2_title: 'INSPIRE ACADEMY SENIOR SECONDARY ADMISSIONS (2026-27)',
    action_3_title: 'AHSEC HIGHER SECONDARY FINAL EXAM FORM FILLUP & ROUTINE',
    action_4_title: 'SCIENCE PRACTICAL LABORATORY MANUALS & EXPERIMENT GUIDELINES',
    action_5_title: 'ANTI RAGGING COMMITTEE & INTERNAL DISCIPLINARY SQUAD',
    action_6_title: 'INTERNAL COMPLAINTS & STUDENT GRIEVANCE REDRESSAL CELL',
    action_7_title: 'CLASS XI & XII AHSEC SYLLABUS & MARKS WEIGHTAGE BLUEPRINT',
    click_here: 'CLICK HERE',

    portals_heading: 'Institutional Portals & Quick Access',
    portal_health_safety: 'Health & Campus Safety Advisory',
    portal_committees: 'Important Committees & Internal Quality Cell',
    portal_reports: 'Institutional Reports & UDISE Profile',
    portal_results: 'AHSEC Board Examination Results & Honors',
    portal_syllabus: 'AHSEC Syllabus & Course Blueprint',
    portal_forms: 'Important Forms & Admission Prospectus',
    portal_student_corner: "Student's Corner & Career Mentorship",

    about_heading: 'About Inspire Academy, Simla',
    about_subheading: 'Nurturing academic excellence, science laboratory rigor, and human values in Baksa District since 2019',
    about_pedagogy_title: 'Classroom Pedagogy',
    about_pedagogy_desc: 'Focused batch lectures, doubt-clearing sessions, and continuous evaluation.',
    about_p1: 'Established in 2019 in Simla, District Baksa, Inspire Academy was founded to meet a vital academic need: providing senior-secondary students with rigorous, high-standard Class XI and XII education without having to relocate to distant urban centers.',
    about_p2: 'By concentrating exclusively on Higher Secondary curricula in Science and Arts under the Assam Higher Secondary Education Council (AHSEC), our academic framework offers intensive classroom teaching, weekly unit tests, well-equipped science practical laboratories, and dedicated board examination coaching.',
    about_p3: 'Our faculty members maintain close individual contact with every student, guiding them not only through prescribed board syllabi, but also through career pathways including engineering (JEE), medical (NEET), university entrance (CUET), and state civil services foundation.',
    pillar_1_title: 'Equipped Laboratories',
    pillar_1_desc: 'Practical apparatus in Physics, Chemistry & Biology',
    pillar_2_title: 'Continuous Evaluation',
    pillar_2_desc: 'Weekly unit assessments & pre-board examinations',
    pillar_3_title: 'Experienced Faculty',
    pillar_3_desc: 'Subject specialists in Science & Humanities',
    pillar_4_title: 'Career & Entrance Support',
    pillar_4_desc: 'Guidance for CUET, NEET, JEE & Degree admissions',
    about_read_more: 'Read Full Institutional Profile, Faculty Roster & Mission',

    ebsco_title: 'EBSCO & DIGITAL REPOSITORY',
    ebsco_subtitle: 'A link to a plethora of e-Books, NCERT/AHSEC Textbooks, and Solved Question Banks',
    ebsco_search_placeholder: 'Type keyword to search ebook, physics, chemistry, arts...',
    ebsco_search_btn: 'Search Repository',
    downloads_heading: 'Downloads & Academic Documents',
    download_btn_mhrd: "MHRD's Online Learning Resources",
    download_btn_forms: 'Important Forms & Prospectus',
    download_btn_nep: 'National Education Policy, 2020',
    mou_title: 'INSPIRE ACADEMY COLLABORATIONS & MoUs',
    mou_desc: 'Memorandum of Understanding for career guidance, STEM workshops, and AHSEC academic partnerships.',
    mou_btn: 'View All MoU Documents →',
    mhrd_heading: "MHRD'S ONLINE LEARNING RESOURCES",
    mhrd_subheading: 'National educational portals integrated for Class XI & XII curriculum enrichment',
    access_portal: 'Access Portal',
    btn_newsletter: 'Academy Newsletter (Session 2026-27)',
    btn_iqac: 'IQAC (Internal Quality Assurance Cell)',

    academics_heading: 'Academic Streams & Curriculum (Classes XI & XII)',
    academics_subheading: 'Recognized under Assam Higher Secondary Education Council (AHSEC) · State Board Code: 015707',
    tab_science: 'Science Stream (PCM/PCB)',
    tab_arts: 'Arts / Humanities Stream',
    science_div_title: 'Science Stream · 2-Year Program (AHSEC)',
    science_div_desc: 'The Science curriculum at Inspire Academy provides a rigorous foundation for higher academic and competitive pursuits including Medical (NEET), Engineering (JEE), Pure Sciences, and Central University Admissions (CUET). Instruction combines comprehensive theory lectures with mandatory laboratory practicals.',
    arts_div_title: 'Arts Stream · 2-Year Program (AHSEC)',
    arts_div_desc: 'The Arts Stream emphasizes deep analytical inquiry into society, governance, economic systems, regional heritage, and philosophical thought. Designed for students targeting Law, Civil Services (UPSC/APSC), University Academics, and Public Policy.',
    th_subject: 'Subject',
    th_category: 'Category',
    th_theory: 'Theory Marks',
    th_practical: 'Practical / Internal',
    th_total: 'Total Marks',
    th_focus: 'Key Focus Areas',
    view_syllabus_blueprint: 'View Complete Syllabus Blueprint',

    results_heading: 'AHSEC Board Examination Results & Honors',
    results_subheading: 'Official state board examination performance record and merit distinctions (Session 2021–2025)',
    th_session: 'Session',
    th_stream: 'Stream',
    th_pass_rate: 'Pass Rate',
    th_first_div: '1st Division / Distinctions',
    th_star_marks: 'Star Marks & Highlights',
    th_board_status: 'Board Status',
    results_footer_note: 'Official tabulated result gazettes maintained by AHSEC Examination Controller.',
    view_full_results: 'View Full Examination Ledger & Student Honors Archive',

    news_heading: 'News & Events',
    news_subheading: 'Official announcements, AHSEC board gazettes, admission notifications, and academic calendars',
    tab_all_notices: 'All Notifications',
    tab_admissions_notices: 'Admissions 2026-27',
    tab_exam_notices: 'AHSEC Examinations & Form Fill-up',
    view_notice_details: 'View Details',
    view_complete_gazette: 'View Complete Gazette Archive (All Session Notices)',

    campus_fac_heading: 'Campus Infrastructure & Learning Spaces',
    campus_fac_subheading: 'Equipped classrooms, science laboratories, study corners, and athletic grounds in Simla, Baksa',
    fac_1_title: 'Science Laboratories & Experimental Apparatus',
    fac_1_desc: 'Equipped Physics, Chemistry, and Biology laboratories where Class XI and XII students conduct scheduled weekly experiments and specimen examinations.',
    fac_2_title: 'Library & Quiet Study Space',
    fac_2_desc: 'Academic repository featuring AHSEC prescribed textbooks, previous year solved papers, national competitive examination reference manuals, and regional literature.',
    fac_3_title: 'Athletics, Sports & Physical Discipline',
    fac_3_desc: 'Outdoor team sports including volleyball, football, badminton, and annual sports meets promoting camaraderie, physical stamina, and team spirit.',

    admissions_guide_heading: 'Admission Process & Guidelines (2026–27)',
    admissions_guide_subheading: 'Merit-based admission pathway for Class XI Science & Arts streams',
    step_1_title: 'Obtain Application Form',
    step_1_desc: 'Collect form from Simla campus administrative desk or submit online inquiry.',
    step_2_title: 'Stream & Subject Counseling',
    step_2_desc: 'Academic consultation with faculty for PCM/PCB or Humanities combinations.',
    step_3_title: 'Document Verification',
    step_3_desc: 'Submit Class X mark sheet, admit card, pass certificate, and identity proof.',
    step_4_title: 'Admission Confirmation',
    step_4_desc: 'Complete fee formalities and receive academic syllabus handbook and routine.',
    helpdesk_title: 'Admissions Helpdesk · Simla Campus',
    helpdesk_timing: 'Monday – Saturday: 8:30 AM – 3:30 PM · Telephone: +91 94350 00000',
    btn_apply_online: 'Apply Online',
    btn_call_desk: 'Call Desk',

    campus_loc_heading: 'Simla Campus & Administrative Office',
    campus_loc_subheading: 'District Baksa, Bodoland Territorial Region (BTR), Assam — PIN 781313',
    card_location_title: 'Physical Campus Location',
    card_location_body: 'Simla, District Baksa, Assam — PIN 781313. Accessible from Barpeta Road, Tamulpur, and Nalbari routes.',
    card_phones_title: 'Telephones & Admissions Desk',
    card_hours_title: 'Campus Office Timings',
    card_hours_body: 'Monday – Saturday: 8:30 AM – 3:30 PM · Sunday & Gazetted Holidays: Closed',
    btn_campus_directions: 'Open Detailed Campus Directions & Online Inquiry Form',

    footer_about_text: 'Inspire Academy is a premier senior-secondary educational institution in Simla, Baksa, Assam, established in 2019. Providing dedicated instruction for Classes XI & XII in Science and Arts under AHSEC.',
    footer_links_title: 'Institutional Links',
    footer_contact_title: 'Official Contact',
    footer_rights: '© 2026 Inspire Academy, Simla, Baksa, Assam. Established 2019.',
    footer_badge_desc: 'Senior Secondary · Classes XI & XII (Arts & Science)',
  },

  hi: {
    nav_home: 'होम (मुख्य पृष्ठ)',
    nav_about: 'हमारे बारे में',
    nav_academics: 'शैक्षणिक पाठ्यक्रम',
    nav_admissions: 'प्रवेश 2026',
    nav_faculty: 'संकाय निर्देशिका',
    nav_results: 'परीक्षा परिणाम एवं सम्मान',
    nav_campus_life: 'परिसर जीवन',
    nav_gallery: 'चित्र दीर्घा',
    nav_notices: 'सूचना पट्ट',
    nav_learning: 'डिजिटल शिक्षण',
    nav_contact: 'संपर्क करें',
    nav_enquire: 'ऑनलाइन पूछताछ',
    top_results: 'परिणाम',
    top_mentorship: 'एचएस मार्गदर्शन',
    top_udise: 'यू-डाइस: 18240400312',
    top_ahsec: 'एएचएसईसी कोड: 015707',
    top_swayam: 'स्वयं / ई-पुस्तकालय',
    top_webmail: 'वेबमेल / पोर्टल',
    top_contact: 'संपर्क करें',

    masthead_title_as: 'ইন্সপায়াৰ একাডেমী, চিমলা',
    masthead_title_en: 'INSPIRE ACADEMY, SIMLA',
    masthead_title_hi: 'इन्स्पायर अकादमी, सिमला',
    masthead_subtitle: 'असम उच्चतर माध्यमिक शिक्षा परिषद (AHSEC), असम सरकार द्वारा मान्यता प्राप्त प्रमुख वरिष्ठ माध्यमिक संस्थान (विज्ञान एवं कला) · स्थापना 2019',
    search_placeholder: 'पाठ्यक्रम, पाठ्यक्रम विवरणिका, सूचनाएं, ई-पुस्तकें खोजें...',
    search_btn: 'खोजें',
    btn_admission_portal: 'वेबमेल / प्रवेश पोर्टल',
    search_on_inspire: 'अकादमी में खोजें',
    campus_location_label: 'सिमला, बाक्सा, असम',
    ahsec_recognized_label: 'यू-डाइस 18240400312',
    latest_news_badge: 'नवीनतम समाचार',

    hero_title_1: 'वरिष्ठ माध्यमिक विज्ञान एवं कला में शैक्षणिक उत्कृष्टता',
    hero_subtitle_1: 'सिमला, बाक्सा में एएचएसईसी बोर्ड परीक्षा, नीट (NEET), जेईई (JEE) एवं सीयूईटी (CUET) हेतु समर्पित तैयारी।',
    hero_title_2: 'आधुनिक विज्ञान प्रयोगशालाएं एवं अनुभवी प्राध्यापक',
    hero_subtitle_2: 'भौतिकी, रसायन विज्ञान एवं जीव विज्ञान के आधुनिक उपकरणों से सुसज्जित प्रयोगशालाएं।',
    hero_title_3: 'उत्कृष्ट बोर्ड परिणाम एवं उच्च अध्ययन मार्गदर्शन',
    hero_subtitle_3: 'छात्रों को प्रतिष्ठित विश्वविद्यालयों, इंजीनियरिंग एवं मेडिकल कॉलेजों में प्रवेश हेतु मार्गदर्शन।',
    dignitary_council_title: 'शैक्षणिक सलाहकार परिषद',
    dignitary_council_name: 'डॉ. बी. के. शर्मा, पीएच.डी.',
    dignitary_council_role: 'मुख्य शैक्षणिक सलाहकार एवं पूर्व डीन',
    dignitary_council_msg: 'इन्स्पायर अकादमी बाक्सा जिले के विद्यार्थियों को राष्ट्रीय स्तर की विज्ञान एवं मानविकी शिक्षा प्रदान करने तथा विश्लेषणात्मक चिंतन व नैतिक मूल्यों के विकास हेतु समर्पित है।',
    dignitary_principal_title: 'प्राचार्य एवं संस्था प्रमुख',
    dignitary_principal_name: 'श्री हेमन्त कुमार दास, एम.एससी.',
    dignitary_principal_role: 'प्राचार्य, इन्स्पायर अकादमी, सिमला',
    dignitary_principal_msg: 'हमारा उद्देश्य प्रत्येक छात्र को समर्पित व्यक्तिगत मार्गदर्शन के माध्यम से एएचएसईसी बोर्ड परीक्षाओं और प्रतियोगी परीक्षाओं में सर्वोच्च स्थान दिलाना है।',
    read_full_message: 'पूर्ण संदेश पढ़ें →',

    action_1_title: 'एएचएसईसी विशेष मार्गदर्शन एवं करियर परामर्श केंद्र',
    action_2_title: 'इन्स्पायर अकादमी वरिष्ठ माध्यमिक प्रवेश (सत्र 2026-27)',
    action_3_title: 'एएचएसईसी उच्चतर माध्यमिक अंतिम परीक्षा फॉर्म और समय सारिणी',
    action_4_title: 'विज्ञान प्रायोगिक प्रयोगशाला मैनुअल एवं प्रयोग दिशानिर्देश',
    action_5_title: 'एंटी-रैगिंग समिति एवं आंतरिक अनुशासन दस्ता',
    action_6_title: 'आंतरिक शिकायत एवं छात्र शिकायत निवारण प्रकोष्ठ',
    action_7_title: 'कक्षा 11वीं एवं 12वीं एएचएसईसी पाठ्यक्रम व अंक विभाजन ब्लूप्रिंट',
    click_here: 'यहाँ क्लिक करें',

    portals_heading: 'संस्थागत पोर्टल एवं त्वरित पहुँच',
    portal_health_safety: 'स्वास्थ्य एवं परिसर सुरक्षा परामर्श',
    portal_committees: 'महत्वपूर्ण समितियां एवं आंतरिक गुणवत्ता प्रकोष्ठ (IQAC)',
    portal_reports: 'संस्थागत वार्षिक रिपोर्ट एवं यू-डाइस प्रोफाइल',
    portal_results: 'एएचएसईसी बोर्ड परीक्षा परिणाम एवं मेधावी छात्र',
    portal_syllabus: 'एएचएसईसी पाठ्यक्रम एवं अध्ययन योजना',
    portal_forms: 'महत्वपूर्ण प्रपत्र एवं प्रवेश विवरणिका',
    portal_student_corner: 'छात्र कोना एवं करियर परामर्श',

    about_heading: 'इन्स्पायर अकादमी, सिमला के बारे में',
    about_subheading: '2019 से बाक्सा जिले में शैक्षणिक उत्कृष्टता, विज्ञान प्रयोगशाला अनुशासन और मानवीय मूल्यों का संवर्धन',
    about_pedagogy_title: 'कक्षा शिक्षण पद्धति',
    about_pedagogy_desc: 'केंद्रित बैच व्याख्यान, शंका समाधान सत्र एवं निरंतर मूल्यांकन प्रणाली।',
    about_p1: 'वर्ष 2019 में सिमला, जिला बाक्सा में स्थापित इन्स्पायर अकादमी का उद्देश्य ग्रामीण व कस्बाई क्षेत्र के विद्यार्थियों को दूरस्थ शहरों में गए बिना उच्च स्तरीय कक्षा 11वीं और 12वीं की शिक्षा उपलब्ध कराना है।',
    about_p2: 'असम उच्चतर माध्यमिक शिक्षा परिषद (AHSEC) के अंतर्गत विज्ञान और कला संकायों पर विशेष ध्यान देते हुए, हमारा शैक्षणिक ढांचा गहन कक्षा शिक्षण, साप्ताहिक इकाई परीक्षण, सुसज्जित प्रयोगशालाएं और समर्पित बोर्ड कोचिंग प्रदान करता है।',
    about_p3: 'हमारे शिक्षक प्रत्येक छात्र के साथ व्यक्तिगत संपर्क बनाए रखते हैं, और उन्हें बोर्ड पाठ्यक्रम के साथ-साथ इंजीनियरिंग (JEE), मेडिकल (NEET), सीयूईटी (CUET) तथा सिविल सेवा की तैयारी हेतु मार्गदर्शित करते हैं।',
    pillar_1_title: 'सुसज्जित प्रयोगशालाएं',
    pillar_1_desc: 'भौतिकी, रसायन विज्ञान और जीव विज्ञान के आधुनिक उपकरण',
    pillar_2_title: 'निरंतर मूल्यांकन',
    pillar_2_desc: 'साप्ताहिक इकाई परीक्षाएं एवं प्री-बोर्ड टेस्ट',
    pillar_3_title: 'अनुभवी प्राध्यापक',
    pillar_3_desc: 'विज्ञान और कला विषयों के विशेषज्ञ शिक्षक',
    pillar_4_title: 'करियर एवं प्रवेश सहायता',
    pillar_4_desc: 'CUET, NEET, JEE और स्नातक प्रवेश हेतु मार्गदर्शन',
    about_read_more: 'पूर्ण संस्थागत विवरण, संकाय सूची और उद्देश्य पढ़ें',

    ebsco_title: 'एब्स्को (EBSCO) एवं डिजिटल ज्ञान भंडार',
    ebsco_subtitle: 'ई-पुस्तकों, एनसीईआरटी/एएचएसईसी पाठ्यपुस्तकों और हल किए गए प्रश्न पत्रों का विशाल संग्रह',
    ebsco_search_placeholder: 'ई-बुक, भौतिकी, रसायन, कला विषय खोजने हेतु कीवर्ड दर्ज करें...',
    ebsco_search_btn: 'ज्ञान भंडार में खोजें',
    downloads_heading: 'डाउनलोड एवं शैक्षणिक दस्तावेज',
    download_btn_mhrd: 'शिक्षा मंत्रालय के ऑनलाइन शिक्षण संसाधन',
    download_btn_forms: 'महत्वपूर्ण प्रपत्र एवं प्रवेश विवरणिका',
    download_btn_nep: 'राष्ट्रीय शिक्षा नीति (NEP) 2020',
    mou_title: 'इन्स्पायर अकादमी सहयोग एवं समझौता ज्ञापन (MoU)',
    mou_desc: 'करियर मार्गदर्शन, एसटीईएम कार्यशालाओं और शैक्षणिक साझेदारी हेतु समझौता ज्ञापन।',
    mou_btn: 'सभी समझौता ज्ञापन दस्तावेज देखें →',
    mhrd_heading: 'शिक्षा मंत्रालय (MHRD) के ऑनलाइन शिक्षण संसाधन',
    mhrd_subheading: 'कक्षा 11वीं और 12वीं के पाठ्यक्रम को समृद्ध करने वाले राष्ट्रीय शैक्षणिक पोर्टल',
    access_portal: 'पोर्टल खोलें',
    btn_newsletter: 'अकादमी समाचार पत्रिका (सत्र 2026-27)',
    btn_iqac: 'आंतरिक गुणवत्ता आश्वासन प्रकोष्ठ (IQAC)',

    academics_heading: 'शैक्षणिक संकाय एवं पाठ्यक्रम (कक्षा 11वीं एवं 12वीं)',
    academics_subheading: 'असम उच्चतर माध्यमिक शिक्षा परिषद (AHSEC) द्वारा मान्यता प्राप्त · राज्य बोर्ड कोड: 015707',
    tab_science: 'विज्ञान संकाय (PCM/PCB)',
    tab_arts: 'कला / मानविकी संकाय',
    science_div_title: 'विज्ञान संकाय · 2-वर्षीय कार्यक्रम (AHSEC)',
    science_div_desc: 'इन्स्पायर अकादमी का विज्ञान पाठ्यक्रम मेडिकल (NEET), इंजीनियरिंग (JEE), शुद्ध विज्ञान और विश्वविद्यालय प्रवेश (CUET) के लिए एक ठोस आधार प्रदान करता है। इसमें थ्योरी व्याख्यानों के साथ अनिवार्य प्रयोगशाला प्रैक्टिकल शामिल हैं।',
    arts_div_title: 'कला संकाय · 2-वर्षीय कार्यक्रम (AHSEC)',
    arts_div_desc: 'कला संकाय समाज, शासन, आर्थिक प्रणालियों, क्षेत्रीय विरासत और दार्शनिक चिंतन के गहन विश्लेषणात्मक अध्ययन पर जोर देता है। यह कानून, सिविल सेवा (UPSC/APSC) और उच्च शिक्षा हेतु अत्यंत उपयोगी है।',
    th_subject: 'विषय',
    th_category: 'श्रेणी',
    th_theory: 'थ्योरी अंक',
    th_practical: 'प्रैक्टिकल / आंतरिक',
    th_total: 'कुल अंक',
    th_focus: 'प्रमुख अध्ययन क्षेत्र',
    view_syllabus_blueprint: 'पूर्ण पाठ्यक्रम ब्लूप्रिंट देखें',

    results_heading: 'एएचएसईसी बोर्ड परीक्षा परिणाम एवं मेधावी छात्र',
    results_subheading: 'राज्य बोर्ड परीक्षा का आधिकारिक प्रदर्शन और मेधा सूची (सत्र 2021–2025)',
    th_session: 'सत्र',
    th_stream: 'संकाय',
    th_pass_rate: 'उत्तीर्ण प्रतिशत',
    th_first_div: 'प्रथम श्रेणी / विशेष योग्यता',
    th_star_marks: 'स्टार मार्क्स एवं मुख्य विशेषताएं',
    th_board_status: 'बोर्ड सत्यापन स्थिति',
    results_footer_note: 'एएचएसईसी परीक्षा नियंत्रक द्वारा सत्यापित आधिकारिक परिणाम विवरण।',
    view_full_results: 'संपूर्ण परीक्षा परिणाम और छात्र सम्मान अभिलेखागार देखें',

    news_heading: 'समाचार एवं सूचनाएं',
    news_subheading: 'आधिकारिक घोषणाएं, बोर्ड राजपत्र, प्रवेश अधिसूचनाएं और शैक्षणिक कैलेंडर',
    tab_all_notices: 'सभी सूचनाएं',
    tab_admissions_notices: 'प्रवेश 2026-27',
    tab_exam_notices: 'बोर्ड परीक्षाएं एवं फॉर्म भरना',
    view_notice_details: 'विवरण देखें',
    view_complete_gazette: 'पूर्ण राजपत्र अभिलेखागार देखें (सभी सत्र)',

    campus_fac_heading: 'परिसर सुविधाएं एवं शिक्षण वातावरण',
    campus_fac_subheading: 'सिमला, बाक्सा में आधुनिक कक्षाएं, विज्ञान प्रयोगशालाएं, अध्ययन कक्ष और खेल मैदान',
    fac_1_title: 'विज्ञान प्रयोगशालाएं एवं प्रायोगिक उपकरण',
    fac_1_desc: 'सुसज्जित भौतिकी, रसायन और जीव विज्ञान प्रयोगशालाएं जहां कक्षा 11वीं और 12वीं के छात्र नियमित साप्ताहिक प्रयोग करते हैं।',
    fac_2_title: 'पुस्तकालय एवं शांत अध्ययन कक्ष',
    fac_2_desc: 'एएचएसईसी पाठ्यपुस्तकों, पिछले वर्षों के प्रश्नपत्रों, प्रतियोगी परीक्षाओं की संदर्भ पुस्तकों का विशाल संग्रह।',
    fac_3_title: 'खेलकूद एवं शारीरिक अनुशासन',
    fac_3_desc: 'वॉलीबॉल, फुटबॉल, बैडमिंटन और वार्षिक खेल प्रतियोगिताओं के माध्यम से टीम भावना और शारीरिक फिटनेस का विकास।',

    admissions_guide_heading: 'प्रवेश प्रक्रिया एवं दिशानिर्देश (2026–27)',
    admissions_guide_subheading: 'कक्षा 11वीं विज्ञान और कला संकायों हेतु योग्यता-आधारित प्रवेश प्रक्रिया',
    step_1_title: 'आवेदन पत्र प्राप्त करें',
    step_1_desc: 'सिमला परिसर प्रशासनिक कार्यालय से फॉर्म प्राप्त करें या ऑनलाइन पूछताछ दर्ज करें।',
    step_2_title: 'संकाय एवं विषय परामर्श',
    step_2_desc: 'पीसीएम/पीसीबी या कला विषयों के चयन हेतु प्राध्यापकों से व्यक्तिगत परामर्श।',
    step_3_title: 'दस्तावेज सत्यापन',
    step_3_desc: 'कक्षा 10वीं की अंकतालिका, प्रवेश पत्र, उत्तीर्ण प्रमाण पत्र और पहचान पत्र प्रस्तुत करें।',
    step_4_title: 'प्रवेश पुष्टि',
    step_4_desc: 'शुल्क जमा कर पाठ्यक्रम विवरणिका एवं समय सारिणी प्राप्त करें।',
    helpdesk_title: 'प्रवेश सहायता केंद्र · सिमला परिसर',
    helpdesk_timing: 'सोमवार – शनिवार: सुबह 8:30 से दोपहर 3:30 तक · फोन: +91 94350 00000',
    btn_apply_online: 'ऑनलाइन आवेदन करें',
    btn_call_desk: 'हेल्पलाइन पर कॉल करें',

    campus_loc_heading: 'सिमला परिसर एवं प्रशासनिक कार्यालय',
    campus_loc_subheading: 'जिला बाक्सा, बोडोलैंड क्षेत्रीय क्षेत्र (BTR), असम — पिन 781313',
    card_location_title: 'परिसर का पता',
    card_location_body: 'सिमला, जिला बाक्सा, असम — पिन 781313। बारपेटा रोड, तामुलपुर और नलबारी मार्गों से सुगम पहुँच।',
    card_phones_title: 'दूरभाष एवं प्रवेश सहायता केंद्र',
    card_hours_title: 'कार्यालय कार्य समय',
    card_hours_body: 'सोमवार – शनिवार: सुबह 8:30 से दोपहर 3:30 तक · रविवार व राजपत्रित अवकाश: बंद',
    btn_campus_directions: 'विस्तृत मार्ग निर्देश एवं ऑनलाइन पूछताछ फॉर्म खोलें',

    footer_about_text: 'इन्स्पायर अकादमी सिमला, बाक्सा, असम में स्थित एक प्रतिष्ठित वरिष्ठ माध्यमिक शिक्षण संस्थान है, जिसकी स्थापना 2019 में हुई थी। यह एएचएसईसी के तहत कक्षा 11वीं और 12वीं में विज्ञान और कला की समर्पित शिक्षा प्रदान करता है।',
    footer_links_title: 'संस्थागत लिंक',
    footer_contact_title: 'आधिकारिक संपर्क',
    footer_rights: '© 2026 इन्स्पायर अकादमी, सिमला, बाक्सा, असम। स्थापना 2019।',
    footer_badge_desc: 'वरिष्ठ माध्यमिक · कक्षा 11वीं एवं 12वीं (कला एवं विज्ञान)',
  },

  as: {
    nav_home: 'গৃহ (Home)',
    nav_about: 'আমাৰ বিষয়ে',
    nav_academics: 'শৈক্ষিক পাঠ্যক্রম',
    nav_admissions: 'নামভৰ্তি ২০২৬',
    nav_faculty: 'শিক্ষক-শিক্ষয়িত্ৰী',
    nav_results: 'পৰীক্ষাৰ ফলাফল',
    nav_campus_life: 'কেম্পাছ জীৱন',
    nav_gallery: 'ফটো গেলেৰী',
    nav_notices: 'জাননী ফলক',
    nav_learning: 'ডিজিটেল শিক্ষা',
    nav_contact: 'যোগাযোগ',
    nav_enquire: 'অনলাইন তথ্য',
    top_results: 'ফলাফল',
    top_mentorship: 'উচ্চতৰ মাধ্যমিক মাৰ্গদৰ্শন',
    top_udise: 'ইউ-ডাইচ: ১৮২৪০৪০০৩১২',
    top_ahsec: 'কাউঞ্চিল ক’ড: ০১৫৭০৭',
    top_swayam: 'স্বয়ং / ই-পুথিভঁৰাল',
    top_webmail: 'ৱেবমেইল / প’ৰ্টেল',
    top_contact: 'যোগাযোগ কৰক',

    masthead_title_as: 'ইন্সপায়াৰ একাডেমী, চিমলা',
    masthead_title_en: 'INSPIRE ACADEMY, SIMLA',
    masthead_title_hi: 'इन्स्पायर अकादमी, सिमला',
    masthead_subtitle: 'অসম উচ্চতৰ মাধ্যমিক শিক্ষা সংসদ (AHSEC) দ্বাৰা স্বীকৃত অগ্ৰণী জ্যেষ্ঠ মাধ্যমিক শিক্ষানুষ্ঠান (বিজ্ঞান আৰু কলা) · স্থাপিত ২০১৯',
    search_placeholder: 'পাঠ্যক্ৰম, জাননী, ই-কিতাপ সন্ধান কৰক...',
    search_btn: 'সন্ধান',
    btn_admission_portal: 'ৱেবমেইল / নামভৰ্তি প’ৰ্টেল',
    search_on_inspire: 'অনুসন্ধান কৰক',
    campus_location_label: 'চিমলা, বাক্সা, অসম',
    ahsec_recognized_label: 'UDISE ১৮২৪০৪০০৩১২',
    latest_news_badge: 'শেহতীয়া বাৰ্তা',

    hero_title_1: 'উচ্চতৰ মাধ্যমিক বিজ্ঞান আৰু কলা শাখাত অনন্য শৈক্ষিক মান',
    hero_subtitle_1: 'চিমলা, বাক্সাত এএইচএছইচি পৰীক্ষা, নীট (NEET), জেইই (JEE) আৰু চিইউইটি (CUET) ৰ বাবে নিবেদিত প্ৰস্তুতি।',
    hero_title_2: 'আধুনিক বিজ্ঞান পৰীক্ষাগাৰ আৰু অভিজ্ঞ শিক্ষকমণ্ডলী',
    hero_subtitle_2: 'পদাৰ্থ বিজ্ঞান, ৰসায়ন বিজ্ঞান আৰু জীৱ বিজ্ঞানৰ অত্যাধুনিক সঁজুলিসহ পৰীক্ষাগাৰ।',
    hero_title_3: 'ধাৰাবাহিক ফলাফল আৰু উচ্চ শিক্ষাৰ মাৰ্গদৰ্শন',
    hero_subtitle_3: 'শিক্ষাৰ্থীসকলক দেশৰ প্ৰতিষ্ঠিত বিশ্ববিদ্যালয় আৰু কাৰিকৰী প্ৰতিষ্ঠানত স্থান লাভৰ নিৰন্তৰ প্ৰচেষ্টা।',
    dignitary_council_title: 'শৈক্ষিক উপদেষ্টা পৰিষদ',
    dignitary_council_name: 'ড° বি. কে. শৰ্মা, পিএইচ.ডি.',
    dignitary_council_role: 'মুখ্য শৈক্ষিক উপদেষ্টা আৰু প্ৰাক্তন ডীন',
    dignitary_council_msg: 'ইন্সপায়াৰ একাডেমীয়ে বাক্সা জিলাৰ ছাত্ৰ-ছাত্ৰীসকলক জাতীয় মানৰ বিজ্ঞান আৰু কলা শিক্ষা প্ৰদানেৰে বৌদ্ধিক আৰু নৈতিক উৎকৰ্ষ সাধনত নিয়োজিত।',
    dignitary_principal_title: 'অধ্যক্ষ আৰু প্ৰতিষ্ঠান প্ৰধান',
    dignitary_principal_name: 'শ্ৰী হেমন্ত কুমাৰ দাস, এম.এছচি.',
    dignitary_principal_role: 'অধ্যক্ষ, ইন্সপায়াৰ একাডেমী, চিমলা',
    dignitary_principal_msg: 'প্ৰতিগৰাকী শিক্ষাৰ্থীক ব্যক্তিগত তত্ত্বাৱধান আৰু নিয়মিত মূল্যাংকনেৰে চূড়ান্ত পৰীক্ষাত সুখ্যাতি অৰ্জন কৰোৱাই আমাৰ লক্ষ্য।',
    read_full_message: 'সম্পূৰ্ণ বাৰ্তা পঢ়ক →',

    action_1_title: 'কাউঞ্চিল বিশেষ মাৰ্গদৰ্শন আৰু কেৰিয়াৰ পৰামৰ্শ কেন্দ্ৰ',
    action_2_title: 'ইন্সপায়াৰ একাডেমী উচ্চতৰ মাধ্যমিক নামভৰ্তি (২০২৬-২৭)',
    action_3_title: 'উচ্চতৰ মাধ্যমিক চূড়ান্ত পৰীক্ষাৰ প্ৰ-পত্ৰ পূৰণ আৰু সময়সূচী',
    action_4_title: 'বিজ্ঞান ব্যৱহাৰিক পৰীক্ষাগাৰৰ নিৰ্দেশনাৱলী আৰু প্ৰকল্প',
    action_5_title: 'এণ্টি ৰেগিং কমিটি আৰু আভ্যন্তৰীণ অনুশাসন দল',
    action_6_title: 'আভ্যন্তৰীণ অভিযোগ আৰু শিক্ষাৰ্থীৰ ওজৰ-আপত্তি নিবাৰণ কোষ',
    action_7_title: 'একাদশ আৰু দ্বাদশ শ্ৰেণীৰ পাঠ্যক্ৰম আৰু নম্বৰ বিভাজন ব্লুপ্ৰিণ্ট',
    click_here: 'ইয়াত ক্লিক কৰক',

    portals_heading: 'প্ৰতিষ্ঠানৰ প’ৰ্টেল আৰু ক্ষিপ্ৰ সেৱা',
    portal_health_safety: 'স্বাস্থ্য আৰু কেম্পাছ সুৰক্ষা পৰামৰ্শাৱলী',
    portal_committees: 'গুৰুত্বপূৰ্ণ সমিতি আৰু আভ্যন্তৰীণ গুণগত কোষ (IQAC)',
    portal_reports: 'বাৰ্ষিক প্ৰতিবেদন আৰু ইউ-ডাইচ প্ৰ’ফাইল',
    portal_results: 'কাউঞ্চিল পৰীক্ষাৰ ফলাফল আৰু মেধাৰ তালিকা',
    portal_syllabus: 'পাঠ্যক্ৰম আৰু পাঠ্যসূচী ব্লুপ্ৰিণ্ট',
    portal_forms: 'প্ৰয়োজনীয় প্ৰ-পত্ৰ আৰু তথ্যপুস্তিকা',
    portal_student_corner: 'ছাত্ৰ-ছাত্ৰীৰ চুক আৰু কেৰিয়াৰ নিৰ্দেশনা',

    about_heading: 'ইন্সপায়াৰ একাডেমী, চিমলাৰ বিষয়ে',
    about_subheading: '২০১৯ চনৰ পৰা বাক্সা জিলাত নিৰন্তৰ জ্ঞানৰ বিকাশ, বিজ্ঞান পৰীক্ষাগাৰ আৰু মানৱীয় মূল্যবোধৰ চৰ্চা',
    about_pedagogy_title: 'শ্ৰেণীকোঠাৰ শিক্ষাদান পদ্ধতি',
    about_pedagogy_desc: 'নিয়মীয়া শ্ৰেণী, ব্যক্তিগত শংকা দূৰীকৰণ আৰু ধাৰাবাহিক মূল্যায়ন ব্যৱস্থা।',
    about_p1: '২০১৯ চনত বাক্সা জিলাৰ চিমলাত স্থাপিত ইন্সপায়াৰ একাডেমীৰ মূল লক্ষ্য হ’ল অঞ্চলটোৰ ছাত্ৰ-ছাত্ৰীসকলক মহানগৰলৈ নোযোৱাকৈ ঘৰৰ কাষতে উচ্চমানৰ একাদশ আৰু দ্বাদশ শ্ৰেণীৰ শিক্ষা প্ৰদান কৰা।',
    about_p2: 'অসম উচ্চতৰ মাধ্যমিক শিক্ষা সংসদৰ অধীনত বিজ্ঞান আৰু কলা উভয় শাখাতে নিবিড় পাঠদান, সাপ্তাহিক পৰীক্ষা, সুসজ্জিত ব্যৱহাৰিক পৰীক্ষাগাৰ আৰু পৰীক্ষামুখী প্ৰস্তুতি প্ৰদান কৰা হয়।',
    about_p3: 'আমাক শিক্ষকসকলে প্ৰতিজন শিক্ষাৰ্থীক যত্নসহকাৰে অধ্যয়নৰ উপৰিও নীট (NEET), জেইই (JEE), চিইউইটি (CUET) আৰু অন্যান্য প্ৰতিযোগিতামূলক পৰীক্ষাৰ বাবে সাজু কৰি তোলে।',
    pillar_1_title: 'সুসজ্জিত পৰীক্ষাগাৰ',
    pillar_1_desc: 'পদাৰ্থ, ৰসায়ন আৰু জীৱ বিজ্ঞানৰ ব্যৱহাৰিক সঁজুলি',
    pillar_2_title: 'ধাৰাবাহিক মূল্যায়ন',
    pillar_2_desc: 'সাপ্তাহিক একক পৰীক্ষা আৰু প্ৰাক-কাউঞ্চিল পৰীক্ষা',
    pillar_3_title: 'অভিজ্ঞ শিক্ষকমণ্ডলী',
    pillar_3_desc: 'বিজ্ঞান আৰু কলা শাখাৰ অভিজ্ঞ বিষয় বিশেষজ্ঞ',
    pillar_4_title: 'কেৰিয়াৰ আৰু নামভৰ্তি সহায়তা',
    pillar_4_desc: 'CUET, NEET, JEE আৰু স্নাতক পাঠ্যক্ৰমৰ সহায়',
    about_read_more: 'সম্পূৰ্ণ প্ৰতিষ্ঠান পৰিচিতি আৰু শিক্ষক তালিকা পঢ়ক',

    ebsco_title: 'এবস্কো (EBSCO) আৰু ডিজিটেল জ্ঞানকোষ',
    ebsco_subtitle: 'ই-কিতাপ, পাঠ্যপুথি আৰু সমাধান কৰা প্ৰশ্নকাকতৰ বৃহৎ ডিজিটেল ভঁৰাল',
    ebsco_search_placeholder: 'কিতাপ, বিষয়, প্ৰশ্নকাকত সন্ধান কৰিবলৈ ইয়াত লিখক...',
    ebsco_search_btn: 'ভঁৰালত সন্ধান কৰক',
    downloads_heading: 'ডাউনলোড আৰু শৈক্ষিক নথি-পত্ৰ',
    download_btn_mhrd: 'শিক্ষা মন্ত্ৰ্যালয়ৰ অনলাইন শিক্ষা সেৱা',
    download_btn_forms: 'গুৰুত্বপূৰ্ণ প্ৰ-পত্ৰ আৰু তথ্যপুস্তিকা',
    download_btn_nep: 'ৰাষ্ট্ৰীয় শিক্ষানীতি ২০২০ (NEP)',
    mou_title: 'শৈক্ষিক সহযোগিতা আৰু বুজাবুজি চুক্তি (MoU)',
    mou_desc: 'কেৰিয়াৰ মাৰ্গদৰ্শন, বিজ্ঞান কৰ্মশালা আৰু শৈক্ষিক অংশীদাৰিত্বৰ চুক্তি।',
    mou_btn: 'সকলো বুজাবুজি চুক্তিৰ নথি চাওক →',
    mhrd_heading: 'শিক্ষা মন্ত্ৰ্যালয়ৰ অনলাইন শিক্ষা সম্পদসমূহ',
    mhrd_subheading: 'একাদশ আৰু দ্বাদশ শ্ৰেণীৰ পাঠ্যক্ৰম সমৃদ্ধ কৰা ৰাষ্ট্ৰীয় শিক্ষা প’ৰ্টেলসমূহ',
    access_portal: 'প’ৰ্টেলত প্ৰৱেশ কৰক',
    btn_newsletter: 'একাডেমী বাৰ্তালোচনী (২০২৬-২৭)',
    btn_iqac: 'আভ্যন্তৰীণ গুণগত মান সুনিশ্চিতকৰণ কোষ (IQAC)',

    academics_heading: 'শৈক্ষিক শাখা আৰু পাঠ্যক্ৰম (একাদশ আৰু দ্বাদশ শ্ৰেণী)',
    academics_subheading: 'অসম উচ্চতৰ মাধ্যমিক শিক্ষা সংসদৰ দ্বাৰা স্বীকৃত · প্ৰতিষ্ঠান ক’ড: ০১৫৭০৭',
    tab_science: 'বিজ্ঞান শাখা (PCM/PCB)',
    tab_arts: 'কলা / মানৱিকী শাখা',
    science_div_title: 'বিজ্ঞান শাখা · ২-বছৰীয়া পাঠ্যক্ৰম (AHSEC)',
    science_div_desc: 'ইন্সপায়াৰ একাডেমীৰ বিজ্ঞান পাঠ্যক্ৰমে চিকিৎসা বিজ্ঞান (NEET), অভিযান্ত্ৰিক (JEE), বিশুদ্ধ বিজ্ঞান আৰু কেন্দ্ৰীয় বিশ্ববিদ্যালয়ৰ নামভৰ্তিৰ বাবে এক শক্তিশালী ভেটি গঢ়ি তোলে।',
    arts_div_title: 'কলা শাখা · ২-বছৰীয়া পাঠ্যক্ৰম (AHSEC)',
    arts_div_desc: 'কলা শাখাত সমাজ ব্যৱস্থা, ৰাজনীতি, অৰ্থনীতি, আঞ্চলিক সংস্কৃতি আৰু সাহিত্যৰ গভীৰ অধ্যয়ন কৰোৱা হয়, যিয়ে আইন, প্ৰশাসনিক সেৱা (UPSC/APSC) আৰু উচ্চ শিক্ষাৰ বাট মুকলি কৰে।',
    th_subject: 'বিষয়',
    th_category: 'শ্ৰেণী',
    th_theory: 'তাত্ত্বিক নম্বৰ',
    th_practical: 'ব্যৱহাৰিক / আভ্যন্তৰীণ',
    th_total: 'মুঠ নম্বৰ',
    th_focus: 'মূল অধ্যয়নৰ বিষয়',
    view_syllabus_blueprint: 'সম্পূৰ্ণ পাঠ্যসূচী ব্লুপ্ৰিণ্ট চাওক',

    results_heading: 'কাউঞ্চিল পৰীক্ষাৰ ফলাফল আৰু কৃতিত্ব',
    results_subheading: 'ৰাজ্যিক পৰীক্ষাৰ আনুষ্ঠানিক ফলাফল আৰু কৃতিত্বৰ খতিয়ান (২০২১–২০২৫)',
    th_session: 'বৰ্ষ',
    th_stream: 'শাখা',
    th_pass_rate: 'উত্তীৰ্ণৰ হাৰ',
    th_first_div: 'প্ৰথম বিভাগ / ডিষ্টিংচন',
    th_star_marks: 'ষ্টাৰ মাৰ্ক্স আৰু বিশেষত্ব',
    th_board_status: 'কাউঞ্চিল স্থিতি',
    results_footer_note: 'এএইচএছইচি পৰীক্ষা নিয়ন্ত্ৰকৰ দ্বাৰা প্ৰতিপন্ন ফলাফল।',
    view_full_results: 'সম্পূৰ্ণ ফলাফল আৰু মেধাৰ তালিকা চাওক',

    news_heading: 'বাৰ্তা আৰু জাননী',
    news_subheading: 'আনুষ্ঠানিক ঘোষণা, পৰীক্ষাৰ জাননী, নামভৰ্তি জাননী আৰু শৈক্ষিক দিনপঞ্জী',
    tab_all_notices: 'সকলো জাননী',
    tab_admissions_notices: 'নামভৰ্তি ২০২৬-২৭',
    tab_exam_notices: 'পৰীক্ষা আৰু প্ৰ-পত্ৰ পূৰণ',
    view_notice_details: 'বিস্তাৰিত চাওক',
    view_complete_gazette: 'সকলো জাননীৰ সংগ্ৰহ চাওক',

    campus_fac_heading: 'কেম্পাছৰ সা-সুবিধা আৰু শৈক্ষিক পৰিৱেশ',
    campus_fac_subheading: 'চিমলা, বাক্সাত সুসজ্জিত শ্ৰেণীকোঠা, বিজ্ঞান পৰীক্ষাগাৰ, অধ্যয়ন কক্ষ আৰু খেলপথাৰ',
    fac_1_title: 'বিজ্ঞান পৰীক্ষাগাৰ আৰু ব্যৱহাৰিক সঁজুলি',
    fac_1_desc: 'পদাৰ্থ, ৰসায়ন আৰু জীৱ বিজ্ঞানৰ সুসজ্জিত পৰীক্ষাগাৰ য’ত ছাত্ৰ-ছাত্ৰীয়ে নিয়মিত ব্যৱহাৰিক পৰীক্ষা কৰে।',
    fac_2_title: 'পুথিভঁৰাল আৰু শান্ত অধ্যয়ন কক্ষ',
    fac_2_desc: 'পাঠ্যপুথি, প্ৰশ্নকাকত, প্ৰতিযোগিতামূলক পৰীক্ষাৰ কিতাপ আৰু সাহিত্যৰ সমৃদ্ধ সংগ্ৰহ।',
    fac_3_title: 'ক্ৰীড়া আৰু শাৰীৰিক অনুশাসন',
    fac_3_desc: 'ভলীবল, ফুটবল, বেডমিণ্টন আৰু বাৰ্ষিক ক্ৰীড়া প্ৰতিযোগিতাৰে ছাত্ৰ-ছাত্ৰীৰ সুস্বাস্থ্য আৰু ক্ৰীড়ানুৰাগ গঢ়ি তোলা।',

    admissions_guide_heading: 'নামভৰ্তি প্ৰক্ৰিয়া আৰু নিৰ্দেশনাৱলী (২০২৬–২৭)',
    admissions_guide_subheading: 'একাদশ শ্ৰেণীৰ বিজ্ঞান আৰু কলা শাখাৰ মেধাভিত্তিক নামভৰ্তি ব্যৱস্থা',
    step_1_title: 'আৱেদন পত্ৰ সংগ্ৰহ',
    step_1_desc: 'চিমলা কাৰ্যালয়ৰ পৰা আৱেদন পত্ৰ লওক অথবা অনলাইন অনুসন্ধান কৰক।',
    step_2_title: 'শাখা আৰু বিষয় নিৰ্বাচন পৰামৰ্শ',
    step_2_desc: 'শিক্ষকৰ সৈতে বিষয় সংমিশ্ৰণ সন্দৰ্ভত আলোচনা কৰক।',
    step_3_title: 'নথি-পত্ৰ পৰীক্ষণ',
    step_3_desc: 'দশম শ্ৰেণীৰ মাৰ্কশ্বীট, প্ৰৱেশ পত্ৰ আৰু প্ৰমাণপত্ৰ দাখিল কৰক।',
    step_4_title: 'নামভৰ্তি নিশ্চিতকৰণ',
    step_4_desc: 'মাচুল পৰিশোধ কৰি পাঠ্যক্ৰমৰ বিৱৰণী আৰু ৰুটিন সংগ্ৰহ কৰক।',
    helpdesk_title: 'নামভৰ্তি সহায় কেন্দ্ৰ · চিমলা কেম্পাছ',
    helpdesk_timing: 'সোমবাৰ – শনিবাৰ: ৰাতিপুৱা ৮:৩০ বজাৰ পৰা আবেলি ৩:৩০ বজালৈ · ফোন: +91 94350 00000',
    btn_apply_online: 'অনলাইন আৱেদন কৰক',
    btn_call_desk: 'হেল্পলাইনত ফোন কৰক',

    campus_loc_heading: 'চিমলা কেম্পাছ আৰু প্ৰশাসনিক কাৰ্যালয়',
    campus_loc_subheading: 'বাক্সা জিলা, বিটিআৰ (BTR), অসম — পিন ৭৮১৩১৩',
    card_location_title: 'কেম্পাছৰ ঠিকনা',
    card_location_body: 'চিমলা, বাক্সা জিলা, অসম — পিন ৭৮১৩১৩। বৰপেটা ৰোড, তামুলপুৰ আৰু নলবাৰী পথৰ পৰা সুচল যাতায়াত।',
    card_phones_title: 'টেলিফোন আৰু সহায় কেন্দ্ৰ',
    card_hours_title: 'কাৰ্যালয়ৰ সময়সূচী',
    card_hours_body: 'সোমবাৰ – শনিবাৰ: ৰাতিপুৱা ৮:৩০ বজাৰ পৰা আবেলি ৩:৩০ বজালৈ · দেওবাৰ আৰু চৰকাৰী বন্ধৰ দিনত বন্ধ',
    btn_campus_directions: 'কেম্পাছৰ যাতায়াত পথ আৰু অনলাইন যোগাযোগ প্ৰ-পত্ৰ চাওক',

    footer_about_text: 'ইন্সপায়াৰ একাডেমী বাক্সা জিলাৰ চিমলাত অৱস্থিত এখন অগ্ৰণী উচ্চতৰ মাধ্যমিক শিক্ষানুষ্ঠান, যি ২০১৯ চনৰ পৰা নিৰৱচ্ছিন্নভাৱে বিজ্ঞান আৰু কলা শাখাত সেৱা আগবঢ়াই আহিছে।',
    footer_links_title: 'প্ৰতিষ্ঠানৰ লিংকসমূহ',
    footer_contact_title: 'আনুষ্ঠানিক যোগাযোগ',
    footer_rights: '© ২০২৬ ইন্সপায়াৰ একাডেমী, চিমলা, বাক্সা, অসম। স্থাপিত ২০১৯।',
    footer_badge_desc: 'উচ্চতৰ মাধ্যমিক · একাদশ আৰু দ্বাদশ শ্ৰেণী (কলা আৰু বিজ্ঞান)',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedLang = localStorage.getItem('inspire_academy_lang') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'hi' || savedLang === 'as')) {
          return savedLang;
        }
      } catch {
        // Ignore localStorage errors
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('inspire_academy_lang', lang);
      } catch {
        // Ignore localStorage errors
      }
    }
  };

  const t = (key: keyof Translations): string => {
    const currentDict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return currentDict[key] || TRANSLATIONS.en[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
