import React from "react";
import ContactUsForm from "@/components/sections/about/contact/ContactUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nexolve",
  description: "Start the conversation by sharing your vision. Our team will respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24 sm:pt-32 lg:pt-40">
      <ContactUsForm />
    </main>
  );
}
