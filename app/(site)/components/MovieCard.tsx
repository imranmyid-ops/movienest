import Image from 'next/image'

type Movie = {
  id:number; title:string; year:number; genre:string; rating:number; img:string
}

export default function MovieCard({m}:{m:Movie}){
  return (
    <article className="card scroll-m-2">
      <div className="relative aspect-[2/3] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={m.img} alt={m.title} className="absolute inset-0 w-full h-full object-cover"/>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex gap-2 text-[11px] sm:text-xs text-white/90">
          <span className="px-2 py-0.5 rounded-full border border-white/30 bg-black/50">{m.genre}</span>
          <span className="px-2 py-0.5 rounded-full border border-white/30 bg-black/50">★ {m.rating}</span>
          <span className="px-2 py-0.5 rounded-full border border-white/30 bg-black/50">{m.year}</span>
        </div>
        <div className="mt-2 font-semibold text-sm sm:text-base">{m.title}</div>
        <div className="mt-2 flex gap-2">
          <button className="btn btn-primary text-xs sm:text-sm" onClick={()=>alert('Watch '+m.title)}>▶ Watch</button>
          <button className="btn btn-secondary text-xs sm:text-sm" onClick={()=>alert('Trailer '+m.title)}>▸ Trailer</button>
        </div>
      </div>
    </article>
  )
}
