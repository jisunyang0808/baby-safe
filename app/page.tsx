"use client";

import React from "react";

// 아이콘 라이브러리(lucide-react)를 아예 삭제했습니다.
// 이 코드는 추가 설치 없이 무조건 실행됩니다.
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
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', margin: 0 }}>👶 베이비 세이프</h1>
        <p style={{ color: '#666' }}>빌드 성공을 축하합니다!</p>
      </header>

      {recalls.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ color: 'red', fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>⚠️ 위험도: 매우 높음</div>
          <h2 style={{ fontSize: '20px', margin: '0 0 4px 0' }}>{item.title}</h2>
          <p style={{ color: '#888', marginBottom: '16px' }}>{item.brand} | {item.productName}</p>
          
          <div style={{ backgroundColor: '#fff5f5', padding: '12px', borderRadius: '8px', color: '#c53030', fontSize: '14px', lineHeight: '1.5' }}>
            <strong>위험 요인:</strong> {item.hazard}
          </div>

          <div style={{ marginTop: '20px', paddingTop: '10px', borderTop: '1px solid #eee', fontSize: '12px', color: '#aaa' }}>
            리콜 일자: {item.date}
          </div>
        </div>
      ))}
    </div>
  );
}
