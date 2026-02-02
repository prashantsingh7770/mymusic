export const assets = {
    bell_icon,
    delete_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    save
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

// export const songsData = [
//     {
//         id:0,
//         name: "Song One",
//         image: img1,
//         file:song1,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"3:00"
//     },
//     {
//         id:1,
//         name: "Song Two",
//         image: img2,
//         file:song2,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"2:20"
//     },
//     {
//         id:2,
//         name: "Song Three",
//         image: img3,
//         file:song3,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"2:32"
//     },
//     {
//         id:3,
//         name: "Song Four",
//         image: img4,
//         file:song1,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"2:50"
//     },
//     {
//         id:4,
//         name: "Song Five",
//         image: img5,
//         file:song2,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"3:10"
//     },
//     {
//         id:5,
//         name: "Song Six",
//         image: img14    ,
//         file:song3,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"2:45"
//     },
//     {
//         id:6,
//         name: "Song Seven",
//         image: img7,
//         file:song1,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"2:18"
//     },
//     {
//         id:7,
//         name: "Song Eight",
//         image: img12,
//         file:song2,
//         desc:"Put a smile on your face with these happy tunes",
//         duration:"2:35"
//     }
// ]

export const songsData = Array.from({ length: 320 }, (_, index) => ({
  id: index,
  name: `Song ${index + 1}`,
  image: `/assets/img${index + 1}.jpg`,
  file: `/assets/song${index % 100}.mp3`,
  desc: "Put a smile on your face with these happy tunes",
  duration: `${2 + Math.floor(Math.random() * 3)}:${String(
    Math.floor(Math.random() * 60)
  ).padStart(2, "0")}`
}));

