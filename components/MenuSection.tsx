"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { UtensilsCrossed, ChefHat, Globe } from "lucide-react";

const menuPackages = [
  {
    id: "comfort",
    name: "The Comfort Feast",
    icon: ChefHat,
    description: "A hearty, home-style meal that brings warmth to any gathering",
    items: [
      "Roast Chicken with Herbs",
      "Seasonal Roasted Vegetables",
      "Creamy Mashed Potatoes",
      "House-made Dessert Selection",
    ],
    badges: ["Halal Option", "Vegetarian Friendly", "Gluten-Free Available"],
    color: "terracotta",
  },
  {
    id: "continental",
    name: "The Continental",
    icon: UtensilsCrossed,
    description: "Elegant, portable options perfect for meetings and events",
    items: [
      "Assorted Artisan Sandwiches",
      "Fresh Garden Salads",
      "Seasonal Soup Selection",
      "Fresh Fruit & Cheese Platter",
    ],
    badges: ["Halal Option", "Vegetarian Friendly", "Gluten-Free Available"],
    color: "sage",
  },
  {
    id: "global",
    name: "The Global Table",
    icon: Globe,
    description: "Celebrate diversity with flavors from around the world",
    items: [
      "Curry or Stew of the Day",
      "Fragrant Basmati Rice",
      "Fresh-baked Naan Bread",
      "Assorted Samosas & Appetizers",
    ],
    badges: ["Halal Option", "Vegetarian Friendly", "Gluten-Free Available"],
    color: "cream",
  },
];

export function MenuSection() {
  return (
    <section id="menus" className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            The Community Feast
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Three thoughtfully crafted packages designed to nourish and delight
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {menuPackages.map((pkg, index) => {
            const Icon = pkg.icon;
            const colorClasses = {
              terracotta: {
                bg: "bg-terracotta-50",
                border: "border-terracotta-200",
                text: "text-terracotta-700",
                icon: "text-terracotta-600",
              },
              sage: {
                bg: "bg-sage-50",
                border: "border-sage-200",
                text: "text-sage-700",
                icon: "text-sage-600",
              },
              cream: {
                bg: "bg-cream-50",
                border: "border-cream-200",
                text: "text-cream-700",
                icon: "text-cream-600",
              },
            };
            const colors = colorClasses[pkg.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full ${colors.bg} ${colors.border} border-2 hover:shadow-xl transition-all hover:scale-105`}>
                  <CardHeader>
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <CardTitle className={colors.text}>{pkg.name}</CardTitle>
                    <CardDescription className="text-sage-600 mt-2">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-terracotta-500 mt-1">•</span>
                          <span className="text-sage-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-sage-200">
                      {pkg.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          className="text-xs border-sage-300 text-sage-700"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

