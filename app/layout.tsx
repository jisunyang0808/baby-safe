import React from "react";

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
      <body style={{ margin: 0, backgroundColor: "#f8fafc" }}>
        {children}
      </body>
    </html>
  );
}
