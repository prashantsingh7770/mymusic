import React from 'react';
// import { assets, songsData, albumsData } from '../../public/assets/assets';
import { assets, songsData, albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongsItem from './SongsItem';
import { useNavigate } from 'react-router-dom'

const Display = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0'>
            {/* Navigation */}
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl gap-2' src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl gap-2' src={assets.arrow_right} alt="" />
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Premium</p>
                    <p className='bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer'>Install App</p>
                    <p className='w-7 h-7 bg-fuchsia-500 rounded-full text-black flex items-center justify-center'>P</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mt-4 items-center">
                <p className='bg-white text-black rounded-2xl cursor-pointer px-4 py-1'>All</p>
                <p className='bg-black rounded-2xl cursor-pointer px-4 py-1'>Music</p>
                <p className='bg-black rounded-2xl cursor-pointer px-4 py-1'>Podcasts</p>
            </div>

            {/* Trending Songs */}
            <div className="mb-4">
                <h1 className='my-5 font-bold text-2xl'>Trending Songs</h1>
                <div className="flex overflow-x-scroll no-scrollbar">
                    {albumsData.map((item, index) => (
                        <AlbumItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>

            {/* Today's Biggest Hits */}
            <div className="mb-4">
                <h1 className='my-5 font-bold text-2xl'>Today’s Biggest Hits</h1>
                <div className="flex overflow-x-scroll no-scrollbar">
                    {songsData.map((item, index) => (
                        <SongsItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Display;
