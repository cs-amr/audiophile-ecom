import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";
export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json({ categories }, { status: 200 });
}
