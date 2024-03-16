import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export function Header() {
  return (
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
        <Link to={"/projects"} style={{ textDecoration: "none" }}>
          <Typography fontSize={20} sx={{ color: "white", ml: 3 }}>
            Projects
          </Typography>
        </Link>
      </Box>
      <Box>
        <Link to="https://github.com/readygetset">
          <GitHubIcon sx={{ color: "white", ml: 2 }} />
        </Link>
        <Link to="mailto:yws0322@korea.ac.kr">
          <EmailIcon sx={{ color: "white", ml: 2 }} />
        </Link>
        <Link to="https://www.instagram.com/syw27o">
          <InstagramIcon sx={{ color: "white", ml: 2, mr: 5 }} />
        </Link>
      </Box>
    </Box>
  );
}
