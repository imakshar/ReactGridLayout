import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomSnackBar from "../components/CustomSnackBar/CustomSnackBar";
import { staticCreds } from "../data/staticCredentials";

const theme = createTheme();
interface IUserCredentials {
  username: string;
  password: string;
}
const defaultState: IUserCredentials = {
  username: "",
  password: "",
};
const LoginPage = () => {
  const navigate = useNavigate();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const [userCredentials, setUserCredentials] =
    useState<IUserCredentials>(defaultState);

  const validateCredentials = (): boolean => {
    return (
      userCredentials.username === staticCreds.username &&
      userCredentials.password === staticCreds.password
    );
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateCredentials()) {
      setIsSnackbarOpen(true);
      return;
    }
    navigate("/home");
  };
  const handleOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    const { value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [key]: value,
    });
  };

  const handleSnackbarClose = () => setIsSnackbarOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CustomSnackBar
          message="Invalid Credentials"
          onClose={handleSnackbarClose}
          open={isSnackbarOpen}
          position={{ horizontal: "center", vertical: "top" }}
          severity="error"
        />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={userCredentials.username}
              onChange={(e) => handleOnChange(e, "username")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userCredentials.password}
              onChange={(e) => handleOnChange(e, "password")}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={
                !userCredentials.username.length ||
                !userCredentials.password.length
              }
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
