import { connectDB } from "@/lib/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

// export async function GET(req) {
//     try {
//         await connectDB();
//         const product = await productModel.find()
//         if (!product || product.length < 1) {
//             return NextResponse.json(
//                 { message: "product not found", success: false },
//                 { status: 400 }
//             );
//         }
//         return NextResponse.json(
//             { message: "all product ", success: true, products: product },
//             { status: 200 }
//         );


//     } catch (error) {
//         return NextResponse.json(
//             { message: "Internal server error", success: false, error: error.message },
//             { status: 500 }
//         );
//     }
// }

export async function GET(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search") || "";
        const price = searchParams.get("price") || "";
        const sort = searchParams.get("sort") || "";
        const producttype = searchParams.get("producttype") || "all";
        const clothtype = searchParams.get("clothtype") || "all";

        const products = await productModel.find({
            ...(search && { name: { $regex: search, $options: "i" } }),
            ...(price && { currentprice: { $lte: price } }),
            ...(producttype !== "all" && { producttype }),
            ...(clothtype !== "all" && { clothtype }),
        })
            .sort(
                sort === "a-z" ? { name: 1 } :
                    sort === "z-a" ? { name: -1 } :
                        sort === "low-high" ? { currentprice: 1 } :
                            sort === "high-low" ? { currentprice: -1 } :
                                {}
            );

        if (!products || products.length < 1) {
            return NextResponse.json(
                { message: "products not found", success: false },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: "filtered product ", success: true, products: products },
            { status: 200 }
        );


    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error", success: false, error: error.message },
            { status: 500 }
        );
    }
}