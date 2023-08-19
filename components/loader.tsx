import Image from "next/image"

const Loader = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center 
        gap-y-4">
            <div className="w-12 h-10 relative animate-spin">
                <Image fill alt="loading logo" src="/logo.png" />
            </div>
            <p className="text-sm text-muted-foreground">metaphor is thinking...</p>
        </div>
    )
}

export default Loader