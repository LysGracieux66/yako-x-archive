import type { IncomingRankingPlayer } from './saveXPowerSnapshot';

// 本番化するときは、この関数だけSplatNet 3取得処理に差し替える。
// 重要：Nintendoのログイン情報やトークンはDB保存せず、環境変数や安全なSecret管理に置く。
export async function fetchTop500Ranking(rule: IncomingRankingPlayer['rule']): Promise<IncomingRankingPlayer[]> {
  const now = new Date();
  const weapons = [
    ['4Kスコープ', '4k-scope', 'チャージャー'],
    ['ロングブラスター', 'long-blaster', 'ブラスター'],
    ['スプラシューター', 'splattershot', 'シューター'],
    ['ジムワイパー', 'splatana-wiper-deco', 'ワイパー'],
    ['バケットスロッシャー', 'slosher', 'スロッシャー']
  ] as const;
  return Array.from({ length: 60 }).map((_, i) => {
    const w = weapons[i % weapons.length];
    return {
      name: `YakoPlayer${String(i + 1).padStart(3, '0')}`,
      code: String(1000 + i),
      nameplateUrl: `https://placehold.co/480x96/111827/67e8f9?text=Yako+${i + 1}`,
      weaponName: w[0],
      weaponSlug: w[1],
      weaponType: w[2],
      weaponImageUrl: `https://placehold.co/128x128/18181b/ffffff?text=${encodeURIComponent(w[0].slice(0, 2))}`,
      rule,
      rank: i + 1,
      xp: Math.round((3100 - i * 4 + Math.random() * 25) * 10) / 10,
      server: 'yako',
      snapshotTime: now
    };
  });
}
