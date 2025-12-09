"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { MenuSection } from "@/components/MenuSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { InquiryForm } from "@/components/InquiryForm";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Home() {
  const [showAvailability, setShowAvailability] = useState(false);
  const [showMenus, setShowMenus] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      <HeroSection
        onCheckAvailability={() => setShowAvailability(true)}
        onViewMenus={() => {
          setShowMenus(true);
          setTimeout(() => scrollToSection("menus"), 100);
        }}
      />
      <ImpactSection />
      <section id="availability" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AvailabilityCalendar />
        </div>
      </section>
      <MenuSection />
      <TestimonialsSection />
      <FAQSection />
      <InquiryForm />

      <Dialog open={showAvailability} onOpenChange={setShowAvailability}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Check Availability</DialogTitle>
            <DialogDescription>
              Select a date to see availability and book your event
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <AvailabilityCalendar />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

