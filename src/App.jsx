import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Particle from './components/Particle/Particle'
import { routes } from './layouts/routes'

function App() {
 const router=routes
  return (
    <div className=''>
      <Particle/>
    <RouterProvider router={router}>
      <HomePage/>
      </RouterProvider>
      </div>
  )
}

export default App
