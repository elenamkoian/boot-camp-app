import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

export const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="flex inset-0 absolute w-fit h-fit m-auto p-2 text-center bg-white">
      <div className="flex flex-col gap-6">
        <p>
          {
            isRouteErrorResponse(error) && error.status === 404
              ? "This page doesn't exist! Please navigate to Home Page."
              : "Oops! Something went wrong. Please navigate to Home Page."
          }
        </p>
        <Button
          href="/home"
          size="small"
          variant="contained"
          sx={{
            "&.MuiButtonBase-root": {
              backgroundColor: "#68847c",
              color: "white",
              textTransform: "none",
              px: 3,
            }
          }}
        >
          Home Page
        </Button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
