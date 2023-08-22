import LandingComponent from "@/components/landing-component"
import LandingFooter from "@/components/landing-footer"
import LandingHero from "@/components/landing-hero"
import LandingNavbar from "@/components/landing-navbar"

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingComponent />
            <LandingFooter />
        </div>
    )
}

export default LandingPage