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
  async rewrites () {
    return [
      {
        source: "/random-rewrite-source",
        destination: "/random-rewrite-destination",
      },
    ];
  },
};

module.exports = nextConfig;
