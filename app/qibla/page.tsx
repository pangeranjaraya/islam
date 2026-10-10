import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Qibla" subtitle="Halaman arah kiblat dengan fallback kompas."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/qibla" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Arah Kiblat</div><p className="mt-2 text-sm text-zinc-400">Gunakan sensor perangkat bila tersedia.</p></a><a href="/qibla" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Kalibrasi</div><p className="mt-2 text-sm text-zinc-400">Gerakkan perangkat membentuk angka delapan bila kompas kurang stabil.</p></a></div><AdSlot/></>;
}