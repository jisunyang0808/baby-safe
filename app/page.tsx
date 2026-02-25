import Link from "next/link";
import { ArrowRight, Bell, BookOpen, FlaskConical } from "lucide-react";
// 파일 위치에 맞게 수정된 경로
import { RecallCard } from "../RecallCard"; 
import { mockRecalls } from "../mock-data";

export default function HomePage() {
  const criticalCount = mockRecalls.filter(
    (r) => r.severity === "critical" && r.status === "active"
  ).length;

  const activeCount = mockRecalls.filter((r) => r.status === "active").length;
  const totalAffected = mockRecalls.reduce(
    (acc, r) => acc + (r.affectedUnits || 0),
    0
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                 style={{ backgroundColor: "#EEF4EF", color: "#2C4D38" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              2026년 실시간 업데이트 중
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4" style={{ color: "#1E3526" }}>
              내 아이가 쓰는<br />제품, 안전한가요?
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4A7C59", maxWidth: "420px" }}>
              육아용품의 리콜 정보와 유해 성분을 한곳에서 확인하세요.
              정부 공식 데이터를 기반으로 신뢰할 수 있는 안전 정보를 제공합니다.
            </p>
            <div className="flex gap-3">
              <div className="px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "#2C4D38" }}>
                리콜 현황 보기
              </div>
            </div>
          </div>

          {/* Stats Summary (임시 StatCard 대체) */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "현재 리콜", value: `${activeCount}건` },
              { label: "긴급 리콜", value: `${criticalCount}건` },
              { label: "대상 수량", value: `${(totalAffected / 10000).toFixed(1)}만개` },
              { label: "기관", value: "3개처" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl border bg-white shadow-sm">
                <div className="text-2xl font-bold" style={{ color: "#2C4D38" }}>{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content - Recall List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold mb-6" style={{ color: "#1E3526" }}>최신 리콜 뉴스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRecalls.map((recall) => (
            <RecallCard key={recall.id} recall={recall} />
          ))}
        </div>
      </section>
    </div>
  );
}
