import Button from "@/ui/Button";
export default function Header() {
  return (
    <header className="rounded-2xl bg-white p-4 shadow-card">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Vertex Finance</h1>
          <p className="text-sm text-neutral-500">Be Compliant! Enhance your profile to get better bank rates!</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-pill border border-orangex-200 bg-orangex-50 px-3 py-1 text-xs font-medium text-orangex-600">
            <span className="inline-block size-2 rounded-full bg-orangex-500"/> Medium
          </div>
          <Button variant="primary">Legal Advisor</Button>
        </div>
      </div>
    </header>
  );
}