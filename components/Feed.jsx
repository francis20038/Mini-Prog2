import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from './utils/fetchFromApi'


function Feed() {
  const [selectedCatergory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI( `search?pat=snippet&q=${selectedCatergory}` )
    .then((data)=> setVideos(data.items))
  }, [ selectedCatergory ])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
      <Box sx={{ height: { sx: 'auto', md: '100vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2} }}>

        <Sidebar
        selectedCatergory={ selectedCatergory }
        setSelectedCategory={ setSelectedCategory } />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 Pau/franciss MP2
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCatergory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed