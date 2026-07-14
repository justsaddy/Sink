export default defineAppConfig({
  title: 'SaddyTech',
  github: '',
  coffee: '',
  twitter: '',
  telegram: 'https://telegram.me/saddytech',
  youtube: 'https://www.youtube.com/@SaddyTech',
  instagram: 'https://instagram.com/saddytech',
  tiktok: 'https://tiktok.com/@saddytk',
  twitch: 'https://www.twitch.tv/techsaddy',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: '',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
