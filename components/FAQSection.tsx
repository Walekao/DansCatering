"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can book Dan's Legacy Catering?",
    answer:
      "We prioritize bookings from non-profits, charities, and community organizations. However, we also welcome corporate events and private celebrations. Corporate bookings are subject to availability, as priority is given to our non-profit partners.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 weeks in advance, especially for larger events. However, we understand that community organizations sometimes need last-minute catering, and we'll do our best to accommodate when possible. Check our availability calendar for real-time openings.",
  },
  {
    question: "What is the Community Partner Special?",
    answer:
      "Tuesdays are typically our lowest-traffic days. To help fill our calendar and support our community partners, we offer a 15% discount on all Tuesday bookings for non-profit and community organizations. This helps us optimize capacity while making our services even more accessible.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Absolutely! All our menu packages offer halal options, vegetarian-friendly choices, and gluten-free alternatives. When you submit your inquiry, please let us know about any specific dietary requirements, and we'll work with you to ensure everyone can enjoy the meal.",
  },
  {
    question: "What's included in each menu package?",
    answer:
      "Each package is designed to be a complete meal solution. The Comfort Feast includes a main protein, sides, and dessert. The Continental includes sandwiches, salads, soup, and accompaniments. The Global Table includes a main dish, rice, bread, and appetizers. All packages are designed to serve groups and can be scaled to your guest count.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "If your preferred date shows as 'Full' (red), you can join our waitlist. If a cancellation occurs, we'll contact waitlisted clients in order of request. There's no obligation - you can decline if the timing no longer works for you.",
  },
  {
    question: "What is the minimum order size?",
    answer:
      "We typically require a minimum of 20 guests to make an event viable. However, we understand that smaller community gatherings are important too. Contact us directly if you have a smaller group, and we'll see if we can accommodate you.",
  },
  {
    question: "How do you handle payment?",
    answer:
      "We accept various payment methods including credit cards, checks, and can work with purchase orders for established non-profit partners. A deposit is typically required to secure your date, with the balance due closer to the event date.",
  },
  {
    question: "Do you provide serving staff?",
    answer:
      "Yes! We can provide professional serving staff for your event. This is an additional service that can be discussed during the booking process. Our staff are trained youth from our program, providing them with valuable work experience.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the greater metropolitan area. Delivery and service areas can be discussed during the booking process. For events outside our standard service area, additional travel fees may apply.",
  },
  {
    question: "How does booking support youth job training?",
    answer:
      "100% of proceeds from Dan's Legacy Catering go directly to funding our job training programs for at-risk youth. When you book with us, you're not just getting great food - you're providing wage-based training opportunities, mentorship, and career pathways for young people in our community.",
  },
  {
    question: "Can I customize a menu package?",
    answer:
      "While our three packages are designed to streamline operations and keep costs accessible, we're happy to discuss modifications based on your needs and budget. Please include any special requests in your inquiry form, and we'll work with you to create the perfect menu for your event.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Everything you need to know about booking with Dan's Legacy Catering
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className={cn(
                  "border-2 transition-all cursor-pointer",
                  openIndex === index
                    ? "border-terracotta-200 shadow-lg"
                    : "border-sage-100 hover:border-sage-200"
                )}
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-0">
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="font-semibold text-sage-900 text-lg pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-terracotta-600 flex-shrink-0 transition-transform",
                        openIndex === index && "transform rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-sage-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

