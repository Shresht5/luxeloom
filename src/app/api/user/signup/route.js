import { connectDB } from "@/lib/db";
import { userModel } from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        await connectDB();

        const alreadyExisted = await userModel.findOne({ email });
        if (alreadyExisted) {
            return NextResponse.json(
                { message: "User already exists", success: false },
                { status: 400 }
            );
        }

        const user = new userModel({ email, password });
        await user.save();

        return NextResponse.json(
            { message: "User created successfully", success: true, user },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error", success: false, error: error.message },
            { status: 500 }
        );
    }
}
export async function GET(req) {
    try {
        return NextResponse.json({ message: "Server is working fine signup page" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });

    }
}