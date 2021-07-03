import React from 'react'
import Home from './pages/Home';
import { ChakraProvider } from "@chakra-ui/react"
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <div className='back'>
      <Home/>
      </div>
  
  </ChakraProvider>
  );
}

export default App;
