import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Masjid" subtitle="Daftar dan pencarian masjid."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/mosques" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Sekitar Saya</div><p className="mt-2 text-sm text-zinc-400">Gunakan lokasi untuk menemukan masjid.</p></a><a href="/bookmarks" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Favorit</div><p className="mt-2 text-sm text-zinc-400">Simpan masjid pilihan.</p></a></div><AdSlot/></>;
}