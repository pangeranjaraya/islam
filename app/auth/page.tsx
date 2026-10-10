import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Authentication" subtitle="Firebase Email, Google, dan Anonymous sign-in."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/auth" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Email</div><p className="mt-2 text-sm text-zinc-400">Form auth Firebase tersedia di modul client.</p></a><a href="/auth" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Google</div><p className="mt-2 text-sm text-zinc-400">OAuth Google Firebase.</p></a><a href="/auth" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Anonymous</div><p className="mt-2 text-sm text-zinc-400">Akses cepat tanpa akun.</p></a></div><AdSlot/></>;
}