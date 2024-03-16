import { Box } from "@mui/material";
import { PageHeader } from "../../components/PageHeader";
import { ProjectCard } from "../../components/ProjectCard";

export function ProjectsPage() {
  return (
    <Box sx={{ mt: 10, ml: 40, mr: 40 }}>
      <PageHeader title={"Projects"} />
      <Box display="flex" sx={{ mt: 3 }}>
        <Box sx={{ mr: 2 }}>
          <ProjectCard
            name={"KLUB"}
            description="Club Management and Promotion Platform for Korea University"
            themes={["Frontend", "Typescript", "React"]}
            imgsrc={process.env.PUBLIC_URL + "/KLUB.png"}
            link="https://klub.kr"
          />
        </Box>
        <Box>
          <ProjectCard
            name={"KLUB"}
            description="Club Management and Promotion Platform for Korea University"
            themes={["Frontend", "Typescript", "React"]}
            imgsrc={process.env.PUBLIC_URL + "/KLUB.png"}
            link="https://klub.kr"
          />
        </Box>
      </Box>
    </Box>
  );
}
