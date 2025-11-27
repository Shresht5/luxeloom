import { connectDB } from "@/lib/db";
import orderModel from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userId, productId, qty } = await req.json();

        await connectDB();
        if (!userId || !productId || !qty) {
            return NextResponse.json({ message: "enter all fields" }, { status: 400 });
        }

        const order = new orderModel({ user: userId, product: productId, qty });
        // await order.save();

        return NextResponse.json({ message: "order placed", order }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });

    }
}