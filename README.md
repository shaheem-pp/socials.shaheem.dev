# Shaheem's Personal Links - Linktree Style Site

A modern, minimalistic personal link-sharing site built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful dark theme design with subtle particle animations and smooth transitions.

## 🌟 Features

- **Modern Design**: Clean, minimalistic interface with a professional dark theme
- **Particle Background**: Subtle animated particles for visual appeal
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Easy to Customize**: All links and profile info managed through constants file
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Type Safe**: Built with TypeScript for better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd linktree-shaheem.dev-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Customize your profile and links in `src/constants.ts`

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Profile Information

Edit the `PROFILE` object in `src/constants.ts`:

```typescript
export const PROFILE = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description",
  avatar: "/your-avatar.jpg",
  location: "Your Location",
  email: "your-email@example.com",
} as const;
```

### Social Links

Modify the `SOCIAL_LINKS` array in `src/constants.ts` to add, remove, or update your social media links:

```typescript
export const SOCIAL_LINKS = [
  {
    id: "unique-id",
    name: "Platform Name",
    url: "https://your-link.com",
    icon: PlatformIcon, // From lucide-react
    description: "Link description",
    color: "from-color-500 to-color-600", // Tailwind gradient
    featured: true, // Show in featured section
  },
  // ... more links
];
```

### Additional Links

Use the `ADDITIONAL_LINKS` array for blog, resume, or other important links.

## 🎨 Styling

The site uses Tailwind CSS with a custom dark theme. You can customize:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Animations**: Adjust animations in the same file
- **Components**: Edit individual components in `src/components/`

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

Build the project:

```bash
npm run build
```

The `out` folder contains the static files ready for deployment.

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📞 Support

If you have any questions or need help customizing the site, feel free to reach out!

---

Built with ❤️ by Shaheem
