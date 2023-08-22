import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const LandingComponent = () => {
    const testimonials = [
        {
            name: "Thomas Shelby",
            avatar: "A",
            title: "Businessman",
            desc: "Best app for business content generation"
        },
        {
            name: "Big Smoke",
            avatar: "B",
            title: "BusketBall Player",
            desc: "Best app for my music generation"
        }, 
        {
            name: "Mark Zukerberg",
            avatar: "M",
            title: "Ceo of Facebook",
            desc: "!Hate this app"
        }, 
        {
            name: "Elon Mask",
            avatar: "E",
            title: "King Elon",
            desc: "Don't believe mark , this app is too good for your daily work."
        }
    ]
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            lg:grid-cols-4 gap-4">
                {
                    testimonials.map(item => (
                        <Card key={item.desc} className="bg-[#192339] border-none text-white">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                    <div>
                                        <p className="text-lg">{item.name}</p>
                                        <p className="text-sm text-zinc-400">{item.title}</p>
                                    </div>
                                </CardTitle>
                                <CardContent className="pt-4 px-0">
                                    {item.desc}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default LandingComponent