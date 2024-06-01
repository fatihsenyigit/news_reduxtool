
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/loginSlice";

const Navbar = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.login)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(clearUser())
  }
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="error">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              // onClick={() => navigate("/geri")}
            >
              News
            </Typography>
            {user.email && user.password ? (
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            ) : (
              <Button color="inherit">Login</Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navbar