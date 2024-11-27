"use client";

import { Check, Mail, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:priscillaoclark@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="w-full py-10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Our dedicated support team is here to help you and your furry
                  friend make beautiful music together.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>24/7 Support</p>
                <p className="text-muted-foreground text-sm">
                  Our team is always here to help you and your pet
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Expert Guidance</p>
                <p className="text-muted-foreground text-sm">
                  Get help from certified pet music specialists
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Quick Response Time</p>
                <p className="text-muted-foreground text-sm">
                  Usually within 24 hours or less
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <form
              onSubmit={handleSubmit}
              className="rounded-md w-full max-w-sm flex flex-col border p-8 gap-4"
            >
              <p className="font-medium">Contact Support</p>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="gap-2 w-full bg-[#7EB9B2] text-white hover:bg-[#7EB9B2]/90"
              >
                Send Message <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
