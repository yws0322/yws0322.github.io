import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { AboutMePage } from "./pages/AboutMe";
import { CVPage } from "./pages/CV";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutme" element={<AboutMePage />} />
      <Route path="/cv" element={<CVPage />} />
    </Routes>
  );
}
