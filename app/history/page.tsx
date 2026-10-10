import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Riwayat" subtitle="Riwayat bacaan dan aktivitas terakhir."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/quran" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Terakhir Dibaca</div><p className="mt-2 text-sm text-zinc-400">Kembali ke bacaan sebelumnya.</p></a><a href="/history" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Aktivitas</div><p className="mt-2 text-sm text-zinc-400">Riwayat lokal perangkat.</p></a></div><AdSlot/></>;
}