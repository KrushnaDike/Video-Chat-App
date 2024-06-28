import React, { useContext } from "react";
import { Grid, Typography, Paper, styled } from "@mui/material";
import { SocketContext } from "../Context.js";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "10px",
  border: "2px solid black",
  margin: "10px",
  width: "550px",
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[5],
  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
}));

const VideoContainer = styled("div")({
  position: "relative",
  width: "100%",
  paddingTop: "56.25%",
  borderRadius: "10px",
  overflow: "hidden",
});

const Video = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
});

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <Grid container justifyContent="center">
      {stream && (
        <StyledPaper>
          <Typography variant="h5" gutterBottom>
            {name || "Name"}
          </Typography>
          <VideoContainer>
            <Video playsInline muted ref={myVideo} autoPlay />
          </VideoContainer>
        </StyledPaper>
      )}
      {callAccepted && !callEnded && (
        <StyledPaper>
          <Typography variant="h5" gutterBottom>
            {call.name || "Name"}
          </Typography>
          <VideoContainer>
            <Video playsInline ref={userVideo} autoPlay />
          </VideoContainer>
        </StyledPaper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
