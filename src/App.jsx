import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { Add, Settings } from '@mui/icons-material';



function App() {
  return (
    <>
      <div>hello</div> 
  <Button startIcon={<Add/>} variant="contained" color="secondary">Hello world</Button>
  <Button variant="text">Hello world</Button>
  <Button startIcon={<Settings/>}variant="outlined" disabled >Hello world</Button>


    </>
  )
}

export default App
