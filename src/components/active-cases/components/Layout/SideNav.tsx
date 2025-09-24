"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/my-companie",   label: "My Companies" }, // якщо перейменуєш папку → "/my-companies"
  { href: "/my-requests",   label: "My Requests" },
  { href: "/account-offer", label: "Account Offer" },
  { href: "/active-cases",  label: "Active Cases" },
  { href: "/legal-advisor", label: "Legal Advisor" },
  { href: "/information",   label: "Information" },
] as const;

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block w-64 py-6 mt-4 shrink-0">
      <div className="sticky top-16 rounded-2xl bg-[#0b0d12] text-white p-3">
        {NAV.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block rounded-xl px-3 py-2 text-sm hover:bg-white/5"
            >
              <span className={`relative pl-6 ${active ? "font-semibold text-white" : "text-white/80"}`}>
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full ${
                    active ? "bg-[#2F6BFF]" : "bg-white/10"
                  }`}
                />
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
