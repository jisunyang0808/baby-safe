"use client";

import React from "react";
import { AlertTriangle, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

// --- 1. 카드 디자인 (파일 하나에 합침) ---
function RecallCard({ recall }: { recall: any }) {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm mb-4" style={{ borderColor: "#E2E8F0" }}>
      <div className="h-1.5 w-full bg-red-500" />
      <div className="p-5">
        <div className="mb-3">
          <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
            위험도: 매우 높음
          </span>
        </div>
        <h3 className="font-bold text-lg mb-1 text-slate-900">{recall.title}</h3>
        <p className="text-sm mb-4 text-slate-500 font-medium">{recall.brand} · {recall.productName}</p>
        <div className="text-xs p-3 rounded-xl mb-4 flex gap-2 bg-slate-50 text-slate-700 border border-slate-100">
          <AlertTriangle size={16} className="text-red-500 shrink-0" />
          <span>{recall.hazardDescription}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {recall.recallDate}</span>
          <button className="flex items-center gap-1 text-blue-600 font-bold hover:underline">
            상세보기 <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- 2. 메인 페이지 화면 ---
export default function HomePage() {
  const mockRecalls = [
    {
      id: "1",
      title: "어린이 카시트 고정 장치 결함",
      brand: "안전키즈",
      productName: "세이프가드 300",
      recallDate: "2026-02-25",
      hazardDescription: "충돌 시 버클 파손 위험이 있어 아이가 튕겨나갈 수 있습니다.",
    },
    {
      id: "2",
      title: "실리콘 젖병 세척 솔 모 빠짐",
      brand: "베이비케어",
      productName: "클린브러쉬 PRO",
      recallDate: "2026-02-24",
      hazardDescription: "세척 중 실리콘 모가 빠져 아이가 삼킬 위험이 있습니다.",
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <ShieldCheck className="text-blue-600" size={28} />
          <h1 className="text-2xl font-bold text-slate-900">베이비 세이프</h1>
        </div>
        <p className="text-slate-600 mb-8">우리 아이를 위한 최신 리콜 정보를 실시간으로 확인하세요.</p>
        <div className="grid gap-2">
          {mockRecalls.map((recall) => (
            <RecallCard key={recall.id} recall={recall} />
          ))}
        </div>
        <footer className="mt-12 text-center text-xs text-slate-400">
          © 2026 BabySafe - 모든 아이들의 안전을 기원합니다.
        </footer>
      </div>
    </main>
  );
}
