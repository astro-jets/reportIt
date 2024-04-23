// pages/api/districts.ts
import dbConnect from "@/lib/db";
import District from "@/models/District";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const district = await District.find({ _id: id }).sort({ createdAt: -1 });

    if (!district) {
      return NextResponse.json(
        {
          status: false,
          message: "No districts found.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ district }, { status: 201 });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: `Error fetching district ${error}`,
    });
  }
}
