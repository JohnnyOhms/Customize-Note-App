import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./component/layout/layout";
import NoteEditor from "./component/Routes/editor/editor";
import Create from "./component/Routes/form/Create";
import Notes from "./component/Routes/notes/notes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SignUp from "./component/Routes/Auth/SignUp";
import Login from "./component/Routes/Auth/Login";
import { useAuth } from "./context/AuthContex";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0091ff",
      },
      secondary: {
        main: "#d88507",
      },
    },
  });

  const { currentUser } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={!currentUser ? <Navigate to="/signup" /> : <Notes />}
            />
            <Route path="/create" exact element={<Create />} />
            <Route path="/editor" exact element={<NoteEditor />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
