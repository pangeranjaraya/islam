 "use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Globe2, Clock3, BookOpen, Compass, Heart, Settings, Menu, Radio, MoreHorizontal } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { useState } from "react";

const nav = [
  ["/home","Beranda",Home], ["/globe","Globe",Globe2], ["/shalat","Shalat",Clock3],
  ["/quran","Al-Qur'an",BookOpen], ["/qibla","Qibla",Compass], ["/live","Live",Radio],
  ["/doa","Doa",Heart], ["/settings","Settings",Settings]
] as const;

export function AppShell({children}:{children:React.ReactNode}) {
  const path = usePathname();
  const [open,setOpen]=useState(false);
  return <div className="min-h-screen bg-[#06110c]">
    <ParticleBackground/>
    <div className="relative z-10 flex min-h-screen">
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-emerald-900/30 bg-black/25 p-4">
        <div className="mb-7 px-3"><div className="text-xl font-black tracking-wide">NURUL <span className="gold">GLOBE</span></div><div className="text-xs text-zinc-500">Islamic Digital Companion</div></div>
        <nav className="space-y-1">{nav.map(([href,label,Icon])=><Link key={href} href={href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${path===href?"bg-emerald-500/15 text-emerald-300":"text-zinc-400 hover:bg-white/5 hover:text-white"}`}><Icon size={18}/>{label}</Link>)}</nav>
        <div className="mt-auto text-[11px] text-zinc-600 px-3">Moh. Panca Nur Bhatinn<br/>@caaxratdev</div>
      </aside>
      <main className="min-w-0 flex-1 pb-24 md:pb-6">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-[#06110c]/80 px-4 backdrop-blur-xl md:px-7">
          <button onClick={()=>setOpen(v=>!v)} className="rounded-xl p-2 text-zinc-300 md:hidden"><Menu size={22}/></button>
          <Link href="/home" className="font-bold md:hidden">NURUL <span className="gold">GLOBE</span></Link>
          <div className="ml-auto text-xs text-zinc-500">Islamic • Clean • Responsive</div>
        </header>
        {open && <div className="fixed inset-x-3 top-16 z-50 rounded-3xl glass p-3 md:hidden">{nav.map(([href,label,Icon])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="flex gap-3 rounded-xl p-3 text-sm text-zinc-300"><Icon size={18}/>{label}</Link>)}</div>}
        <div className="mx-auto w-full max-w-7xl p-4 md:p-7">{children}</div>
      </main>
    </div>
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-[#06110c]/90 p-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 gap-1">{nav.slice(0,5).map(([href,label,Icon])=><Link key={href} href={href} className={`flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] ${path===href?"text-emerald-300":"text-zinc-500"}`}><Icon size={18}/>{label}</Link>)}</div>
    </nav>
  </div>;
}