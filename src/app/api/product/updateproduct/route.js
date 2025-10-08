import { connectDB } from "@/lib/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const { name, currentprice, mrp, rating, color, clothtype, detail, image } = await req.json();
        if (!name || !currentprice || !mrp) {
            return NextResponse.json(
                { success: false, message: "enter all fields" },
                { status: 400 })
        }
        await connectDB();
        const product = await productModel.findByIdAndUpdate(id, { name, currentprice, mrp, rating, color, clothtype, detail, image }, { new: true });
        if (!product) {
            return NextResponse.json(
                { message: "product not found", success: false },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: "product updated successfully", success: true, product },
            { status: 200 }
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
        return NextResponse.json({ message: "Server is working fine" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });

    }
}