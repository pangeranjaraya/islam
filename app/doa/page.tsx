import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Doa & Dzikir" subtitle="Koleksi doa harian dan dzikir dengan halaman yang mudah dibaca."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/doa/harian" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Doa Harian</div><p className="mt-2 text-sm text-zinc-400">Doa sebelum/sesudah aktivitas.</p></a><a href="/dzikir" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Dzikir</div><p className="mt-2 text-sm text-zinc-400">Dzikir pagi, petang, dan setelah shalat.</p></a><a href="/tasbih" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Tasbih</div><p className="mt-2 text-sm text-zinc-400">Penghitung dzikir digital.</p></a></div><AdSlot/></>;
}