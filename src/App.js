import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./component/layout/layout";
import NoteEditor from "./component/Routes/editor/editor";
import Create from "./component/Routes/form/Create";
import Notes from "./component/Routes/notes/notes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AuthProvider from "./context/AuthContex";
import SignUp from "./component/Routes/Auth/SignUp";
import Login from "./component/Routes/Auth/Login";
import PrivateRoute from "./component/Routes/privateRoute/privateRoute";
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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <PrivateRoute path="/" element={<Notes />} />
              <Route path="/create" exact element={<Create />} />
              <Route path="/editor" exact element={<NoteEditor />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/login" exact element={<Login />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
