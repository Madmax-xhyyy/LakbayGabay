"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  MapPin,
  Users,
  BadgeCheck,
  Bus,
} from "lucide-react";

import { routes, transportTypes } from "@/lib/mock-data";

export default function HomePage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");

  function onSearch(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (origin) params.set("from", origin);
    if (destination) params.set("to", destination);
    if (type) params.set("type", type);

    window.location.href = `/routes?${params.toString()}`;
  }

  const popular = routes.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/10 via-background to-accent/20 px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Community-driven · Pampanga
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Find your way across{" "}
            <span className="text-primary">Pampanga</span> — fares and routes
            in seconds.
          </h1>

          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Search jeepney, bus, and tricycle routes. See estimated fares,
            terminals, and stops — kept current by commuters like you.
          </p>
        </div>

        {/* SEARCH FORM */}
        <form
          onSubmit={onSearch}
          className="relative mt-8 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm sm:grid-cols-[1fr_1fr_auto_auto]"
        >
          <label className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
            <MapPin className="h-4 w-4 text-primary" />
            <input
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="From (e.g. San Fernando)"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>

          <label className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
            <MapPin className="h-4 w-4" />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="To (e.g. Angeles)"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl bg-muted/50 px-4 py-3 text-sm outline-none"
          >
            <option value="">All transport</option>
            {transportTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>

        {/* QUICK SUGGESTIONS */}
        <div className="relative mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span>Try:</span>

          {[
            { f: "San Fernando", t: "Angeles" },
            { f: "Apalit", t: "San Fernando" },
            { f: "Mabalacat", t: "Magalang" },
          ].map((s) => (
            <button
              key={s.f + s.t}
              onClick={() => {
                setOrigin(s.f);
                setDestination(s.t);
              }}
              className="rounded-full border border-border bg-background/60 px-3 py-1 hover:border-primary hover:text-foreground"
            >
              {s.f} → {s.t}
            </button>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { icon: Bus, label: "Routes mapped", value: "120+" },
          { icon: BadgeCheck, label: "Fares verified this month", value: "84" },
          { icon: Users, label: "Community reporters", value: "1.2k" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <Icon className="h-5 w-5 text-primary" />
            <p className="mt-3 text-3xl font-semibold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </section>

      {/* POPULAR ROUTES */}
      <section className="mt-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Popular routes</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Most searched this week.
            </p>
          </div>

          <Link href="/routes" className="text-sm font-medium text-primary hover:underline">
            Browse all →
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {popular.map((r) => (
            <Link
              key={r.id}
              href={`/routes/${r.id}`}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
                  {r.code}
                </span>
                <span className="text-xs text-muted-foreground">
                  {r.type}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold">{r.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {r.origin} → {r.destination}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Regular fare
                  </p>
                  <p className="text-base font-semibold">₱{r.regularFare}</p>
                </div>

                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}