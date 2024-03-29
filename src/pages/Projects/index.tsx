import { Box } from "@mui/material";
import { ProjectCard } from "../../components/ProjectCard";

export function ProjectsPage() {
  return (
    <Box sx={{ mt: "15vh", ml: "22vw", mr: "22vw" }}>
      <Box display="flex">
        <Box sx={{ mr: 2 }}>
          <ProjectCard
            name={"KLUB"}
            description="Club Management and Promotion Platform for Korea University"
            themes={["Frontend", "Typescript", "React"]}
            imgsrc={"/KLUB.png"}
            link="https://klub.kr"
          />
        </Box>
      </Box>
    </Box>
  );
}
