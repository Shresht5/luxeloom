import { connectDB } from "@/lib/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();
        const product = await productModel.find()
        if (!product || product.length < 1) {
            return NextResponse.json(
                { message: "product not found", success: false },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: "all product ", success: true, products: product },
            { status: 200 }
        );


    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error", success: false, error: error.message },
            { status: 500 }
        );
    }
}