"use client";

import Link from "next/link";
import { Mail, Lock, Bus } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md">
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
        <Bus className="h-6 w-6" />
      </div>

      <h1 className="text-center text-2xl font-semibold tracking-tight">
        Welcome back
      </h1>

      <p className="mt-1 text-center text-sm text-muted-foreground">
        Log in to report fares and track your contributions.
      </p>

      <form
        className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field icon={Mail} label="Email" type="email" placeholder="you@example.com" />
        <Field icon={Lock} label="Password" type="password" placeholder="••••••••" />

        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Log in
        </button>

        <p className="text-center text-sm text-muted-foreground">
          No account?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  ...rest
}: {
  icon: React.ElementType;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">
        {label}
      </span>

      <div className="mt-1 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <input {...rest} className="w-full bg-transparent text-sm outline-none" />
      </div>
    </label>
  );
}