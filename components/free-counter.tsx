"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react"
import { useProModal } from "@/hooks/use-pro-modal";

interface freeCounterProps {
    apiLimitCount: number
}

const FreeCounter = ({ apiLimitCount = 0 }: freeCounterProps) => {
    const [mounted, setMounted] = useState(false);
    const proModal = useProModal();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>{apiLimitCount}/{MAX_FREE_COUNTS} Free Generations</p>
                        <Progress className="h-3"
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                        <Button
                            variant='premium'
                            className="w-full"
                            onClick={proModal.onOpen}
                        >
                            Upgrade <Zap className="w-4 h-4 fill-white ml-2" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default FreeCounter