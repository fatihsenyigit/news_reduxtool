import { Avatar, Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

       const handleSubmit = (e) => {
         e.preventDefault();
         setEmail("");
         setPassword("");
       };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            // required
            fullWidth
            id="email"
            label="email address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            // required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Fatih
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default Login;
