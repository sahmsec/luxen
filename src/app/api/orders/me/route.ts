import { NextResponse } from "next/server";
import client, { db } from "@/lib/mongodb";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const orders = await db
      .collection("orders")
      .find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Fetching orders failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
