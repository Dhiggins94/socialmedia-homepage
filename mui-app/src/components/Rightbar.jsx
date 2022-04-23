import { Box, Typography } from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
      <Box position="fixed">
      <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
      </Box>
    </Box>
  );
}
