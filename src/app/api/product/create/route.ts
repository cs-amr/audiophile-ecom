import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../db";
export async function POST(req: NextRequest) {
  const json = await req.json();
  await prisma?.product.create({ data: json });

  return NextResponse.json({ Message: "success" }, { status: 200 });
}
