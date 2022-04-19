import { Person } from '@mui/icons-material'
import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between" 
})
export default function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'sx={{display:{xs:"none", sm:"block"}}}> Hello World</Typography>
        <Person sx={{ display: { xs: "block", sm: "none" } }}/>
    </StyledToolbar>
    </AppBar>
  )
}
