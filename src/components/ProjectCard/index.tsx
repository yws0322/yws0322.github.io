import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

interface ProjectCardProps {
  name: string;
  description: string;
  themes: string[];
  imgsrc: string;
  link: string;
}
export function ProjectCard({
  name,
  description,
  themes,
  imgsrc,
  link,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        width: 400,
        borderRadius: 5,
        boxShadow: 0,
        border: 1,
        borderColor: "#D9D9D9",
      }}
    >
      <CardActionArea href={link}>
        <CardMedia sx={{ height: 200 }} image={imgsrc} title={name} />
        <CardContent sx={{ width: "100%" }}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography gutterBottom variant="h6" fontWeight="600">
              {name}
            </Typography>
          </Box>
          <Box height={"3vw"}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
          <Stack
            direction="row"
            justifyContent="flex-start"
            spacing={1}
            sx={{ mt: 1 }}
          >
            {themes &&
              themes.map((theme) => (
                <Chip key={theme} label={theme} size="small" />
              ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
