import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import { styled } from "@mui/system";

import { SocketContext } from "../Context.js";

const StyledContainer = styled(Container)(({ theme }) => ({
  width: "600px",
  margin: "35px 0",
  padding: 0,
  [theme.breakpoints.down("xs")]: {
    width: "80%",
  },
}));

const StyledPaper = styled(Paper)({
  padding: "20px",
  border: "2px solid black",
  backgroundColor: "#fafafa",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
});

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

const Sidebar = ({ children }) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    setCallEnded,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [isHangingUp, setIsHangingUp] = useState(false);

  useEffect(() => {
    if (callEnded) {
      setIsHangingUp(false);
    }
  }, [callEnded]);

  const handleHangUp = () => {
    setIsHangingUp(true);
    leaveCall();
    setCallEnded(true);
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={10}>
        <StyledForm noValidate autoComplete="off">
          <StyledGridContainer container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                variant="outlined"
              />
              <CopyToClipboard text={me}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment />}
                  style={{ marginTop: "10px" }}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">
                Make a Connection
              </Typography>
              <TextField
                label="ID to connect"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
                variant="outlined"
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled />}
                  fullWidth
                  onClick={handleHangUp}
                  style={{ marginTop: "10px" }}
                  disabled={isHangingUp}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  style={{ marginTop: "10px" }}
                >
                  Connect
                </Button>
              )}
            </Grid>
          </StyledGridContainer>
        </StyledForm>
        {children}
      </StyledPaper>
    </StyledContainer>
  );
};

export default Sidebar;
