import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import {Box} from '@mui/material'
import ExerciseDetails from './pages/ExerciseDetails'
import Home from './pages/Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'14880x'}}} >
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetails />}/>
        </Routes>
    </Box>
  )
}

export default App