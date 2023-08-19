import Image from "next/image"

interface EmptyProps {
    label : string
}

const Empty = ({label}: EmptyProps) => {
    return(
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="h-72 w-72 relative">
                <Image src="/empty.png" alt="empty" fill loading="lazy" />
            </div>
            <p className="text-muted-foreground text-sm text-center">{label}</p>
        </div>
    )
}

export default Empty