import { Link } from "react-router-dom"

function App() {

  return (
    <main className="px-5 flex flex-col justify-center items-center min-h-screen font-inter">
    <section className="bg-hsl-12 w-full max-w-[375px] p-8 rounded-lg">
        <div className="flex flex-col items-center gap-y-6">
          <img src="avatar-jessica.jpeg" alt=""
           className="rounded-full" width={85} />
           <div className="flex flex-col items-center gap-y-2">
          <h1 className="text-hsl-100 text-2xl">Jessica Randall</h1>
          <h2 className="text-hsl-green font-bold text-[13px]">London, United Kingdom</h2>
           </div>
          <p className="text-sm text-white/70 pb-6">&quot;Front-end developer and avid reader.&quot;</p>
        </div>
        <div className="flex flex-col items-center text-center text-hsl-100 font-bold
        gap-y-3 text-[14px]">
          <Link to="#" className="bg-hsl-20 w-full py-3 rounded-lg hover:bg-hsl-green hover:text-hsl-12 transition-colors duration-300">GitHub</Link>
          <Link to="#" className="bg-hsl-20 w-full py-3 rounded-lg hover:bg-hsl-green hover:text-hsl-12 transition-colors duration-300">Frontend Mentor</Link>
          <Link to="#" className="bg-hsl-20 w-full py-3 rounded-lg hover:bg-hsl-green hover:text-hsl-12 transition-colors duration-300">LinkedIn</Link>
          <Link to="#" className="bg-hsl-20 w-full py-3 rounded-lg hover:bg-hsl-green hover:text-hsl-12 transition-colors duration-300">Twitter</Link>
          <Link to="#" className="bg-hsl-20 w-full py-3 rounded-lg hover:bg-hsl-green hover:text-hsl-12 transition-colors duration-300">Instagram</Link>
        </div>
    </section>
    </main>
  )
}

export default App
