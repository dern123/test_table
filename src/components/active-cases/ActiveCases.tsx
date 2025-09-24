"use client";

import { useMemo, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import CasesTable from "./components/CasesTable";
import CasesCards from "./components/CasesCards";
import { SEED } from "../../data/data";
import { ActiveCase, CaseType } from "../../types/types";
import type { ActionType } from "./components/CasesTable";

export default function ActiveCases() {
  const [category, setCategory] = useState<CaseType | "All">("Bank Account");
  const [rows, setRows] = useState<ActiveCase[]>(SEED);

  const filtered = useMemo(() => {
    if (category === "All") return rows;
    return rows.filter((r) => r.type === category);
  }, [rows, category]);

  function handleAction(id: string, action: ActionType) {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        let status = r.status;
        if (action === "Apply") status = "Applied";
        if (action === "Dispute") status = "In process";
        if (action === "Flow") status = "Reviewed";
        return { ...r, status };
      })
    );
  }

  // NOTE: Topbar + SideNav now live in app/(dashboard)/layout.tsx
  // This component renders only the page content.
  return (
    <>
      <Header />
      <Tabs value={category} onChange={setCategory} />
      <CasesTable rows={filtered} onAction={handleAction} />
      <CasesCards rows={filtered} onAction={handleAction} />
    </>
  );
}
