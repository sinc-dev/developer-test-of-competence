import { useState } from "react";
import TopBar from "../components/TopBar";
import ConversationList from "../components/ConversationList";
import ChatWindow from "../components/ChatWindow";
import StudentInfoPanel from "../components/StudentInfoPanel";
import { initialMessages } from "../lib/data";
import type { Message } from "../lib/types";

export default function StudentChat() {
  const [activeConvo, setActiveConvo] = useState<number>(1);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<"chat" | "conversations" | "info">("chat");

  const handleSend = (text: string) => {
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "recruiter",
      text,
      time: "Just now",
      seen: false,
    };

    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8f9ff] overflow-hidden">
      <TopBar onMenuClick={() => setMobileView("conversations")} />

      <div className="flex flex-1 overflow-hidden pt-16">
        <div
          className={`
            ${mobileView === "conversations" ? "flex" : "hidden"}
            md:flex
            flex-col
            fixed md:relative
            inset-0 md:inset-auto
            z-30 md:z-auto
            w-full md:w-80
            md:shrink-0
            h-full
            bg-white
            border-r border-gray-200
            pt-16 md:pt-0
          `}
        >
          <ConversationList
            activeId={activeConvo}
            onSelect={(id) => {
              setActiveConvo(id);
              setMobileView("chat");
            }}
            onClose={() => setMobileView("chat")}
          />
        </div>

        <div
          className={`
            ${mobileView === "chat" || mobileView === "info" ? "flex" : "hidden"}
            md:flex
            flex-1 min-w-0 overflow-hidden
          `}
        >
          <ChatWindow
            messages={messages}
            onSend={handleSend}
            showInfo={showInfo}
            onToggleInfo={() => {
              if (window.innerWidth < 1024) {
                setMobileView(mobileView === "info" ? "chat" : "info");
              } else {
                setShowInfo((v) => !v);
              }
            }}
            onShowConversations={() => setMobileView("conversations")}
          />

          {(showInfo || mobileView === "info") && (
            <div
              className={`
                ${mobileView === "info" ? "fixed inset-0 z-30 pt-16" : ""}
                lg:relative lg:inset-auto lg:z-auto lg:pt-0
                flex flex-col
                w-full lg:w-72 lg:shrink-0
                bg-[#eff4ff]
                border-l border-gray-200
                overflow-hidden
              `}
            >
              <StudentInfoPanel
                onClose={() => {
                  setShowInfo(false);
                  setMobileView("chat");
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}