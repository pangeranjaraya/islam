import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Profil" subtitle="Profil akun dan status sinkronisasi Firebase."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/auth" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Email</div><p className="mt-2 text-sm text-zinc-400">Login email Firebase.</p></a><a href="/auth" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Google</div><p className="mt-2 text-sm text-zinc-400">Login Google Firebase.</p></a><a href="/auth" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Anonim</div><p className="mt-2 text-sm text-zinc-400">Masuk anonim untuk penggunaan cepat.</p></a></div><AdSlot/></>;
}