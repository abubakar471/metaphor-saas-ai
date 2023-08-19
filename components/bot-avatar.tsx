import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
    return (
        <Avatar className="h-8 w-10">
            <AvatarImage className="p-0" src="/logo.png" />
        </Avatar>
    )
}

export default BotAvatar