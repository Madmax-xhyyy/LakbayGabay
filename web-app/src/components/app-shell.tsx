"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bus, MapPin, FileText, ShieldCheck, User } from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Search", icon: Bus },
  { to: "/routes", label: "Routes", icon: MapPin },
  { to: "/terminals", label: "Terminals", icon: MapPin },
  { to: "/reports", label: "My Reports", icon: FileText },
  { to: "/admin", label: "Admin", icon: ShieldCheck },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Bus className="h-5 w-5" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight">
                LakbayGabay
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Pampanga Transit
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* AUTH ACTIONS */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Log in
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <User className="h-4 w-4" />
              Sign up
            </Link>
          </div>
        </div>

        {/* MOBILE NAV */}
        <nav className="flex gap-1 overflow-x-auto border-t border-border px-3 py-2 md:hidden">
          {nav.map((item) => {
            const active = isActive(item.to);

            return (
              <Link
                key={item.to}
                href={item.to}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium ${
                  active
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 LakbayGabay · Community transit guide for Pampanga.</p>
            <p className="text-xs">Prototype — data is illustrative.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}