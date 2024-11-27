import React from 'react';
import { Box, Typography, List, ListItem, Link, Chip } from "@mui/material";

interface ExperienceItemProps {
  organization: string;
  role: string;
  period: string;
  details?: string[];
  link?: string;
  tags?: string[];
}

export function ExperienceItem({
  organization,
  role,
  period,
  details,
  link,
  tags
}: ExperienceItemProps) {
  return (
    <Box mb={3} display="flex">
      <Box width="140px" fontStyle="italic">
        <Typography>{period}</Typography>
      </Box>
      <Box flex={1}>
        <Typography fontWeight="bold">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                textDecoration: 'underline',
                '&:hover': {
                  opacity: 0.7
                }
              }}
            >
              {organization}
            </Link>
          ) : (
            organization
          )}
        </Typography>
        <Typography fontStyle="italic">
          {role}
        </Typography>
        {details && (
          <List sx={{ p: 0, mt: 1 }}>
            {details.map((detail, index) => (
              <ListItem key={index} sx={{ display: 'list-item', p: 0 }}>
                <Typography>{detail}</Typography>
              </ListItem>
            ))}
          </List>
        )}
        {tags && tags.length > 0 && (
          <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(79, 163, 240, 0.1)',
                  color: '#4FA3F0',
                  '&:hover': {
                    bgcolor: 'rgba(79, 163, 240, 0.2)'
                  }
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}