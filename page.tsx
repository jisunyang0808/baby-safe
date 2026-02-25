import Link from "next/link";
import { ArrowRight, Bell, BookOpen, FlaskConical } from "lucide-react";
import { RecallList } from "@/app/components/RecallList";
import { StatCard } from "@/app/components/StatCard";
import { AlertBanner } from "@/app/components/AlertBanner";
import { mockRecalls } from "@/app/lib/mock-data";

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
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: headline */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
              style={{
                backgroundColor: "#EEF4EF",
                color: "#2C4D38",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              2024년 3월 기준 업데이트
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "#1E3526",
              }}
            >
              내 아이가 쓰는
              <br />
              제품, 안전한가요?
            </h1>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#4A7C59", maxWidth: "420px" }}
            >
              육아용품의 리콜 정보와 유해 성분을 한곳에서 확인하세요.
              정부 공식 데이터를 기반으로 신뢰할 수 있는 안전 정보를 제공합니다.
            </p>

            <div className="flex gap-3">
              <Link
                href="/recalls"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2C4D38" }}
              >
                리콜 현황 보기
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/subscribe"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:bg-forest-50"
                style={{
                  borderColor: "#2C4D38",
                  color: "#2C4D38",
                }}
              >
                <Bell size={14} />
                알림 신청
              </Link>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              value={`${activeCount}건`}
              label="현재 진행중 리콜"
              sublabel="즉시 확인 필요"
              accent
            />
            <StatCard
              value={`${criticalCount}건`}
              label="긴급 리콜"
              sublabel="즉각적 위험"
            />
            <StatCard
              value={`${(totalAffected / 10000).toFixed(1)}만개`}
              label="총 해당 제품 수량"
              sublabel="2024년 기준"
            />
            <StatCard
              value="3개"
              label="모니터링 기관"
              sublabel="소비자원·식약처·기표원"
            />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section
        className="border-y py-5"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-4 overflow-x-auto pb-1">
            {[
              { icon: "🍼", label: "수유용품", href: "/recalls?category=feeding" },
              { icon: "🛏️", label: "침구/수면", href: "/recalls?category=sleeping" },
              { icon: "👕", label: "의류", href: "/recalls?category=clothing" },
              { icon: "🧸", label: "완구", href: "/recalls?category=toys" },
              { icon: "🧴", label: "스킨케어", href: "/recalls?category=skincare" },
              { icon: "🛺", label: "유모차", href: "/recalls?category=stroller" },
              { icon: "🦺", label: "안전용품", href: "/recalls?category=safety" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl border whitespace-nowrap transition-colors hover:border-forest-400"
                style={{
                  backgroundColor: "white",
                  borderColor: "var(--color-border)",
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium" style={{ color: "#1E3526" }}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recall list */}
          <div className="lg:col-span-2">
            {/* Alert */}
            <div className="mb-5">
              <AlertBanner criticalCount={criticalCount} />
            </div>

            {/* Section header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1E3526",
                  }}
                >
                  최신 리콜 뉴스
                </h2>
                <p className="text-sm mt-0.5" style={{ color: "#6A9E72" }}>
                  공식 기관 발표 기준 최신 정보
                </p>
              </div>
              <Link
                href="/recalls"
                className="text-xs font-medium flex items-center gap-1 hover:underline"
                style={{ color: "#3A6247" }}
              >
                전체보기
                <ArrowRight size={12} />
              </Link>
            </div>

            <RecallList recalls={mockRecalls} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Hazardous ingredients teaser */}
            <div
              className="rounded-2xl p-5 border"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical size={18} style={{ color: "#C05C3C" }} />
                <h3
                  className="font-bold text-sm"
                  style={{ color: "#1E3526" }}
                >
                  주의해야 할 성분
                </h3>
              </div>
              <div className="space-y-2">
                {[
                  { name: "파라벤", risk: "높음", emoji: "⚠️" },
                  { name: "포름알데히드", risk: "높음", emoji: "⚠️" },
                  { name: "납(Pb)", risk: "매우 높음", emoji: "🔴" },
                  { name: "프탈레이트", risk: "중간", emoji: "🟡" },
                  { name: "향료(인공)", risk: "낮음", emoji: "🟢" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between text-sm py-1.5 border-b"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span style={{ color: "#1E3526" }}>{item.name}</span>
                    <span className="text-xs">
                      {item.emoji} {item.risk}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/ingredients"
                className="mt-4 block text-center text-xs font-semibold py-2 rounded-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: "#EEF4EF", color: "#2C4D38" }}
              >
                전체 성분 사전 보기 →
              </Link>
            </div>

            {/* Safety guide */}
            <div
              className="rounded-2xl p-5 border"
              style={{
                background: "linear-gradient(135deg, #1E3526 0%, #2C4D38 100%)",
                borderColor: "#3A6247",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={18} color="#6A9E72" />
                <h3
                  className="font-bold text-sm"
                  style={{ color: "#EEF4EF" }}
                >
                  안전 가이드
                </h3>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#6A9E72" }}>
                연령별 육아용품 선택 기준과 구매 시 체크리스트를 확인하세요.
              </p>
              <Link
                href="/guide"
                className="block text-center text-xs font-semibold py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
                style={{ color: "#D4E6D6" }}
              >
                가이드 보기 →
              </Link>
            </div>

            {/* Newsletter CTA */}
            <div
              className="rounded-2xl p-5 border text-center"
              style={{
                backgroundColor: "#FEF9EF",
                borderColor: "#F0E4C0",
              }}
            >
              <span className="text-3xl">🔔</span>
              <h3
                className="font-bold text-sm mt-2 mb-1"
                style={{ color: "#1E3526" }}
              >
                새 리콜 알림 받기
              </h3>
              <p className="text-xs mb-3" style={{ color: "#4A7C59" }}>
                새로운 리콜 발생 시 이메일로 즉시 알려드립니다.
              </p>
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full text-xs px-3 py-2 rounded-lg border mb-2 outline-none"
                style={{
                  borderColor: "#E8DFC8",
                  backgroundColor: "white",
                }}
              />
              <button
                className="w-full text-xs font-semibold py-2 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2C4D38" }}
              >
                무료 구독하기
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
