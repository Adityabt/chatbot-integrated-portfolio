import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage.text }),
      });

      const data = await res.json();
      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply ?? "⚠️ Something went wrong." },
      ]);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Server error. Please try again later." },
      ]);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: open ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleToggle}
        className="
          fixed bottom-6 right-5 md:bottom-16 md:right-9
          w-14 h-14 md:w-16 md:h-16
          rounded-2xl bg-gradient-to-br from-red-600 to-yellow-400
          shadow-[0_0_25px_rgba(255,120,0,0.7)]
          flex items-center justify-center z-50 glass-strong
        "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {open ? (
          <span
            style={{
              background: "linear-gradient(135deg, #FF0000 0%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "900",
              fontSize: "1.4rem",
            }}
          >
            ✕
          </span>
        ) : (
          <span className="text-xl">✨</span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={handleToggle}
            />

            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
    fixed z-50
    bottom-24 md:bottom-36
    left-4 right-4 md:left-auto md:right-9
    w-auto md:w-96
    h-[420px] md:h-[480px]
    glass-ultra rounded-3xl
    p-4 flex flex-col
    bg-black/85 backdrop-blur-xl border border-white/10
  "
            >
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-3">
                ⚡ Portfolio Assistant
              </h3>

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

                {isTyping && (
                  <div className="flex gap-2 items-center p-2 text-yellow-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300" />
                    <span className="text-sm opacity-70 ml-2">Typing…</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="mt-3 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask me anything..."
                  className="
                    flex-1 rounded-xl bg-black/40 border border-white/20
                    px-4 py-2 text-sm text-neutral-100 focus:outline-none
                    focus:ring-2 focus:ring-red-500 glass-ultra
                  "
                />

                <button
                  onClick={sendMessage}
                  className="
                    px-4 py-2 rounded-xl bg-gradient-to-br
                    from-red-600 to-yellow-400 text-black font-semibold
                    shadow-[0_0_10px_rgba(255,120,0,0.6)]
                    transition active:scale-95
                  "
                >
                  ➤
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
