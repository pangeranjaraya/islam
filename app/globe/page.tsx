import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Globe 3D" subtitle="Visual globe Islami untuk eksplorasi lokasi dan dunia."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/locations" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Earth View</div><p className="mt-2 text-sm text-zinc-400">Globe 3D siap dikembangkan dengan Three.js.</p></a><a href="/location" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Lokasi</div><p className="mt-2 text-sm text-zinc-400">Gunakan lokasi perangkat untuk konteks ibadah.</p></a><a href="/mosques" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Masjid</div><p className="mt-2 text-sm text-zinc-400">Cari masjid di sekitar lokasi.</p></a></div><AdSlot/></>;
}