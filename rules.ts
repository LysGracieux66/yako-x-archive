export const RULES = [
  { id: 'area', label: 'エリア' },
  { id: 'yagura', label: 'ヤグラ' },
  { id: 'hoko', label: 'ホコ' },
  { id: 'asari', label: 'アサリ' }
] as const;
export const WEAPON_TYPES = ['シューター','ローラー','チャージャー','ブラスター','スロッシャー','スピナー','マニューバー','シェルター','ワイパー','ストリンガー','フデ'] as const;
export function ruleLabel(rule: string) { return RULES.find(r => r.id === rule)?.label ?? rule; }
