import { connectDB } from "@/lib/db";
import { userModel } from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        await connectDB();
        const user = await userModel.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { message: "User doesn't exists", success: false },
                { status: 400 }
            );
        }

        if (password !== user.password) {
            return NextResponse.json(
                { message: "wrong password", success: false },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "User login successfully", success: true, LoginId: user.email },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error", success: false, error: error.message },
            { status: 500 }
        );
    }

}