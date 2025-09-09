import { type NextRequest, NextResponse } from "next/server"

// This will work with either Supabase or Neon when integrated
export async function GET(request: NextRequest) {
  try {
    // When database is connected, replace with actual database query
    // For now, return mock data structure
    const mockInquiries = [
      {
        id: 1,
        type: "quote",
        name: "John Smith",
        email: "john@tradecorp.com",
        company: "Trade Corp International",
        status: "pending",
        created_at: new Date().toISOString(),
      },
    ]

    return NextResponse.json({ inquiries: mockInquiries })
  } catch (error) {
    console.error("Error fetching inquiries:", error)
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { type, name, email, message } = body
    if (!type || !name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // When database is connected, insert into database
    // For now, return success response
    console.log("[v0] New inquiry received:", body)

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
      id: Math.floor(Math.random() * 1000), // Mock ID
    })
  } catch (error) {
    console.error("Error creating inquiry:", error)
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 })
  }
}
