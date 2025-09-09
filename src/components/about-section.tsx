"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

interface ContactFormProps {
  type: "general" | "quote" | "charter"
}

export default function ContactForm({ type }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const formConfig = {
    general: {
      title: "General Inquiry",
      description: "Get in touch with our maritime experts for any questions about our services.",
    },
    quote: {
      title: "Request Quote",
      description: "Get a detailed quote for your shipping requirements with competitive rates.",
    },
    charter: {
      title: "Charter Inquiry",
      description: "Inquire about vessel charter services for your specialized cargo needs.",
    },
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      type,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      origin: formData.get("origin"),
      destination: formData.get("destination"),
      cargo_type: formData.get("cargo_type"),
      cargo_weight: formData.get("cargo_weight"),
      preferred_date: formData.get("preferred_date"),
    }

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Alert className="border-green-200 bg-green-50">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          <strong>Thank You!</strong> Your inquiry has been submitted successfully. We'll get back to you within 24
          hours.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{formConfig[type].title}</CardTitle>
        <CardDescription>{formConfig[type].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" name="company" placeholder="Enter company name" />
            </div>
          </div>

          {type === "quote" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin Port/City</Label>
                  <Input id="origin" name="origin" placeholder="Departure location" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination Port/City</Label>
                  <Input id="destination" name="destination" placeholder="Arrival location" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cargo_type">Cargo Type</Label>
                  <Select name="cargo_type">
                    <SelectTrigger>
                      <SelectValue placeholder="Select cargo type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="container">Container Cargo</SelectItem>
                      <SelectItem value="bulk">Bulk Cargo</SelectItem>
                      <SelectItem value="liquid">Liquid Cargo</SelectItem>
                      <SelectItem value="project">Project Cargo</SelectItem>
                      <SelectItem value="vehicles">Vehicles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo_weight">Cargo Weight (tons)</Label>
                  <Input id="cargo_weight" name="cargo_weight" type="number" placeholder="Enter weight" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred_date">Preferred Shipping Date</Label>
                <Input id="preferred_date" name="preferred_date" type="date" />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">{type === "general" ? "Your Message *" : "Additional Details *"}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={
                type === "general"
                  ? "Tell us how we can help you..."
                  : "Provide additional details about your shipment requirements..."
              }
              required
              rows={4}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
