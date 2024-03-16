import { Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
}
export function PageHeader({ title }: PageHeaderProps) {
  return (
    <Typography variant="h2" fontWeight="900">
      {title}
    </Typography>
  );
}
