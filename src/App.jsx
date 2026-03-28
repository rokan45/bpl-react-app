import { Menu } from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/HeroBanner/Banner'
import Player from './components/Player/Player'
import { Suspense, useState } from 'react'
import Footer from './components/Footer/Footer'


const loadData = async () => {
  const res = await fetch('/playerData.json');
  return res.json();
}

function App() {
  const playerPromise = loadData();

  const [coin,setCoin]=useState(5000)

  return (
    <>
      <header>
        <Navbar coin={coin}></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-bars flex mx-auto justify-center items-center mt-4"></span>}>
          <Player playerPromise={playerPromise} coin={coin} setCoin={setCoin} ></Player>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
