import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, FileText, Ship } from "lucide-react"

const offices = [
  {
    city: "Jakarta",
    country: "Indonesia",
    type: "Headquarters",
    address: "Jl. Sudirman Kav. 52-53, Jakarta 12190",
    phone: "+62 21 2555 7000",
    email: "jakarta@oceanlink.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM",
  },
  {
    city: "Singapore",
    country: "Singapore",
    type: "Regional Office",
    address: "1 Marina Bay, Singapore 018989",
    phone: "+65 6555 8000",
    email: "singapore@oceanlink.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  {
    city: "Hong Kong",
    country: "China",
    type: "Branch Office",
    address: "Central Plaza, 18 Harbour Rd, Wan Chai",
    phone: "+852 2555 9000",
    email: "hongkong@oceanlink.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  {
    city: "Rotterdam",
    country: "Netherlands",
    type: "European Office",
    address: "Wilhelminakade 123, 3072 AP Rotterdam",
    phone: "+31 10 555 1000",
    email: "rotterdam@oceanlink.com",
    hours: "Mon-Fri: 8:30 AM - 5:30 PM",
  },
]

const serviceTypes = [
  "Ocean Freight",
  "Air Freight",
  "Land Transportation",
  "Project Cargo",
  "Customs Clearance",
  "Warehousing",
  "Supply Chain Consulting",
  "Other",
]

const cargoTypes = [
  "General Cargo",
  "Containerized Cargo",
  "Bulk Cargo",
  "Liquid Cargo",
  "Hazardous Materials",
  "Perishable Goods",
  "Oversized/Heavy Lift",
  "Vehicles",
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty">
              Get in touch with our maritime experts for personalized shipping solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="inquiry" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="inquiry" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    General Inquiry
                  </TabsTrigger>
                  <TabsTrigger value="quote" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Request Quote
                  </TabsTrigger>
                  <TabsTrigger value="charter" className="flex items-center gap-2">
                    <Ship className="h-4 w-4" />
                    Charter Inquiry
                  </TabsTrigger>
                </TabsList>

                {/* General Inquiry Form */}
                <TabsContent value="inquiry">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Inquiry</CardTitle>
                      <CardDescription>Have questions about our services? We're here to help.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Enter your company name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Enter inquiry subject" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your inquiry..." className="min-h-[120px]" />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Send className="mr-2 h-4 w-4" />
                        Send Inquiry
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Quote Request Form */}
                <TabsContent value="quote">
                  <Card>
                    <CardHeader>
                      <CardTitle>Request Quote</CardTitle>
                      <CardDescription>Get a detailed quote for your shipping requirements.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quoteFirstName">First Name</Label>
                          <Input id="quoteFirstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quoteLastName">Last Name</Label>
                          <Input id="quoteLastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quoteEmail">Email</Label>
                          <Input id="quoteEmail" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quotePhone">Phone</Label>
                          <Input id="quotePhone" placeholder="Enter your phone number" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quoteCompany">Company</Label>
                        <Input id="quoteCompany" placeholder="Enter your company name" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cargoType">Cargo Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select cargo type" />
                            </SelectTrigger>
                            <SelectContent>
                              {cargoTypes.map((cargo) => (
                                <SelectItem key={cargo} value={cargo.toLowerCase().replace(/\s+/g, "-")}>
                                  {cargo}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin">Origin</Label>
                          <Input id="origin" placeholder="Port/City of origin" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination">Destination</Label>
                          <Input id="destination" placeholder="Port/City of destination" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="weight">Weight (kg)</Label>
                          <Input id="weight" placeholder="Total weight" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volume">Volume (m³)</Label>
                          <Input id="volume" placeholder="Total volume" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="shipDate">Preferred Ship Date</Label>
                          <Input id="shipDate" type="date" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quoteDetails">Additional Details</Label>
                        <Textarea
                          id="quoteDetails"
                          placeholder="Provide additional details about your shipment..."
                          className="min-h-[100px]"
                        />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <FileText className="mr-2 h-4 w-4" />
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Charter Inquiry Form */}
                <TabsContent value="charter">
                  <Card>
                    <CardHeader>
                      <CardTitle>Charter Inquiry</CardTitle>
                      <CardDescription>
                        Interested in chartering our vessels? Let us know your requirements.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="charterFirstName">First Name</Label>
                          <Input id="charterFirstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="charterLastName">Last Name</Label>
                          <Input id="charterLastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="charterEmail">Email</Label>
                          <Input id="charterEmail" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="charterPhone">Phone</Label>
                          <Input id="charterPhone" placeholder="Enter your phone number" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="charterCompany">Company</Label>
                        <Input id="charterCompany" placeholder="Enter your company name" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vesselType">Vessel Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select vessel type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="container">Container Ship</SelectItem>
                              <SelectItem value="bulk">Bulk Carrier</SelectItem>
                              <SelectItem value="tanker">Tanker</SelectItem>
                              <SelectItem value="multipurpose">Multi-Purpose Vessel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="charterDuration">Charter Duration</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="voyage">Single Voyage</SelectItem>
                              <SelectItem value="time-short">Time Charter (1-6 months)</SelectItem>
                              <SelectItem value="time-long">Time Charter (6+ months)</SelectItem>
                              <SelectItem value="bareboat">Bareboat Charter</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="charterStart">Charter Start Date</Label>
                          <Input id="charterStart" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="charterEnd">Charter End Date</Label>
                          <Input id="charterEnd" type="date" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="charterRoute">Intended Route/Area</Label>
                        <Input id="charterRoute" placeholder="Describe the intended route or operating area" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="charterRequirements">Special Requirements</Label>
                        <Textarea
                          id="charterRequirements"
                          placeholder="Describe any special requirements or additional information..."
                          className="min-h-[100px]"
                        />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Ship className="mr-2 h-4 w-4" />
                        Submit Charter Inquiry
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to reach our team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold">24/7 Hotline</p>
                      <p className="text-sm text-muted-foreground">+62 21 2555 7000</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">info@oceanlink.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                  <CardDescription>24/7 emergency support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-destructive">Emergency Hotline</p>
                    <p className="text-lg font-bold">+62 21 2555 7911</p>
                    <p className="text-sm text-muted-foreground">
                      For urgent maritime emergencies, cargo issues, or vessel assistance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Our Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Global presence with local expertise in key maritime hubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                    <Badge variant="secondary" className="text-accent bg-accent/10">
                      {office.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <CardDescription className="font-semibold">{office.country}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">{office.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">{office.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Hours</p>
                    <p className="text-sm text-muted-foreground">{office.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Visit our headquarters in Jakarta or any of our global offices
            </p>
          </div>

          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground">Interactive Map</p>
              <p className="text-muted-foreground">Map integration would be implemented here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
