import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Lokasi" subtitle="Pengaturan lokasi untuk shalat, qibla, cuaca, dan masjid."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/location" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Permission</div><p className="mt-2 text-sm text-zinc-400">Izinkan akses lokasi pada perangkat.</p></a><a href="/location" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Fallback</div><p className="mt-2 text-sm text-zinc-400">Lokasi manual dapat digunakan jika permission ditolak.</p></a></div><AdSlot/></>;
}