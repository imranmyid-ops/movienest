export default function Hero(){
  return (
    <section className="rounded-2xl overflow-hidden relative h-[360px] sm:h-[420px] shadow-2xl border border-white/10 mx-4 sm:mx-6 mt-4"
      style={{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.85)),
        url(https://picsum.photos/1600/800?random=71)`, backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="absolute inset-0"/>
      <div className="absolute bottom-0 p-6 max-w-2xl">
        <div className="text-xs tracking-widest uppercase text-muted">Featured</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1 mb-2">The Night Run</h1>
        <p className="text-sm sm:text-base text-muted mb-3">
          A daring crew plans the ultimate rooftop escape above a neon-lit city. Will the getaway go as planned?
        </p>
        <div className="flex gap-2 flex-wrap">
          <button className="btn btn-primary" onClick={()=>alert('Demo: Watch')}>▶ Watch</button>
          <button className="btn btn-secondary" onClick={()=>alert('Demo: Trailer')}>▸ Trailer</button>
        </div>
      </div>
    </section>
  )
}
