import { Box, Typography } from "@mui/material";
import React from "react";

export interface IProps {
  title: string;
  icon?: React.ReactElement;
  children?: React.ReactNode;
}
const CustomTitleBox: React.FunctionComponent<IProps> = ({
  title,
  children,
  icon,
}: IProps) => {
  return (
    <Box sx={{ height: "100%", mt: 1 }}>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
        data-testid="customTitleBox"
      >
        <Box>{icon}</Box>
        <Box sx={{ ml: 2 }}>
          <Typography
            variant="body1"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default CustomTitleBox;
