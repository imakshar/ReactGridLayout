import BusinessIcon from "@mui/icons-material/Business";
import LogoutIcon from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" data-testid="appbar">
        <Toolbar disableGutters>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
            sx={{
              px:4
            }}
          >
            <Box display="flex" alignItems="center">
              <BusinessIcon
                sx={{ display: { md: "flex" }, mr: 2 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Employee Info
              </Typography>
            </Box>
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Tooltip title="Logout">
                  <LogoutIcon
                    sx={{ mr: 2 }}
                    onClick={() => navigate("/")}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Toolbar>
    </AppBar>
  );
};
export default Navbar;
