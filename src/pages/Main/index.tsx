import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export function MainPage() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box width="80vw" mt={10} ml={10}>
        <Box display="flex">
          <img
            src={process.env.PUBLIC_URL + "/profile.jpeg"}
            alt="profile"
            width={300}
          />
          <Box ml={4} mt={3}>
            <Box display="flex" alignItems="center">
              <Typography variant="h5" fontWeight="600" sx={{ color: "white" }}>
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
                Hi, I'm an undergraduate student majoring in Computer Science
                and Engineering at Korea University.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
