import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, monthlyBill, roofAge, message } = body;

    if (!name || !email || !phone || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('New quote request:', { name, email, phone, address, monthlyBill, roofAge, message });

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 24 hours with your free quote.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
