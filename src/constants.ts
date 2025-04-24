import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconXiaoyuzhou from "@/assets/icons/IconXiaoyuzhou.svg";
import IconApplePodcast from "@/assets/icons/IconApplePodcast.svg";
import IconSpotify from "@/assets/icons/IconSpotify.svg";
import IconBili from "@/assets/icons/IconBili.svg";
import { SITE } from "@/config";

// export const SOCIALS = [
//   {
//     name: "Github",
//     href: "https://github.com/satnaing/astro-paper",
//     linkTitle: ` ${SITE.title} on Github`,
//     icon: IconGitHub,
//   },
//   {
//     name: "X",
//     href: "https://x.com/username",
//     linkTitle: `${SITE.title} on X`,
//     icon: IconBrandX,
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/username/",
//     linkTitle: `${SITE.title} on LinkedIn`,
//     icon: IconLinkedin,
//   },
//   {
//     name: "Mail",
//     href: "mailto:yourmail@gmail.com",
//     linkTitle: `Send an email to ${SITE.title}`,
//     icon: IconMail,
//   },
// ] as const;

export const SOCIALS = [
  {
    name: "小宇宙",
    href: "https://www.xiaoyuzhoufm.com/podcast/67c01958ef312508b9d17779", // ← 换成你自己的
    linkTitle: `${SITE.title} on xiaoyuzhou`,
    icon: IconXiaoyuzhou,
  },
  {
    name: "Apple Podcast",
    href: "https://podcasts.apple.com/cn/podcast/%E8%BD%BB%E6%9D%BE%E6%84%89%E5%BF%AB/id1802566456", // ← 换成你自己的
    linkTitle: `${SITE.title} on Apple Podcast`,
    icon: IconApplePodcast,
  },
  {
    name: "Bilibili",
    href: "https://space.bilibili.com/37411963/lists/5004683?type=season", // ← 换成你自己的
    linkTitle: `${SITE.title} on Bilibili`,
    icon: IconBili,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/3rrmhvnm17w2NzpJjEBICH", // ← 换成你自己的
    linkTitle: `${SITE.title} on Spotify`,
    icon: IconSpotify,
  },
  {
    name: "Mail",
    href: "mailto:amerlca@163.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
