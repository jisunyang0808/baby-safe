"use client";

import React from "react";

// 아이콘 라이브러리 없이 순수 HTML/CSS로만 만든 리콜 카드입니다.
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
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '24px', color: '#333' }}>👶 베이비 세이프</h1>
        <p style={{ color: '#666' }}>우리 아이를 위한 최신 리콜 정보</p>
      </header>

      <div>
        {mockRecalls.map((recall) => (
          <div key={recall.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '12px', 
            marginBottom: '20px', 
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{ height: '6px', backgroundColor: '#ff4d4f' }}></div>
            <div style={{ padding: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#cf1322', backgroundColor: '#fff1f0', padding: '2px 8px', borderRadius: '4px' }}>
                위험도: 매우 높음
              </span>
              <h2 style={{ fontSize: '18px', margin: '10px 0 5px 0' }}>{recall.title}</h2>
              <p style={{ fontSize: '14px', color: '#888', margin: '0 0 15px 0' }}>{recall.brand} · {recall.productName}</p>
              
              <div style={{ backgroundColor: '#fafafa', padding: '12px', borderRadius: '8px', fontSize: '13px', borderLeft: '4px solid #ff4d4f' }}>
                <strong>⚠️ 위험 내용:</strong> {recall.hazardDescription}
              </div>
              
              <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #eee', fontSize: '12px', color: '#aaa', display: 'flex', justifyContent: 'space-between' }}>
                <span>날짜: {recall.recallDate}</span>
                <span style={{ color: '#1890ff', fontWeight: 'bold' }}>상세보기 →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
