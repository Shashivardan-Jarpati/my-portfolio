import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);

    // fake delay to show toast
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="px-4 md:px-16 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        {/* Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-slate-300 mb-6 text-sm md:text-base">
            Whether it&apos;s ML, data science or building intelligent systems,
            I&apos;m always open to interesting opportunities and
            collaborations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-slate-300 mb-1 block">
                Name
              </label>
              <Input
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1 block">
                Email
              </label>
              <Input
                value={form.email}
                onChange={handleChange("email")}
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1 block">
                Message
              </label>
              <Textarea
                rows={4}
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Tell me a bit about what you have in mind..."
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="mt-2 flex items-center gap-2"
            >
              {submitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send message
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Contact info card */}
        <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="text-emerald-400" />
              Contact Details
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Prefer email or LinkedIn? You can also reach out directly using
              the details below.
            </p>

            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+91-XXXXXXXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin size={20} />
                <a
                  href="https://linkedin.com/in/shashivardan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/shashivardan
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            <p>Typically responds within 24–48 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}