import React, { useState, useEffect } from "react";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  location: string;
}
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250, pt: 4, pl: 1 }} role="presentation" onClick={() => setIsOpen(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/aboutme"
            sx={{
              color: location.pathname === "/aboutme" ? "#4FA3F0" : "",
            }}
          >
            <Typography sx={{ fontSize: '1.25rem' }}>
              About Me
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/cv"
            sx={{
              color: location.pathname === "/cv" ? "#4FA3F0" : "",
            }}
          >
            <Typography sx={{ fontSize: '1.25rem' }}>
              CV
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="https://boom-zoo-bbe.notion.site/Study-b89e4b92f60448cfa31d442bd22679a4?pvs=74"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography sx={{ fontSize: '1.25rem' }}>
              Study Logs
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        position: "fixed",
        height: { xs: "60px", sm: "70px" },
        width: "100%",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        maskImage: isScrolled ? "linear-gradient(to bottom, black 50%, transparent 100%)" : "none",
        WebkitMaskImage: isScrolled ? "linear-gradient(to bottom, black 50%, transparent 100%)" : "none",
        px: { xs: 1, sm: 3 },
        zIndex: 1000,
        transition: "backdrop-filter 0.3s ease-in-out, mask-image 0.3s ease-in-out"
      }}
    >
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {DrawerList}
      </Drawer>
      <Box
        width="100vw"
        display="flex"
        sx={{
          ml: { xs: 2, sm: 10 },
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography fontWeight={600} fontSize={{ xs: 20, sm: 25 }}>
            Yeonwoo
          </Typography>
        </Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={{ xs: 1, sm: 2 }}
        sx={{ mr: { xs: 2, sm: 5 } }}
      >
        <Link
          to="https://github.com/yws0322"
          style={{ textDecoration: "none", color: "#4D4D4D" }}
        >
          <GitHubIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
        </Link>
        <Link
          to="mailto:yws0322@korea.ac.kr"
          style={{ textDecoration: "none", color: "#4D4D4D" }}
        >
          <EmailIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/yeonwoo-seo-8950372bb"
          style={{ textDecoration: "none", color: "#4D4D4D" }}
        >
          <LinkedInIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
        </Link>
      </Box>
    </Box>
  );
}
