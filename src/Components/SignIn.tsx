import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { firebaseSignIn } from "../../firebaseUtils/Firebase";
import { useState, useContext } from "react";
import { LoginContext } from "../Context/loginContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setEmail: setLoginEmail } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    firebaseSignIn(email, password)
      .then((result) => {
        if (result) {
          setLoginEmail(email);
          navigate("/parks");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card sx={{ width: "70%", margin: "auto", marginTop: "100px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "cente≠",
        }}
      >
        <Typography sx={{ fontSize: "2em" }}>Sign In</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
