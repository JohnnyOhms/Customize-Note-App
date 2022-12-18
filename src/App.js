import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/layout";
import NoteEditor from "./component/Routes/editor/editor";
import Create from "./component/Routes/form/Create";
import Notes from "./component/Routes/notes/notes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" exact element={<Create />} />
            <Route path="/editor" exact element={<NoteEditor />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
