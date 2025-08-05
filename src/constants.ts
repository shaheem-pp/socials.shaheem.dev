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

// Profile Information
export const PROFILE = {
  name: "Shaheem",
  title: "Full Stack Developer",
  bio: "Building digital experiences with modern technologies. Passionate about clean code, user experience, and continuous learning.",
  avatar: "/avatar.jpg", // Add your profile picture to public folder
  location: "Your Location",
  email: "your-email@example.com",
} as const;

// Social Media Links
export const SOCIAL_LINKS = [
  {
    id: "portfolio",
    name: "Portfolio",
    url: "https://shaheem.dev",
    icon: Globe,
    description: "My personal portfolio website",
    color: "from-blue-500 to-purple-600",
    featured: true,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/shaheem",
    icon: Github,
    description: "Check out my open source projects",
    color: "from-gray-700 to-gray-900",
    featured: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/shaheem",
    icon: Linkedin,
    description: "Connect with me professionally",
    color: "from-blue-600 to-blue-700",
    featured: true,
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:your-email@example.com",
    icon: Mail,
    description: "Get in touch via email",
    color: "from-green-500 to-green-600",
    featured: true,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/shaheem",
    icon: Twitter,
    description: "Follow me for tech updates",
    color: "from-sky-400 to-sky-500",
    featured: false,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/shaheem",
    icon: Instagram,
    description: "Behind the scenes content",
    color: "from-pink-500 to-rose-500",
    featured: false,
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com/@shaheem",
    icon: Youtube,
    description: "Tech tutorials and vlogs",
    color: "from-red-500 to-red-600",
    featured: false,
  },
] as const;

// Additional Links (Projects, Blog, etc.)
export const ADDITIONAL_LINKS = [
  {
    id: "blog",
    name: "Blog",
    url: "https://shaheem.dev/blog",
    icon: ExternalLink,
    description: "Read my latest articles",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "resume",
    name: "Resume/CV",
    url: "/resume.pdf", // Add your resume to public folder
    icon: ExternalLink,
    description: "Download my resume",
    color: "from-indigo-500 to-purple-500",
  },
] as const;

// Site Configuration
export const SITE_CONFIG = {
  title: "Shaheem - Links",
  description: "All my important links in one place",
  url: "https://socials.shaheem.dev",
  ogImage: "/og-image.png", // Add your OG image to public folder
} as const;
