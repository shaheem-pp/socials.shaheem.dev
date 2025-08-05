import {
  ExternalLink,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

// ===================================
// YOUR PROFILE INFORMATION
// ===================================
// Just change these values to update your profile
export const PROFILE = {
  name: "Shaheem",
  title: "Product Engineer",
  bio: "Building digital experiences with modern technologies. Passionate about clean code, user experience, and continuous learning.",
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
    description: "My personal portfolio website",
    featured: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/shaheem",
    icon: Github,
    description: "Check out my open source projects",
    featured: true,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shaheem",
    icon: Linkedin,
    description: "Connect with me professionally",
    featured: true,
  },
  {
    name: "Email",
    url: "mailto:mail@shaheem.dev",
    icon: Mail,
    description: "Get in touch via email",
    featured: true,
  },

  // Secondary Links (can be hidden/shown)
  {
    name: "Twitter",
    url: "https://twitter.com/shaheem",
    icon: Twitter,
    description: "Follow me for tech updates",
    featured: false,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/shaheem",
    icon: Instagram,
    description: "Behind the scenes content",
    featured: false,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@shaheem",
    icon: Youtube,
    description: "Tech tutorials and vlogs",
    featured: false,
  },
  {
    name: "Blog",
    url: "https://shaheem.dev/blog",
    icon: ExternalLink,
    description: "Read my latest articles",
    featured: false,
  },
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
  email: "from-green-500 to-green-600",
  twitter: "from-sky-400 to-sky-500",
  instagram: "from-pink-500 to-rose-500",
  youtube: "from-red-500 to-red-600",
  blog: "from-orange-500 to-amber-500",
  default: "from-gray-600 to-gray-800",
} as const;
