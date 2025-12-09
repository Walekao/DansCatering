"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const impactCards = [
  {
    icon: Users,
    title: "Social Impact",
    description: "Hiring us provides wage-based training for youth.",
    color: "text-sage-600",
    bgColor: "bg-sage-50",
    borderColor: "border-sage-200",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "We utilize surplus food to create gourmet meals, reducing waste.",
    color: "text-terracotta-600",
    bgColor: "bg-terracotta-50",
    borderColor: "border-terracotta-200",
  },
  {
    icon: DollarSign,
    title: "Economic Impact",
    description: "High-quality catering at accessible non-profit rates.",
    color: "text-cream-700",
    bgColor: "bg-cream-50",
    borderColor: "border-cream-200",
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            Triple Bottom Line
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Every event creates positive change across three dimensions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {impactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full ${card.bgColor} ${card.borderColor} border-2 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                    <CardTitle className={card.color}>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-sage-700">
                      {card.description}
                    </CardDescription>
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

