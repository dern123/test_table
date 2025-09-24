"use client";

import React, { useMemo, useState } from "react";


// --- Types ---------------------------------------------------------------
type CaseStatus = "Applied" | "In process" | "Reviewed" | "Declined";
type CaseType = "Bank Account" | "Acquiring Account" | "Alternative Account" | "Crypto Account";

type ActiveCase = {
  id: string;
  accountName: string;
  country: string;
  type: CaseType;
  openFee: string; // keep as formatted string for now (e.g., "$200")
  incomingFee: string;
  outgoingFee: string;
  expTime: string; // e.g., "3-5 days"
  status: CaseStatus;
};

// --- Design helpers (adapt to your DS tokens) ---------------------------
const BADGE_STYLES: Record<CaseStatus, string> = {
  Applied:
    "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/30",
  "In process":
    "bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-400/30",
  Reviewed:
    "bg-green-50 text-green-700 ring-1 ring-inset ring-green-200 dark:bg-green-500/10 dark:text-green-300 dark:ring-green-400/30",
  Declined:
    "bg-red-50 text-red-700 ring-1 ring-inset ring-red-200 dark:bg-red-500/10 dark:text-red-300 dark:ring-red-400/30",
};

const CTA_BUTTON =
  "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm border border-black/5 hover:shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/10";

const TAB_BUTTON =
  "whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium data-[active=true]:bg-black data-[active=true]:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:data-[active=true]:bg-white dark:data-[active=true]:text-black";

const SIDE_LINK =
  "block rounded-xl px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 data-[active=true]:bg-neutral-200 dark:data-[active=true]:bg-neutral-700 data-[active=true]:font-semibold";

// --- Mock data -----------------------------------------------------------
const SEED: ActiveCase[] = [
  {
    id: "1",
    accountName: "Vertex Capital LTD",
    country: "UK",
    type: "Bank Account",
    openFee: "$200",
    incomingFee: "0.3%",
    outgoingFee: "0.5%",
    expTime: "5–7 days",
    status: "Applied",
  },
  {
    id: "2",
    accountName: "NovaPay s.r.o.",
    country: "CZ",
    type: "Acquiring Account",
    openFee: "$0",
    incomingFee: "1.2%",
    outgoingFee: "1.0%",
    expTime: "2–4 days",
    status: "In process",
  },
  {
    id: "3",
    accountName: "Astra Fintech",
    country: "LT",
    type: "Alternative Account",
    openFee: "$50",
    incomingFee: "0.2%",
    outgoingFee: "0.4%",
    expTime: "24–48h",
    status: "Reviewed",
  },
  {
    id: "4",
    accountName: "CryptoFlow",
    country: "EE",
    type: "Crypto Account",
    openFee: "$100",
    incomingFee: "0.15%",
    outgoingFee: "0.25%",
    expTime: "1–3 days",
    status: "Declined",
  },
  {
    id: "5",
    accountName: "Vertex Holdings",
    country: "CY",
    type: "Bank Account",
    openFee: "$300",
    incomingFee: "0.35%",
    outgoingFee: "0.55%",
    expTime: "7–10 days",
    status: "In process",
  },
];

// --- Small UI primitives -------------------------------------------------
function StatusBadge({ status }: { status: CaseStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs ${BADGE_STYLES[status]}`}>
      {status}
    </span>
  );
}

function Header() {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Vertex Finance</h1>
        <div className="text-sm text-neutral-500">Active Cases</div>
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-2">
          <div className="text-xs text-neutral-500">Type of Risk</div>
          <div className="text-sm font-medium">Medium</div>
        </div>
        <div className="flex gap-2">
          <button className={`${CTA_BUTTON}`}>Book a Call</button>
          <button className={`${CTA_BUTTON}`}>Legal Advisor</button>
        </div>
      </div>
    </header>
  );
}

function Tabs({
  value,
  onChange,
}: {
  value: CaseType | "All";
  onChange: (v: CaseType | "All") => void;
}) {
  const tabs: (CaseType | "All")[] = [
    "All",
    "Bank Account",
    "Acquiring Account",
    "Alternative Account",
    "Crypto Account",
  ];

  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          data-active={value === tab}
          className={TAB_BUTTON}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function SideNav({ active = "Active Cases" }: { active?: string }) {
  const links = [
    "My Companies",
    "My Requests",
    "Account Offer",
    "Active Cases",
    "Legal Advisor",
    "Information",
  ];
  return (
    <nav className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-2">
        {links.map((l) => (
          <a key={l} href="#" data-active={l === active} className={SIDE_LINK}>
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}

// --- Table (desktop) + Cards (mobile) -----------------------------------
function CasesTable({
  rows,
  onAction,
}: {
  rows: ActiveCase[];
  onAction: (id: string, action: "Details" | "Flow" | "Dispute" | "Apply") => void;
}) {
  return (
    <div className="hidden md:block overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
      <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
        <thead className="bg-neutral-50/50 dark:bg-neutral-900/40">
          <tr className="text-left text-sm text-neutral-500">
            <th className="px-4 py-3 font-medium">Account Name</th>
            <th className="px-4 py-3 font-medium">Country</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Open Fee</th>
            <th className="px-4 py-3 font-medium">Incoming Fee</th>
            <th className="px-4 py-3 font-medium">Outgoing Fee</th>
            <th className="px-4 py-3 font-medium">Exp. Time</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
              <td className="px-4 py-4 font-medium">{r.accountName}</td>
              <td className="px-4 py-4">{r.country}</td>
              <td className="px-4 py-4">{r.type}</td>
              <td className="px-4 py-4">{r.openFee}</td>
              <td className="px-4 py-4">{r.incomingFee}</td>
              <td className="px-4 py-4">{r.outgoingFee}</td>
              <td className="px-4 py-4">{r.expTime}</td>
              <td className="px-4 py-4"><StatusBadge status={r.status} /></td>
              <td className="px-4 py-4">
                <div className="flex flex-wrap gap-2">
                  {(["Details", "Flow", "Dispute", "Apply"] as const).map((a) => (
                    <button
                      key={a}
                      className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      onClick={() => onAction(r.id, a)}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CasesCards({
  rows,
  onAction,
}: {
  rows: ActiveCase[];
  onAction: (id: string, action: "Details" | "Flow" | "Dispute" | "Apply") => void;
}) {
  return (
    <div className="md:hidden grid grid-cols-1 gap-3">
      {rows.map((r) => (
        <div key={r.id} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-sm text-neutral-500">{r.type}</div>
              <div className="text-base font-semibold">{r.accountName}</div>
            </div>
            <StatusBadge status={r.status} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <Info label="Country" value={r.country} />
            <Info label="Exp. Time" value={r.expTime} />
            <Info label="Open Fee" value={r.openFee} />
            <Info label="Incoming Fee" value={r.incomingFee} />
            <Info label="Outgoing Fee" value={r.outgoingFee} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["Details", "Flow", "Dispute", "Apply"] as const).map((a) => (
              <button
                key={a}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800"
                onClick={() => onAction(r.id, a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-neutral-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

// --- Page component ------------------------------------------------------
export default function ActiveCasesModule() {
  const [category, setCategory] = useState<CaseType | "All">("All");
  const [rows, setRows] = useState<ActiveCase[]>(SEED);

  const filtered = useMemo(() => {
    if (category === "All") return rows;
    return rows.filter((r) => r.type === category);
  }, [rows, category]);

  function handleAction(
    id: string,
    action: "Details" | "Flow" | "Dispute" | "Apply"
  ) {
    // Example transitions — adjust to real business rules
    const next = setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        let status = r.status;
        if (action === "Apply") status = "Applied";
        if (action === "Dispute") status = "In process";
        if (action === "Flow") status = "Reviewed";
        if (action === "Details") status = r.status; // no-op for now
        return { ...r, status };
      })
    );
    return next;
  }

  return (
    <div className="min-h-dvh bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Header />

        <div className="mt-6 flex gap-6">
          <SideNav />

          <main className="flex-1 space-y-4">
            <Tabs value={category} onChange={setCategory} />

            {/* Table + Cards */}
            <CasesTable rows={filtered} onAction={handleAction} />
            <CasesCards rows={filtered} onAction={handleAction} />
          </main>
        </div>
      </div>
    </div>
  );
}

// --- How to use (README short) ------------------------------------------
// 1) Ensure Tailwind (or your DS classes) are available. If you use another DS,
//    swap classNames above for your tokens.
// 2) Create a page in Next.js (App Router):
//    - app/active-cases/page.tsx
//    - export { default } from "@/components/ActiveCasesModule"; (after moving this file there)
// 3) Replace mock SEED with API data and wire actions to your flows.
// 4) Tabs filter by `type`. Side nav is static placeholder.
