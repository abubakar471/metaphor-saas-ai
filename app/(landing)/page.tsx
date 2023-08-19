import { Button } from "@/components/ui/button"
import Link from "next/link"

export const LandingPage = () => {
    return (
        <div>
            <h1>landing page</h1>
            <Link href="/sign-in"> 
                <Button>
                    Sign In
                </Button>
            </Link>
            <Link href="/sign-up"> 
                <Button>
                    Sign up
                </Button>
            </Link>
        </div>
    )
}

export default LandingPage