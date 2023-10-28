import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Height } from '@mui/icons-material'
import Sidebar from './Sidebar'
import Videos from './Videos'


function Feed() {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row'} }}>
      <Box sx={{ height: { sx: 'auto', md: '100vh'}, borderRight: '1px solid #d3d3d3', px: { sx: 0, md: 2} }}>

        <Sidebar />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 Pau/franciss MP2
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          New <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  )
}

export default Feed