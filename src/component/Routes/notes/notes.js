import React, { Component } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import NoteCard from "../../NoteCard/noteCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default class Notes extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.getNotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes.length !== this.state.notes.length) {
      this.getNotes();
    }
  }

  getNotes = () => {
    axios
      .get("http://localhost:3004/notes")
      .then((response) => this.setState({ notes: [...response.data] }));
  };

  handleDelete = async (noteId) => {
    await axios.delete(`http://localhost:3004/notes/${noteId}`, {
      method: "DELETE",
    });
    const newNote = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({ notes: [...newNote] });
  };

  render() {
    return (
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {this.state.notes
              .slice(0)
              .reverse()
              .map((note) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={note.id}
                  sx={{ m: 0, p: 0 }}
                >
                  <NoteCard note={note} handleDelete={this.handleDelete} />
                </Grid>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    );
  }
}
