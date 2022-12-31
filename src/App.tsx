import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Chat, Groups, ScheduleSend, Call } from "./client";
import { Box, Tab, Tabs } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import CallIcon from "@mui/icons-material/Call";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";

interface AppLayoutProps {
  childComponent: JSX.Element;
}

const AppLayout = ({ childComponent }: AppLayoutProps): JSX.Element => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/chat");
        break;
      case 1:
        navigate("/groups");
        break;
      case 2:
        navigate("/call");
        break;
      case 3:
        navigate("/schedule-send");
        break;
      default:
        navigate("/chat");
        break;
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 1024,
        backgroundColor: "white",
        display: "flow",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 100,
          display: "flow",
          backgroundColor: "lightseagreen",
        }}
      >
        <Box sx={{ height: 50, width: "100%" }}></Box>
        <Box sx={{ height: 50, width: "100%" }}>
          <Tabs value={value} onChange={handleChange} aria-label="Tabs">
            <Tab icon={<ChatIcon />} aria-label="chat" />
            <Tab icon={<GroupsIcon />} aria-label="groups" />
            <Tab icon={<CallIcon />} aria-label="call" />
            <Tab icon={<ScheduleSendIcon />} aria-label="callSchedule" />
          </Tabs>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 900,
        }}
      >
        {childComponent}
      </Box>
    </Box>
  );
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppLayout childComponent={<Chat />} />}
        ></Route>
        <Route
          path="/chat"
          element={<AppLayout childComponent={<Chat />} />}
        ></Route>
        <Route
          path="/schedule-send"
          element={<AppLayout childComponent={<ScheduleSend />} />}
        ></Route>
        <Route
          path="/call"
          element={<AppLayout childComponent={<Call />} />}
        ></Route>
        <Route
          path="/groups"
          element={<AppLayout childComponent={<Groups />} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
