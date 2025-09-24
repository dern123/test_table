import { CaseStatus } from "../../../types/types";


const STYLES: Record<CaseStatus, string> = {
  Applied: 'bg-[#C7D2FE] text-[#3730A3] border border-[#C7D2FE]',
  'In process': 'bg-[#FFF6EE] text-[#FFA057] border border-[#FBBF24]',
  Reviewed: 'bg-[#D1FAE5] text-[#059669] border border-[#BBF7D0]',
  Declined: 'bg-[#FEE2E2] text-[#F87171] border border-[#FECACA]',
};

export default function StatusBadge({ status }: { status: CaseStatus }) {
  return <span className={`inline-flex items-center justify-center w-[90px] rounded-4xl rounded-pill px-3 py-1 text-xs font-medium ${STYLES[status]}`}>{status}</span>;
}