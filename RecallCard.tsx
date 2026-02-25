import React from "react"; // 🟢 JSX 인식을 위해 추가
import Link from "next/link";
import { AlertTriangle, ExternalLink, Calendar, Package } from "lucide-react";

// --- 1. 설정값 정의 ---
const severityConfig: any = {
  critical: { label: "매우 높음", color: "text-red-700", bg: "bg-red-50", border: "border-red-200", dot: "bg-red-500" },
  high: { label: "높음", color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-200", dot: "bg-orange-500" },
  medium: { label: "중간", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-500" },
  low: { label: "낮음", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500" },
};

const statusConfig: any = {
  active: { label: "진행중", color: "text-blue-600" },
  resolved: { label: "조치완료", color: "text-slate-500" },
};

const categoryConfig: any = {
  feeding: { label: "수유용품", emoji: "🍼" },
  sleeping: { label: "침구/수면", emoji: "🛏️" },
  clothing: { label: "의류", emoji: "👕" },
  toys: { label: "완구", emoji: "🧸" },
  skincare: { label: "스킨케어", emoji: "🧴" },
  stroller: { label: "유모차/카시트", emoji: "🛺" },
  safety: { label: "안전용품", emoji: "🦺" },
};

const formatDate = (dateStr: string) => dateStr;
const formatNumber = (num: number) => num.toLocaleString();

// --- 2. 컴포넌트 시작 ---
export function RecallCard({ recall }: { recall: any }) {
  const severity = severityConfig[recall.severity] || severityConfig.medium;
  const status = statusConfig[recall.status] || statusConfig.active;
  const category = categoryConfig[recall.category] || { label: "기타", emoji: "📦" };

  return (
    <article className="bg-white rounded-2xl border overflow-hidden shadow-sm" style={{ borderColor: "#E2E8F0" }}>
      <div className={`h-1 w-full ${recall.severity === "critical" ? "bg-red-500" : "bg-orange-400"}`} />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${severity.color} ${severity.bg} ${severity.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${severity.dot}`} />
            위험도 {severity.label}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white border text-slate-600">
            {status.label}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {category.emoji} {category.label}
          </span>
        </div>

        <h3 className="font-bold text-base mb-1 text-slate-900">{recall.title}</h3>
        <p className="text-sm mb-3 text-slate-500">
          <span className="font-medium text-slate-700">{recall.brand}</span> · {recall.productName}
        </p>

        <div className="text-xs p-3 rounded-lg mb-3 flex gap-2 bg-red-50 text-red-700 border border-red-100">
          <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
          <span>{recall.hazardDescription}</span>
        </div>

        <p className="text-sm leading-relaxed mb-4 text-slate-600">{recall.summary}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {recall.tags && recall.tags.map((tag: string) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(recall.recallDate)}
            </span>
            {recall.affectedUnits && (
              <span className="flex items-center gap-1">
                <Package size={12} />
                {formatNumber(recall.affectedUnits)}개
              </span>
            )}
          </div>
          <a
            href={recall.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
          >
            {recall.source} <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </article>
  );
}
