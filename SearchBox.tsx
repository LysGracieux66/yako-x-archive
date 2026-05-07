'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function SearchBox() {
  const [q, setQ] = useState('');
  const router = useRouter();
  return <form className="flex min-w-0 gap-2" onSubmit={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(q)}`); }}>
    <input value={q} onChange={e => setQ(e.target.value)} placeholder="名前 / 番号で検索" className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2 text-base outline-none focus:border-cyan-300" />
    <button className="rounded-xl bg-cyan-300 px-4 py-2 font-bold text-zinc-950 active:scale-95">検索</button>
  </form>;
}
