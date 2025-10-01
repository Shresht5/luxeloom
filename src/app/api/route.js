import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
    try {
        return NextResponse.json({ message: "Server is working fine" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });

    }
}