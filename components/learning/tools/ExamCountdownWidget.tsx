'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

// Milestone dates (Estimated/Typical Board schedule)
const EXAM_DATES = {
  class12: {
    name: 'AHSEC Class XII Higher Secondary Board Examination',
    date: new Date(2027, 1, 15, 9, 0, 0), // Feb 15, 2027
    dateLabel: 'February 15, 2027 (Expected Commencement)',
    sessions: 'Morning (9:00 AM - 12:00 PM) & Afternoon (1:30 PM - 4:30 PM)',
  },
  class11: {
    name: 'AHSEC Class XI Senior Secondary Annual Examination',
    date: new Date(2027, 2, 10, 9, 0, 0), // March 10, 2027
    dateLabel: 'March 10, 2027 (Expected Commencement)',
    sessions: 'Single Morning Session (9:00 AM - 12:00 PM)',
  },
  cuet: {
    name: 'CUET (UG) National Entrance Examination 2027',
    date: new Date(2027, 4, 20, 9, 0, 0), // May 20, 2027
    dateLabel: 'May 20, 2027 (NTA Schedule)',
    sessions: 'Computer Based Test (CBT) Slots',
  },
};

export default function ExamCountdownWidget() {
  const [activeExam, setActiveExam] = useState<'class12' | 'class11' | 'cuet'>('class12');

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = EXAM_DATES[activeExam].date.getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [activeExam]);

  return (
    <div className="bg-white rounded-md border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Tool Header & Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
          <div>
            <span className="text-xs font-mono text-[#16865A] font-bold uppercase tracking-wider block">
              ACADEMIC COUNTDOWN TRACKER
            </span>
            <h3 className="text-xl font-bold text-[#0B2945] font-display">
              Examination Timeline &amp; Day Counter
            </h3>
          </div>

          <div className="flex items-center gap-1.5 bg-[#FAFAF7] p-1 rounded-xs border border-[#E2E8F0] self-start sm:self-auto">
            <button
              onClick={() => setActiveExam('class12')}
              className={`px-3 py-1 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                activeExam === 'class12' ? 'bg-[#0B2945] text-white shadow-xs' : 'text-[#334155] hover:text-[#0B2945]'
              }`}
            >
              Class XII
            </button>
            <button
              onClick={() => setActiveExam('class11')}
              className={`px-3 py-1 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                activeExam === 'class11' ? 'bg-[#0B2945] text-white shadow-xs' : 'text-[#334155] hover:text-[#0B2945]'
              }`}
            >
              Class XI
            </button>
            <button
              onClick={() => setActiveExam('cuet')}
              className={`px-3 py-1 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                activeExam === 'cuet' ? 'bg-[#0B2945] text-white shadow-xs' : 'text-[#334155] hover:text-[#0B2945]'
              }`}
            >
              CUET (UG)
            </button>
          </div>
        </div>

        {/* Selected Examination Banner */}
        <div className="p-4 bg-[#FAFAF7] rounded-xs border border-[#E2E8F0] space-y-1">
          <span className="text-[11px] font-mono uppercase text-[#64748B] font-semibold block">Target Examination</span>
          <h4 className="text-base font-bold text-[#0B2945]">
            {EXAM_DATES[activeExam].name}
          </h4>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748B] pt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#16865A]" />
              {EXAM_DATES[activeExam].dateLabel}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#0B2945]" />
              {EXAM_DATES[activeExam].sessions}
            </span>
          </div>
        </div>

        {/* Countdown Big Display */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#0B2945] text-white p-5 rounded-xs text-center border border-[#0B2945]">
            <span className="text-3xl sm:text-5xl font-bold font-mono text-white block">
              {timeLeft.days}
            </span>
            <span className="text-[11px] font-mono text-[#86EFAC] uppercase tracking-wider font-semibold">
              Days Remaining
            </span>
          </div>

          <div className="bg-[#0B2945] text-white p-5 rounded-xs text-center border border-[#0B2945]">
            <span className="text-3xl sm:text-5xl font-bold font-mono text-white block">
              {timeLeft.hours}
            </span>
            <span className="text-[11px] font-mono text-[#86EFAC] uppercase tracking-wider font-semibold">
              Hours
            </span>
          </div>

          <div className="bg-[#0B2945] text-white p-5 rounded-xs text-center border border-[#0B2945]">
            <span className="text-3xl sm:text-5xl font-bold font-mono text-white block">
              {timeLeft.minutes}
            </span>
            <span className="text-[11px] font-mono text-[#86EFAC] uppercase tracking-wider font-semibold">
              Minutes
            </span>
          </div>

          <div className="bg-[#0B2945] text-white p-5 rounded-xs text-center border border-[#0B2945]">
            <span className="text-3xl sm:text-5xl font-bold font-mono text-white block">
              {timeLeft.seconds}
            </span>
            <span className="text-[11px] font-mono text-[#86EFAC] uppercase tracking-wider font-semibold">
              Seconds
            </span>
          </div>
        </div>

        {/* Advisory Note */}
        <div className="flex items-start gap-2.5 p-3.5 bg-[#16865A]/10 border border-[#16865A]/30 rounded-xs text-xs font-mono text-[#0B2945]">
          <AlertCircle className="w-4 h-4 text-[#16865A] shrink-0 mt-0.5" />
          <span>
            Official examination routines are released by AHSEC via official gazette notifications. Students are advised to align revision plans with the daily study schedule.
          </span>
        </div>

      </div>
    </div>
  );
}
