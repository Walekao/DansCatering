"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar as CalendarIcon, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

type AvailabilityStatus = "open" | "limited" | "full";

interface DateAvailability {
  date: Date;
  status: AvailabilityStatus;
  slotsLeft?: number;
  isLowTraffic?: boolean;
}

// Mock data for availability
const mockAvailability: DateAvailability[] = [
  // Green dates (open)
  ...Array.from({ length: 15 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 5);
    return {
      date,
      status: "open" as AvailabilityStatus,
      isLowTraffic: date.getDay() === 2, // Tuesdays
    };
  }),
  // Yellow dates (limited)
  ...Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 20);
    return {
      date,
      status: "limited" as AvailabilityStatus,
      slotsLeft: 1,
    };
  }),
  // Red dates (full)
  ...Array.from({ length: 8 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 25);
    return {
      date,
      status: "full" as AvailabilityStatus,
    };
  }),
];

export function AvailabilityCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
  const [selectedAvailability, setSelectedAvailability] = React.useState<DateAvailability | null>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const getDateAvailability = (date: Date): DateAvailability | null => {
    const dateStr = format(date, "yyyy-MM-dd");
    return (
      mockAvailability.find((avail) => format(avail.date, "yyyy-MM-dd") === dateStr) || null
    );
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    const availability = getDateAvailability(date);
    setSelectedAvailability(availability);
  };

  const getStatusColor = (status: AvailabilityStatus) => {
    switch (status) {
      case "open":
        return "bg-green-500 hover:bg-green-600";
      case "limited":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "full":
        return "bg-red-500 hover:bg-red-600";
    }
  };

  const getStatusBadge = (status: AvailabilityStatus) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-500 text-white">Open</Badge>;
      case "limited":
        return <Badge className="bg-yellow-500 text-white">Limited</Badge>;
      case "full":
        return <Badge className="bg-red-500 text-white">Full</Badge>;
    }
  };

  const modifiers = {
    open: (date: Date) => {
      const avail = getDateAvailability(date);
      return avail?.status === "open";
    },
    limited: (date: Date) => {
      const avail = getDateAvailability(date);
      return avail?.status === "limited";
    },
    full: (date: Date) => {
      const avail = getDateAvailability(date);
      return avail?.status === "full";
    },
    lowTraffic: (date: Date) => {
      const avail = getDateAvailability(date);
      return avail?.isLowTraffic === true;
    },
  };

  const modifiersClassNames = {
    open: "bg-green-100 hover:bg-green-200 text-green-900 font-semibold",
    limited: "bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold",
    full: "bg-red-100 hover:bg-red-200 text-red-900 font-semibold",
    lowTraffic: "ring-2 ring-terracotta-400 ring-offset-2",
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          Check Availability
        </CardTitle>
        <CardDescription>
          Select a date to see availability and book your event
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 lg:flex-[1.5]">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              modifiers={modifiers}
              modifiersClassNames={modifiersClassNames}
              numberOfMonths={isDesktop ? 2 : 1}
              className="rounded-md border w-full"
              classNames={{
                months: "flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center mb-4",
                caption_label: "text-base lg:text-lg font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-8 w-8 lg:h-10 lg:w-10",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-9 h-9 lg:w-12 lg:h-12 font-normal text-xs lg:text-sm flex items-center justify-center",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 lg:h-14 lg:w-14 text-center text-sm lg:text-base p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 lg:h-14 lg:w-14 p-0 font-normal aria-selected:opacity-100 text-sm lg:text-base",
                day_range_end: "day-range-end",
                day_selected:
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside:
                  "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle:
                  "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
            />
          </div>
          {selectedDate && selectedAvailability && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 lg:flex-[0.8] space-y-4"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{format(selectedDate, "EEEE, MMMM d, yyyy")}</CardTitle>
                    {getStatusBadge(selectedAvailability.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedAvailability.isLowTraffic && (
                    <div className="bg-terracotta-50 border border-terracotta-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-terracotta-500 text-white">Community Partner Special</Badge>
                      </div>
                      <p className="text-sm text-terracotta-800 font-medium">
                        Book Tuesday for 15% off!
                      </p>
                    </div>
                  )}
                  {selectedAvailability.status === "open" && (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        High availability on this date. Perfect for your event!
                      </p>
                      <Button className="w-full" size="lg">
                        Book This Date
                      </Button>
                    </div>
                  )}
                  {selectedAvailability.status === "limited" && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-yellow-700">
                        <AlertCircle className="h-4 w-4" />
                        <p className="text-sm font-medium">
                          Only {selectedAvailability.slotsLeft} slot left!
                        </p>
                      </div>
                      <Button className="w-full" size="lg" variant="outline">
                        Book Now - Limited Availability
                      </Button>
                    </div>
                  )}
                  {selectedAvailability.status === "full" && (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        This date is fully booked. Join our waitlist to be notified of cancellations.
                      </p>
                      <Button className="w-full" size="lg" variant="secondary">
                        Join Waitlist
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span>Open - High Availability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-500"></div>
            <span>Limited - Few Slots Remaining</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500"></div>
            <span>Full - Join Waitlist</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

