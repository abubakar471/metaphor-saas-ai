"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import Typewriter from "typewriter-effect"
import { Button } from "./ui/button";

const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white text-center 
        py-36 font-bold space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5
            font-extrabold">
                <h1>Advanced Ai Tools For</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r
                from-purple-400 to-pink-600">
                    <Typewriter
                        options={{
                            strings : [
                                "ChatBot",
                                "Image Generation",
                                "Video Generation",
                                "Music Generation",
                                "Code Generation"
                            ],
                            autoStart : true,
                            loop : true
                        }}
                    />
                </div>
            </div>

            <div className="text-sm text-zinc-400 md:text-xl font-light">
                use power of ai for your content creation journey
            </div>

            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                    <Button variant="premium" className="p-4 md:text-lg mdp-6 rounded-full font-semibold">
                        start generation for free
                    </Button>
                </Link>
            </div>

            <div className="text-zinc-400 font-normal text-xs md:text-sm">
                No credit card required
            </div>
        </div>
    )
}

export default LandingHero