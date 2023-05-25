import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./style.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EventIcon from "@mui/icons-material/Event";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useSelector } from "react-redux/es/exports";
import { ResponsivePie } from "@nivo/pie";
import { useEffect } from "react";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [number, setNumber] = useState(360);
  const topBarData = useSelector((state) => state.topBar);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [stateSuperAdmin , setStateSuperAdmin] = useState([
    {
      id : '1',
      lastName:'Abdelhamid',
      firstName:'benchakir',
      password:'test password',
      auth_expiring:'test auth_expiring',
    },
  ])

  const data = [
    {
      id: "parzialmente Implementato",
      label: "parzialmente Implementato",
      value: 62,
      color: "hsl(70, 70%, 50%)",
    },
    {
      id: "Non Implementato",
      label: "Non Implementato",
      value: 45,
      color: "hsl(159, 70%, 50%)",
    },
    {
      id: "Implementato",
      label: "Implementato",
      value: 28,
      color: "hsl(77, 70%, 50%)",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setNumber(0);
    }, 100);
  });

  let fullName = `Welcome ${stateSuperAdmin[0].lastName} ${stateSuperAdmin[0].firstName} to your dashboard`;

  return (
    <div>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}
          <Header title="DASHBOARD" subtitle={fullName} />
        </Box>
        {/* {topBarData.super_admin[0].lastName +' ' } */}
        {/* {topBarData.super_admin[0].firstName  } */}
      </Box>

      <Box m="20px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={4} sm={6}>
            <Box display="grid" gridAutoRows="140px" gap="20px">
              <Box
              // sx={{borderRadius: "90px"}}
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={"20px"}
                // padding={'15px'}
              >
                <StatBox
                  title="12,361"
                  subtitle="Clients"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <AccessibilityIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                    />
                  }
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Box display="grid" gridAutoRows="140px" gap="20px">
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={"20px"}
                // padding={'15px'}
              >
                <StatBox
                  title="12,361"
                  subtitle="Orders"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <AddShoppingCartIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                    />
                  }
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Box display="grid" gridAutoRows="140px" gap="20px">
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={"20px"}
                // padding={'15px'}
              >
                <StatBox
                  title="12,361"
                  subtitle="Event"
                  progress="0.25"
                  increase="+14%"
                  icon={
                    <EventIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Box display="grid" gridAutoRows="140px" gap="20px">
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={"20px"}
                // padding={'15px'}
              >
                <StatBox
                  title="12,361"
                  subtitle="Ticket"
                  progress="0.75"
                  increase="+19%"
                  icon={
                    <ConfirmationNumberIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />
              </Box>
            </Box>
          </Grid>
        
          <Grid item xs={12} md={4} sm={6}>
            <Box display="grid" gridAutoRows="140px" gap="20px">
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={"20px"}
                // padding={'15px'}
              >
                <StatBox
                  title="12,361"
                  subtitle="Organizer"
                  progress="0.55"
                  increase="+19%"
                  icon={
                    <SupervisorAccountIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    

      {/* </div> */}
    </div>
  );
};

export default Home;
