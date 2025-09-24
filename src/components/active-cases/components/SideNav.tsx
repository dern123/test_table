export default function SideNav({ active = "Active Cases" }: { active?: string }) {
  const links = ["My Companies", "My Requests", "Account Offer", "Active Cases", "Legal Advisor", "Information"];
  return (
    <nav className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-2">
            {links.map((l) => (
            <a key={l} href="#" data-active={l === active} className="block rounded-xl px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 data-[active=true]:bg-neutral-200 dark:data-[active=true]:bg-neutral-700 data-[active=true]:font-semibold">
                {l}
            </a>
            ))}
        </div>
    </nav>
  );
}
