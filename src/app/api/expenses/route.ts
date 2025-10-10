import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const expenses = await prisma.expense.findMany({ orderBy: { date: 'desc' } });
    return NextResponse.json(expenses);
  } catch (error) {
    console.error("GET /api/expenses error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, amount, category, date } = body;

    if (!title || !amount || !category || !date) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Ensure correct types
    const expense = await prisma.expense.create({
      data: {
        title: String(title),
        amount: Number(amount),
        category: String(category),
        date: new Date(date),
      },
    });

    return NextResponse.json(expense, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/expenses error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
