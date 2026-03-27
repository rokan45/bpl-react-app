import { Menu } from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/HeroBanner/Banner'
import Player from './components/Player/Player'
import { Suspense } from 'react'


const loadData = async () => {
  const res = await fetch('/playerData.json');
  return res.json();
}

function App() {
  const playerPromise = loadData();
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-bars flex mx-auto justify-center items-center mt-4"></span>}>
          <Player playerPromise={playerPromise} ></Player>
        </Suspense>
      </main>
    </>
  )
}

export default App
