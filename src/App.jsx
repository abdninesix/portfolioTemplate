import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { Technologies } from './components/Technologies'

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-500 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>

    </div>
  )
}

export default App