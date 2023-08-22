"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="flex items-center justify-between bg-transparent p-4">
            <Link className="flex items-center" href="/">
                <div className="h-8 w-16 relative">
                    <Image fill alt="Logo" src="/logo.png" />
                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>meta<span className="text-orange-600">phor</span></h1>
            </Link>
            
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sigin"}>
                    <Button variant="premium" className="rounded-full">Get Started</Button>
                </Link>
            </div>
        </nav>
    )
}

export default LandingNavbar