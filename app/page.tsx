"use client";

import React from "react";
import { AlertTriangle, ExternalLink, Calendar, Package } from "lucide-react";

// --- [컴포넌트 1: 리콜 카드 디자인] ---
function RecallCard({ recall }: { recall: any }) {
  if (!recall) return null;

  const severityConfig: any = {
    critical: { label: "매우 높음", color: "text-red-700", bg: "bg-red-50", border: "border-red-200", dot: "bg-red-500" },
    high: { label: "높음", color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-200", dot: "bg-orange-500" },
    medium: { label: "중간", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-500" },
    low: { label: "낮음", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500" },
  };

  const severity = severityConfig[recall.severity] || severityConfig.medium;

  return (
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm mb-4" style={{ borderColor: "#E2E8F0" }}>
      <div className={`h-1 w-full ${recall.severity === "critical" ? "bg-red-500" : "bg-orange-400"}`} />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${severity.color} ${severity.bg} ${severity.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${severity.dot}`} />
            위험도 {severity.label}
          </span>
        </div>
        <h3 className="font-bold text-base mb-1 text-slate-900">{recall.title}</h3>
        <p className="text-sm mb-3 text-slate-500">{recall.brand} · {recall.productName}</p>
        <div className="text-xs p-3 rounded-lg mb-3 flex gap-2 bg-red-50 text-red-700 border border-red-100">
          <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
          <span>{recall.hazardDescription}</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Calendar size={12} /> {recall.recallDate}</span>
          <a href={recall.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
            상세보기 <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </div>
  );
}

// --- [컴포넌트 2: 메인 페이지 화면] ---
export default function HomePage() {
  const mockRecalls = [
    {
      id: "1",
      title: "어린이 카시트 고정 장치 결함",
      brand: "안전키즈",
      productName: "세이프가드 300",
      severity: "critical",
      recallDate: "2026-02-25",
      hazardDescription: "충돌 시 버클 파손 위험이 있습니다.",
      sourceUrl: "#"
    },
    {
        id: "2",
        title: "실리콘 젖병 세척 솔 모 빠짐",
        brand: "베이비케어",
        productName: "클린브러쉬 PRO",
        severity: "medium",
        recallDate: "2026-02-24",
        hazardDescription: "세척 중 실리콘 모가 빠져 아이가 삼킬 위험이 있습니다.",
        sourceUrl: "#"
      }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">우리 아이 안전 알림판</h1>
        <p className="text-slate-500 mb-8">최신 육아용품 리콜 정보를 실시간으로 확인하세요.</p>
        
        <div className="grid gap-4 md:grid-cols-2">
          {mockRecalls.map((recall) => (
            <RecallCard key={recall.id} recall={recall} />
          ))}
        </div>
      </div>
    </main>
  );
}
