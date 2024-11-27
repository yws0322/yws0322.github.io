import React from 'react';
import { Box, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <Box mb={6}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        {title}
      </Typography>
      {children}
    </Box>
  );
} 