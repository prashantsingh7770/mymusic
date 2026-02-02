import React, {useContext} from 'react'
import { songsData } from '../assets/assets'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
      

    const {seekBg,seekBar, playStatus,play,pause,track,time,previous,next,seekSong} = useContext(PlayerContext);

    return (
       
        <div className='h-[10%] bg-black justify-between items-center mx-4 text-white flex'>
            <div className='hidden lg:flex gap-4 items-center'>
                <img className='w-12'  src={songsData[track.id].image}  alt="404" />
                <div>
                    {/* <p>{songsData[1].name}</p>
                    <p>{songsData[1].desc.slice(0, 12)}</p> */}
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4 '>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {!playStatus ? <> <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" /></>: <> <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /></>}
                   
                   
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className="flex items-center gap-5">
                    {/* <p>1:06</p> */}
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full'>
                        <hr ref={seekBar} className='h-1 border-none w-10 bg-green-800 rounded-full' />
                    </div>
                    {/* <p>3:20</p> */}
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
                <div className='hidden lg:flex gap-2 items-center opacity-75'>
                    <img className='w-3' src={assets.plays_icon} alt="" srcSet='' />
                    <img className='w-3' src={assets.mic_icon} alt="" srcSet='' />
                    <img className='w-3' src={assets.queue_icon} alt="" srcSet='' />
                    <img className='w-3' src={assets.speaker_icon} alt="" srcSet='' />
                    <img className='w-3' src={assets.volume_icon} alt="" srcSet='' />
                    <div className='w-20 bg-slate-50 h-1 rounded'>
                    </div>
                    <img className='w-3' src={assets.mini_player_icon} alt="" srcSet='' />
                    <img className='w-3' src={assets.zoom_icon} alt="" srcSet='' />
                </div>
        </div>
    )
}

export default Player
