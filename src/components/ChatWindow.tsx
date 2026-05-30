import { useState, useRef, useEffect } from "react";
import type { Message } from "../lib/types";
import downloadIcon from "../../public/download.png"
import documentIcon from "../../public/document.svg"
import attachIcon from "../../public/attach.svg"
import emojiIcon from "../../public/emoji.svg"
import sendIcon from "../../public/send.svg"

interface ChatWindowProps {
  messages: Message[];
  onSend: (text: string) => void;
  showInfo: boolean;
  onToggleInfo: () => void;
  onShowConversations: () => void;
}

export default function ChatWindow({
  messages,
  onSend,
  showInfo,
  onToggleInfo,
  onShowConversations,
}: ChatWindowProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
      if (textareaRef.current) textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="flex-1 flex flex-col bg-white min-w-0 overflow-hidden">
      {/* Chat Header */}
      <div className="h-16 px-4 lg:px-6 flex items-center justify-between border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onShowConversations}
            className="md:hidden p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
            aria-label="Back to conversations"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARvpzrnZb9AVjLV7YX7zxtEpHi5OuX4sv8XxBmb76FyHJPkvbCr1WrnJqfR4fosnEYf3EXLrmylxoSGW6qM0R00Uv5wBKb0rQ81MyNeQ35E_gcPdFOl-Ua9K7c9fv2zMGUMrnI3NgZFL0m1zgDbzkc-uE79a2WJLuEIkvHdUdpcG3gbmI_ZPyK3yhRT7QXcL2cqHD7DnTKEXDdHIbiibuJwPS96Ujhdf_gyZPpmw6xGeyw6uwvNJrXzuqQPTfvcpTTnijffYn7zldw"
              alt="Marcus Chen"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#006a61] rounded-full border-2 border-white" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-900">Marcus Chen</h3>
            <p className="text-[10px] text-[#006a61] font-bold">Online • Applied Science Major</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleInfo}
            className={`p-2 rounded-full transition-colors ${showInfo ? "bg-[#86f2e4]/40 text-[#006a61]" : "text-gray-400 hover:bg-gray-100"}`}
          >
            <span className="material-symbols-outlined">
              <img className="w-7 h-7" src="https://img.icons8.com/ios/50/about-us-male.png" alt="about-us-male"/>
            </span>
          </button>
          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 flex flex-col gap-4">
        <div className="flex justify-center">
          <span className="px-3 py-1 bg-[#e5eeff] text-[10px] font-bold text-gray-500 rounded-full">TODAY</span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "recruiter" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[85%] sm:max-w-[70%]">
              {msg.attachment ? (
                <div className="bg-[#eff4ff] p-2 rounded-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded flex items-center justify-center shrink-0">
                    {/* ------- Document icon ------- */}
                    <span className="material-symbols-outlined text-[18px]">
                      <img src={documentIcon} alt="document" />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold truncate">{msg.attachment.name}</p>
                    <p className="text-[10px] text-gray-400">{msg.attachment.size} • {msg.attachment.type}</p>
                  </div>
                  <button className="p-1.5 cursor-pointer hover:bg-gray-100 rounded text-[#006a61] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      <img className="w-7 h-7" src={downloadIcon}alt="download" />
                    </span>
                  </button>
                </div>
              ) : (
                <div
                  className={`p-3 lg:p-4 shadow-sm ${
                    msg.sender === "recruiter"
                      ? "bg-gray-900 text-white rounded-xl rounded-tr-none"
                      : "bg-[#eff4ff] text-gray-900 rounded-xl rounded-tl-none border border-gray-100"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              )}
              <p className={`text-[10px] text-gray-400 mt-1 ${msg.sender === "recruiter" ? "text-right" : ""}`}>
                {msg.time}{msg.seen ? " • Seen" : ""}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="p-3 lg:p-6 border-t border-gray-200 bg-white shrink-0">
        <div className="bg-[#eff4ff] rounded-xl p-1 border border-gray-200 flex items-end">
          <div className="flex items-center px-2 py-1 gap-1">
            <button className="p-1.5 cursor-pointer text-gray-400 hover:text-[#006a61] transition-colors">
              <img src={attachIcon} alt="Attach file" className="h-5 w-5" />
            </button>
            <button className="p-1.5 cursor-pointer text-gray-400 hover:text-[#006a61] transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                <img src={emojiIcon} alt="" />
              </span>
            </button>
          </div>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none focus:ring-0 outline-none text-sm resize-none py-2 max-h-32"
            placeholder="Write a message to Marcus..."
            rows={1}
          />
          <div className="px-2 py-1">
            <button
              onClick={handleSend}
              className="w-10 h-10 cursor-pointer bg-[#006a61] text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all active:scale-95"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                <img src={sendIcon} alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <button className="px-3 py-1.5 cursor-pointer bg-[#e5eeff] text-gray-500 text-[10px] font-bold rounded hover:bg-[#dce9ff] transition-colors">
            Schedule Call
          </button>
          <button className="px-3 py-1.5 cursor-pointer bg-[#e5eeff] text-gray-500 text-[10px] font-bold rounded hover:bg-[#dce9ff] transition-colors">
            Send Form
          </button>
        </div>
      </div>
    </section>
  );
}