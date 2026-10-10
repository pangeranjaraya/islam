import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Privacy" subtitle="Penjelasan ringkas penggunaan data dan layanan."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/privacy" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Firebase</div><p className="mt-2 text-sm text-zinc-400">Data akun mengikuti konfigurasi Firebase Anda.</p></a><a href="/privacy" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Lokasi</div><p className="mt-2 text-sm text-zinc-400">Permission lokasi hanya digunakan untuk fitur terkait.</p></a></div><AdSlot/></>;
}