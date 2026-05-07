import { prisma } from './prisma';
import { cleanText } from './sanitize';

export type IncomingRankingPlayer = {
  name: string;
  code?: string;
  nameplateUrl?: string;
  weaponName: string;
  weaponSlug: string;
  weaponType: string;
  weaponImageUrl?: string;
  rule: 'area' | 'yagura' | 'hoko' | 'asari';
  rank: number;
  xp: number;
  server: 'yako' | 'arome' | string;
  snapshotTime: Date;
};

export async function saveXPowerSnapshot(data: IncomingRankingPlayer) {
  if (data.server !== 'yako') return { saved: false, reason: 'not_yako' as const };
  if (!Number.isFinite(data.xp) || data.xp < 0 || data.xp > 9999) return { saved: false, reason: 'invalid_xp' as const };
  if (!Number.isInteger(data.rank) || data.rank < 1 || data.rank > 500) return { saved: false, reason: 'invalid_rank' as const };

  const player = await prisma.player.upsert({
    where: { name_code_server: { name: cleanText(data.name), code: cleanText(data.code ?? '', 20), server: 'yako' } },
    update: { nameplateUrl: data.nameplateUrl ? cleanText(data.nameplateUrl, 500) : undefined },
    create: { name: cleanText(data.name), code: cleanText(data.code ?? '', 20), nameplateUrl: data.nameplateUrl ? cleanText(data.nameplateUrl, 500) : undefined, server: 'yako' }
  });

  const weapon = await prisma.weapon.upsert({
    where: { slug: cleanText(data.weaponSlug, 80) },
    update: { name: cleanText(data.weaponName), type: cleanText(data.weaponType), imageUrl: data.weaponImageUrl ? cleanText(data.weaponImageUrl, 500) : undefined },
    create: { name: cleanText(data.weaponName), slug: cleanText(data.weaponSlug, 80), type: cleanText(data.weaponType), imageUrl: data.weaponImageUrl ? cleanText(data.weaponImageUrl, 500) : undefined }
  });

  await prisma.xSnapshot.create({
    data: { playerId: player.id, weaponId: weapon.id, rule: data.rule, rank: data.rank, xp: data.xp, server: 'yako', snapshotTime: data.snapshotTime }
  });

  const high = await prisma.xHighScore.findUnique({
    where: { playerId_weaponId_rule_server: { playerId: player.id, weaponId: weapon.id, rule: data.rule, server: 'yako' } }
  });

  let highUpdated = false;
  if (!high || data.xp > high.highestXp) {
    highUpdated = true;
    await prisma.xHighScore.upsert({
      where: { playerId_weaponId_rule_server: { playerId: player.id, weaponId: weapon.id, rule: data.rule, server: 'yako' } },
      update: { highestXp: data.xp, bestRank: data.rank, achievedAt: data.snapshotTime },
      create: { playerId: player.id, weaponId: weapon.id, rule: data.rule, highestXp: data.xp, bestRank: data.rank, server: 'yako', achievedAt: data.snapshotTime }
    });
  }
  return { saved: true, highUpdated };
}
