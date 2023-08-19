import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface HeadingProps {
    title: String,
    description: String,
    icon: LucideIcon,
    iconColor?: String,
    bgColor?: String
}

const Heading = ({
    title, description, icon : Icon, iconColor, bgColor
}: HeadingProps) => {
    return (
        <>
            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
                <div className={cn("w-fit rounded-md p-2", bgColor)}>
                    <Icon className={cn("w-10 h-10", iconColor)} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </>
    )
}

export default Heading