import { connectDB } from "@/lib/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, currentprice, mrp, color, clothtype, producttype, detail, image } = await req.json();
        if (!name || !currentprice || !mrp) {
            return NextResponse.json(
                { success: false, message: "enter all fields" },
                { status: 400 })
        }
        await connectDB();
        const existed = await productModel.findOne({ name })
        if (existed) {
            return NextResponse.json(
                { message: "product already exists", success: false },
                { status: 400 }
            );
        };
        const product = new productModel({ name, currentprice, mrp, color, clothtype, producttype, detail, image })
        await product.save();
        return NextResponse.json(
            { message: "product created successfully", success: true, product },
            { status: 201 }
        );


    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error", success: false, error: error.message },
            { status: 500 }
        );
    }
}