import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for smooth exit
import MessageBubble from "./MessageBubble";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Preloaded message when widget opens for the first time
  const handleToggle = () => {
    if (!open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          text: "👋 Welcome to Aditya's Portfolio! How can I help you today?",
        },
      ]);
    }
    setOpen(!open);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: ChatMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage.text }),
      });

      const data = await res.json();
      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply ?? "⚠️ Something went wrong.",
        },
      ]);
    } catch (error) {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "⚠️ Server error. Please try again later.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        // 👇 1. THIS CONTROLS THE 360 ROTATION BASED ON STATE
        animate={{ 
          scale: 1, 
          rotate: open ? 360 : 0 
        }}
        // 👇 2. Smooth transition settings for the spin
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
        onClick={handleToggle}
        className="fixed bottom-16 right-9 w-16 h-16 rounded-2xl
                   bg-gradient-to-br from-red-600 to-yellow-400
                   shadow-[0_0_25px_rgba(255,120,0,0.7)]
                   hover:shadow-[glass-strong]
                   text-black font-bold
                   flex items-center justify-center z-50 glass-strong"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {open ? (
          // 👇 3. THE RED-YELLOW GRADIENT X
          <span
            style={{
              background: "linear-gradient(135deg, #FF0000 0%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "900", // Extra bold
              fontSize: "1.5rem",
              lineHeight: "1",
            }}
          >
            ✕
          </span>
        ) : (
          <span className="text-2xl">✨</span>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-36 right-9 w-80 sm:w-96 h-[480px]
                       glass-ultra rounded-3xl shadow-xl p-4 flex flex-col z-50
                       bg-black/80 backdrop-blur-xl border border-white/10" // Added explicit bg for readability
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              ⚡ Portfolio Assistant
            </h3>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <MessageBubble role={m.role} text={m.text} />
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center p-2 text-yellow-300"
                >
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300"></span>
                  </div>
                  <span className="text-sm opacity-70">Typing...</span>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="mt-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 rounded-xl bg-black/40 border border-white/20 
                           px-4 py-2 text-sm text-neutral-100 focus:outline-none 
                           focus:ring-2 focus:ring-red-500 glass-ultra"
              />

              <button
                onClick={sendMessage}
                className="px-4 py-2 rounded-xl bg-gradient-to-br 
                           from-red-600 to-yellow-400 text-black font-semibold
                           shadow-[0_0_10px_rgba(255,120,0,0.6)] hover:scale-105
                           transition"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;