"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  name: string;
  url: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

export default function LinkCard({
  name,
  url,
  description,
  icon: Icon,
  color,
  delay = 0,
}: LinkCardProps) {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={handleClick}
      className={cn(
        "w-full p-4 rounded-xl text-left transition-all duration-300",
        "bg-white/10 backdrop-blur-sm border border-white/20",
        "hover:bg-white/20 hover:scale-105 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        "group cursor-pointer"
      )}
    >
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            "bg-gradient-to-br",
            color,
            "group-hover:scale-110 transition-transform duration-300"
          )}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-lg truncate">
            {name}
          </h3>
          <p className="text-gray-400 text-sm truncate">{description}</p>
        </div>

        {/* Arrow */}
        <div className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
          →
        </div>
      </div>
    </motion.button>
  );
}
