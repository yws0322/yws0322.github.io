import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export function MainPage() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Box mt={10} ml={40} mr={40}>
      <Box display="flex">
        <img
          src={process.env.PUBLIC_URL + "/profile.jpeg"}
          alt="profile"
          width={300}
        />
        <Box ml={4} mt={3}>
          <Box display="flex" alignItems="center">
            <Typography variant="h4" fontWeight="700" sx={{ color: "white" }}>
              Yeonwoo Seo
            </Typography>
            <Typography
              variant="h6"
              fontWeight="400"
              sx={{ color: "white", ml: 2 }}
            >
              서연우
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Hi, I'm an undergraduate student majoring in Computer Science and
              Engineering at Korea University.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
