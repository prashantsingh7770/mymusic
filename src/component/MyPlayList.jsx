// import React, { useContext } from 'react';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { PlayerContext } from '../context/PlayerContext'; // ✅ Import context

// const MyPlayList = () => {
//   const { myPlaylist, playWithId } = useContext(PlayerContext); // ✅ Destructure properly
//   const navigate = useNavigate();

//   return (
//     <div className='w-[100%] m-2 px-6 pt-4 rounded text-white overflow-auto lg:ml-0'>
//       <div className='flex relative'>
//         <div className='flex items-center gap-2'>
//           <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl gap-2' src={assets.arrow_left} alt="" />
//           <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl gap-2' src={assets.arrow_right} alt="" />
//         </div>
//         <div className='flex items-center gap-4 absolute right-0 top-0'>
//           <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Premium</p>
//           <p className='bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer'>Install App</p>
//           <p className='w-7 h-7 bg-fuchsia-500 rounded-full text-black flex items-center justify-center'>P</p>
//         </div>
//       </div>

//       <div className='flex gap-2 p-8 mt-5 bg-[#121212]'>
//         <div>
//           <img className='w-25 sm:w-45 rounded-[3px]' src={`/src/assets/${myPlaylist[0]?.image || 'default'}.jpg`} alt="" />
//         </div>
//         <div className='ml-[20px]'>
//           <p>Playlist</p>
//           <h1 className='font-bold text-[35px] sm:text-[60px]'>My Playlist #1</h1>
//           <div className='flex gap-3'>
//             <p className='w-7 h-7 bg-fuchsia-500 rounded-full text-black flex items-center justify-center'>P</p>
//             <p>Prashant Singh</p>
//           </div>
//         </div>
//       </div>

//       <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
//         <p><b className='mr-4'>#</b> Title</p>
//         <p>Playlist</p>
//         <p className='hidden sm:block'>Date added</p>
//         <img className='w-4 m-auto hidden sm:block' src={assets.clock_icon} alt="" />
//       </div>

//       <hr />

//       {
//         myPlaylist.length === 0 ? (
//           <p className='text-center mt-10 text-[#a7a7a7]'>Your playlist is empty</p>
//         ) : (
//           myPlaylist.map((item, index) => (
//             <div key={index} onClick={() => playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] items-center gap-2 p-2 hover:bg-[#ffffff2b] cursor-pointer'>
//               <p className='text-white'>
//                 <b className='mr-4'>{index + 1}</b>
//                 <img className='inline w-10 mr-5' src={`/src/assets/${item.image}.jpg`} alt="404" />
//                 {item.name}
//               </p>
//               <p className='text-[15px]'>My Playlist #1</p>
//               <p className='text-[15px] hidden sm:block'>5 days ago</p>
//               <p className='text-[15px] items-center m-auto'>{item.duration || '3:00'}</p>
//             </div>
//           ))
//         )
//       }
//     </div>
//   );
// };

// export default MyPlayList;


import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';


const MyPlayList = () => {
  const { myPlaylist, playWithId } = useContext(PlayerContext);
  const navigate = useNavigate();

  return (
    <div className='w-full px-4 sm:px-6 pt-4 text-white overflow-auto'>
      {/* Header Controls */}
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center gap-2'>
          <img
            onClick={() => navigate(-1)}
            className='w-8 h-8 bg-black p-1 rounded-full cursor-pointer'
            src={assets.arrow_left}
            alt="Back"
          />
          <img
            onClick={() => navigate(1)}
            className='w-8 h-8 bg-black p-1 rounded-full cursor-pointer'
            src={assets.arrow_right}
            alt="Forward"
          />
        </div>

        <div className='flex items-center gap-2 sm:gap-4 text-xs sm:text-sm'>
          <p className='hidden md:block bg-white text-black px-4 py-1 rounded-full cursor-pointer'>Explore Premium</p>
          <p className='bg-black text-white px-3 py-1 rounded-full cursor-pointer'>Install App</p>
          <p className='w-7 h-7 bg-fuchsia-500 rounded-full flex items-center justify-center text-black font-bold'>P</p>
        </div>
      </div>

      {/* Playlist Banner */}
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-8 bg-[#121212] rounded-md'>
        <img
          className='w-32 h-32 sm:w-44 sm:h-44 object-cover rounded-md'
          src={`/src/assets/${myPlaylist[0]?.image || 'default'}.jpg`}
          alt="Cover"
        />
        <div className='text-center sm:text-left'>
          <p className='uppercase text-sm text-gray-400'>Playlist</p>
          <h1 className='font-bold text-2xl sm:text-5xl mt-1'>My Playlist #1</h1>
          <div className='flex items-center justify-center sm:justify-start gap-2 mt-2'>
            <p className='w-7 h-7 bg-fuchsia-500 rounded-full text-black flex items-center justify-center font-bold'>P</p>
            <p>Prashant Singh</p>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className='grid grid-cols-2 sm:grid-cols-4 mt-8 mb-2 px-2 text-[#a7a7a7] text-xs sm:text-sm'>
        <p><b className='mr-2'>#</b> Title</p>
        <p>Playlist</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='w-4 hidden sm:block justify-self-center' src={assets.clock_icon} alt="Clock" />
      </div>

      <hr className='border-gray-700 mb-4' />

      {/* Playlist Songs */}
      {myPlaylist.length === 0 ? (
        <p className='text-center text-[#a7a7a7] mt-10'>Your playlist is empty</p>
      ) : (
        myPlaylist.map((item, index) => (
          <div
            key={index}
            onClick={() => playWithId(item.id)}
            className='grid grid-cols-2 sm:grid-cols-4 px-2 py-3 items-center text-[#a7a7a7] text-sm hover:bg-[#ffffff1a] rounded-md cursor-pointer transition'
          >
            <div className='flex items-center'>
              <b className='mr-2'>{index + 1}</b>
              <img className='w-10 h-10 rounded mr-3' src={`/src/assets/${item.image}.jpg`} alt="Song" />
              <span className='text-white truncate'>{item.name}</span>
            </div>
            <p className='text-xs sm:text-sm truncate'>My Playlist #1</p>
            <p className='hidden sm:block text-xs'>5 days ago</p>
           <div className='flex items-center'>
           <p className='hidden sm:block justify-self-center'>{item.duration || '3:00'}</p>
           <img className='sm:ml-[150px] sm:w-[40px]' 
             onClick={(e) => {
              e.stopPropagation(); // prevent triggering play
              // add delete logic here (maybe a `removeFromPlaylist(item.id)` from context)
            }}
           src={assets.delete_icon} alt="" srcset="" />
           </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPlayList;

