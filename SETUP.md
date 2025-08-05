# 🚀 Quick Setup Guide

## Step 1: Get the Code

```bash
git clone https://github.com/shaheem-pp/socials.shaheem.dev.git
cd socials.shaheem.dev
npm install
```

## Step 2: Update Your Info (5 minutes)

Open `src/constants.ts` and change:

### Your Profile

```typescript
export const PROFILE = {
  name: "Your Name", // ← Change this
  title: "Your Job Title", // ← Change this
  bio: "Your bio...", // ← Change this
  location: "Your City", // ← Change this
  email: "mailto:you@email", // ← Change this
};
```

### Your Links

```typescript
export const LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/YOUR-USERNAME", // ← Change this
    icon: Github,
    description: "My projects",
    featured: true,
  },
  // Add more links by copying the pattern above
];
```

## Step 3: Test It

```bash
npm run dev
```

Open http://localhost:3000

## Step 4: Deploy (2 minutes)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

## Step 5: Custom Domain (optional)

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `links.yourdomain.com`)
3. Update DNS as instructed

## That's it! 🎉

Your personalized link site is ready!

### Need Help?

- 📧 Email: mail@shaheem.dev
- 🐛 Issues: [GitHub Issues](https://github.com/shaheem-pp/socials.shaheem.dev/issues)
