import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {

    const navigate = useNavigate()

    return (
        <Card sx={{ width: "100%", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center"}}>
        <CardHeader
            title="About Us"
            sx={{maxWidth: "700px", display: "flex", justifyContent: "center"}}
        ></CardHeader>
        </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
        <CardContent sx={{maxWidth: "700px"}}>
            <Typography>We understand the importance of providing our furry friends with a secure and stimulating environment to socialise, exercise, and have a paw-some time.
                <br/>
                <br/>
Our user-friendly website features a database of vetted dog parks, complete with detailed information, such as location, amenities, and user reviews.
<br/>
                <br/>
Whether you're a dog owner looking for a new place to explore or a passionate community member who wants to contribute, Barkapedia allows you to easily submit new parks and share your experiences.<br/>
                <br/></Typography>
                <div style={{ display: "flex", justifyContent: "center"}}>
                <Button
              type="submit"
              fullWidth
              onClick={() => navigate("/register")}
              variant="contained"
              sx={{ mt: 3, mb: 2, padding: "10px", marginTop: "40px", maxWidth: "500px" }}
            >
              Join our growing community today!
            </Button>
            </div>
        </CardContent>
        </div>
        </Card>
    )
}