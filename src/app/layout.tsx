import "./globals.css";

/**
 * Root layout required by Next.js. Locale-specific <html>/<body> live in [locale]/layout.
 * Passing children through is the supported next-intl App Router pattern.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
