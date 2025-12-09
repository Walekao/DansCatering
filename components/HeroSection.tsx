"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, UtensilsCrossed } from "lucide-react";

interface HeroSectionProps {
  onCheckAvailability: () => void;
  onViewMenus: () => void;
}

export function HeroSection({ onCheckAvailability, onViewMenus }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-sage-50 via-cream-50 to-terracotta-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-sage-900 leading-tight"
            >
              World-Class Catering for{" "}
              <span className="text-terracotta-600">Our Community Heroes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-sage-700 max-w-3xl mx-auto leading-relaxed"
            >
              Professional, chef-prepared catering prioritized for non-profits and
              community organizations.{" "}
              <span className="font-semibold text-terracotta-700">
                100% of proceeds fund job training for local youth.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                onClick={onCheckAvailability}
                size="lg"
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Check Availability
              </Button>
              <Button
                onClick={onViewMenus}
                size="lg"
                variant="outline"
                className="border-2 border-sage-600 text-sage-700 hover:bg-sage-50 px-8 py-6 text-lg"
              >
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                View Menus
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sage-100 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="w-full h-48 bg-sage-200 rounded-t-2xl flex items-center justify-center text-sage-600">
            <p className="text-sm">[Hero Image: Abundant Buffet Setup]</p>
          </div>
        </div>
      </div>
    </section>
  );
}

