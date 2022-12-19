import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import NewDate from "../date/newDate";
import Split from "react-split";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      text: "My Notes",
      icon: <NoteAltIcon />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <ControlPointRoundedIcon />,
      path: "/create",
    },
  ];

  const subMenuItems = [
    {
      text: "Markdown",
      icons: "",
      path: "/editor",
    },
  ];

  const style = {
    colorBg: "#eee7e7",
    colorIcon: "#0091ff",
  };

  const drawer = (
    <div>
      <Toolbar />
      <ListItem
        disablePadding
        sx={{
          position: "absolute",
          top: 25,
          left: 10,
          fontSize: "",
        }}
      >
        <Typography sx={{ p: 0, m: 0 }} varaint="body" component="p">
          Note App
        </Typography>
      </ListItem>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <Link
            key={index + 1}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                bgcolor: location.pathname == item.path ? style.colorBg : "",
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: style.colorIcon }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {subMenuItems.map((item, index) => (
          <Link
            key={index + 1}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: style.colorIcon }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#ffff",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {<NewDate />}
          </Typography>
          <Button color="inherit" sx={{ border: 1 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Split sizes={[25, 75]} direction="horizontal"> */}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* </Split> */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div style={{ background: style.colorBg }}>{props.children}</div>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
