"use client";

import React from "react";

export default function HomePage() {
  const recalls = [
    { id: 1, title: "카시트 결함", brand: "안전키즈", hazard: "버클 파손 위험" },
    { id: 2, title: "젖병 솔 결함", brand: "베이비클린", hazard: "실리콘 모 빠짐" }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        👶 베이비 세이프 (접속 성공!)
      </h1>
      <p style={{ margin: '20px 0', color: '#666' }}>빌드 에러를 뚫고 화면이 드디어 떴습니다!</p>
      
      {recalls.map(item => (
        <div key={item.id} style={{ 
          background: 'white', 
          padding: '15px', 
          borderRadius: '10px', 
          marginBottom: '10px',
          border: '1px solid #ddd'
        }}>
          <h2 style={{ fontSize: '18px', margin: '0 0 5px 0' }}>{item.title}</h2>
          <p style={{ fontSize: '14px', color: '#888' }}>{item.brand}</p>
          <p style={{ color: 'red', fontSize: '13px', marginTop: '10px' }}>⚠️ {item.hazard}</p>
        </div>
      ))}
    </div>
  );
}
