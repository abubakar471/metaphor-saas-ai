"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar"
import { useEffect, useState } from "react"

interface MobileSidebarProps{
    apiLimitCount : number;
    isPro :boolean;
}

const MobileSidebar = ({apiLimitCount = 0, isPro =false} : MobileSidebarProps) => {
    // this how to handle hydration error
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null
    } // hydration error handling done here

    return (
        <Sheet>
            <SheetTrigger>
                <Button className="md:hidden" variant="ghost" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-0">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            </SheetContent>
        </Sheet >

    )
}

export default MobileSidebar