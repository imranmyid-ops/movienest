'use client'
import { useMemo, useState } from 'react'
import Header from './(site)/components/Header'
import Hero from './(site)/components/Hero'
import MovieCard from './(site)/components/MovieCard'
import movies from '../data/movies.json'

type Movie = { id:number; title:string; year:number; genre:string; rating:number; img:string }

export default function Page(){
  const GENRES = useMemo(()=>Array.from(new Set((movies as Movie[]).map(m=>m.genre))), [])
  const [q, setQ] = useState('')
  const [genre, setGenre] = useState('All')

  const filtered = (movies as Movie[]).filter(m => 
    (genre==='All' || m.genre===genre) &&
    m.title.toLowerCase().includes(q.trim().toLowerCase())
  )

  return (
    <div>
      <Header onSearch={setQ} genres={GENRES} activeGenre={genre} setGenre={setGenre}/>
      <main className="container">
        <Hero/>
        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl sm:text-2xl font-extrabold">Trending Now</h2>
            <div className="text-sm text-muted">
              { genre==='All' && q==='' ? 'Showing all' : `Showing ${filtered.length} result(s)`}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            { filtered.map(m => <MovieCard key={m.id} m={m}/>) }
          </div>
        </section>

        <Section title="Action • New & Hot" data={(movies as Movie[]).filter(m=>m.genre==='Action')}/>
        <Section title="Comedy • Feel Good" data={(movies as Movie[]).filter(m=>m.genre==='Comedy')}/>
        <Section title="Horror • Dark Nights" data={(movies as Movie[]).filter(m=>m.genre==='Horror')}/>
      </main>

      <footer className="text-center text-muted py-12">
        © {new Date().getFullYear()} MovieNest • Demo preview only
      </footer>
    </div>
  )
}

function Section({title, data}:{title:string, data:Movie[]}){
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg sm:text-xl font-extrabold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        { data.map(m => <MovieCard key={m.id} m={m}/>) }
      </div>
    </section>
  )
}
