import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

type instructionMsgArc = {
    role?: string;
    content?: string;
};

const instructionMessage: instructionMsgArc = {
    role: "system",
    content: "You are a code generator. You must answer only in code generator. Use code comments for code explainations."
}

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

        console.log("msgs --->", messages)
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        })

        console.log(response)

        return NextResponse.json(response.choices[0].message)
        // return NextResponse.json(response.data.choices[0].message)

    } catch (error) {
        console.log("[code generation error] ", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
