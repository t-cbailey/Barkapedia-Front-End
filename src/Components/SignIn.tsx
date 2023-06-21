import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { firebaseSignIn } from "../../firebaseUtils/Firebase";
import { useState, useContext } from "react";
import { LoginContext } from "../Context/loginContext";
import { useNavigate } from "react-router-dom";
import getUserById from "../utils/getUserById.utils";

interface SignInProps {
  setId: (id: string | null) => void;
}

export default function SignIn({ setId }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [clientValidation, setClientValidation] = useState("");
  const { setEmail: setLoginEmail, setType: setLoginType } =
    useContext(LoginContext);
  const navigate = useNavigate();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailRegex.test(email) || password.trim() === "") {
      setClientValidation("Please provide a valid email and password");
      return;
    }

    setButtonDisabled(true);

    firebaseSignIn(email, password)
      .then((userId) => {
        if (userId) {
          getUserById(userId).then((result) => {
            const user = result.data;
            setLoginEmail(email);
            setId(userId);
            setLoginType(user.type);
            navigate("/");
          });
        } else {
          setSubmitError("Unfortunately, we do not recognize those details ☹️");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleFieldBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmailError(!emailRegex.test(value));
      if (!emailRegex.test(value)) {
        setClientValidation("Please provide a valid email and password");
      } else {
        setClientValidation("");
      }
    } else if (name === "password") {
      setPasswordError(value.trim() === "");
      if (value.trim() === "") {
        setClientValidation("Please provide a valid email and password");
      } else {
        setClientValidation("");
      }
    }
  };

  const handleFieldClick = () => {
    setSubmitError("");
    setButtonDisabled(false);
  };

  return (
    <Card sx={{ width: "70%", margin: "auto", marginTop: "100px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            onClick={handleFieldClick}
            onChange={handleFieldChange}
            onBlur={(event) => handleFieldBlur(event)}
            error={emailError}
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
            onClick={handleFieldClick}
            onChange={handleFieldChange}
            onBlur={(event) => handleFieldBlur(event)}
            error={passwordError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={buttonDisabled}
          >
            Sign In
          </Button>
          {submitError && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                backgroundColor: "pink",
                textAlign: "center",
                mt: 2,
                border: "solid",
                padding: "0.5rem",
              }}
            >
              {submitError}
            </Typography>
          )}
          {clientValidation !== "" && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                backgroundColor: "pink",
                textAlign: "center",
                mt: 2,
                border: "solid",
                padding: "0.5rem",
              }}
            >
              {clientValidation}
            </Typography>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
