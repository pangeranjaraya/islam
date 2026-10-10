import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Support" subtitle="Bantuan, feedback, dan dukungan pengembang."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/support" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Feedback</div><p className="mt-2 text-sm text-zinc-400">Kirim masukan melalui kanal yang Anda tentukan.</p></a><a href="/about" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Developer</div><p className="mt-2 text-sm text-zinc-400">Moh. Panca Nur Bhatinn / @caaxratdev.</p></a></div><AdSlot/></>;
}