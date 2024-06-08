import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Gladwin Del Rosario | Developer Website</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
