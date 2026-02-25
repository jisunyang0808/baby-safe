export const metadata = {
  title: '아이세이프 (BabySafe)',
  description: '우리아이 안전을 위한 리콜 정보 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
