import Link from "next/link";
import { AlertTriangle, ExternalLink, Calendar, Package } from "lucide-react";
import { RecallItem } from "@/app/types";
import {
  severityConfig,
  statusConfig,
  categoryConfig,
  formatDate,
  formatNumber,
} from "@/app/lib/utils";

interface RecallCardProps {
  recall: RecallItem;
  index?: number;
}

export function RecallCard({ recall, index = 0 }: RecallCardProps) {
  const severity = severityConfig[recall.severity];
  const status = statusConfig[recall.status];
  const category = categoryConfig[recall.category];

  return (
    <article
      className="recall-card stagger-item bg-white rounded-2xl border overflow-hidden cursor-pointer"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Severity stripe */}
      <div
        className={`h-1 w-full ${
          recall.severity === "critical"
            ? "bg-red-500"
            : recall.severity === "high"
            ? "bg-orange-400"
            : recall.severity === "medium"
            ? "bg-amber-400"
            : "bg-forest-400"
        }`}
      />

      <div className="p-5">
        {/* Header badges */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {/* Severity badge */}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${severity.color} ${severity.bg} ${severity.border} ${
              recall.severity === "critical" ? "critical-badge" : ""
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${severity.dot}`}
            />
            위험도 {severity.label}
          </span>

          {/* Status badge */}
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full bg-white border ${status.color}`}
            style={{ borderColor: "var(--color-border)" }}
          >
            {status.label}
          </span>

          {/* Category */}
          <span
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "#4A7C59",
            }}
          >
            {category.emoji} {category.label}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-base leading-snug mb-1"
          style={{ color: "#1E3526" }}
        >
          {recall.title}
        </h3>

        {/* Brand & Product */}
        <p className="text-sm mb-3" style={{ color: "#4A7C59" }}>
          <span className="font-medium">{recall.brand}</span> · {recall.productName}
        </p>

        {/* Hazard description */}
        <div
          className="text-xs p-3 rounded-lg mb-3 flex gap-2"
          style={{
            backgroundColor: "#FEF3F2",
            color: "#B42318",
            border: "1px solid #FECDCA",
          }}
        >
          <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
          <span>{recall.hazardDescription}</span>
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#3A6247" }}>
          {recall.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {recall.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: "#EEF4EF",
                color: "#2C4D38",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center gap-3 text-xs" style={{ color: "#6A9E72" }}>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(recall.recallDate)}
            </span>
            {recall.affectedUnits && (
              <span className="flex items-center gap-1">
                <Package size={12} />
                {formatNumber(recall.affectedUnits)}개 해당
              </span>
            )}
          </div>

          <a
            href={recall.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium transition-colors hover:underline"
            style={{ color: "#3A6247" }}
            onClick={(e) => e.stopPropagation()}
          >
            {recall.source}
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </article>
  );
}
