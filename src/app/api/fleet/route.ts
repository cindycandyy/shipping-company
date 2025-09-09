import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Mock fleet data - replace with database query when integrated
    const mockFleet = [
      {
        id: 1,
        name: "MV Ocean Pioneer",
        type: "container",
        capacity: 14000,
        capacity_unit: "TEU",
        status: "active",
        current_location: "Port of Singapore",
        next_available: "2024-02-15",
      },
      {
        id: 2,
        name: "MV Maritime Express",
        type: "container",
        capacity: 8500,
        capacity_unit: "TEU",
        status: "active",
        current_location: "Port of Rotterdam",
        next_available: "2024-02-20",
      },
    ]

    return NextResponse.json({ vessels: mockFleet })
  } catch (error) {
    console.error("Error fetching fleet data:", error)
    return NextResponse.json({ error: "Failed to fetch fleet data" }, { status: 500 })
  }
}
