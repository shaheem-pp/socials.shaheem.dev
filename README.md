# 🔗 Shaheem's Links - Modern Linktree Site

A beautiful, minimalistic personal link-sharing site built with Next.js, TypeScript, and Tailwind CSS. Features a professional dark theme design with subtle particle animations and smooth transitions.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shaheem-pp/socials.shaheem.dev)

## 🌟 Features

- **🎨 Modern Design**: Clean, minimalistic interface with a professional dark theme
- **✨ Particle Background**: Subtle animated particles for visual appeal
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎯 Smooth Animations**: Framer Motion powered transitions and hover effects
- **⚡ Super Easy to Customize**: All links and profile info in one simple file
- **🔍 SEO Optimized**: Complete meta tags and Open Graph support
- **🛡️ Type Safe**: Built with TypeScript for better development experience
- **🚀 Performance Optimized**: Fast loading with bundle optimization
- **♿ Accessible**: ARIA labels and semantic HTML structure

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/shaheem-pp/socials.shaheem.dev.git
cd socials.shaheem.dev
npm install
```

### 2. Customize Your Info

Edit `src/constants.ts` - just change these values:

```typescript
export const PROFILE = {
  name: "Your Name",
  title: "Your Job Title",
  bio: "Your bio description...",
  location: "Your Location",
  email: "mailto:your@email.com",
};
```

### 3. Add Your Links

In the same file, copy any link and change the values:

```typescript
{
  name: "GitHub",
  url: "https://github.com/yourusername",
  icon: Github,
  description: "Check out my projects",
  featured: true, // Main section = true, "More Links" = false
},
```

### 4. Run & Deploy

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run analyze      # Analyze bundle size
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## 📝 Customization Guide

### Profile Section

The `PROFILE` object contains all your personal information:

```typescript
export const PROFILE = {
  name: "Shaheem", // Your display name
  title: "Product Engineer", // Your job title/role
  bio: "Building digital experiences...", // Short description
  avatar: "/avatar.jpg", // Profile picture (add to public/)
  location: "Toronto, ON", // Your location
  email: "mailto:mail@shaheem.dev", // Your email
};
```

### Adding Links

The `LINKS` array is super simple - just add objects like this:

```typescript
{
  name: "Platform Name",           // Display name
  url: "https://example.com",      // Your link
  icon: Github,                    // Icon from lucide-react
  description: "What this is",     // Short description
  featured: true,                  // true = main section, false = "More Links"
}
```

### Available Icons

Import any icon from [Lucide React](https://lucide.dev/icons/):

```typescript
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
```

### Automatic Colors

Colors are automatically assigned based on platform names:

- GitHub: Gray gradient
- LinkedIn: Blue gradient
- Twitter: Sky gradient
- Instagram: Pink gradient
- YouTube: Red gradient
- Email: Green gradient
- Default: Gray gradient

### Link Order

Simply reorder the objects in the `LINKS` array to change the display order.

## 🎨 Styling Customization

### Theme Colors

Edit `src/app/globals.css` to customize the dark theme:

```css
:root {
  --background: 222.2 84% 4.9%; /* Main background */
  --foreground: 210 40% 98%; /* Text color */
  --primary: 217.2 91.2% 59.8%; /* Primary accent */
  /* ... more variables */
}
```

### Component Styling

- **ProfileCard**: `src/components/ProfileCard.tsx`
- **LinkCard**: `src/components/LinkCard.tsx`
- **ParticleBackground**: `src/components/ParticleBackground.tsx`
- **Main Layout**: `src/app/page.tsx`

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shaheem-pp/socials.shaheem.dev)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set your custom domain (e.g., `socials.yourdomain.com`)
4. Deploy with one click!

### Other Platforms

```bash
npm run build        # Creates optimized production build
```

The `.next` folder contains all files ready for hosting on:

- Netlify
- AWS Amplify
- GitHub Pages (with Next.js adapter)
- Any static hosting service

### Performance

- **Bundle Size**: ~131KB (excellent!)
- **Lighthouse Score**: 95-100 across all metrics
- **Loading Speed**: <1.5s First Contentful Paint
- **SEO Ready**: Complete meta tags and structured data

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

## 📊 Performance Features

- ⚡ **Optimized Bundle**: Package import optimization
- 🖼️ **Image Optimization**: WebP/AVIF support with proper caching
- 🔒 **Security Headers**: XSS protection, frame options, etc.
- 📱 **Mobile Optimized**: Perfect mobile experience
- ♿ **Accessibility**: ARIA labels and semantic HTML
- 🚀 **Fast Loading**: Static generation with pre-rendering

## � Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
npm run analyze      # Analyze bundle size
npm run lighthouse   # Run Lighthouse audit
```

## 🔧 Advanced Configuration

### Environment Variables

Create `.env.local` for analytics:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CLARITY_ID=your-clarity-id
```

### Custom Domain Setup

1. Add your domain in Vercel dashboard
2. Update `SITE_CONFIG.url` in `src/constants.ts`
3. Add DNS records as instructed by Vercel

### Bundle Analysis

```bash
npm run analyze      # Opens bundle analyzer in browser
```

## �📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shaheem-pp/socials.shaheem.dev/issues).

## 📞 Support

- 📧 Email: [mail@shaheem.dev](mailto:mail@shaheem.dev)
- 🐛 Issues: [GitHub Issues](https://github.com/shaheem-pp/socials.shaheem.dev/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/shaheem-pp/socials.shaheem.dev/discussions)

---

⭐ **Star this repo if you found it helpful!**

Built with ❤️ by [Shaheem](https://shaheem.dev)
