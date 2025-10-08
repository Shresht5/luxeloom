import { connectDB } from "@/lib/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        await connectDB();
        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return NextResponse.json(
                { message: "product not found", success: false },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: "product deleted successfully", success: true, product },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error", success: false, error: error.message },
            { status: 500 }
        );
    }
}