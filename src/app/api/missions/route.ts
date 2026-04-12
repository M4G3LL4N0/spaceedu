import { NextResponse } from "next/server";
import { missions } from "@/data/missions";

export async function GET() {
  return NextResponse.json({
    missions,
    count: missions.length,
  });
}
