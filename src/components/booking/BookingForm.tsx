"use client";

import { useActionState, useEffect } from "react";
import { submitBooking, type BookingState } from "@/app/actions/booking";
import { offers } from "@/content/site";

const initial: BookingState = { ok: false, message: "" };

export function BookingForm() {
  const [state, action, pending] = useActionState(submitBooking, initial);

  useEffect(() => {
    if (state.ok && state.whatsappHref) {
      window.open(state.whatsappHref, "_blank", "noopener,noreferrer");
    }
  }, [state]);

  return (
    <form action={action} className="mx-auto max-w-xl space-y-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-sea-deep/10">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Full name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-sea-deep/15 bg-foam px-3 py-2 outline-none focus:border-sea"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-sea-deep/15 bg-foam px-3 py-2 outline-none focus:border-sea"
        />
      </div>
      <div>
        <label htmlFor="flight" className="block text-sm font-medium text-ink">
          Flight type *
        </label>
        <select
          id="flight"
          name="flight"
          required
          className="mt-1 w-full rounded-lg border border-sea-deep/15 bg-foam px-3 py-2 outline-none focus:border-sea"
          defaultValue={offers.tandem.name}
        >
          <option value={offers.tandem.name}>{offers.tandem.name}</option>
          <option value={offers.premium.name}>{offers.premium.name}</option>
          <option value={offers.sunset.name}>{offers.sunset.name}</option>
          <option value="Gift voucher">Gift voucher</option>
          <option value="Group / corporate">Group / corporate</option>
          <option value="1-week tour">1-week tour</option>
          <option value="2-week adventure">2-week adventure</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-ink">
            Preferred date *
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="mt-1 w-full rounded-lg border border-sea-deep/15 bg-foam px-3 py-2 outline-none focus:border-sea"
          />
        </div>
        <div>
          <label htmlFor="passengers" className="block text-sm font-medium text-ink">
            Passengers
          </label>
          <input
            id="passengers"
            name="passengers"
            type="number"
            min={1}
            max={20}
            defaultValue={1}
            className="mt-1 w-full rounded-lg border border-sea-deep/15 bg-foam px-3 py-2 outline-none focus:border-sea"
          />
        </div>
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-ink">
          Approx. passenger weight (kg)
        </label>
        <input
          id="weight"
          name="weight"
          type="number"
          min={20}
          max={150}
          className="mt-1 w-full rounded-lg border border-sea-deep/15 bg-foam px-3 py-2 outline-none focus:border-sea"
        />
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-ink">
          Notes (cruise timing, hotel pickup, etc.)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="mt-1 w-full rounded-lg border border-sea-deep/15 bg-foam px-3 py-2 outline-none focus:border-sea"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-sea-deep px-6 py-3 text-sm font-semibold text-foam transition hover:bg-sea disabled:opacity-60"
      >
        {pending ? "Preparing…" : "Continue on WhatsApp"}
      </button>
      {state.message && (
        <p
          className={`text-sm ${state.ok ? "text-sea" : "text-sunset"}`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
