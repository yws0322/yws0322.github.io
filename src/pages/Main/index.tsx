import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ mt: "25vh" }}
    >
      <Typography variant="h2" fontWeight="600">
        Hi, I'm Yeonwoo 👋
      </Typography>
      <Typography variant="h4" mt={3}>
        An AI engineer interested in
      </Typography>
      <Typography variant="h4">
        natural language processing and healthcare
      </Typography>
      <Button
        onClick={() => {
          navigate("/aboutme");
        }}
        variant="contained"
        size="large"
        sx={{
          borderRadius: 50,
          mt: 5,
          fontSize: 20,
          bgcolor: "#4D4D4D",
          "&:hover": { bgcolor: "grey" },
        }}
      >
        explore my blog
      </Button>
    </Box>
  );
}
