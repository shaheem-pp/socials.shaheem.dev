"use client";

import LinkCard from "@/components/LinkCard";
import ParticleBackground from "@/components/ParticleBackground";
import ProfileCard from "@/components/ProfileCard";
import { ADDITIONAL_LINKS, SOCIAL_LINKS } from "@/constants";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredLinks = SOCIAL_LINKS.filter((link) => link.featured);
  const otherLinks = SOCIAL_LINKS.filter((link) => !link.featured);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <ProfileCard />

          {/* Featured Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4 mb-8"
          >
            <h2 className="text-xl font-semibold text-center text-muted-foreground mb-6">
              Featured Links
            </h2>
            {featuredLinks.map((link, index) => (
              <LinkCard
                key={link.id}
                name={link.name}
                url={link.url}
                description={link.description}
                icon={link.icon}
                color={link.color}
                delay={0.9 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Additional Links */}
          {ADDITIONAL_LINKS.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="space-y-4 mb-8"
            >
              <h2 className="text-xl font-semibold text-center text-muted-foreground mb-6">
                More Links
              </h2>
              {ADDITIONAL_LINKS.map((link, index) => (
                <LinkCard
                  key={link.id}
                  name={link.name}
                  url={link.url}
                  description={link.description}
                  icon={link.icon}
                  color={link.color}
                  delay={1.4 + index * 0.1}
                />
              ))}
            </motion.div>
          )}

          {/* Other Social Links */}
          {otherLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-center text-muted-foreground mb-6">
                Follow Me
              </h2>
              {otherLinks.map((link, index) => (
                <LinkCard
                  key={link.id}
                  name={link.name}
                  url={link.url}
                  description={link.description}
                  icon={link.icon}
                  color={link.color}
                  delay={1.7 + index * 0.1}
                />
              ))}
            </motion.div>
          )}

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mt-12 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              Built with ❤️ using Next.js & TypeScript
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 Shaheem. All rights reserved.
            </p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}
