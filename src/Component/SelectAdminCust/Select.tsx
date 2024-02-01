import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Select.css'

const Select = () => {
  const navTo = useNavigate();
  
  return (
    <Box className="main-select-admin-cust">
      <Box className="sub-select">
        <Typography variant="h5">Select where are you want to go</Typography>
        <Box className="select-box">
          <Button
            variant="outlined"
            sx={{ fontWeight: "bold" }}
            onClick={() => navTo("/sign-up/admin")}
          >
            Admin
          </Button>
          <Button variant="outlined" sx={{ fontWeight: "bold" }} onClick={() => navTo("/sign-up/customer")}>
            Customer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Select;
