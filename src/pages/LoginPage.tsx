import React from 'react';
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="bg-white rounded-xl min-w-1/4 p-6 py-6 flex flex-col gap-6 items-center justify-center">
      <h1 className="text-[#68847c] font-extrabold text-lg self-start">Login</h1>
      <div className="flex gap-2 flex-col min-w-[240px]">
        <TextField
          size="small"
          label="Email"
          variant="outlined"
        />
        <TextField
          size="small"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <div className="flex w-full gap-2 justify-end">
        <Button
          size="small"
          variant="outlined"
          sx={{
            "&.MuiButtonBase-root": {
              borderColor: "#68847c",
              color: "#68847c",
              textTransform: "none",
              px: 3,
            }
          }}
        >
          Cancel
        </Button>
        <Button
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
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
