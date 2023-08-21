import {auth, currentUser} from "@clerk/nextjs"
import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"
import { metadata } from "@/app/layout"

const settingsUrl = absoluteUrl("/settings");


export async function GET() {
    try {
        const {userId} = auth();
        const user = await currentUser();

        if(!userId || !currentUser) {
            return new NextResponse("Unauthorized", {status : 401});
        }

        const userSubscription = await prismadb.userSubscription.findUnique({
            where : {
                userId : userId
            }
        })

        // existed customer 
        if(userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer : userSubscription.stripeCustomerId,
                return_url : settingsUrl
            })
            console.log("old customer url => ", settingsUrl);
            return new NextResponse(JSON.stringify({url : stripeSession.url}));
        }

        // first time checking out in our app
        const stripeSession = await stripe.checkout.sessions.create({
            success_url : settingsUrl,
            cancel_url : settingsUrl,
            payment_method_types : ["card"],
            billing_address_collection : "auto",
            customer_email : user?.emailAddresses[0].emailAddress,
            line_items : [
                {
                    price_data : {
                        currency : "USD",
                        product_data : {
                            name : "Metaphor pro",
                            description : "Unlimited ai tool generations"
                        },
                        unit_amount : 2000, //equivalent to 20 dollars
                        recurring : {
                            interval : "month" // subscription per month will be charge
                        }
                    },
                    quantity : 1
                }
            ],
            mode : 'subscription',
            // the metadata is gonna be used to identify which user of ours purchased pro plan
            metadata : {
                userId
            }
        })

        console.log("new customer url => ", settingsUrl);
        return new NextResponse(JSON.stringify({url : stripeSession.url}));
    } catch (error) {
        console.log("[stripe error]",error);
        return new NextResponse("Internal server error",{status : 500});
    }
}