"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormProps {
  type: "general" | "quote" | "charter"
}

export default function ContactForm({ type }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="name" placeholder="Full Name *" required />
        <Input name="email" type="email" placeholder="Email Address *" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="phone" placeholder="Phone Number" />
        <Input name="company" placeholder="Company Name" />
      </div>

      {type === "quote" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="origin" placeholder="Origin Port/City" />
            <Input name="destination" placeholder="Destination Port/City" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select name="cargo_type">
              <SelectTrigger>
                <SelectValue placeholder="Cargo Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="container">Container Cargo</SelectItem>
                <SelectItem value="bulk">Bulk Cargo</SelectItem>
                <SelectItem value="liquid">Liquid Cargo</SelectItem>
                <SelectItem value="project">Project Cargo</SelectItem>
                <SelectItem value="vehicles">Vehicles</SelectItem>
              </SelectContent>
            </Select>
            <Input name="cargo_weight" type="number" placeholder="Cargo Weight (tons)" />
          </div>
          <Input name="preferred_date" type="date" />
        </>
      )}

      <Textarea
        name="message"
        placeholder={type === "general" ? "Your message *" : "Additional details about your shipment *"}
        required
        rows={4}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}
