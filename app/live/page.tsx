import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Live" subtitle="Siaran Islami dan daftar channel live."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/live/masjid" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Masjid Live</div><p className="mt-2 text-sm text-zinc-400">Tempatkan URL stream pilihan Anda.</p></a><a href="/live/channels" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Channel</div><p className="mt-2 text-sm text-zinc-400">Daftar channel Islami.</p></a></div><AdSlot/></>;
}