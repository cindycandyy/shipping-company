import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Package, FileText, MapPin, Ship, Plane, Container, Shield, BarChart3, Headphones } from "lucide-react"

const mainServices = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Full container load (FCL) and less than container load (LCL) services worldwide",
    features: ["Door-to-door delivery", "Real-time tracking", "Customs clearance", "Insurance coverage"],
    routes: "500+ global routes",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express air cargo services for time-sensitive shipments",
    features: ["Same-day pickup", "Priority handling", "Temperature control", "Dangerous goods certified"],
    routes: "200+ airports worldwide",
  },
  {
    icon: Truck,
    title: "Land Transportation",
    description: "Comprehensive trucking and rail freight solutions",
    features: ["Cross-border transport", "Specialized vehicles", "Last-mile delivery", "Warehousing"],
    routes: "Pan-Asian network",
  },
  {
    icon: Container,
    title: "Project Cargo",
    description: "Heavy lift and oversized cargo handling expertise",
    features: ["Engineering support", "Route surveys", "Special equipment", "Risk management"],
    routes: "Global project sites",
  },
]

const additionalServices = [
  {
    icon: FileText,
    title: "Customs Brokerage",
    description: "Expert customs clearance and trade compliance services",
  },
  {
    icon: Package,
    title: "Warehousing & Distribution",
    description: "Strategic storage and distribution center management",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Consulting",
    description: "Optimization strategies for efficient logistics operations",
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description: "Comprehensive coverage for all types of shipments",
  },
  {
    icon: MapPin,
    title: "Track & Trace",
    description: "Real-time visibility throughout the shipping process",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance from maritime experts",
  },
]

const industries = [
  { name: "Automotive", description: "Vehicle and parts transportation" },
  { name: "Electronics", description: "High-value technology shipments" },
  { name: "Textiles", description: "Fashion and garment logistics" },
  { name: "Chemicals", description: "Hazardous and specialty chemicals" },
  { name: "Food & Beverage", description: "Temperature-controlled cargo" },
  { name: "Energy", description: "Oil, gas, and renewable energy equipment" },
  { name: "Construction", description: "Heavy machinery and materials" },
  { name: "Pharmaceuticals", description: "Medical and healthcare products" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty">
              Comprehensive maritime logistics solutions tailored to meet your global shipping requirements
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Core Transportation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-modal transportation solutions connecting every corner of the globe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <service.icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <Badge variant="secondary" className="text-accent bg-accent/10">
                      {service.routes}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Value-Added Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete logistics support services to streamline your supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <service.icon className="h-10 w-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized logistics solutions across diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{industry.name}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-accent-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
            Our experts are ready to design a tailored logistics solution for your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
              Request Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent bg-transparent"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
