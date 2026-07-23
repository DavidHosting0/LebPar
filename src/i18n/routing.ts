import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/content/site";

export const routing = defineRouting({
  locales: [...siteConfig.locales],
  defaultLocale: siteConfig.localeDefault,
  localePrefix: "always",
});
