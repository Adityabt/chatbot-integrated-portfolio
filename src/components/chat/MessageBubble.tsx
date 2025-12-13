import React from "react";
import { motion } from "framer-motion";

interface BubbleProps {
  role: "user" | "assistant";
  text: string;
}

const MessageBubble: React.FC<BubbleProps> = ({ role, text }) => {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`
        max-w-[80%] px-4 py-3 my-2 rounded-2xl text-sm leading-relaxed 
        backdrop-blur-md break-words
      
        ${isUser
          ? "ml-auto bg-gradient-to-r from-red-500/40 to-yellow-400 border border-yellow-400/20 shadow-[0_0_20px_rgba(255,180,0,0.4)] text-yellow-100"
          : "mr-auto glass-ultra border border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.35)] text-yellow-400"
        }
      `}
    >
      {text}
    </motion.div>
  );
};

export default MessageBubble;

