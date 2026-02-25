"use client";

import React from "react";

export default function HomePage() {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', color: '#1a1a1a' }}>👶 베이비 세이프</h1>
      <p style={{ color: '#666', marginTop: '10px' }}>성공적으로 배포되었습니다!</p>
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '15px', backgroundColor: '#fff' }}>
        <p>현재 준비된 리콜 정보가 여기에 표시됩니다.</p>
        <strong style={{ color: '#0070f3' }}>이제 404 에러가 사라졌을 거예요!</strong>
      </div>
    </div>
  );
}
