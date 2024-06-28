import React from "react";
import { Typography, AppBar } from "@mui/material";
import { styled } from "@mui/system";

// importing components
import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "600px",
  border: "2px solid black",
  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
}));

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const App = () => {
  return (
    <Wrapper>
      <AppBarStyled position="static" color="inherit">
        <Typography variant="h2" align="center">
          Debate Room
        </Typography>
      </AppBarStyled>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </Wrapper>
  );
};

export default App;
