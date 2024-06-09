import './globals.css';
import icon from './favicon.ico';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Gladwin Del Rosario | Developer Website</title>
        <link rel="icon" href={icon.toString()} />
      </head>
      <body>{children}</body>
    </html>
  )
}
