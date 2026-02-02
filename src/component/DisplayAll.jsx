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
