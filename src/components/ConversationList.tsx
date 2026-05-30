import { conversations } from "../lib/data";
import type { Conversation } from "../lib/types";
import commentIcon from "../../public/add-comment.svg"

interface ConversationListProps {
  activeId: number;
  onSelect: (id: number) => void;
  onClose?: () => void;
}

export default function ConversationList({ activeId, onSelect, onClose }: ConversationListProps) {
  return (
    <section className="flex flex-col border-r border-gray-200 bg-white h-full w-full">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center shrink-0">
        <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
        <div className="flex items-center gap-1">
          <button className="p-1.5 cursor-pointer text-[#006a61] hover:bg-[#86f2e4]/30 rounded-lg transition-colors">
            <span className="material-symbols-outlined">
              <img src={commentIcon} alt="" />
            </span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((c: Conversation) => (
          <div
            key={c.id}
            onClick={() => { onSelect(c.id); onClose?.(); }}
            className={`p-4 cursor-pointer transition-colors border-b border-gray-100 ${
              activeId === c.id
                ? "bg-[#dce9ff] border-l-4 border-l-[#006a61]"
                : "hover:bg-gray-50 border-l-4 border-l-transparent"
            }`}
          >
            <div className="flex items-start gap-3">
              {c.avatar ? (
                <img className="w-12 h-12 rounded-full object-cover shrink-0" src={c.avatar} alt={c.name} />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e] font-bold shrink-0">
                  {c.initials}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className={`text-xs font-semibold truncate ${activeId === c.id ? "text-gray-900" : "text-gray-500"}`}>
                    {c.name}
                  </p>
                  <span className="text-[10px] text-gray-400 shrink-0 ml-1">{c.time}</span>
                </div>
                <p className={`text-[13px] truncate mt-0.5 ${activeId === c.id ? "text-gray-900 font-semibold" : "text-gray-400"}`}>
                  {c.lastMessage}
                </p>
                {c.badge && (
                  <span className="inline-flex items-center mt-1 px-1.5 py-px rounded bg-[#86f2e4] text-[#006a61] text-[10px] font-bold">
                    <span className="w-1 h-1 rounded-full bg-[#006a61] mr-1" />
                    {c.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}