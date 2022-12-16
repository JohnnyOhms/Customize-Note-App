import React, { Component, useState } from "react";
import { RadioGroup, TextField, Typography } from "@mui/material";
import { FormLabel, Radio, Button } from "@mui/material";
import { Container, FormControl, FormControlLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    category: "",
    validateTitle: false,
    validateDescription: false,
    validateAlert: false,
  });

  const navigation = useNavigate();

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
    const postData = { title, description, category };

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

  return (
    <Container sx={{ height: "100vh", py: 3 }}>
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
            setValues((prev) => ({ ...prev, description: e.target.value }))
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
            <FormControlLabel
              value="personal"
              control={<Radio />}
              label="Personal"
            />
            <FormControlLabel
              value="business"
              control={<Radio />}
              label="Business"
            />
            <FormControlLabel value="study" control={<Radio />} label="Study" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          variant="contained"
          type="submit"
          endIcon={<AddIcon />}
          sx={{ px: 5 }}
        >
          Add Note
        </Button>
      </form>
    </Container>
  );
}
// export default class Create extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       description: "",
//       category: "",
//       validateTitle: false,
//       validateDescription: false,
//       validateAlert: false,
//     };
//     this.submitHandler = this.submitHandler.bind(this);
//   }

//   submitHandler(e) {
//     e.preventDefault();
//     this.setState({
//       validateTitle: false,
//       validateDescription: false,
//     });
//     if (!this.state.title) {
//       this.setState({ validateTitle: true });
//     }

//     if (!this.state.description) {
//       this.setState({ validateDescription: true });
//     }

//     if (!this.state.title || !this.state.description || !this.state.category) {
//       this.alertForm();
//       return;
//     }

//     const { title, description, category } = this.state;
//     const postData = { title, description, category };
//     const navigate = useNavigate();

//     axios
//       .post("http://localhost:3004/notes", postData)
//       .then(() => navigate("/"));
//   }

//   alertForm = () => {
//     this.setState({ validateAlert: true });
//     setTimeout(() => {
//       this.setState({ validateAlert: false });
//     }, 2000);
//   };

//   render() {
//     return (
//       <Container sx={{ height: "100vh", py: 3 }}>
//         {this.state.validateAlert && (
//           <Stack sx={{ width: "100%", pt: 2 }} spacing={2}>
//             <Alert
//               severity="error"
//               action={
//                 <Button color="inherit" size="small">
//                   <CloseIcon />
//                 </Button>
//               }
//             >
//               Fill out the form completely
//             </Alert>
//           </Stack>
//         )}
//         <Typography variant="h6" component="h6">
//           General
//         </Typography>
//         <form onSubmit={this.submitHandler} noValidate autoComplete="off">
//           <TextField
//             sx={{ mb: 2 }}
//             fullWidth
//             required
//             id="outlined-basic"
//             label="Title"
//             variant="outlined"
//             color="primary"
//             onChange={(e) => this.setState({ title: e.target.value })}
//             error={this.state.validateTitle}
//           />
//           <TextField
//             id="outlined-multiline-static"
//             label="Description"
//             multiline
//             fullWidth
//             required
//             color="primary"
//             rows={4}
//             sx={{ mb: 2 }}
//             onChange={(e) => this.setState({ description: e.target.value })}
//             error={this.state.validateDescription}
//           />
//           <FormControl sx={{ my: 2 }}>
//             <FormLabel
//               id="demo-radio-buttons-group-label"
//               sx={{ fontSize: 20, fontWeight: 20 }}
//             >
//               Category
//             </FormLabel>
//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="personal"
//               name="radio-buttons-group"
//               value={this.state.category}
//               onChange={(e) => this.setState({ category: e.target.value })}
//             >
//               <FormControlLabel
//                 value="personal"
//                 control={<Radio />}
//                 label="Personal"
//               />
//               <FormControlLabel
//                 value="business"
//                 control={<Radio />}
//                 label="Business"
//               />
//               <FormControlLabel
//                 value="study"
//                 control={<Radio />}
//                 label="Study"
//               />
//             </RadioGroup>
//           </FormControl>
//           <br />
//           <Button
//             variant="contained"
//             type="submit"
//             endIcon={<AddIcon />}
//             sx={{ px: 5 }}
//           >
//             Add Note
//           </Button>
//         </form>
//       </Container>
//     );
//   }
// }
