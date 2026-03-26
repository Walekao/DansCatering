"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Lock, AlertCircle, Loader2 } from "lucide-react";

export function PinProtection({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Client-side PIN validation (PIN: 4497)
    const CORRECT_PIN = "4497";
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (pin !== CORRECT_PIN) {
      setError("Invalid PIN code. Please try again.");
      setPin("");
      setIsSubmitting(false);
      return;
    }

    // Store access in sessionStorage (24 hours)
    const expiresAt = new Date().getTime() + (24 * 60 * 60 * 1000);
    sessionStorage.setItem('pin_access', 'granted');
    sessionStorage.setItem('pin_access_expires', expiresAt.toString());

    // Success - unlock the page
    onUnlock();
    setIsSubmitting(false);
  };

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Lock className="h-6 w-6 text-sage-600" />
            Enter Access Code
          </DialogTitle>
          <DialogDescription>
            Please enter the PIN code to access this page.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="pin">PIN Code</Label>
            <Input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError("");
              }}
              placeholder="Enter PIN"
              className="text-center text-2xl tracking-widest font-mono"
              maxLength={4}
              autoFocus
              disabled={isSubmitting}
            />
          </div>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2"
            >
              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
              <p className="text-sm text-red-800">{error}</p>
            </motion.div>
          )}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white"
            disabled={isSubmitting || pin.length !== 4}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Lock className="mr-2 h-5 w-5" />
                Unlock
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

