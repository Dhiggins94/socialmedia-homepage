import { Button, styled, Typography } from "@mui/material";
import "./App.css";
import { Add, Settings } from "@mui/icons-material";

const BlueButton = styled(Button)(({theme})=>({
  backgroundColor: "skyblue",
  color: "#888",
  margin: 5,
  "&:hover": {
    backgroundColor: "lightblue",
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
}));
function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        it uses h1 style, but it is a p tag
      </Typography>

      <BlueButton> 1st button</BlueButton>
      <BlueButton>2nd button</BlueButton>
    </div>
  );
}

export default App;
