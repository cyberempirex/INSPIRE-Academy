import React from 'react';
import Header from '@/components/navigation/Header';
import UniversityPortalHero from '@/components/hero/UniversityPortalHero';
import QuickActionPortalBars from '@/components/sections/QuickActionPortalBars';
import InstitutionalPortalsGrid from '@/components/sections/InstitutionalPortalsGrid';
import AboutInspireSection from '@/components/sections/AboutInspireSection';
import DigitalLibraryAndMhrdSection from '@/components/sections/DigitalLibraryAndMhrdSection';
import SeniorAcademics from '@/components/sections/SeniorAcademics';
import AcademicResultsHighlight from '@/components/sections/AcademicResultsHighlight';
import NoticeBoardUpdates from '@/components/sections/NoticeBoardUpdates';
import FeaturedSchoolMoment from '@/components/sections/FeaturedSchoolMoment';
import StudentExperience from '@/components/sections/StudentExperience';
import AdmissionsGuide from '@/components/sections/AdmissionsGuide';
import CampusLocationContact from '@/components/sections/CampusLocationContact';
import Footer from '@/components/navigation/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] antialiased selection:bg-[#0275D8] selection:text-white">
      {/* 01. Institutional Header with Red Utility Bar, Bilingual Masthead & Azure Nav */}
      <Header />

      <main className="flex-grow">
        {/* 02. University Portal Hero: News Ticker, Campus Slider & Dignitaries Cards */}
        <UniversityPortalHero />

        {/* 03. High-Impact Action Portal Bars (Bhattadev Screenshot 3 style with Cyan CLICK HERE >> buttons) */}
        <QuickActionPortalBars />

        {/* 04. Institutional Portals & Fast Access List (Bhattadev Screenshot 1 style) */}
        <InstitutionalPortalsGrid />

        {/* 05. About Inspire Academy: Foundation & Mission (Estd. 2019, Simla, Baksa) */}
        <AboutInspireSection />

        {/* 06. Digital Library Search (EBSCO style), Downloads, & MHRD Resources (SWAYAM, e-Pathshala, NDLI, MoU) */}
        <DigitalLibraryAndMhrdSection />

        {/* 07. Senior Secondary Academic Streams (Science & Arts Matrix) */}
        <SeniorAcademics />

        {/* 08. AHSEC Board Examination Results & Honors Ledger */}
        <AcademicResultsHighlight />

        {/* 09. Institutional Circulars & Official Notice Board */}
        <NoticeBoardUpdates />

        {/* 10. Real Campus Photography & Laboratory Moments */}
        <FeaturedSchoolMoment />

        {/* 11. Student Life, Sports & Cultural Activities */}
        <StudentExperience />

        {/* 12. Admissions Roadmap (Classes XI & XII Session 2026–27) */}
        <AdmissionsGuide />

        {/* 13. Campus Location, Simla Baksa Map & Contact Summary */}
        <CampusLocationContact />
      </main>

      {/* 14. Institutional Footer */}
      <Footer />
    </div>
  );
}
