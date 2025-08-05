import { FileText, Github, Globe, Linkedin, Mail, Youtube } from "lucide-react";

// ===================================
// YOUR PROFILE INFORMATION
// ===================================
// Just change these values to update your profile
export const PROFILE = {
  name: "Shaheem",
  title: "Product Engineer",
  bio: "Hey! 👋 I'm passionate about turning ideas into beautiful, functional digital experiences. When I'm not coding, you'll find me exploring the latest tech trends or sharing what I've learned with the community.",
  avatar: "/avatar.jpg",
  location: "Toronto, ON",
  email: "mailto:mail@shaheem.dev",
} as const;

// ===================================
// YOUR LINKS
// ===================================
// To add a new link: copy any link object and change the values
// To change order: move the link up or down in the list
// To hide a link: set featured to false or delete it

export const LINKS = [
  // Main Links (always visible)
  {
    name: "Portfolio",
    url: "https://shaheem.dev",
    icon: Globe,
    description: "Explore my projects and work",
    featured: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/shaheem-pp",
    icon: Github,
    description: "Open source projects & code",
    featured: true,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shaheem-pp",
    icon: Linkedin,
    description: "Let's connect professionally",
    featured: true,
  },
  {
    name: "Resume",
    url: "https://shaheem.dev/resume.pdf",
    icon: FileText,
    description: "Download my latest resume",
    featured: true,
  },
  {
    name: "Email",
    url: "mailto:mail@shaheem.dev",
    icon: Mail,
    description: "Drop me a message",
    featured: true,
  },

  // Secondary Links (can be hidden/shown)
  //   {
  //     name: "Twitter",
  //     url: "https://twitter.com/shaheem",
  //     icon: Twitter,
  //     description: "Follow me for tech updates",
  //     featured: false,
  //   },
  //   {
  //     name: "Instagram",
  //     url: "https://instagram.com/shaheem",
  //     icon: Instagram,
  //     description: "Behind the scenes content",
  //     featured: false,
  //   },
  {
    name: "YouTube",
    url: "https://www.youtube.com/c/ShaheemPP",
    icon: Youtube,
    description: "Tech content & tutorials",
    featured: false,
  },
  //   {
  //     name: "Blog",
  //     url: "https://shaheem.dev/blog",
  //     icon: ExternalLink,
  //     description: "Read my latest articles",
  //     featured: false,
  //   },
] as const;

// ===================================
// SITE CONFIGURATION
// ===================================
// Used for SEO and metadata
export const SITE_CONFIG = {
  title: `${PROFILE.name} | ${PROFILE.title}`,
  description: PROFILE.bio,
  url: "https://shaheem.dev", // Change this to your actual domain
} as const;

// ===================================
// COLOR THEMES (automatic)
// ===================================
// Colors are automatically assigned based on the platform
export const COLORS = {
  portfolio: "from-gray-700 to-gray-900",
  github: "from-gray-700 to-gray-900",
  linkedin: "from-blue-600 to-blue-700",
  resume: "from-indigo-500 to-purple-500",
  email: "from-green-500 to-green-600",
  twitter: "from-sky-400 to-sky-500",
  instagram: "from-pink-500 to-rose-500",
  youtube: "from-red-500 to-red-600",
  blog: "from-orange-500 to-amber-500",
  default: "from-gray-600 to-gray-800",
} as const;
