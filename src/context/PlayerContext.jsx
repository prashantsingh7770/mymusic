import React, { useRef, useState, createContext, useEffect } from 'react'
// import { songsData} from '@/assets/assets.js';
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();


const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setplayStatus] = useState(false);
    const [myPlaylist, setMyPlaylist] = useState([]);
    const [newList,setNewList]=useState([]);
    const [data,setData]=useState([]) 

    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    });

    useEffect(() => {
        setTimeout(() => {
            if (!audioRef.current) return;
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            };
        }, 1000);
    }, []);

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => setplayStatus(true))
                .catch(err => console.error('Play error:', err));
        }
    };

    const pause = () => {
        audioRef.current.pause();
        setplayStatus(false);
    };

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setplayStatus(true);
    };

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setplayStatus(true);
        }
    };

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setplayStatus(true);
        }
    };

    const seekSong = (e) => {
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
    };

    // 🎵 Add song to MyPlaylist
    const addToPlaylist = (song) => {
        setMyPlaylist(prev => {
            const exists = prev.some(item => item.id === song.id);
            if (exists) return prev;
            return [...prev, song];
        });
        console.log(myPlaylist)
        console.log("after")

        const merge =([...newList,song])
        setNewList(merge)
        // console.log(newList)
        localStorage.setItem("myPlaylist",JSON.stringify(merge))
        setData(localStorage.getItem("myPlaylist"));
        console.log(newList)
    };
    console.log(data)

    
//    audioRef.current = new Audio(song.file);

    // useEffect(()=>{
    // setNewList([...newList,])
    // },[myPlaylist]);
    // console.log(newList)
    // // const newList =localStorage.setItem("myPlaylist",JSON.stringify(myPlaylist))

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setplayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        myPlaylist,
        setMyPlaylist,
        addToPlaylist,
        newList,
        setNewList
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
            <audio ref={audioRef} src={track?.file} preload='' />
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
