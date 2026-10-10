import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Terms" subtitle="Ketentuan penggunaan aplikasi."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/terms" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Penggunaan</div><p className="mt-2 text-sm text-zinc-400">Gunakan aplikasi secara bertanggung jawab.</p></a><a href="/terms" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Layanan Eksternal</div><p className="mt-2 text-sm text-zinc-400">Ketersediaan API/stream dapat berubah.</p></a></div><AdSlot/></>;
}