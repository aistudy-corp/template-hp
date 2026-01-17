# HP/Corporate Website Template

[![CI](https://github.com/aistudy-corp/template-hp/actions/workflows/ci.yml/badge.svg)](https://github.com/aistudy-corp/template-hp/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Enterprise-grade HP/Corporate website template with Next.js 15, Tailwind CSS, shadcn/ui components, and SEO optimization.

## Features

- ⚡ **Next.js 15** - Latest App Router with React 19
- 🎨 **Tailwind CSS** - Utility-first styling with shadcn/ui components
- 🌙 **Dark Mode** - System-aware theme with next-themes
- ✨ **Framer Motion** - Smooth animations and transitions
- 🔷 **TypeScript** - Strict mode with advanced type safety
- 🔍 **SEO Optimized** - Metadata, Open Graph, structured data ready
- 📱 **Responsive** - Mobile-first design with container queries
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 🔐 **Security** - Trivy scanning, secure headers
- 🔄 **CI/CD** - GitHub Actions with quality gates

## Tech Stack

| Category   | Technology                   |
| ---------- | ---------------------------- |
| Framework  | Next.js 15                   |
| Language   | TypeScript 5.x               |
| Styling    | Tailwind CSS 3.x + shadcn/ui |
| Animation  | Framer Motion 11.x           |
| Icons      | Lucide React                 |
| Testing    | Vitest + Testing Library     |
| Linting    | ESLint 9 (flat config)       |
| Formatting | Prettier 3.x                 |

## Quick Start

```bash
# Clone using GitHub template
gh repo create my-hp --template aistudy-corp/template-hp --private --clone

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page (Hero + Features + CTA)
│   └── globals.css          # Global styles with CSS variables
├── components/
│   ├── ui/                  # shadcn/ui components (Button, etc.)
│   ├── layout/              # Layout components (Header, Footer)
│   ├── sections/            # Page sections (Hero, Features, CTA)
│   └── theme-provider.tsx   # Dark mode provider
├── config/
│   └── site.ts              # Site configuration (nav, CTA, etc.)
├── lib/
│   └── utils.ts             # Utility functions (cn, etc.)
└── types/
    └── index.ts             # TypeScript type definitions
```

## Customization

### Site Configuration

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Company",
  description: "Your company description",
  mainNav: [
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
  ],
  cta: {
    label: "Get Started",
    href: "/signup",
  },
  hero: {
    title: "Your Headline",
    description: "Your subheadline",
  },
};
```

### Adding Pages

Create new pages in `src/app/`:

```
src/app/
├── about/page.tsx
├── services/page.tsx
├── contact/page.tsx
└── pricing/page.tsx
```

### Adding Sections

Create sections in `src/components/sections/`:

```typescript
// src/components/sections/testimonials.tsx
"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  );
}
```

## UI Components

This template includes shadcn/ui-style components:

- **Button** - Multiple variants (default, outline, ghost, etc.)
- **Header** - Responsive navigation with mobile menu
- **Footer** - Multi-column layout with links
- **Hero** - Animated hero section with CTA
- **Features** - Feature grid with icons
- **CTA** - Call-to-action section

## SEO Features

- **Metadata API** - Title, description, Open Graph
- **JSON-LD** - Ready for structured data
- **Sitemap** - Auto-generated with next-sitemap (add if needed)
- **robots.txt** - Search engine directives

## Available Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm run start`      | Start production server  |
| `npm run lint`       | Run ESLint               |
| `npm run type-check` | TypeScript type check    |
| `npm run format`     | Format with Prettier     |
| `npm run test`       | Run tests                |

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or build and deploy manually:

```bash
npm run build
npm run start
```

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Run quality checks: `npm run lint && npm run type-check && npm run test`
4. Commit with Conventional Commits: `git commit -m "feat: add amazing feature"`
5. Push and create a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.
