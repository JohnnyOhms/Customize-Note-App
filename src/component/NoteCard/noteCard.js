import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Container } from "@mui/system";
import { red, yellow, blue, green } from "@mui/material/colors";
import React from "react";

export default function NoteCard(props) {
  const categoryColor = (note) => {
    if (note === "personal") {
      return yellow[700];
    }
    if (note === "study") {
      return green[500];
    }
    if (note === "business") {
      return red[500];
    }
    return blue[500];
  };

  return (
    <Container sx={{ py: 2, px: 0 }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: categoryColor(props.note.category),
              }}
              aria-label="recipe"
            >
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
