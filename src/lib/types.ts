export interface Message {
  id: number;
  sender: "recruiter" | "student";
  text?: string;
  time: string;
  seen?: boolean;
  attachment?: { name: string; size: string; type: string };
}

export interface Conversation {
  id: number;
  name: string;
  avatar?: string;
  initials?: string;
  lastMessage: string;
  time: string;
  badge?: string;
  unread?: boolean;
}