import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
// import { getDummyAIResponse } from "../data/dummyAIData";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm Dinkar Seeds AI Assistant. Ask me anything about seeds.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const whatsappURL =
    "https://wa.me/919979447019?text=Hello%20I%20need%20help%20with%20seed%20products";

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/chat`,
        { message: userMsg.text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const aiReply = {
        sender: "bot",
        text: res.data?.success && res.data?.reply ? res.data.reply : "Sorry, mujhe samaj nahi aaya."
      }

      setMessages((prev) => [...prev, aiReply])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Server se connect nahi ho pa raha. Thodi der baad try karein.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed bottom-4 right-4
            bg-green-600 text-white
            w-16 h-16 text-3xl
            rounded-full shadow-2xl
            flex items-center justify-center
            md:animate-bounce
            z-50
          "
        >
          🤖
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div
          className="
            fixed bottom-4 right-2 md:right-6
            w-[95vw] md:w-96
            max-h-[75vh] md:max-h-[60vh]
            bg-white rounded-2xl shadow-2xl
            z-50 flex flex-col
          "
        >
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between rounded-t-2xl">
            <span className="font-semibold text-sm">
              🤖 Dinkar Seeds AI Assistant
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl break-words ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white ml-auto"
                    : "bg-white border"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="bg-white border w-fit px-3 py-2 rounded-xl text-xs">
                🤖 typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input + WhatsApp */}
          <div className="border-t p-3 space-y-2">
            {/* WhatsApp Support CTA */}
            <div className="flex items-center justify-center text-xs text-gray-600">
              <span>Need human support?</span>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ml-2 flex items-center gap-1
                  bg-green-100 text-green-700
                  px-3 py-1 rounded-full
                  font-semibold
                  hover:bg-green-200
                  transition
                "
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Input Row */}
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="
                  flex-1 px-4 py-2
                  border rounded-full
                  outline-none text-sm
                  focus:ring-2 focus:ring-green-400
                "
                placeholder="Ask about seeds..."
              />

              <button
                onClick={handleSend}
                className="
                  bg-green-600 text-white
                  px-4 py-2 rounded-full
                  text-sm font-medium
                  hover:bg-green-700
                  transition
                "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
