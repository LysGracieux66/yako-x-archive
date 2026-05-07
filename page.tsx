import { prisma } from '@/lib/prisma';
import { rankingQuerySchema } from '@/lib/validation';
import RankingCard from '@/components/RankingCard';
import RuleTabs from '@/components/RuleTabs';

export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const parsed = rankingQuerySchema.safeParse({ rule: sp.rule, limit: 100 });
  const rule = parsed.success ? parsed.data.rule : undefined;
  const records = await prisma.xHighScore.findMany({
    where: { server: 'yako', ...(rule ? { rule } : {}) },
    include: { player: true, weapon: true },
    orderBy: { highestXp: 'desc' },
    take: 100
  });
  return <main className="safe-x mx-auto max-w-7xl py-8">
    <section className="mb-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-6 shadow-glow">
      <p className="text-sm font-bold text-cyan-300">YAKO SERVER ONLY</p>
      <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">ヤコ鯖 Xマッチ<br />歴代XPアーカイブ</h1>
      <p className="mt-3 max-w-2xl text-zinc-400">1時間ごとの上位500位を保存し、武器・順位・XP・時刻を履歴化。アロメ鯖は除外。</p>
    </section>
    <RuleTabs active={rule} />
    <div className="mt-4 grid gap-3">{records.map((r, i) => <RankingCard key={r.id} record={r} index={i} />)}</div>
  </main>;
}
