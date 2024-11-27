import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  themes: string[];
  link: string;
}
export function ProjectCard({
  name,
  description,
  themes,
  link,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 5,
        boxShadow: 0,
        border: 1,
        borderColor: "#D9D9D9",
      }}
    >
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <CardContent>
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
          <Box minHeight={70}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
            >
              {description}
            </Typography>
          </Box>
          <Stack
            direction="row"
            justifyContent="flex-start"
            sx={{
              mt: 1,
              gap: 1,
              '& .MuiChip-root': {
                margin: 0
              }
            }}
            flexWrap="wrap"
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
