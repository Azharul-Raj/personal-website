import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import { routes } from './layouts/routes'

function App() {
 const router=routes
  return (
    <div className='dark:bg-[#070D1B] '>
    <RouterProvider router={router}>
      <HomePage/>
      </RouterProvider>
      </div>
  )
}

export default App
