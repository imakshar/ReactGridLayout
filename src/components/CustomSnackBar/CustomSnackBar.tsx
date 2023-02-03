import { Alert, AlertColor, Snackbar, SnackbarOrigin } from "@mui/material";
import React from "react";
interface Iprops {
  message: string;
  open: boolean;
  onClose: () => void;
  severity: AlertColor;
  position: SnackbarOrigin;
}
const CustomSnackBar: React.FunctionComponent<Iprops> = ({
  message,
  onClose,
  open,
  severity,
  position,
}) => {
  return (
    <div data-testid="customSnackbar">
      <Snackbar
        anchorOrigin={position}
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackBar;
