"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    organization: "Community Food Bank",
    role: "Event Coordinator",
    content:
      "Dan's Legacy provided exceptional catering for our annual fundraiser. The food was restaurant-quality, and knowing that our event supported youth job training made it even more meaningful. Our guests were impressed!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    organization: "Hope Shelter Network",
    role: "Program Director",
    content:
      "We've used Dan's Legacy for three events now. The 'Global Table' package was a huge hit with our diverse community. Professional service, delicious food, and a mission we're proud to support.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Park",
    organization: "Youth Mentorship Program",
    role: "Executive Director",
    content:
      "The Comfort Feast package was perfect for our volunteer appreciation dinner. The food was warm, hearty, and beautifully presented. Our volunteers felt truly valued, and the affordable pricing allowed us to host more people than we expected.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    organization: "Neighborhood Community Center",
    role: "Facilities Manager",
    content:
      "We booked on a Tuesday and got the Community Partner Special - what a great deal! The Continental package was ideal for our board meeting. Fresh, professional, and the dietary accommodations were handled seamlessly.",
    rating: 5,
  },
  {
    id: 5,
    name: "Maria Santos",
    organization: "Local Arts Collective",
    role: "Founder",
    content:
      "As a small non-profit, budget is always a concern. Dan's Legacy gave us wedding-quality food at prices we could actually afford. The team was responsive, flexible, and the food exceeded all expectations.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Kim",
    organization: "Senior Services Association",
    role: "Event Planner",
    content:
      "Our seniors loved the food, and we loved the mission. The halal and vegetarian options meant everyone could enjoy the meal together. It's rare to find this level of quality at non-profit rates.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            Trusted by Community Leaders
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            See what our partners say about working with Dan&apos;s Legacy Catering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-2 border-sage-100 hover:border-terracotta-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0">
                      <Quote className="h-5 w-5 text-terracotta-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sage-700 mb-4 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="border-t border-sage-100 pt-4">
                    <p className="font-semibold text-sage-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-sage-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-terracotta-600 font-medium">
                      {testimonial.organization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

