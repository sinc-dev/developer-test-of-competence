import type { Conversation, Message } from "./types";

export const conversations: Conversation[] = [
  {
    id: 1,
    name: "Marcus Chen",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa-qPOimDaTil0utJGU1PmmgCxuCPn2_P3xvnWnBYVg-bgeUe2z0lHeE4WdQYwXGmuO4zvHEVNrw43dQ7X2AppQlMV6kd7tdu5-TVwNlNmajhfy1Jq6SSXbEeiAzcZyTF0sQ_DcX6kCG00kFwkeJefKg9Dm-32BzaNPjBrCVMg-2qXYvVofSvx8wG6hHp-cR_xs4sG_bRxf6mBFzgIIejTWz4qrcg8UAZr7N8HW9S101BScpE9IMQRPq-Q_vsVk2_imeaq2h3hP6RR",
    lastMessage: "I've uploaded the portfolio PDF.",
    time: "2m ago",
    badge: "QUALIFIED",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaRen1fX2oQdEx4XP3Mx4sCMWrjEZOzSsMuVC0kf69Oru-06PjlxPMhgvEW68KAjoJedWvCyWSesqFTLqb7f8d2kG5vphs-N_NFosqvZqVdoIt6fIJy69ZObuRIJDpdx-22VGw9JACAJ6Q5rJfILvHsBNPtQP-zucoPCW-tB9Tf4CFbUBCbNl8qT7wO5npe15u0kaUOwORvVVvvluAWSToGN9S5H7CALxQ1YYjRphrP4ByvF0iFxK_-r5KO5RYy-sKWoiUvODwhEVY",
    lastMessage: "When is the next intake deadline?",
    time: "1h ago",
    unread: false,
  },
  {
    id: 3,
    name: "Amara Lawson",
    initials: "AL",
    lastMessage: "Thank you for the session today!",
    time: "3h ago",
    unread: false,
  },
];

export const initialMessages: Message[] = [
  {
    id: 1,
    sender: "recruiter",
    text: "Hi Marcus! I reviewed your initial application. Could you please send over your creative portfolio for the design committee to review?",
    time: "10:42 AM",
    seen: true,
  },
  {
    id: 2,
    sender: "student",
    text: "Sure thing! I just finished the final export. Attaching it here now. Let me know if you need it in a different format.",
    time: "10:45 AM",
  },
  {
    id: 3,
    sender: "student",
    time: "10:45 AM",
    attachment: { name: "Portfolio_2024_MarcusChen.pdf", size: "4.2 MB", type: "PDF Document" },
  },
  {
    id: 4,
    sender: "recruiter",
    text: "I've uploaded the portfolio PDF. It looks great at first glance!",
    time: "Just now",
    seen: true,
  },
];