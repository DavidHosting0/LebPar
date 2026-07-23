"use server";

import { siteConfig } from "@/content/site";

export type BookingState = {
  ok: boolean;
  message: string;
  whatsappHref?: string;
};

export async function submitBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const flight = String(formData.get("flight") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const passengers = String(formData.get("passengers") ?? "").trim();
  const weight = String(formData.get("weight") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  if (!name || !flight || !date) {
    return {
      ok: false,
      message: "Please provide your name, preferred flight, and date.",
    };
  }

  const text = [
    `New LebPar booking request`,
    `Name: ${name}`,
    email ? `Email: ${email}` : null,
    `Flight: ${flight}`,
    `Date: ${date}`,
    passengers ? `Passengers: ${passengers}` : null,
    weight ? `Weight (kg): ${weight}` : null,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappHref = `https://wa.me/${siteConfig.whatsappE164}?text=${encodeURIComponent(text)}`;

  // Optional: forward to email/webhook when BOOKING_WEBHOOK_URL is set
  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          flight,
          date,
          passengers,
          weight,
          notes,
          source: "lebpar.com/booking",
        }),
      });
    } catch {
      // Non-blocking — WhatsApp remains the primary channel
    }
  }

  return {
    ok: true,
    message:
      "Request prepared. Finish on WhatsApp so we can confirm weather and timing.",
    whatsappHref,
  };
}
