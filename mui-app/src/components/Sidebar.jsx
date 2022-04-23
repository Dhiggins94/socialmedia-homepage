import { AccountBox, Groups, Home, Pages, People, Settings, Store } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export default function Sidebar() {
  return (
    <Box
      bgcolor="red"
      flex={1}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#Pages">
            <ListItemIcon>
              <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#Groups">
            <ListItemIcon>
              <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#Store">
            <ListItemIcon>
              <Store />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#Friends">
            <ListItemIcon>
              <People />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#Settings">
            <ListItemIcon>
              <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#Profile">
            <ListItemIcon>
              <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
        </List>
    </Box>
  );
}
