import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export function MainPage() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Box mt="7vh" ml="22vw" mr="22vw">
      <Box display="flex" flexDirection="column">
        <img
          src={process.env.PUBLIC_URL + "/profile.jpeg"}
          alt="profile"
          width={300}
        />
        <Box mt={3}>
          <Typography variant="h3" fontWeight="900" sx={{ color: "white" }}>
            Yeonwoo Seo
          </Typography>
          <Typography variant="h6" fontWeight="400" sx={{ color: "white" }}>
            서연우
          </Typography>

          <Box mt={2}>
            <Typography variant="h6" sx={{ color: "white" }}>
              I'm an undergraduate student majoring in Computer Science and
              Engineering at{" "}
              <Link
                to="https://www.korea.edu/mbshome/mbs/en/index.do"
                style={{ color: "white" }}
              >
                Korea University
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
