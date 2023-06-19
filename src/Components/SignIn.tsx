import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { firebaseSignIn } from "utils/Firebase";

export default function SignIn() {
  return (
    <Card sx={{ width: "70%", margin: "auto", marginTop: '100px',}}>
      {/* <CardHeader sx={{display: 'flex', justifyContent: 'center'}}
        title="Sign In"
      /> */}
      <CardContent sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <Typography sx={{fontSize: "2em"}}>Sign In</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
}
