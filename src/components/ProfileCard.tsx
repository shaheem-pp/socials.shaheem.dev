"use client";

import { PROFILE } from "@/constants";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-effect rounded-2xl p-8 text-center max-w-md mx-auto mb-8"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto mb-6 w-32 h-32"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-4xl font-bold text-white">
              {PROFILE.name.charAt(0)}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl font-bold mb-2 gradient-text"
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xl text-muted-foreground mb-4"
      >
        {PROFILE.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-sm text-muted-foreground leading-relaxed"
      >
        {PROFILE.bio}
      </motion.p>
    </motion.div>
  );
}
