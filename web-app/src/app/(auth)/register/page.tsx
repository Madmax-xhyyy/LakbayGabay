"use client";

import Link from "next/link";
import { Mail, Lock, User, Bus } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md">
      <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
        <Bus className="h-6 w-6" />
      </div>

      <h1 className="text-center text-2xl font-semibold tracking-tight">
        Create your account
      </h1>

      <p className="mt-1 text-center text-sm text-muted-foreground">
        Join the LakbayGabay commuter community.
      </p>

      <form
        className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field icon={User} label="Full name" placeholder="Juan dela Cruz" />
        <Field icon={Mail} label="Email" type="email" placeholder="you@example.com" />
        <Field
          icon={Lock}
          label="Password"
          type="password"
          placeholder="At least 8 characters"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Create account
        </button>

        <p className="text-center text-sm text-muted-foreground">
          Already have one?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Log in
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
        <input
          {...rest}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
    </label>
  );
}