export const SITE = {
  website: "https://www.easypod.fun/", // replace this with your deployed domain
  author: "ohaaayooo",
  profile: "https://www.easypod.fun/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "easypod.fun",
  ogImage: "logo.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
