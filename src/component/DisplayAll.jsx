// import React from 'react'
// import Display from './Display'
// import { Route,Routes } from 'react-router-dom'
// import Nav from './Nav'
// import MyPlayList from './MyPlayList'

// const DisplayAll = () => {
//   return (
//   <>
//      <Routes>
//       <Route path='/' element={<Display/>} />
//       <Route path='/album/:id' element={<Nav/>} />
//       <Route path='/myplaylist' element={<MyPlayList/>} />

//      </Routes>
//   </>
//   )
// }

// export default DisplayAll
import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Lazy-loaded components
const Display = lazy(() => import('./Display'))
const Nav = lazy(() => import('./Nav'))
const MyPlayList = lazy(() => import('./MyPlayList'))

const DisplayAll = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/album/:id' element={<Nav />} />
        <Route path='/myplaylist' element={<MyPlayList />} />
      </Routes>
    </Suspense>
  )
}

export default DisplayAll
