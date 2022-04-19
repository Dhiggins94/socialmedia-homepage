import { Mail, Notifications, Person } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));
const Icon = styled(Box)(({ theme }) => ({
  display: "none", gap: "20px", alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))
export default function Navbar() {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'sx={{display:{xs:"none", sm:"block"}}}> Hello World</Typography>
        <Person sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search..' />
        </Search>
        <Icon>
        <Badge badgeContent={4} color="error">
  <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
  <Notifications/>
          </Badge>
          <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </Icon>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Typography variant='span'>Rando</Typography>
        </UserBox>
    </StyledToolbar>
    </AppBar>
  )
}
