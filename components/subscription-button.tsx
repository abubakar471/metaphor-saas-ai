"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { Zap } from "lucide-react"
import { useState } from "react"

interface SubscriptionButtonProps {
    isPro: boolean
}

const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        try {
            setLoading(true)
            const response = await axios.get('/api/stripe');
            window.location.href = response.data.url;
        } catch (error) {
            console.log("[billing error]", error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Button
            disabled={loading}
            variant={isPro ? "default" : "premium"}
            onClick={onClick}
        >
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
        </Button>
    )
}

export default SubscriptionButton