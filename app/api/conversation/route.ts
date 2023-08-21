import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from 'openai';

// prisma
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("unauthorized", { status: 401 });
        }

        if (!openai.apiKey) {
            return new NextResponse("openai api key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("messages are required", { status: 400 });
        }

        // check whether user is on free trial or not
        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired", { status: 403 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        })


        if (!isPro) {
            // increase the api limit
            await increaseApiLimit();
        }

        return NextResponse.json(response.choices[0].message)
    } catch (error) {
        console.log("[converstation error] ", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}