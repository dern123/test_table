import Button from "@/ui/Button";
import IconButton from "@/ui/IconButton";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-30 h-14 w-full border-b border-white/10 bg-[#0f1220] text-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="text-sm flex items-center font-semibold gap-2">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0.5C7.16344 0.5 0 7.66344 0 16.5C8.83656 16.5 16 9.33656 16 0.5Z" fill="white"/>
            <path d="M16 32.5C24.8366 32.5 32 25.3366 32 16.5C23.1634 16.5 16 23.6634 16 32.5Z" fill="white"/>
            <path d="M16 0.5C24.8366 0.5 32 7.66344 32 16.5C23.1634 16.5 16 9.33656 16 0.5Z" fill="#002ED3"/>
            <path d="M16 32.5C7.16344 32.5 -7.72516e-07 25.3366 0 16.5C8.83656 16.5 16 23.6634 16 32.5Z" fill="#002ED3"/>
            </svg>
            Payverse</div>
        </div>
        <button className="rounded-full bg-white/10 p-1">‹</button>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="secondary">Book a Call</Button>
          <IconButton aria-label="mail">✉️</IconButton>
          <IconButton aria-label="bell">🔔<span className="absolute right-1 top-1 inline-block size-2 rounded-full bg-red-500"/></IconButton>
          <div className="ml-2 flex items-center gap-2">
            <div className="size-8 rounded-full bg-white/20" />
            <div className="text-xs leading-tight">
              <div className="font-semibold">Martin Sinclair</div>
              <div className="text-white/70">Startup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}