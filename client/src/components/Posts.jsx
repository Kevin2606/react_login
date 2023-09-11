
export const Posts = () => {
  return (
    <div className="w-full p-2">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center mt-5 font-bold tracking-tight text-3xl sm:text-4xl">POSTS</h1>
        <p class="text-center mt-2 text-lg leading-8 text-zinc-200/70">Aqui debería ir una bonita descripción pero me da zZZ</p>
      </div>
      <div className="mx-auto mt-5 p-2 grid max-2xl grid-cols-1 gap-x-8 gap-y-8 sm:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* CARDS */}
        <div className="w-full rounded bg-zinc-200/10">
          <div className="card-body">
            <span className="text-indigo-500">Sevedol</span>
            <h2 className="card-header">PHP apesta mucho</h2>
            <p className="text-content2">No sé que escribir acá, asi que pondré cualquier bobada</p>
            <div className="w-dull">
              <span class="badge text-indigo-400/70">Programming</span>
              <span class="badge text-indigo-400/70">PHP</span>
            </div>
          </div>
        </div>

        <div className="w-full rounded bg-zinc-200/10">
          <div className="card-body">
            <span className="text-indigo-500">Sevedol</span>
            <h2 className="card-header">PHP apesta mucho</h2>
            <p className="text-content2">No sé que escribir acá, asi que pondré cualquier bobada</p>
            <div className="w-dull">
              <span class="badge text-indigo-400/70">Programming</span>
              <span class="badge text-indigo-400/70">PHP</span>
            </div>
          </div>
        </div>

        <div className="w-full rounded bg-zinc-200/10">
          <div className="card-body">
            <span className="text-indigo-500">Sevedol</span>
            <h2 className="card-header">PHP apesta mucho</h2>
            <p className="text-content2">No sé que escribir acá, asi que pondré cualquier bobada</p>
            <div className="w-dull">
              <span class="badge text-indigo-400/70">Programming</span>
              <span class="badge text-indigo-400/70">PHP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}