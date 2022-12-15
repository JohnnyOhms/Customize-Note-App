import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/layout";
import Create from "./component/Routes/form/Create";
import Notes from "./component/Routes/notes/notes";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Create />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
