import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{
        backgroundColor: location.pathname === "/" ? "#6B7D6C" : "white",
      }}
    >
      <Box sx={{ zIndex: 2 }}>
        <Header />
      </Box>
      <Box width="100%" height="100vh" sx={{ marginTop: "70px", zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
