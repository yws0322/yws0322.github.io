import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { AboutMePage } from "./pages/AboutMe";
import { ProjectsPage } from "./pages/Projects";
import { StudyPage } from "./pages/Study";
import { PaperReviewPage } from "./pages/PaerReview";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutme" element={<AboutMePage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/paperreview" element={<PaperReviewPage />} />
    </Routes>
  );
}
