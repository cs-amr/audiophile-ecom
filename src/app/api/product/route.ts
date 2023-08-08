import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("--------------------------------------------");
  console.log("--------------------------------------------");
  console.log("from product");
  console.log(body);
  console.log("--------------------------------------------");
  return NextResponse.json({ Message: "success" }, { status: 200 });
}
