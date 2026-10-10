import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Bookmark" subtitle="Ayat, surah, doa, dan konten favorit."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/quran" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Qur'an</div><p className="mt-2 text-sm text-zinc-400">Bookmark bacaan.</p></a><a href="/doa" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Doa</div><p className="mt-2 text-sm text-zinc-400">Bookmark doa.</p></a></div><AdSlot/></>;
}