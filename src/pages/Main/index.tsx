import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        mt: { xs: "15vh", sm: "15vh", md: "18vh" },
        px: { xs: 4, sm: 8, md: 12, lg: 20 },
        alignItems: { xs: 'flex-start', sm: 'center' },
      }}
    >
      <Typography
        variant="h2"
        fontWeight="600"
        sx={{
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
          textAlign: { xs: 'left', sm: 'center' }
        }}
      >
        Hi, I'm
        <Box
          component="span"
          display={{ xs: 'block', sm: 'inline' }}
          sx={{
            ml: { sm: 2 }
          }}
        >
          Yeonwoo 👋
        </Box>
      </Typography>
      <Typography
        variant="h4"
        mt={3}
        sx={{
          fontSize: { xs: '1.8rem', sm: '1.8rem', md: '2.125rem' },
          textAlign: { xs: 'left', sm: 'center' }
        }}
      >
        An AI engineer interested in
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '1.8rem', sm: '1.8rem', md: '2.125rem' },
          textAlign: { xs: 'left', sm: 'center' }
        }}
      >
        natural language processing and data science
      </Typography>
      <Button
        onClick={() => {
          navigate("/aboutme");
        }}
        variant="contained"
        sx={{
          borderRadius: 50,
          fontSize: { xs: 18, sm: 18, md: 24 },
          padding: {
            xs: '12px 32px',
            sm: '12px 32px',
            md: '16px 40px'
          },
          bgcolor: "#4D4D4D",
          "&:hover": { bgcolor: "grey" },
          textTransform: 'none',
          minWidth: { xs: '200px', sm: '200px', md: '240px' },
          height: { xs: '48px', sm: '48px', md: '60px' },
          mt: 7
        }}
      >
        explore my blog
      </Button>
    </Box>
  );
}
