import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function AboutMePage() {
  return (
    <Box sx={{
      mt: { xs: "5vh", lg: "15vh" },
      ml: { xs: "10vw", lg: "20vw" },
      mr: { xs: "10vw", lg: "20vw" },
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { lg: 8 },
          alignItems: { lg: 'flex-start' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: { lg: '0 0 auto' }
          }}
        >
          <img
            src={"/profile.jpg"}
            alt="profile"
            style={{
              width: 300,
              height: 'auto'
            }}
          />
        </Box>

        <Box sx={{ flex: 1, mt: { xs: 4, lg: 0 } }}>
          <Typography
            fontSize={25}
            sx={{
              mb: 3,
              textAlign: { xs: 'center', lg: 'left' }
            }}
          >
            Yeonwoo Seo
          </Typography>
          <Box>
            <Typography variant="body1">
              I'm an undergraduate student majoring in Computer Science and
              Engineering at{" "}
              <Link
                to="https://www.korea.edu/sites/en/index.do"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4D4D4D" }}
              >
                Korea University
              </Link>
              .
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              My research focuses on developing a comprehensive and scalable
              framework that leverages data characteristics and domain-specific
              insights across diverse modalities.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              I am interested in the following fields:
            </Typography>
            <Box component="ul" sx={{ mt: 1, pl: 2 }}>
              <Typography component="li" variant="body1">
                Natural Language Processing
              </Typography>
              <Typography component="li" variant="body1">
                Large Language Models
              </Typography>
              <Typography component="li" variant="body1">
                Data Science
              </Typography>
              <Typography component="li" variant="body1">
                Recommendation Systems
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
