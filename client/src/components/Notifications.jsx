import React, { useContext } from "react";
import { Button, Typography, Paper, styled } from "@mui/material";
import { SocketContext } from "../Context.js";

const NotificationContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <NotificationContainer>
          <Typography variant="h6">{call.name} is calling:</Typography>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </NotificationContainer>
      )}
    </>
  );
};

export default Notifications;
