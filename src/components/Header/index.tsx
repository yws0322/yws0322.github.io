import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

interface HeaderProps {
  location: string;
}
export function Header({ location }: HeaderProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        position: "fixed",
        height: "70px",
        width: "100vw",
        bgcolor: "transparent",
        px: 3,
      }}
    >
      <Box width="33.3vw" display="flex" alignItems="center">
        <Link
          to={"/aboutme"}
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            fontSize={20}
            sx={{
              color: location === "/aboutme" ? "#4FA3F0" : "",
              fontWeight: location === "/aboutme" ? "900" : "",
            }}
          >
            About Me
          </Typography>
        </Link>
        <Link to={"/study"} style={{ textDecoration: "none" }}>
          <Typography
            fontSize={20}
            sx={{
              color: location === "/study" ? "#4FA3F0" : "",
              fontWeight: location === "/study" ? "900" : "",
              ml: 3,
            }}
          >
            Study
          </Typography>
        </Link>
        <Link
          to={"/paperreview"}
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            fontSize={20}
            sx={{
              color: location === "/paperreview" ? "#4FA3F0" : "",
              fontWeight: location === "/paperreview" ? "900" : "",
              ml: 3,
            }}
          >
            Paper Review
          </Typography>
        </Link>
        <Link to={"/projects"} style={{ textDecoration: "none" }}>
          <Typography
            fontSize={20}
            sx={{
              color: location === "/projects" ? "#4FA3F0" : "",
              fontWeight: location === "/projects" ? "900" : "",
              ml: 3,
            }}
          >
            Projects
          </Typography>
        </Link>
      </Box>
      <Box
        width="33.3vw"
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        sx={{ margin: "0 auto" }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography fontWeight={600} fontSize={25}>
            Yeonwoo Seo
          </Typography>
        </Link>
      </Box>
      <Box
        width="33.3vw"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Link
          to="https://github.com/readygetset"
          style={{ textDecoration: "none", color: "#4D4D4D" }}
        >
          <GitHubIcon sx={{ ml: 2 }} />
        </Link>
        <Link
          to="mailto:yws0322@korea.ac.kr"
          style={{ textDecoration: "none", color: "#4D4D4D" }}
        >
          <EmailIcon sx={{ ml: 2 }} />
        </Link>
        <Link
          to="https://www.instagram.com/syw27o"
          style={{ textDecoration: "none", color: "#4D4D4D" }}
        >
          <InstagramIcon sx={{ ml: 2, mr: 5 }} />
        </Link>
      </Box>
    </Box>
  );
}
