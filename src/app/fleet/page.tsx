import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, Anchor, Gauge, Calendar, MapPin, Users, Package, Fuel, Shield, Award } from "lucide-react"

const fleetStats = [
  { icon: Ship, label: "Total Vessels", value: "45", description: "Modern fleet" },
  { icon: Package, label: "TEU Capacity", value: "180K", description: "Container capacity" },
  { icon: MapPin, label: "Routes", value: "500+", description: "Global coverage" },
  { icon: Users, label: "Crew Members", value: "2,400", description: "Experienced professionals" },
]

const vesselTypes = [
  {
    type: "Container Ships",
    count: 18,
    capacity: "8,000-20,000 TEU",
    description: "Ultra Large Container Vessels (ULCV) for major trade routes",
    features: ["Automated cargo handling", "Fuel-efficient engines", "Advanced navigation systems"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    type: "Bulk Carriers",
    count: 12,
    capacity: "50,000-180,000 DWT",
    description: "Specialized vessels for dry bulk commodities",
    features: ["Self-unloading systems", "Weather-tight cargo holds", "Ballast water treatment"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    type: "Tankers",
    count: 8,
    capacity: "30,000-120,000 DWT",
    description: "Chemical and product tankers with advanced safety systems",
    features: ["Double hull construction", "Inert gas systems", "Cargo heating capability"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    type: "Multi-Purpose Vessels",
    count: 7,
    capacity: "5,000-25,000 DWT",
    description: "Flexible vessels for project cargo and break-bulk",
    features: ["Heavy lift cranes", "Ro-Ro capability", "Specialized cargo gear"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const flagshipVessels = [
  {
    name: "OL Maritime Pioneer",
    type: "Ultra Large Container Vessel",
    capacity: "20,000 TEU",
    year: "2023",
    route: "Asia-Europe",
    specifications: {
      length: "400m",
      beam: "59m",
      speed: "22 knots",
      crew: "25",
    },
  },
  {
    name: "OL Ocean Explorer",
    type: "Bulk Carrier",
    capacity: "180,000 DWT",
    year: "2022",
    route: "Pacific Routes",
    specifications: {
      length: "300m",
      beam: "50m",
      speed: "14 knots",
      crew: "22",
    },
  },
  {
    name: "OL Maritime Star",
    type: "Chemical Tanker",
    capacity: "50,000 DWT",
    year: "2021",
    route: "Global",
    specifications: {
      length: "183m",
      beam: "32m",
      speed: "15 knots",
      crew: "20",
    },
  },
]

const certifications = [
  { name: "IMO SOLAS", description: "Safety of Life at Sea" },
  { name: "MARPOL", description: "Marine Pollution Prevention" },
  { name: "ISPS Code", description: "International Ship & Port Security" },
  { name: "MLC 2006", description: "Maritime Labour Convention" },
  { name: "ISM Code", description: "International Safety Management" },
  { name: "STCW", description: "Standards of Training & Watchkeeping" },
]

export default function FleetPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Our Fleet</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty">
              Modern, efficient, and environmentally responsible vessels connecting global trade routes
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <stat.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-3xl font-bold text-foreground">{stat.value}</CardTitle>
                  <CardDescription className="text-lg font-semibold">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel Types */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Vessel Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse fleet capabilities to handle any cargo requirement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vesselTypes.map((vessel, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vessel.image || "/placeholder.svg"}
                    alt={vessel.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{vessel.type}</CardTitle>
                    <Badge variant="secondary" className="text-accent bg-accent/10">
                      {vessel.count} vessels
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    <span className="font-semibold">Capacity:</span> {vessel.capacity}
                  </CardDescription>
                  <CardDescription className="text-base leading-relaxed">{vessel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {vessel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Specifications
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Vessels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Flagship Vessels</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our newest and most advanced vessels leading the fleet
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flagshipVessels.map((vessel, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Anchor className="h-8 w-8 text-accent" />
                    <Badge variant="secondary" className="text-accent bg-accent/10">
                      {vessel.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{vessel.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-accent">{vessel.type}</CardDescription>
                  <CardDescription className="text-base">
                    <span className="font-semibold">Capacity:</span> {vessel.capacity}
                  </CardDescription>
                  <CardDescription className="text-base">
                    <span className="font-semibold">Route:</span> {vessel.route}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Length:</span> {vessel.specifications.length}
                    </div>
                    <div>
                      <span className="font-semibold">Beam:</span> {vessel.specifications.beam}
                    </div>
                    <div>
                      <span className="font-semibold">Speed:</span> {vessel.specifications.speed}
                    </div>
                    <div>
                      <span className="font-semibold">Crew:</span> {vessel.specifications.crew}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Management & Safety */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
                Fleet Management Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our fleet management combines cutting-edge technology with decades of maritime expertise to ensure
                optimal performance, safety, and environmental compliance across all operations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-accent" />
                  <span className="text-foreground">Advanced safety management systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="h-6 w-6 text-accent" />
                  <span className="text-foreground">Real-time performance monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="h-6 w-6 text-accent" />
                  <span className="text-foreground">Fuel efficiency optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-accent" />
                  <span className="text-foreground">Predictive maintenance scheduling</span>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Fleet Management Details
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Fleet management control center"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Maritime Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full compliance with international maritime regulations and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300"
              >
                <Award className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-accent-foreground mb-6">Charter Our Vessels</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
            Flexible charter options available for your specific shipping requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
              Charter Inquiry
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent bg-transparent"
            >
              Fleet Specifications
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
