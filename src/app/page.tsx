"use client";

import LinkCard from "@/components/LinkCard";
import ParticleBackground from "@/components/ParticleBackground";
import ProfileCard from "@/components/ProfileCard";
import { LINKS, COLORS } from "@/constants";
import { motion } from "framer-motion";

export default function HomePage() {
  // Split links into featured and secondary
  const featuredLinks = LINKS.filter((link) => link.featured);
  const secondaryLinks = LINKS.filter((link) => !link.featured);

  // Simple function to get color for a link
  const getColor = (name: string) => {
    const key = name.toLowerCase() as keyof typeof COLORS;
    return COLORS[key] || COLORS.default;
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <ProfileCard />

          {/* Main Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4 mb-8"
          >
            {featuredLinks.map((link, index) => (
              <LinkCard
                key={link.name}
                name={link.name}
                url={link.url}
                description={link.description}
                icon={link.icon}
                color={getColor(link.name)}
                delay={0.9 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Secondary Links */}
          {secondaryLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-medium text-center text-gray-400 mb-6">
                More Links
              </h2>
              {secondaryLinks.map((link, index) => (
                <LinkCard
                  key={link.name}
                  name={link.name}
                  url={link.url}
                  description={link.description}
                  icon={link.icon}
                  color={getColor(link.name)}
                  delay={1.4 + index * 0.1}
                />
              ))}
            </motion.div>
          )}

          {/* Simple Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mt-12 pt-8 border-t border-gray-700"
          >
            <p className="text-gray-500 text-sm">
              Made with ❤️ using Next.js
            </p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}
