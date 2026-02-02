import React, { useContext, useEffect, useRef, useState } from 'react';
import { albumsData, assets, songsData } from '../assets/assets.js';
import { useNavigate, useParams } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const Nav = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState(null);
  const { playWithId } = useContext(PlayerContext);

  const bgRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const album = albumsData.find(a => a.id === Number(id));
    setAlbumData(album);
  }, [id]);

  useEffect(() => {
    if (!bgRef.current || !albumData) return;
    bgRef.current.style.backgroundImage =
      `linear-gradient(to bottom, rgba(0,0,0,0.7), ${albumData.bgColor || '#121212'})`;
  }, [albumData]);

  if (!albumData) return <p className="text-white p-6">Album not found</p>;

  return (
    <div ref={bgRef} className="w-full m-2 px-6 pt-4 rounded text-white overflow-auto custom-scroll">
      
      {/* Navbar */}
      <div className="flex justify-between items-center font-semibold">
        <div className="flex gap-2">
          <img onClick={() => navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} />
          <img onClick={() => navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} />
        </div>
      </div>

      {/* Album */}
      <div className="mt-10 flex gap-8">
        <img className="w-32 h-32 sm:w-44 sm:h-44" src={albumData.image} />
        <div>
          <p>Playlist</p>
          <h1 className="font-bold sm:text-[60px]">{albumData.name}</h1>
          <p>Your weekly update of the most played tracks.</p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Songs */}
      {songsData.map((item, index) => (
        <div
          key={item.id}
          onClick={() => playWithId(item.id)}
          className="grid grid-cols-3 sm:grid-cols-4 items-center gap-2 p-2 hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p>
            <b className="mr-4">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} />
            {item.name}
          </p>
          <p>{albumData.name}</p>
          <p className="hidden sm:block">5 days ago</p>
          <p className="m-auto">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Nav;
