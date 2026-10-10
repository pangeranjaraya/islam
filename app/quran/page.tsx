import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { AdSlot } from "@/components/AdSlot";
export default function Page(){
  return <><PageHeader title="Al-Qur'an" subtitle="Daftar surah, pencarian, bookmark, dan riwayat."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><a href="/quran/surah" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">114 Surah</div><p className="mt-2 text-sm text-zinc-400">Navigasi seluruh surah Al-Qur'an.</p></a><a href="/quran/search" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Pencarian</div><p className="mt-2 text-sm text-zinc-400">Cari surah dengan cepat.</p></a><a href="/quran/audio" className="glass rounded-3xl p-5 hover:border-emerald-500/30"><div className="font-bold">Audio</div><p className="mt-2 text-sm text-zinc-400">Masuk ke pemutar audio Qur'an.</p></a></div><AdSlot/></>;
}