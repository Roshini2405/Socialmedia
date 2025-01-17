import './App.css'
import * as React from 'react';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Add } from './components/Add';


function App() {
  const [mode,setMode] = React.useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={'space-evenly'}>
    <Sidebar setMode={setMode} mode={mode}/>
    <Feed/>
    <Rightbar/>
    </Stack>
    <Add />
    </Box>
    </ThemeProvider>
    
  )
}

export default App
