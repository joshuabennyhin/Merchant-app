import React, { useState } from 'react';
import { Box, Button, Typography, useTheme, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { tokens } from "../../theme";


import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

import Header from "../../components/Header";

import StatBox from "../../components/StatBox";

import Contacts from "../contacts";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Perform save operation here
    handleCloseDialog();
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="New Installments" subtitle="" />

        <Box>
          <Box
            sx={{
              backgroundColor: colors.primary[400],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            CGR : RS, 12,340/Gram |
            <Link
              to="#"
              onClick={handleOpenDialog}
              style={{ color: "orange", marginLeft: '5px', textDecoration: "none" }}
            >
              Click Here
            </Link>
          </Box>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title1="Total Customers :"
            title2="Total Amount :"
            value1="12,34,500"
            value2="12,34,005"
            subtitle="Total Plan"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title1="No of Customers :"
            title2="Total Amount :"
            value1="12,34,500"
            value2="12,34,005"
            subtitle="New Plan"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title1="No of Customers :"
            title2="Total Amount :"
            value1="12,34,500"
            value2="12,34,005"
            subtitle="Existing Plan"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            component={Link}
            to="/Dashboard/GoldrateHistory"
            sx={{
              width: "100%",
              textAlign: "center",
              textDecoration: "none",
              color: colors.greenAccent[500],
              backgroundColor: colors.primary[400],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography style={{ marginRight: "26px", textTransform: "none",color:"#1D9C60" }} variant="h5" sx={{ fontWeight: "bold" }}>
              Gold Rate History
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between",paddingTop:"10px" }}>
            <img
                alt="profile-user"
                width="60px"
                height="50px"
                src={`../../assets/coincg.png`}
                style={{ cursor: "pointer", paddingRight:"10px" }}
              
              />
              <div style={{ paddingTop: "10px" }}>
                <Typography style={{ color: "black", fontWeight: "bold", textTransform: "none" }}>
                  Current Gold Rate
                </Typography>
                <Typography style={{ color: "black", fontWeight: "bold", textAlign: "left", textTransform: "none" }}>
                  12,340
                </Typography>
              </div>
            </div>
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle style={{backgroundColor:"#1D9C60",color:"white",textAlign:"center",lineSpacing:"3px",fontSize:"15px",fontWeight:"bold"}}>Update Gold Rate</DialogTitle>
        <DialogContent style={{backgroundColor:"white"}}>
          <input style={{width:"100%",marginTop:"50px",height:"30px"}} type="text" />
        </DialogContent>
        <DialogActions style={{backgroundColor:"white"}}>
          <Button style={{backgroundColor:"#1D9C60"}} onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Contacts />
    </Box>
  );
};

export default Dashboard;
