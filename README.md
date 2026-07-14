# ⚡ SaddyTech

**A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.**

![Cloudflare](https://img.shields.io/badge/Cloudflare-F69652?style=flat&logo=cloudflare&logoColor=white)
![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=flat&logo=nuxtdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui&logoColor=white)

![Hero](./public/image.png)

---

## ✨ Features

- **🔗 URL Shortening:** Compress your URLs to their minimal length.
- **📈 Analytics:** Monitor link analytics and gather insightful statistics.
- **☁️ Serverless:** Deploy without the need for traditional servers.
- **🎨 Customizable Slug:** Support personalized slugs, UTM parameters, and case sensitivity.
- **🪄 AI Assistance:** Generate slugs and OpenGraph metadata from page content.
- **⏰ Link Control:** Set expirations, passwords, and unsafe-link warning pages.
- **📱 Smart Routing:** Redirect visitors by device or country.
- **🖼️ Social Preview:** Customize social previews with titles, descriptions, and images.
- **📊 Real-time Analytics:** Live 3D globe and real-time event logs.
- **🔲 QR Code:** Generate QR codes for your short links.
- **📦 Import/Export:** Bulk link migration via JSON and access analytics via CSV.
- **🌍 Multi-language:** Full i18n support for dashboard and redirect pages.

## 🧱 Technologies Used

- **Framework**: [Nuxt](https://nuxt.com/)
- **Database**: [Cloudflare Workers KV](https://developers.cloudflare.com/kv/)
- **Analytics Engine**: [Cloudflare Workers Analytics Engine](https://developers.cloudflare.com/analytics/)
- **UI Components**: [shadcn-vue](https://www.shadcn-vue.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Cloudflare](https://www.cloudflare.com/)

## 🏗️ Deployment

We currently support deployment to [Cloudflare Workers](./docs/deployment/workers.md) (recommended) and [Cloudflare Pages](./docs/deployment/pages.md).

## ⚒️ Configuration

[Configuration Docs](./docs/configuration.md)

## 🔌 API

[API Docs](./docs/api.md)

## 🧰 MCP

There is no native MCP Server, but OpenAPI documentation is available, and you can use the following method to support MCP.

> Replace the domain name in `OPENAPI_SPEC_URL` with your own domain name.
>
> The `API_KEY` is the same as the `NUXT_SITE_TOKEN` in the environment variables.

```json
{
  "mcpServers": {
    "sink": {
      "command": "uvx",
      "args": [
        "mcp-openapi-proxy"
      ],
      "env": {
        "OPENAPI_SPEC_URL": "https://your-domain.example/_docs/openapi.json",
        "API_KEY": "your-site-token",
        "TOOL_WHITELIST": "/api/link"
      }
    }
  }
}
```

## 🙋🏻 FAQs

[FAQs](./docs/faqs.md)

## 💖 Credits

1. [**Cloudflare**](https://www.cloudflare.com/)
2. [**NuxtHub**](https://hub.nuxt.com/)
3. [**Astroship**](https://astroship.web3templates.com/)
4. [**Tailark**](https://tailark.com/)

Originally based on the [Sink](https://github.com/miantiao-me/Sink) project (AGPL-3.0), customized for SaddyTech. Source code: [github.com/justsaddy/Sink](https://github.com/justsaddy/Sink). See [NOTICE.md](./NOTICE.md) for details on the modifications made and license compliance.
