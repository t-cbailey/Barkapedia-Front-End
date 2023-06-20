import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import postUser from "../utils/postUser";
import "../Styles/register.css"

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [submittable, setSubmittable] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
  const [isCustomer, setIsCustomer] = useState<boolean>(false);
  const [isBusiness, setIsBusiness] = useState<boolean>(false);
  const [user, setUser] = useState({ type: "" });

  function handleFormChange(e: any, entry: string) {
    entry === "username" && setUsername(e.target.value);
    entry === "email" && setEmail(e.target.value);
    entry === "password" && setPassword(e.target.value);
    entry === "password2" && setPassword2(e.target.value);
  }

  function createAccount(
    username: string,
    email: string,
    password: string,
    password2: string
  ) {
    if (
      /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(email) &&
      password === password2 &&
      username.length > 5
    ) {
      const updatedUser = { ...user, username, email, password };
      setUser(updatedUser);
      postUser(user)
      .then(() => {
        console.log(user, "in register.tsx");
        console.log("submitted");
      })
      .catch((err) => {
        console.dir(err);
      });
    }
  }

  
  useEffect(() => {
      console.log(user);
    if (username !== "" && email !== "" && password !== "") {
      if (isBusiness || isCustomer) setSubmittable(true);
    }
  }, [username, email, password, isBusiness, isCustomer]);
  console.log(type);

  function handleCheckbox(type: string) {
    if (type === "business" && !isBusiness) {
      setIsCustomer(false);
      setIsBusiness(true);
      setType(type);
      setUser({ ...user, type: type });
    } else if (type === "business" && isBusiness) {
      setType("");
      setIsBusiness(false);
    } else if (type === "consumer" && !isCustomer) {
      setType(type);
      setIsCustomer(true);
      setIsBusiness(false);
      setUser({ ...user, type: type });
    } else if (type === "consumer" && isCustomer) {
      setType("");
      setIsCustomer(false);
    }
  }

  return (
    <Card sx={{ width: "70%", margin: "auto", marginTop: "100px"}}>
      <FormGroup>
        <CardHeader
            sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1.5em"}}
          title="Register"
        />
        <Typography sx={{display: "flex", flexDirection: "column", alignItems: "center", margin: '1.5em'}}>Fill in the form to create your Barkapedia account, all fields must be filled in.</Typography>
        <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <ul>
          <li><TextField
            variant="standard"
            onChange={(e) => handleFormChange(e, "username")}
            label="Username"
          ></TextField></li>
          <li><TextField
            variant="standard"
            label="Email"
            onChange={(e) => handleFormChange(e, "email")}
          ></TextField></li>
          <li><TextField
            variant="standard"
            label="Password"
            type="password"
            onChange={(e) => handleFormChange(e, "password")}
          ></TextField>
          <li></li><TextField
            variant="standard"
            label="Re-enter Password"
            type="password"
            onChange={(e) => handleFormChange(e, "password2")}
          ></TextField></li>
          <Typography sx={{margin: "1.5em", marginTop:"4em"}}>Are you a business or a customer?</Typography>
          <FormControlLabel
          sx={{marginRight: "0.8em"}}
            value="start"
            control={<Checkbox />}
            label="Customer"
            checked={isCustomer}
            labelPlacement="start"
            onClick={() => handleCheckbox("consumer")}
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Business"
            checked={isBusiness}
            labelPlacement="start"
            onClick={() => handleCheckbox("business")}
          />
          </ul>
          {submittable ? (
            <Button
              variant="contained"
              sx={{margin: "1.5em"}}
              onClick={() =>
                createAccount(username, email, password, password2)
              }
            >
              Create Account
            </Button>
          ) : null}
        </CardContent>
      </FormGroup>
    </Card>
  );
}
