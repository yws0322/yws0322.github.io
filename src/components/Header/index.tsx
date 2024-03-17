import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up("md"));

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: "50vw" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <ListItem key="Yeonwoo Seo" disablePadding>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemText
            primary="Yeonwoo Seo"
            primaryTypographyProps={{ fontWeight: "700" }}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
      <List>
        <ListItem key="About Me" disablePadding>
          <ListItemButton onClick={() => navigate("/aboutme")}>
            <ListItemText primary="About Me" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Study" disablePadding>
          <ListItemButton onClick={() => navigate("/study")}>
            <ListItemText primary="Study" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Paper Review" disablePadding>
          <ListItemButton onClick={() => navigate("/paperreview")}>
            <ListItemText primary="Paper Review" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Projects" disablePadding>
          <ListItemButton onClick={() => navigate("/projects")}>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: "fixed",
          height: "70px",
          width: "100vw",
          bgcolor: "#6B7D6C",
          px: 3,
        }}
      >
        <Box display="flex" alignItems="center">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography fontSize={25} fontWeight="600" sx={{ color: "white" }}>
              Yeonwoo Seo
            </Typography>
          </Link>
          {isPC && (
            <>
              <Link to={"/aboutme"} style={{ textDecoration: "none" }}>
                <Typography fontSize={20} sx={{ color: "white", ml: 5 }}>
                  About Me
                </Typography>
              </Link>
              <Link to={"/study"} style={{ textDecoration: "none" }}>
                <Typography fontSize={20} sx={{ color: "white", ml: 3 }}>
                  Study
                </Typography>
              </Link>
              <Link to={"/paperreview"} style={{ textDecoration: "none" }}>
                <Typography fontSize={20} sx={{ color: "white", ml: 3 }}>
                  Paper Review
                </Typography>
              </Link>
              <Link to={"/projects"} style={{ textDecoration: "none" }}>
                <Typography fontSize={20} sx={{ color: "white", ml: 3 }}>
                  Projects
                </Typography>
              </Link>
            </>
          )}
        </Box>
        {!isPC && (
          <MenuIcon
            onClick={toggleDrawer(true)}
            sx={{ color: "white", mr: 5 }}
          />
        )}
        {isPC && (
          <Box display="flex" alignItems="center">
            <Link
              to="https://github.com/readygetset"
              style={{ textDecoration: "none" }}
            >
              <GitHubIcon sx={{ color: "white", ml: 2 }} />
            </Link>
            <Link
              to="mailto:yws0322@korea.ac.kr"
              style={{ textDecoration: "none" }}
            >
              <EmailIcon sx={{ color: "white", ml: 2 }} />
            </Link>
            <Link
              to="https://www.instagram.com/syw27o"
              style={{ textDecoration: "none" }}
            >
              <InstagramIcon sx={{ color: "white", ml: 2, mr: 5 }} />
            </Link>
          </Box>
        )}
      </Box>
      <Drawer open={isOpen} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </>
  );
}
