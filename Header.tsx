import Link from 'next/link';
import SearchBox from './SearchBox';
export default function Header() {
  return <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/55 backdrop-blur-xl safe-x">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-cyan-400/15 shadow-glow ring-1 ring-cyan-300/40" />
        <div><div className="font-black tracking-wide text-white">Yako X Archive</div><div className="text-xs text-zinc-400">ヤコ鯖限定 XP記録</div></div>
      </Link>
      <nav className="flex flex-wrap gap-2 text-sm text-zinc-300">
        <Link className="rounded-full px-3 py-1 hover:bg-zinc-800" href="/">ランキング</Link>
        <Link className="rounded-full px-3 py-1 hover:bg-zinc-800" href="/weapons">武器</Link>
        <Link className="rounded-full px-3 py-1 hover:bg-zinc-800" href="/login">管理</Link>
      </nav>
      <SearchBox />
    </div>
  </header>;
}
