"use client";

import React from "react";

export default function HomePage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#333' }}>👶 베이비 세이프 접속 성공!</h1>
      <p style={{ color: '#666' }}>빌드 에러를 뚫고 드디어 사이트가 열렸습니다.</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '10px',
        display: 'inline-block'
      }}>
        <p>현재 리콜 정보를 불러올 준비가 완료되었습니다.</p>
        <strong style={{ color: '#0070f3' }}>초록색 체크 표시가 뜨는지 확인해주세요!</strong>
      </div>
    </div>
  );
}
