import React from "react";
import "./globals.css"; // 이 줄이 에러가 난다면 삭제해도 됩니다.

export const metadata = {
  title: "베이비 세이프",
  description: "아이 안전 리콜 정보",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
