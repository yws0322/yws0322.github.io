import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function AboutMePage() {
  return (
    <Box sx={{ mt: "15vh", ml: "22vw", mr: "22vw" }}>
      <Box display="flex">
        <img src={"/profile.jpg"} alt="profile" width={300} />
        <Box mt={2} ml={5}>
          <Typography fontSize={25}>Yeonwoo Seo</Typography>
          <Box mt={2}>
            <Typography variant="h6">
              I'm an undergraduate student majoring in Computer Science and
              Engineering at{" "}
              <Link
                to="https://www.korea.edu/mbshome/mbs/en/index.do"
                style={{ color: "#4D4D4D" }}
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
