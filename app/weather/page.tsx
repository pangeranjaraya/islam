import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Cuaca" subtitle="Informasi cuaca berdasarkan lokasi."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/weather" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Kondisi</div><p className="mt-2 text-sm text-zinc-400">Data cuaca dapat disambungkan ke API pilihan.</p></a><a href="/location" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Lokasi</div><p className="mt-2 text-sm text-zinc-400">Atur lokasi untuk hasil lebih relevan.</p></a></div><AdSlot/></>;
}