import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{
            color: "#fff",
            background:
              "linear-gradient(-45deg, #436491, #B7C9D9, #4FA3F0, #22131A)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "400% 400%",
            position: "relative",
            animation: "backgroundChange 20s ease-in-out infinite",
            overflow: "hidden",
          }}
        >
          <Box sx={{ zIndex: 2 }}>
            <Header location={location.pathname} />
          </Box>
          <Box
            width="100%"
            height="100vh"
            sx={{ marginTop: "70px", zIndex: 1 }}
          >
            {children}
          </Box>
        </Box>
      ) : (
        <Box display={"flex"} justifyContent={"center"}>
          <Box sx={{ zIndex: 2 }}>
            <Header location={location.pathname} />
          </Box>
          <Box
            width="100%"
            height="100vh"
            sx={{ marginTop: "70px", zIndex: 1 }}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  );
}
