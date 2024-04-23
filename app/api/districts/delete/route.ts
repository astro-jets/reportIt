// pages/api/districts.ts
import dbConnect from "@/lib/db";
import District from "@/models/District";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const operation = await District.findOneAndDelete({ _id: id });

    if (!operation) {
      return NextResponse.json(
        {
          status: false,
          message: "No districts found.",
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "District deleted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: `Error fetching district ${error}`,
    });
  }
}
