import Link from 'next/link';
import { ruleLabel } from '@/lib/rules';
export default function RankingCard({ record, index }: { record: any; index: number }) {
  return <Link href={`/players/${record.player.id}`} className="glass block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:shadow-glow">
    <div className="flex items-center gap-4">
      <div className="w-10 text-center text-xl font-black text-zinc-500">#{index + 1}</div>
      <img src={record.weapon.imageUrl ?? 'https://placehold.co/128'} alt="weapon" className="h-14 w-14 rounded-xl object-cover ring-1 ring-zinc-700" />
      <div className="min-w-0 flex-1">
        <div className="truncate text-lg font-black text-white">{record.player.name}<span className="ml-1 text-sm text-zinc-500">#{record.player.code}</span></div>
        <div className="truncate text-sm text-zinc-400">{record.weapon.name} / {record.weapon.type} / {ruleLabel(record.rule)}</div>
      </div>
      <div className="text-right"><div className="text-2xl font-black text-cyan-300">{record.highestXp.toFixed(1)}</div><div className="text-xs text-zinc-500">最高順位 {record.bestRank}</div></div>
    </div>
  </Link>;
}
