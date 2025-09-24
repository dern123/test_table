import { CaseType } from "../../../types/types";

const colorMap: Record<CaseType, string> = {
  'Bank Account': 'text-bluex-600 data-[active=true]:border-bluex-600',
  'Acquiring Account': 'text-greenx-600 data-[active=true]:border-greenx-600',
  'Alternative Account': 'text-orangex-600 data-[active=true]:border-orangex-600',
  'Crypto Account': 'text-purplex-600 data-[active=true]:border-purplex-600',
};

const icon: Record<CaseType, React.ReactNode> = {
  'Bank Account': <span className="mr-1">🏦</span>,
  'Acquiring Account': <span className="mr-1">💳</span>,
  'Alternative Account': <span className="mr-1">💼</span>,
  'Crypto Account': <span className="mr-1">🪙</span>,
};

export default function Tabs({ value, onChange }: { value: CaseType | "All"; onChange: (v: CaseType | "All") => void;}) {
  const tabs: (CaseType | "All")[] = ["Bank Account", "Acquiring Account", "Alternative Account", "Crypto Account"];
  return (
    <div className="rounded-2xl bg-white p-2 shadow-card">
      <div className="flex w-full items-center gap-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button key={tab} data-active={value === tab} onClick={() => onChange(tab)}
            className={`relative whitespace-nowrap rounded-xl px-1 py-2 text-sm font-medium text-neutral-600 data-[active=true]:text-[#305DFF] hover:text-[#305DFF] ${colorMap[tab as CaseType]}`}>
            <span className="px-2">{icon[tab as CaseType]} {tab}</span>
            <span className="absolute left-0 right-0 -bottom-0.5 mx-2 h-0.5 border-b-2 border-transparent data-[active=true]:border-current"/>
          </button>
        ))}
      </div>
    </div>
  );
}