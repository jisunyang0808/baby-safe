"use client";

import React from "react";
// 아이콘 라이브러리에서 에러가 날 수도 있으니, 일단 아이콘 없이 텍스트로만 구성했습니다.
// 이 코드가 성공하면 나중에 아이콘을 다시 넣을게요.

export default function HomePage() {
  const mockRecalls = [
    {
      id: "1",
      title: "어린이 카시트 결함 알림",
      brand: "안전키즈",
      productName: "세이프가드 300",
      severity: "critical",
      recallDate: "2026-02-25",
      hazardDescription: "충돌 시 버클 파손 위험이 있습니다.",
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>👶 베이비 세이프</h1>
      <p style={{ color: '#666' }}>우리 아이를 위한 최신 리콜 정보를 확인하세요.</p>
      
      <div style={{ marginTop: '20px' }}>
        {mockRecalls.map((recall) => (
          <div key={recall.id} style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '15px',
            marginBottom: '10px'
          }}>
            <strong style={{ color: 'red' }}>[위험도 높음]</strong>
            <h3 style={{ margin: '10px 0 5px 0' }}>{recall.title}</h3>
            <p style={{ fontSize: '14px', color: '#888' }}>{recall.brand} · {recall.productName}</p>
            <div style={{
              backgroundColor: '#fff5f5',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#c53030',
              marginTop: '10px'
            }}>
              ⚠️ {recall.hazardDescription}
            </div>
            <p style={{ fontSize: '12px', color: '#aaa', marginTop: '10px' }}>날짜: {recall.recallDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
