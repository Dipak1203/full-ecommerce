import React from "react";
import "./Login.css";
import Box from "@mui/material/Box";

const Login = () => {
  return (
    <div className="login">
      <div>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;
