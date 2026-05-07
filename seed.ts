import { fetchTop500Ranking } from '../lib/fetchXRanking';
import { saveXPowerSnapshot } from '../lib/saveXPowerSnapshot';
import { RULES } from '../lib/rules';

async function main() {
  for (const rule of RULES) {
    const rows = await fetchTop500Ranking(rule.id);
    for (const row of rows) await saveXPowerSnapshot(row);
  }
  console.log('seed completed');
}
main().catch(e => { console.error(e); process.exit(1); });
