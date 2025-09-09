import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart3,
  Users,
  Ship,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Eye,
  Edit,
  Download,
  Search,
  Calendar,
  DollarSign,
  Mail,
  MapPin,
} from "lucide-react"

// Mock data for demonstration
const dashboardStats = [
  {
    title: "Total Inquiries",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: MessageSquare,
    description: "This month",
  },
  {
    title: "Active Shipments",
    value: "89",
    change: "+5.2%",
    trend: "up",
    icon: Ship,
    description: "Currently in transit",
  },
  {
    title: "Revenue",
    value: "$2.4M",
    change: "-3.1%",
    trend: "down",
    icon: DollarSign,
    description: "This quarter",
  },
  {
    title: "Fleet Utilization",
    value: "87%",
    change: "+8.3%",
    trend: "up",
    icon: BarChart3,
    description: "Average this month",
  },
]

const recentInquiries = [
  {
    id: "INQ-001",
    name: "John Smith",
    company: "Global Trade Corp",
    service: "Ocean Freight",
    status: "pending",
    date: "2024-01-15",
    email: "john@globaltrade.com",
  },
  {
    id: "INQ-002",
    name: "Sarah Chen",
    company: "Asia Logistics",
    service: "Air Freight",
    status: "quoted",
    date: "2024-01-14",
    email: "sarah@asialogistics.com",
  },
  {
    id: "INQ-003",
    name: "Michael Rodriguez",
    company: "Euro Shipping",
    service: "Project Cargo",
    status: "converted",
    date: "2024-01-13",
    email: "michael@euroshipping.com",
  },
  {
    id: "INQ-004",
    name: "Lisa Wang",
    company: "Pacific Trade",
    service: "Customs Clearance",
    status: "pending",
    date: "2024-01-12",
    email: "lisa@pacifictrade.com",
  },
]

const fleetStatus = [
  {
    vessel: "OL Maritime Pioneer",
    type: "Container Ship",
    status: "In Transit",
    route: "Singapore - Rotterdam",
    eta: "2024-01-25",
    utilization: "95%",
  },
  {
    vessel: "OL Ocean Explorer",
    type: "Bulk Carrier",
    status: "Loading",
    route: "Jakarta - Hong Kong",
    eta: "2024-01-20",
    utilization: "88%",
  },
  {
    vessel: "OL Maritime Star",
    type: "Tanker",
    status: "Maintenance",
    route: "Port - Dry Dock",
    eta: "2024-01-30",
    utilization: "0%",
  },
]

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />

      <div className="pt-20">
        {/* Header */}
        <div className="bg-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-serif font-bold text-3xl text-foreground">Admin Dashboard</h1>
                <p className="text-muted-foreground mt-1">Manage your maritime operations</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                    <span>{stat.description}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="fleet">Fleet</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Inquiries */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Inquiries</CardTitle>
                    <CardDescription>Latest customer inquiries and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentInquiries.slice(0, 4).map((inquiry) => (
                        <div key={inquiry.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <p className="font-semibold text-sm">{inquiry.name}</p>
                              <Badge
                                variant={
                                  inquiry.status === "converted"
                                    ? "default"
                                    : inquiry.status === "quoted"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="text-xs"
                              >
                                {inquiry.status}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{inquiry.company}</p>
                            <p className="text-xs text-muted-foreground">{inquiry.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">{inquiry.date}</p>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Fleet Status */}
                <Card>
                  <CardHeader>
                    <CardTitle>Fleet Status</CardTitle>
                    <CardDescription>Current status of your vessels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {fleetStatus.map((vessel, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{vessel.vessel}</p>
                            <p className="text-xs text-muted-foreground">{vessel.type}</p>
                            <p className="text-xs text-muted-foreground">{vessel.route}</p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                vessel.status === "In Transit"
                                  ? "default"
                                  : vessel.status === "Loading"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs mb-1"
                            >
                              {vessel.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground">ETA: {vessel.eta}</p>
                            <p className="text-xs text-accent font-semibold">{vessel.utilization}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Inquiries Tab */}
            <TabsContent value="inquiries" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Customer Inquiries</CardTitle>
                      <CardDescription>Manage and respond to customer inquiries</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search inquiries..." className="pl-8 w-64" />
                      </div>
                      <Select>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="quoted">Quoted</SelectItem>
                          <SelectItem value="converted">Converted</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentInquiries.map((inquiry) => (
                        <TableRow key={inquiry.id}>
                          <TableCell className="font-medium">{inquiry.id}</TableCell>
                          <TableCell>{inquiry.name}</TableCell>
                          <TableCell>{inquiry.company}</TableCell>
                          <TableCell>{inquiry.service}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                inquiry.status === "converted"
                                  ? "default"
                                  : inquiry.status === "quoted"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {inquiry.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{inquiry.date}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Fleet Tab */}
            <TabsContent value="fleet" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Fleet Management</CardTitle>
                      <CardDescription>Monitor and manage your vessel fleet</CardDescription>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Ship className="mr-2 h-4 w-4" />
                      Add Vessel
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vessel Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Current Route</TableHead>
                        <TableHead>ETA</TableHead>
                        <TableHead>Utilization</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {fleetStatus.map((vessel, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{vessel.vessel}</TableCell>
                          <TableCell>{vessel.type}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                vessel.status === "In Transit"
                                  ? "default"
                                  : vessel.status === "Loading"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {vessel.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{vessel.route}</TableCell>
                          <TableCell>{vessel.eta}</TableCell>
                          <TableCell>
                            <span
                              className={
                                Number.parseInt(vessel.utilization) > 80
                                  ? "text-green-600 font-semibold"
                                  : Number.parseInt(vessel.utilization) > 50
                                    ? "text-yellow-600 font-semibold"
                                    : "text-red-600 font-semibold"
                              }
                            >
                              {vessel.utilization}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MapPin className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Analytics</CardTitle>
                    <CardDescription>Monthly revenue trends and projections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="h-16 w-16 text-accent mx-auto mb-4" />
                        <p className="text-lg font-semibold">Revenue Chart</p>
                        <p className="text-muted-foreground">Chart visualization would be here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Service Performance</CardTitle>
                    <CardDescription>Performance metrics by service type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Ocean Freight</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="text-sm font-semibold">85%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Air Freight</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: "72%" }}></div>
                          </div>
                          <span className="text-sm font-semibold">72%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Project Cargo</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                          <span className="text-sm font-semibold">68%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Customs Clearance</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: "91%" }}></div>
                          </div>
                          <span className="text-sm font-semibold">91%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Settings</CardTitle>
                    <CardDescription>Configure system preferences and notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc+7">UTC+7 (Jakarta)</SelectItem>
                          <SelectItem value="utc+8">UTC+8 (Singapore)</SelectItem>
                          <SelectItem value="utc+1">UTC+1 (Rotterdam)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Default Currency</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD</SelectItem>
                          <SelectItem value="eur">EUR</SelectItem>
                          <SelectItem value="sgd">SGD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Save Settings
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage admin users and permissions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">Admin User</p>
                        <p className="text-xs text-muted-foreground">admin@oceanlink.com</p>
                      </div>
                      <Badge>Super Admin</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-semibold text-sm">Operations Manager</p>
                        <p className="text-xs text-muted-foreground">ops@oceanlink.com</p>
                      </div>
                      <Badge variant="secondary">Manager</Badge>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Users className="mr-2 h-4 w-4" />
                      Add New User
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
