// api/districts/new
import dbConnect from "@/lib/db";
import District from "@/models/District";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, lat, long } = await req.json();

    const newDistrict = new District({
      name,
      lat,
      long,
    });

    const district = await newDistrict.save();
    if (district) {
      return NextResponse.json(
        {
          status: true,
          message: `District ${district.name} has been created successfully!`,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: "Error creating district",
    });
  }
}
