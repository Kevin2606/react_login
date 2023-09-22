
export const Posts = () => {
  return (
    <div className="w-full p-2">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center mt-5 font-bold tracking-tight text-3xl sm:text-4xl">Productos</h1>
        <p className="text-center mt-2 text-lg leading-8 text-zinc-200/70"> Productos de la tienda Cazarte</p>
      </div>
      <div className="mx-auto mt-5 p-2 grid max-2xl grid-cols-1 gap-x-8 gap-y-8 sm:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* CARDS */}
        <div className="w-full rounded bg-zinc-200/10">
          <div className="card-body">
            <span className="text-indigo-500"></span>
            <h2 className="card-header">Papel higienico</h2>
            <p className="text-content2">Papel higienico para tu colita</p>
            <div className="w-dull">
              <span className="badge text-indigo-400/70">Disponible: 200</span>
              <span className="badge text-indigo-400/70">Precio: 1900</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}