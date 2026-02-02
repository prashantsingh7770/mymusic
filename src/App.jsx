import React, { useMemo, useRef, Suspense } from 'react'
import Sidebar from './component/Sidebar'
const Player = React.lazy(() => import('./component/Player'));
const DisplayAll = React.lazy(() => import('./component/DisplayAll'));
import { PlayerContext } from './context/PlayerContext'



const App = () => {

  const SidebarMemo = useMemo(() =>
    (<Sidebar />)
    , []);

  const { audioRef, track } = useRef(PlayerContext)


  return (
    <Suspense fallback={<p>Loading .....</p>}>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          {SidebarMemo}
          <DisplayAll />
        </div>
        <Player />
        <audio ref={audioRef} src={`/assets/${track?.file}.mp3`} preload=''>

        </audio>
      </div>
    </Suspense>
  )
}

export default App
