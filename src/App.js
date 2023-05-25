import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Contacts from "./scenes/contacts";
import Form from "./scenes/addOrganizers/index";
import FormAddUsers from "./scenes/addUsers/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./scenes/homePage/Home";
import Users from "./scenes/users/Users";
import Organizers from "./scenes/organizers/Organizers";
import Event from "./scenes/event/Event";
import Ticket from "./scenes/ticket/Ticket";
import Login from "./scenes/login/login";
import NotFound from "./scenes/notFound/NotFound";
import SignUp from "./scenes/signup/SignUp";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import FormAddTicket from "./scenes/addTicket/Ticket";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/formAddOrganizer" element={<Form />} />
              <Route path="/users" element={<Users />} />
              <Route path="/organizers" element={<Organizers />} />
              <Route path="/event" element={<Event />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/formAddUsers" element={<FormAddUsers />} />
              <Route path="/formAddTicket" element={<FormAddTicket />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
