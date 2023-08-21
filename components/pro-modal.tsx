"use client"

import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { useProModal } from "@/hooks/use-pro-modal"
import { Badge } from "@/components/ui/badge";
import {
    MessageSquare, Music, ImageIcon,
    VideoIcon, Code, Check, Zap
} from "lucide-react"
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ProModal = () => {
    const proModal = useProModal();

    const tools = [
        {
            label: "Conversation",
            icon: MessageSquare,
            color: "text-violet-500",
            bgColor: "bg-violet-500/10"
        },
        {
            label: "Music Generation",
            icon: Music,
            color: "text-emerald-500",
            bgColor: "bg-emerald-500/10"
        },
        {
            label: "Image Generation",
            icon: ImageIcon,
            color: "text-pink-700",
            bgColor: "bg-pink-700/10"
        },
        {
            label: "Video Generation",
            icon: VideoIcon,
            color: "text-orange-700",
            bgColor: "bg-orange-700/10"
        },
        {
            label: "Code Generation",
            icon: Code,
            color: "text-green-700",
            bgColor: "bg-green-700/10"
        },
    ]

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex items-center justify-center
                    flex-col pb-2 gap-y-4">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to metaphor
                            <Badge variant="premium" className="text-sm uppercase py-1">pro</Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 
                    text-zinc-900 font-medium">
                        {tools.map(tool => (
                            <Card key={tool.label} className="flex items-center
                            justify-between border-black/5 p-3">
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("w-fit p-2 rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">{tool.label}</div>
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button className="w-full"
                        variant="premium" size="lg">
                        Upgrade <Zap className="ml-2 fill-white w-4 h-4" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ProModal