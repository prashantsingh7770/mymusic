import React, { useContext, useEffect, useRef, useState } from 'react';
import { albumsData, assets, songsData } from '../assets/assets';
import { useNavigate, useParams } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const Nav = () => {
    const { id } = useParams();
    const [albumData, setalbumData] = useState(albumsData[id]);
    const { playWithId } = useContext(PlayerContext);
    const bgRef = useRef(null);
    const scrollContainerRef = useRef(null); // Ref for specific scrollable div
    const navigate = useNavigate();

    // Set background gradient dynamically
    useEffect(() => {
        if (albumData && bgRef.current) {
            bgRef.current.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), ${albumData.bgColor})`;
        } else {
            bgRef.current.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), #121212)`;
        }
    }, [albumData]);

    // Listen for scroll events on the playlist div
    useEffect(() => {
        const scrollDiv = scrollContainerRef.current;
        if (!scrollDiv) return;

        const handleScroll = () => {
            console.log("Scroll height:", scrollDiv.scrollHeight);
            console.log("Scroll top:", scrollDiv.scrollTop);
            console.log("Client height:", scrollDiv.clientHeight);
        };

        scrollDiv.addEventListener("scroll", handleScroll);
        return () => scrollDiv.removeEventListener("scroll", handleScroll);
    }, []);

    if (!albumData) return <p>Album not found</p>;

    return (
        <>
            <div
                ref={(el) => {
                    bgRef.current = el;
                    scrollContainerRef.current = el;
                }}
                className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0 custom-scroll'
                id='playlist'
            >
                <div className='w-full flex justify-between items-center font-semibold'>
                    <div className='flex items-center gap-2'>
                        <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl' src={assets.arrow_left} alt="" />
                        <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl' src={assets.arrow_right} alt="" />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Premium</p>
                        <p className='bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer'>Install App</p>
                        <p className='w-7 h-7 bg-fuchsia-500 rounded-full text-black flex items-center justify-center'>P</p>
                    </div>
                </div>

                <div className="flex gap-2 mt-4 items-center">
                    <p className='bg-white text-black rounded-2xl cursor-pointer px-4 py-1'>All</p>
                    <p className='bg-black rounded-2xl cursor-pointer px-4 py-1'>Music</p>
                    <p className='bg-black rounded-2xl cursor-pointer px-4 py-1'>Podcasts</p>
                </div>

                <div className='mt-10 flex gap-8'>
                    <img className='w-25 h-25 sm:h-45 sm:w-45' src={albumData.image} alt="" />
                    <div>
                        <p>Playlist</p>
                        <h1 className='font-bold text-[15px] sm:text-[60px]'>{albumData.name}</h1>
                        <p className='text-[10px] sm:text-[17px]'>Your weekly update of the most played tracks.</p>
                        <div className='flex gap-2'>
                            <img className='w-5 h-5 sm:w-5 hidden sm:inline-block' src={assets.spotify_logo} alt="" />
                            <b className='hidden sm:block'>Spotify</b>
                            <p className='hidden sm:block' >1,323,451 likes</p>
                            <b className='hidden sm:block'>320 Songs</b>
                            <p className='hidden sm:block'>About 2 hr 30 mins</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                    <p><b className='mr-4'>#</b> Title</p>
                    <p>Album</p>
                    <p className='hidden sm:block'>Date added</p>
                    <img className='w-4 m-auto hidden sm:block' src={assets.clock_icon} alt="" />
                </div>
                <hr />

                {
                    songsData.map((item, index) => (
                        <div key={index} onClick={() => playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] items-center gap-2 p-2 hover:bg-[#ffffff2b] cursor-pointer'>
                            <p className='text-white'>
                                <b className='mr-4'>{index + 1}</b>
                                <img className='inline w-10 mr-5' src={`/src/assets/${item.image}.jpg`} alt="404" />
                                {item.name}
                            </p>
                            <p className='text-[15px]'>{albumData.name}</p>
                            <p className='text-[15px] hidden sm:block'>5 days ago</p>
                            <p className='text-[15px] items-center m-auto'>{item.duration}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Nav;
