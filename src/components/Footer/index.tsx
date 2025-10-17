import { Box, Typography } from "@mui/material";

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                mb: 4,
                textAlign: 'center',
                color: 'text.secondary',
            }}
        >
            <Typography variant="body2">
                © 2025 Yeonwoo Seo. All rights reserved.
            </Typography>
        </Box>
    );
}