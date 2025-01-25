import { Plane } from "lucide-react";

export interface AboutDataProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export const AboutData: AboutDataProps[] = [
  {
    id: 0,
    title: "Telegram Bot API Integration",
    icon: <Plane size={32} className="mb-4 text-primary" />,
    description:
      "QuestAI uses the Telegram Bot API to interact with groups and channels.",
  },
  {
    id: 1,
    title: "Customization",
    icon: <Plane size={32} className="mb-4 text-primary" />,
    description:
      "Customize question difficulty to suit different audiences and quiz formats. ",
  },
  {
    id: 2,
    title: "Real-Time Answer Detection and Winner Tracking",
    icon: <Plane size={32} className="mb-4 text-primary" />,
    description:
      "QuestAI’s bot is powered by chat parsing and answer matching algorithms. ",
  },
  {
    id: 3,
    title: "Bot Interface and Command Structure",
    icon: <Plane size={32} className="mb-4 text-primary" />,
    description:
      "QuestAI features a simple and intuitive interface for easy interaction.   ",
  },
];
