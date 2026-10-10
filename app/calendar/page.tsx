import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Kalender Hijriah" subtitle="Kalender Hijriah dan konverter tanggal."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/calendar" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Hari Ini</div><p className="mt-2 text-sm text-zinc-400">Tampilkan tanggal Hijriah lokal.</p></a><a href="/calendar/convert" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Konverter</div><p className="mt-2 text-sm text-zinc-400">Konversi Gregorian ↔ Hijriah.</p></a></div><AdSlot/></>;
}