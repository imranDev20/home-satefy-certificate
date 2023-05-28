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
import { CgArrowLongRight } from "react-icons/cg";
import { theme } from "./layout";
import { Link as GatsbyLink } from "gatsby";
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
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={item === "Home" ? "/" : item.toLowerCase()}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "primary.main",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Home Safety Cert
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
              <Button
                variant="blue"
                color="primary"
                to="/quote/"
                LinkComponent={GatsbyLink}
                sx={{ ml: 2 }}
                endIcon={<CgArrowLongRight />}
              >
                Request a Quote
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: "100%" }}>
        {props.children}
      </Box>
    </>
  );
};

export default DrawerAppBar;
