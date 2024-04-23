// pages/api/districts.ts
import dbConnect from "@/lib/db";
import District from "@/models/District";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

type districtProps = {
  _id: string;
  user: string;
  title: string;
  status: string;
  description: string;
  subscription: string;
}[];

export async function GET(req: Request) {
  try {
    await dbConnect();

    const districts: districtProps = await District.find().sort({
      createdAt: -1,
    });

    if (!districts) {
      return NextResponse.json(
        {
          status: false,
          message: "No districts found.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ districts }, { status: 201 });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: `Error fetching district ${error}`,
    });
  }
}
