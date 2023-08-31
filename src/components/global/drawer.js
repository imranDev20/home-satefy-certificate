import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Slide, useScrollTrigger } from "@mui/material";
import { Link } from "gatsby";
import { theme } from "./layout";
import { navItems } from "../../utils/constant";

const drawerWidth = 240;
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const DrawerAppBar = (props) => {
  const { window, location } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Home Safety Cert
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={item === "Home" ? "/" : "/" + item.toLowerCase()}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          component="nav"
          sx={{
            backgroundColor: "white",
            boxShadow: "0 0 20px 0 rgba(6, 22, 58, 0.11)",
            clipPath: "inset(0 0 -25px 0)",
          }}
          position="sticky"
        >
          <Container>
            <Toolbar
              disableGutters
              sx={{
                height: "70px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "primary.main",
                }}
              >
                Home Safety Cert
              </Typography>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component={Link}
                    activeStyle={{ color: theme.palette.secondary.main }}
                    to={
                      item === "Home"
                        ? "/"
                        : "/" + item.toLowerCase().replaceAll(" ", "-")
                    }
                    sx={{
                      fontWeight: 600,
                      mx: 1,
                      color: location?.pathname.includes(item.toLowerCase())
                        ? "secondary.main"
                        : "black.main",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              {/* <Button
                variant="blue"
                color="primary"
                to="/quote/"
                LinkComponent={GatsbyLink}
                sx={{ ml: 2, display: { xs: "none", lg: "flex" } }}
                endIcon={<CgArrowLongRight />}
              >
                Request a Quote
              </Button> */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { xs: "flex", lg: "none" },
                  color: "primary.main",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "lg" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: "100%",
          backgroundColor:
            location && location.pathname === "/quote"
              ? "background.main"
              : "white",
        }}
      >
        {props.children}
      </Box>
    </>
  );
};

export default DrawerAppBar;
