import { ActiveCase } from "../../../types/types";
import StatusBadge from "./StatusBadge";
import Button from "@/ui/Button";
import IconButton from "@/ui/IconButton";
import { PencilIcon, TimeIcon } from "@/ui/icons";

export type ActionType = "Details" | "Flow" | "Dispute" | "Apply";

export default function CasesTable({ rows, onAction }: { rows: ActiveCase[]; onAction: (id: string, action: ActionType) => void; }) {
  return (
    <div className="relative hidden md:block overflow-x-auto rounded-2xl bg-white shadow-card">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#5E5CE6]" />
      <table className="min-w-full divide-y divide-neutral-200">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-neutral-500">
            <th className="px-5 py-3 font-semibold">Acct Name</th>
            <th className="px-5 py-3 font-semibold">Country</th>
            <th className="px-5 py-3 font-semibold">Type</th>
            <th className="px-5 py-3 font-semibold">Open Fee</th>
            <th className="px-5 py-3 font-semibold">Incoming Fee</th>
            <th className="px-5 py-3 font-semibold">Outgoing Fee</th>
            <th className="px-5 py-3 font-semibold">Exp. Time</th>
            <th className="px-5 py-3 font-semibold">Status</th>
            <th className="px-5 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 text-sm">
          {rows.map((r) => {
            const showFlow = r.status === 'Reviewed';
            const showDispute = r.status === 'Declined';
            const applyDisabled = r.status !== 'Declined' && r.status !== 'Applied';
            const inProcess = r.status === "In process" || r.status === 'Reviewed';

            return (
              <tr key={r.id} className="group hover:bg-neutral-50">
                <td className="px-5 py-4 font-medium">{r.accountName}</td>
                <td className="px-5 py-4">{r.country}</td>
                <td className="px-5 py-4">{r.type}</td>
                <td className="px-5 py-4">{r.openFee}</td>
                <td className="px-5 py-4">{r.incomingFee}</td>
                <td className="px-5 py-4">{r.outgoingFee}</td>
                <td className="px-5 py-4">{r.expTime}</td>
                <td className="px-5 py-4"><StatusBadge status={r.status} /></td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Button variant="link" size="sm" onClick={() => onAction(r.id, 'Details')}>Details</Button>
                    <IconButton aria-label="Edit" onClick={() => onAction(r.id, 'Details')}><PencilIcon className="stroke-[#305DFF] fill-[#305DFF]"/></IconButton>
                    <IconButton aria-label="View" onClick={() => onAction(r.id, 'Details')}><TimeIcon/></IconButton>
                    {showFlow && (
                      <Button variant="ghost" size="sm" onClick={() => onAction(r.id, 'Flow')}>Flow</Button>
                    )}
                    {showDispute && (
                      <Button variant="secondary" size="sm" onClick={() => onAction(r.id, 'Dispute')}>Dispute</Button>
                    )}
                    {!showFlow && !showDispute && inProcess && (
                      <Button variant="primary" size="sm" onClick={() => onAction(r.id, 'Apply')}>Apply</Button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}