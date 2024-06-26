// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    locales: ["en", "fr", "nl"],
    defaultLocale: "en",
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
