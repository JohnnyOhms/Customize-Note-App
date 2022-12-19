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
              onChange={() => props.Del_category(item.value)}
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
        onChange={props.Add_category}
        fullWidth
      />
      <List sx={{ width: "100%", m: 0 }}>
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
          {props.editCategory.add ? AddCategory : DeleteCategory}

          <Button
            variant="contained"
            size="small"
            sx={{
              my: 1,
              bgcolor: props.editCategory.add ? green[500] : red[500],
              "&:hover": {
                backgroundColor: props.editCategory.add ? green[300] : red[300],
              },
            }}
            onClick={props.updateCategoryBtn}
          >
            update
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
