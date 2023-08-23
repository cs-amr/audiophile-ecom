import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";
export async function GET(req: NextRequest) {
  try {
    const res = await prisma.product.findMany();
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
