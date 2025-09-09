import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, FileText, Users, Clock, MapPin } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Freight Forwarding",
    description: "Comprehensive freight forwarding services for air, sea, and land transportation worldwide.",
  },
  {
    icon: Package,
    title: "Cargo Management",
    description: "Professional cargo handling, packaging, and storage solutions with real-time tracking.",
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert customs brokerage and documentation services to ensure smooth border crossings.",
  },
  {
    icon: Users,
    title: "Supply Chain Consulting",
    description: "Strategic supply chain optimization and logistics consulting for maximum efficiency.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Time-critical shipping solutions with guaranteed delivery schedules worldwide.",
  },
  {
    icon: MapPin,
    title: "Door-to-Door Service",
    description: "Complete end-to-end logistics solutions from pickup to final destination delivery.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive maritime and logistics solutions tailored to meet your international trade requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
