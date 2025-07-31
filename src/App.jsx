import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Dropdown from './components/navbar/Dropdown';
import Container from './section-home/Container';


function App() {

  return (
    <div className='container-navbar'>
      <Navbar />
      <Dropdown />
      <Container/>
    </div>
  )
}

export default App;
