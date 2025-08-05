"use client";

import { PROFILE } from "@/constants";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center mb-8 border border-white/20"
    >
      {/* Simple Avatar */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white"
      >
        {PROFILE.name.charAt(0)}
      </motion.div>

      {/* Name */}
      <h1 className="text-3xl font-bold mb-2 text-white">{PROFILE.name}</h1>

      {/* Title */}
      <p className="text-xl text-gray-300 mb-4">{PROFILE.title}</p>

      {/* Bio */}
      <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
        {PROFILE.bio}
      </p>

      {/* Location */}
      <p className="text-gray-500 text-xs mt-4">📍 {PROFILE.location}</p>
    </motion.div>
  );
}
