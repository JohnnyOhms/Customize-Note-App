import React, { useState } from "react";
import { RadioGroup, TextField, Typography } from "@mui/material";
import { FormLabel, Radio, Button } from "@mui/material";
import { Container, FormControl, FormControlLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import axios from "axios";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { green, red } from "@mui/material/colors";
import CategoryFormat from "./categoryformat";

export default function Create() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    category: "",
    validateTitle: false,
    validateDescription: false,
    validateAlert: false,
  });

  const [editCategory, setEditcategory] = useState(false);

  const [category, setCategory] = useState([
    {
      id: 1,
      value: "personal",
      label: "Personal",
    },
    {
      id: 2,
      value: "study",
      label: "Study",
    },
    {
      id: 3,
      value: "business",
      label: "Business",
    },
  ]);

  const navigation = useNavigate();
  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1];

  const submitHandler = (e) => {
    e.preventDefault();
    setValues((prev) => ({
      ...prev,
      validateTitle: false,
      validateDescription: false,
    }));

    if (!values.title) {
      setValues((prev) => ({
        ...prev,
        validateTitle: true,
      }));
    }

    if (!values.description) {
      setValues((prev) => ({
        ...prev,
        validateDescription: true,
      }));
    }

    if (!values.title || !values.description || !values.category) {
      alertForm();
      return;
    }

    const { title, description, category } = values;
    let timePmAm = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const date = timePmAm;
    const postData = { title, description, category, date };

    axios
      .post("http://localhost:3004/notes", postData)
      .then(() => navigation("/"));
  };

  const alertForm = () => {
    setValues((prev) => ({
      ...prev,
      validateAlert: true,
    }));
    setTimeout(() => {
      setValues((prev) => ({
        ...prev,
        validateAlert: false,
      }));
    }, 2000);
  };

  const editCategoryState = () => {
    setEditcategory((preveItem) => !preveItem);
  };

  const updateCategoryBtn = () => {
    editCategoryState();
    navigation("/create");
  };

  return (
    <React.Fragment>
      {type === "updateCategory" && (
        <CategoryFormat
          updateCategoryBtn={updateCategoryBtn}
          category={category}
        />
      )}
      <Container sx={{ height: "100vh", width: "100vw", py: 3 }}>
        {!editCategory && (
          <React.Fragment>
            {values.validateAlert && (
              <Stack sx={{ width: "100%", pt: 2 }} spacing={2}>
                <Alert
                  severity="error"
                  action={
                    <Button color="inherit" size="small">
                      <CloseIcon />
                    </Button>
                  }
                >
                  Fill out the form completely
                </Alert>
              </Stack>
            )}
            <Typography variant="h6" component="h6">
              General
            </Typography>
            <form onSubmit={submitHandler} noValidate autoComplete="off">
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                required
                id="outlined-basic"
                label="Title"
                variant="outlined"
                color="primary"
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, title: e.target.value }))
                }
                error={values.validateTitle}
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                fullWidth
                required
                color="primary"
                rows={4}
                sx={{ mb: 2 }}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                error={values.validateDescription}
              />
              <FormControl sx={{ my: 2 }}>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontSize: 20, fontWeight: 20 }}
                >
                  Category
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="personal"
                  name="radio-buttons-group"
                  value={values.category}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, category: e.target.value }))
                  }
                >
                  {category.map((item) => {
                    return (
                      <FormControlLabel
                        key={item.id}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
              <br />
              <Button
                variant="contained"
                type="submit"
                endIcon={<AddIcon />}
                sx={{ m: 1, px: 3 }}
              >
                Add Note
              </Button>

              <Link
                onClick={editCategoryState}
                to="/create?type=updateCategory"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<BorderColorIcon />}
                  color="secondary"
                  sx={{ m: 1, color: "white", bgcolor: green[700] }}
                >
                  Add category
                </Button>
              </Link>

              <Link
                onClick={editCategoryState}
                to="/create?type=updateCategory"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  color="secondary"
                  sx={{ m: 1, color: "white", bgcolor: red[500] }}
                >
                  Delete category
                </Button>
              </Link>
            </form>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
}
