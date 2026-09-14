'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Navigation,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    stream: 'Science',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Helpdesk & Directory', href: '/contact' }, { label: 'Campus Office & Helpdesk' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Simla, District Baksa (BTR), Assam · PIN: 781313</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Campus Office &amp; Helpdesk Directory
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Official institutional directory, admissions counseling contacts, transport connectivity guide, and formal student grievance submission portal for Inspire Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout with University Sidebar */}
      <main className="flex-grow py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Main Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Institutional Departmental Directory Table */}
              <div className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                <div className="bg-[#0B2945] text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border-b-2 border-[#D84315]">
                  <span>Inspire Academy Departmental Helpdesk Directory</span>
                  <span>Working Hours: 8:30 AM – 3:30 PM</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#F0F4F8] text-[#0B2945] font-mono border-b border-[#D8E2EC]">
                      <tr>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Department / Cell</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Primary Scope</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Contact Mode</th>
                        <th className="py-3 px-4 font-bold">In-Charge Office</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-3.5 px-4 font-bold text-[#0B2945]">Office of the Principal</td>
                        <td className="py-3.5 px-4 text-[#64748B]">Institutional governance, approvals, AHSEC liaisons</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#0275D8]">inspireacademysimla@gmail.com</td>
                        <td className="py-3.5 px-4 font-mono text-xs">Administrative Block</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-3.5 px-4 font-bold text-[#0B2945]">Admissions &amp; DARPAN Desk</td>
                        <td className="py-3.5 px-4 text-[#64748B]">Class XI Science &amp; Arts enrolment &amp; verification</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#D84315]">{ACADEMY_INFO.phone}</td>
                        <td className="py-3.5 px-4 font-mono text-xs">Reception Desk 1</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-3.5 px-4 font-bold text-[#0B2945]">Examination &amp; Records Cell</td>
                        <td className="py-3.5 px-4 text-[#64748B]">Admit cards, marksheets, registration verification</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">Exam Section Counter</td>
                        <td className="py-3.5 px-4 font-mono text-xs">Room 104, 1st Floor</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-3.5 px-4 font-bold text-[#0B2945]">Science Laboratories Cell</td>
                        <td className="py-3.5 px-4 text-[#64748B]">Physics, Chemistry &amp; Biology practical sessions</td>
                        <td className="py-3.5 px-4 font-mono text-[#0275D8]">Lab Custodian Counter</td>
                        <td className="py-3.5 px-4 font-mono text-xs">Science Wing (Ground)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inquiry & Formal Representation Form */}
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-5">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Public Helpdesk Form
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                    Submit an Inquiry or Admission Representation
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="p-6 bg-[#F0FDF4] border border-[#DCFCE7] rounded-sm text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#16865A] mx-auto" />
                    <h3 className="text-base font-bold text-[#0B2945] font-display">
                      Representation Successfully Received
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Thank you for contacting Inspire Academy. Our admissions desk will reach out to you within 24 working hours at <strong>{formData.phone || formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-3 px-4 py-2 bg-[#0B2945] text-white text-xs font-mono font-bold rounded-xs cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-[#0B2945]">Student / Guardian Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Boro"
                          className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-[#0B2945]">Contact Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-[#0B2945]">Email Address (Optional)</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="guardian@example.com"
                          className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-[#0B2945]">Stream of Interest</label>
                        <select
                          value={formData.stream}
                          onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                          className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                        >
                          <option value="Science">Higher Secondary Science (PCM / PCB)</option>
                          <option value="Arts">Higher Secondary Arts (Humanities)</option>
                          <option value="General">General Campus Inquiry / Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-[#0B2945]">Inquiry / Representation Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please write your questions regarding admissions, subject choices, fees, or campus facilities..."
                        className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#0B2945] hover:bg-[#0275D8] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Official Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Geographic Connectivity & How to Reach Guide */}
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Regional Connectivity
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    How to Reach Inspire Academy, Simla Campus
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <strong className="text-[#0B2945] block font-mono">From Tamulpur / Goreswar</strong>
                    <p className="text-[#64748B]">Accessible via State Highway towards Simla town center (~25–35 mins by bus or local auto).</p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <strong className="text-[#0B2945] block font-mono">From Nalbari / Rangia</strong>
                    <p className="text-[#64748B]">Direct ASTC and private bus services connect directly to Simla Chowk on a daily schedule.</p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <strong className="text-[#0B2945] block font-mono">From Barpeta Road</strong>
                    <p className="text-[#64748B]">Well-connected via NH connectivity into Baksa District. Campus situated in the central educational hub.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="contact"
                onOpenAdmissionModal={() => setIsModalOpen(true)}
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
