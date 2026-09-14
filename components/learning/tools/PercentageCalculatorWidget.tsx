'use client';

import React, { useState } from 'react';
import { Calculator, RotateCcw, CheckCircle2, Award } from 'lucide-react';

export default function PercentageCalculatorWidget() {
  const [subjects, setSubjects] = useState<Array<{ name: string; maxMarks: number; obtainedMarks: string }>>([
    { name: 'Subject 1 (e.g. English)', maxMarks: 100, obtainedMarks: '' },
    { name: 'Subject 2 (e.g. MIL / Alt English)', maxMarks: 100, obtainedMarks: '' },
    { name: 'Subject 3 (e.g. Physics / Pol Sci)', maxMarks: 100, obtainedMarks: '' },
    { name: 'Subject 4 (e.g. Chemistry / Economics)', maxMarks: 100, obtainedMarks: '' },
    { name: 'Subject 5 (e.g. Math / Biology / Education)', maxMarks: 100, obtainedMarks: '' },
  ]);

  const handleMarksChange = (index: number, val: string) => {
    const updated = [...subjects];
    updated[index].obtainedMarks = val;
    setSubjects(updated);
  };

  const handleReset = () => {
    setSubjects(subjects.map(s => ({ ...s, obtainedMarks: '' })));
  };

  const addSubject = () => {
    if (subjects.length < 8) {
      setSubjects([...subjects, { name: `Subject ${subjects.length + 1}`, maxMarks: 100, obtainedMarks: '' }]);
    }
  };

  const removeSubject = (index: number) => {
    if (subjects.length > 3) {
      setSubjects(subjects.filter((_, i) => i !== index));
    }
  };

  // Calculations
  const validMarks = subjects.map(s => parseFloat(s.obtainedMarks)).filter(n => !isNaN(n));
  const totalObtained = validMarks.reduce((a, b) => a + b, 0);
  const totalMax = subjects.reduce((sum, s, i) => !isNaN(parseFloat(s.obtainedMarks)) ? sum + s.maxMarks : sum, 0) || (subjects.length * 100);
  
  const percentage = totalMax > 0 && validMarks.length > 0
    ? ((totalObtained / totalMax) * 100).toFixed(2)
    : '0.00';

  const getDivision = (pct: number) => {
    if (pct >= 60) return { label: '1st Division (Star / Distinction available at 75%+)', color: 'text-[#16865A] bg-[#16865A]/10 border-[#16865A]' };
    if (pct >= 45) return { label: '2nd Division', color: 'text-[#0B2945] bg-[#E2E8F0] border-[#0B2945]' };
    if (pct >= 30) return { label: '3rd Division (Passing Grade)', color: 'text-[#334155] bg-[#FAFAF7] border-[#E2E8F0]' };
    return { label: 'Below Minimum Qualifying Grade (30%)', color: 'text-[#C62832] bg-[#C62832]/10 border-[#C62832]' };
  };

  const numPct = parseFloat(percentage);
  const divisionInfo = validMarks.length > 0 ? getDivision(numPct) : null;

  return (
    <div className="bg-white rounded-md border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Tool Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2E8F0] pb-4">
          <div>
            <span className="text-xs font-mono text-[#16865A] font-bold uppercase tracking-wider block">
              INSTITUTIONAL TOOL
            </span>
            <h3 className="text-xl font-bold text-[#0B2945] font-display">
              AHSEC Board Aggregate Percentage Calculator
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#E2E8F0] bg-[#FAFAF7] text-xs font-mono text-[#334155] hover:text-[#0B2945] hover:bg-[#E2E8F0] transition-colors cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Fields</span>
          </button>
        </div>

        {/* Subjects Input Matrix */}
        <div className="space-y-3">
          <div className="grid grid-cols-12 gap-2 text-[11px] font-mono text-[#64748B] uppercase font-bold px-1">
            <span className="col-span-6 sm:col-span-7">Subject Title</span>
            <span className="col-span-3 sm:col-span-2 text-center">Max Marks</span>
            <span className="col-span-3 sm:col-span-3 text-right">Marks Obtained</span>
          </div>

          {subjects.map((sub, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 items-center bg-[#FAFAF7] p-2.5 rounded-xs border border-[#E2E8F0]">
              <div className="col-span-6 sm:col-span-7">
                <input
                  type="text"
                  value={sub.name}
                  onChange={(e) => {
                    const updated = [...subjects];
                    updated[idx].name = e.target.value;
                    setSubjects(updated);
                  }}
                  className="w-full bg-white border border-[#E2E8F0] rounded-xs px-2.5 py-1.5 text-xs text-[#0B2945] font-medium"
                />
              </div>
              <div className="col-span-3 sm:col-span-2 text-center">
                <span className="text-xs font-mono text-[#334155] bg-white px-2 py-1.5 rounded-xs border border-[#E2E8F0] block">
                  {sub.maxMarks}
                </span>
              </div>
              <div className="col-span-3 sm:col-span-3 flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                  value={sub.obtainedMarks}
                  onChange={(e) => handleMarksChange(idx, e.target.value)}
                  className="w-full bg-white border border-[#0B2945]/40 rounded-xs px-2.5 py-1.5 text-xs font-mono text-right font-bold text-[#0B2945] focus:border-[#0B2945] focus:outline-hidden"
                />
                {subjects.length > 3 && (
                  <button
                    onClick={() => removeSubject(idx)}
                    className="text-[#64748B] hover:text-[#C62832] text-xs px-1 cursor-pointer"
                    title="Remove Subject"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}

          {subjects.length < 8 && (
            <button
              onClick={addSubject}
              className="text-xs font-mono text-[#16865A] hover:underline pt-1 block cursor-pointer font-semibold"
            >
              + Add Another Subject (Up to 8)
            </button>
          )}
        </div>

        {/* Results Display */}
        <div className="p-5 bg-[#0B2945] text-white rounded-md border border-[#0B2945] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#86EFAC] uppercase tracking-wider block">
              Aggregate Score Result
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold font-mono text-white">
                {percentage}%
              </span>
              <span className="text-xs text-[#E2E8F0] font-mono">
                ({totalObtained} / {totalMax} Total Marks)
              </span>
            </div>
          </div>

          {divisionInfo && (
            <div className={`px-4 py-2 rounded-xs border text-xs font-mono font-bold ${divisionInfo.color}`}>
              {divisionInfo.label}
            </div>
          )}
        </div>

        {/* Note on AHSEC Evaluation */}
        <p className="text-[11px] font-mono text-[#64748B] leading-relaxed">
          *Note: Standard AHSEC Senior Secondary calculations compute aggregate percentage across top 5 subjects (including English & MIL). Minimum pass mark is 30% per subject.
        </p>

      </div>
    </div>
  );
}
