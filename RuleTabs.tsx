import Link from 'next/link';
import { RULES } from '@/lib/rules';
export default function RuleTabs({ active }: { active?: string }) {
  return <div className="flex gap-2 overflow-x-auto py-2">
    <Link href="/" className={`shrink-0 rounded-full px-4 py-2 text-sm ${!active ? 'bg-cyan-300 text-zinc-950' : 'bg-zinc-900 text-zinc-300'}`}>総合</Link>
    {RULES.map(r => <Link key={r.id} href={`/?rule=${r.id}`} className={`shrink-0 rounded-full px-4 py-2 text-sm ${active === r.id ? 'bg-cyan-300 text-zinc-950' : 'bg-zinc-900 text-zinc-300'}`}>{r.label}</Link>)}
  </div>;
}
