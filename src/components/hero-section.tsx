import { Button } from "@/components/ui/button"
import { ArrowRight, Ship, Globe, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/large-container-ship-at-sea-during-sunset-with-dra.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 text-balance">
          Global Maritime
          <span className="block text-accent">Export Solutions</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
          Connecting continents through reliable shipping services. Your trusted partner for international trade and
          maritime logistics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Ship className="h-12 w-12 text-accent mb-4" />
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-white/80">Ships Managed</div>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="h-12 w-12 text-accent mb-4" />
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-white/80">Countries Served</div>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-accent mb-4" />
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
