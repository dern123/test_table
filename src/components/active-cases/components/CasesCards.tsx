import { ActiveCase } from "../../../types/types";
import StatusBadge from "./StatusBadge";
import Info from "./Info";
import { ActionType } from "./CasesTable";
import Button from "@/ui/Button";
import { PencilIcon, TimeIcon } from "@/ui/icons";
import IconButton from "@/ui/IconButton";

export default function CasesCards({ rows, onAction }: { rows: ActiveCase[]; onAction: (id: string, action: ActionType) => void; }) {
  return (
    <div className="md:hidden grid grid-cols-1 gap-3">
      {rows.map((r) => (
        <div key={r.id} className="rounded-2xl bg-white p-4 shadow-card">
          <div className=" items-start justify-between gap-2">
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
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button variant="link" size="sm" onClick={() => onAction(r.id, 'Details')}>Details</Button>
            <IconButton aria-label="Edit" onClick={() => onAction(r.id, 'Details')}><PencilIcon  className="stroke-[#305DFF] fill-[#305DFF]"/></IconButton>
            <IconButton aria-label="View" onClick={() => onAction(r.id, 'Details')}><TimeIcon/></IconButton>
            <Button variant="primary" size="sm" onClick={() => onAction(r.id, 'Apply')}>Apply</Button>
          </div>
        </div>
      ))}
    </div>
  );
}