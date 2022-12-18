import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Avatar, ListItemText, ListItem, List } from "@mui/material";
import { FormGroup, ListItemAvatar, FormControlLabel } from "@mui/material";
import { TextField, Checkbox, FormLabel } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

export default function CategoryFormat(props) {
  const DeleteCategory = (
    <React.Fragment>
      <FormLabel component="p">Select item(s) to delete</FormLabel>
      <FormGroup>
        {props.category.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              control={<Checkbox name={item.value} />}
              label={item.label}
            />
          );
        })}
      </FormGroup>
    </React.Fragment>
  );

  const AddCategory = (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
      />
      <List sx={{ width: "100%", m: 0 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>A</Avatar>
          </ListItemAvatar>
          <ListItemText primary="" />
        </ListItem>
        {props.category.map((item) => {
          return (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>{item.value[0].toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );

  return (
    <Box sx={{}}>
      <Card variant="outlined" sx={{ bgcolor: grey[200], p: 3 }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {AddCategory}
          {/* {DeleteCategory} */}
          <Button
            variant="contained"
            size="small"
            //   endIcon={<BorderColorIcon />}
            sx={{ my: 1, bgcolor: red[500] }}
            onClick={props.updateCategoryBtn}
          >
            update
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
