import { Box, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

export default function Feed() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [5000]);

  return (
    <Box flex={4} padding={{xs: 0, md:2}}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangle" height={300} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
}
