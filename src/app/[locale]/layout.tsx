import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Syne, Figtree } from "next/font/google";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(siteConfig.url),
    ...buildPageMetadata({
      locale,
      path: "/",
      title: "LebPar | Paragliding Lebanon Jounieh",
      description:
        "Book tandem paragliding in Jounieh with LebPar. Harissa takeoff, certified pilots, sunset flights & gift vouchers.",
    }),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${syne.variable} ${figtree.variable} h-full`}>
      <body className="page-atmosphere flex min-h-full flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main" className="flex-1">
            {locale !== "en" && (
              <p className="bg-sand/40 px-4 py-2 text-center text-sm text-stone">
                {String(
                  // Stub notice from messages
                  (messages as { localeStub?: { notice?: string } }).localeStub
                    ?.notice ?? "",
                )}
              </p>
            )}
            {children}
          </main>
          <Footer />
          <StickyWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
