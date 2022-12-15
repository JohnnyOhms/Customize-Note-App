import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import NoteCard from "../../NoteCard/noteCard";

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
        <Grid container spacing={1}>
          {this.state.notes.map((note) => (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <NoteCard note={note} handleDelete={this.handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
