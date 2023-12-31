import '@/app/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
  icons: {
    icon: '/next.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
