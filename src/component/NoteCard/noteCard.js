import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Container } from "@mui/system";
import { red } from "@mui/material/colors";
import React from "react";

export default function NoteCard(props) {
  return (
    <Container sx={{ py: 3 }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => props.handleDelete(props.note.id)}>
              <DeleteForeverIcon />
            </IconButton>
          }
          title={props.note.title}
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.note.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
