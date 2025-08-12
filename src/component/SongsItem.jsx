import React, { useContext} from 'react'
// import { PlayerContext } from '../context/PlayerContext'
// import {assets, songsData } from '../assets/assets';



// const SongsItem = ({image,name,desc,id}) => {
//   const {playWithId}=useContext(PlayerContext);
//   const [mySongList,setMySongList]=useState([])

//   // const saveMyList = (id)=>{
//   //   setMySongList(()=>[ ...songsData[id],  ...mySongList])
//   //   // alert("saved")
//   //   // setMySongList(songsData[id]);
//   //   console.log(songsData[id]);
//   // }

//   // console.log(mySongList)
//   const saveMyList = (songId) => {
//     const songToAdd = songsData.find(song => song.id === songId);
//     if (!songToAdd) return;

//     // if(!mySongList.includes(songsData[id])){
//     //   mySongList.push(songsData[id])
//     // }
  
//     setMySongList(prevList => {
//       const alreadyExists = prevList.some(song => song.id === songToAdd.id);
//       if (alreadyExists) {
//         alert("Song already in your list");
//         return prevList;
//       }
//       alert("Saved");
//       return [...prevList, songToAdd];
//     });
//   }

//   console.log(mySongList.length)
  

  



//   return (
//     <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] '>
//         <img className='rounded text-white' src={`src/assets/${image}.jpg`}  alt="404 error" />
//         <div className='flex relative'>
//         <p className='mt-2 mb-1 font-bold'>{name}</p>
//         {/* <img onClick={()=>saveMyList(id)} className='w-[15px] h-[15px]  absolute bottom-2  right-1' src={assets.save} alt=""  /> */}
//         <img
//   onClick={(e) => {
//     e.stopPropagation(); 
//     saveMyList(id);
//   }}
//   className='w-[15px] h-[15px] absolute bottom-2 right-1'
//   src={assets.save}
//   alt=""
// />

//         </div>
//         <p className='text-slate-200 text-sm'>{desc}</p>
//     </div>
//   )
// }

// export default SongsItem



// import React from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { assets, songsData } from '../assets/assets';

const SongsItem = ({ image, name, desc, id }) => {
  const { playWithId, myPlaylist, addToPlaylist } = useContext(PlayerContext);

  const saveMyList = () => {
    const songToAdd = songsData.find(song => song.id === id);
    if (!songToAdd) return;

    const alreadyExists = myPlaylist.some(song => song.id === id);
    if (alreadyExists) {
      alert("Song already in your playlist");
      return;
    }

    addToPlaylist(songToAdd);
    alert("Saved to playlist");
  };

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded text-white' src={`src/assets/${image}.jpg`} alt="404 error" />
      <div className='flex relative'>
        <p className='mt-2 mb-1 font-bold'>{name}</p>
        <img
          onClick={(e) => {
            e.stopPropagation();
            saveMyList();
          }}
          className='w-[15px] h-[15px] absolute bottom-2 right-1'
          src={assets.save}
          alt=""
        />
      </div>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
};

export default SongsItem;
