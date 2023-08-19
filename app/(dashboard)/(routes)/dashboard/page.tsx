"use client"

import {
  MessageSquare, ArrowRight, Music, ImageIcon,
  VideoIcon, Code
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: ""
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image-generation"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video-generation"
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code-generation"
  },
]

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of Ai
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg text-center font-light">
          Make metaphor work for your daily automation
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {
          tools.map(tool => (
            <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href} 
            className="p-4 border-black/5 flex items-center 
            justify-between hover:shadow-md cursor-pointer transition">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 rounded-md w-fit", tool.bgColor)}>
                  <tool.icon className={cn('w-8 h-8', tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardPage