'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header({ onSearch, genres, activeGenre, setGenre }:
 { onSearch:(q:string)=>void, genres:string[], activeGenre:string, setGenre:(g:string)=>void }) {
  const [q, setQ] = useState('')
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-bg/70 border-b border-white/10">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 no-underline text-white">
          <div className="w-7 h-7 rounded-lg shadow-glow"
               style={{background:'linear-gradient(135deg,#ef4444,#dc2626)'}}/>
          <div className="font-extrabold tracking-wide text-lg">MovieNest</div>
        </Link>
        <span className="badge">Preview</span>
        <div className="flex-1"/>
        <div className="flex items-center gap-2 bg-soft border border-white/10 rounded-xl px-3 py-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.2-4.2" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="11" cy="11" r="7" stroke="#a1a1aa" strokeWidth="2"/>
          </svg>
          <input
            value={q}
            onChange={(e)=>{ setQ(e.target.value); onSearch(e.target.value) }}
            placeholder="Search movies…"
            className="bg-transparent outline-none w-56 sm:w-72"
          />
        </div>
        <div className="hidden md:flex gap-2">
          {['All', ...genres].map(g=> (
            <button key={g}
              onClick={()=>setGenre(g)}
              className={`chip ${activeGenre===g ? 'chip-active':''}`}>{g}</button>
          ))}
        </div>
      </div>
    </header>
  )
}
