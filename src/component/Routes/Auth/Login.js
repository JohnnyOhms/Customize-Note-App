import { Alert, CardHeader, TextField, Typography } from "@mui/material";
import { Button, Card } from "@mui/material";
import { useAuth } from "../../../context/AuthContex";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailref = useRef();
  const Passwordref = useRef();
  const { login } = useAuth();
  const { setCurrentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [mssg, setMessage] = useState("");
  const navigation = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    login(
      emailref.current.children[1].children[0].value,
      Passwordref.current.children[1].children[0].value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user.email);
        setLoading(false);
        navigation("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
        setLoading(false);
      });
  };
  return (
    <Card sx={{ maxWidth: "800px", m: "auto", my: 4, p: 2, display: "block" }}>
      {mssg && <Alert severity="error">{mssg}</Alert>}
      <CardHeader title="Login your account" />
      <form
        autoComplete="off"
        style={{ margin: "auto", width: "700px" }}
        onSubmit={submitHandler}
      >
        <TextField
          sx={{ m: "auto", my: 2 }}
          required
          fullWidth
          ref={emailref}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          color="primary"
        />
        <TextField
          sx={{ m: "auto", my: 2 }}
          required
          fullWidth
          ref={Passwordref}
          id="outlined-basic-password-input"
          label="Password"
          variant="outlined"
          color="primary"
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ m: 1, px: 3 }}
          disabled={loading}
        >
          Sign Up
        </Button>
        <Typography variant="h6">
          Dont have an account?
          <Link to="/signup" style={{ paddingLeft: "10px" }}>
            Sign up
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
