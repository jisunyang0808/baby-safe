"use client";

import React from "react";

export default function HomePage() {
  const recalls = [
    {
      id: "1",
      title: "어린이 카시트 고정 장치 결함",
      brand: "안전키즈",
      productName: "세이프가드 300",
      date: "2026-02-25",
      hazard: "충돌 시 버클 파손 위험이 있습니다.",
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>👶 베이비 세이프</h1>
        <p style={{ color: '#64748b', fontSize: '14px' }}>실시간 리콜 정보를 확인하세요.</p>
      </header>

      {recalls.map(item => (
        <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
          <div style={{ color: '#dc2626', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>⚠️ 위험도: 매우 높음</div>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{item.title}</h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>{item.brand} · {item.productName}</p>
          <div style={{ backgroundColor: '#f1f5f9', padding: '12px', borderRadius: '8px', fontSize: '13px', color: '#475569' }}>
            {item.hazard}
          </div>
          <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #f1f5f9', fontSize: '12px', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
            <span>{item.date}</span>
            <span style={{ color: '#2563eb', fontWeight: 'bold' }}>상세보기 →</span>
          </div>
        </div>
      ))}
    </div>
  );
}
