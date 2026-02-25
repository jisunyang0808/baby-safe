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
      <div style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '22px', margin: 0 }}>👶 베이비 세이프</h1>
        <p style={{ color: '#666', fontSize: '14px' }}>실시간 리콜 정보를 확인하세요</p>
      </div>

      {recalls.map(item => (
        <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '20px', marginBottom: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '12px' }}>● 위험도 높음</span>
          <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{item.title}</h2>
          <p style={{ fontSize: '14px', color: '#888' }}>{item.brand} | {item.productName}</p>
          <div style={{ backgroundColor: '#fff5f5', padding: '10px', borderRadius: '8px', fontSize: '13px', color: '#d32f2f', marginTop: '10px' }}>
            ⚠️ {item.hazard}
          </div>
          <div style={{ marginTop: '15px', fontSize: '12px', color: '#aaa' }}>
            날짜: {item.date}
          </div>
        </div>
      ))}
    </div>
  );
}
