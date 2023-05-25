import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Organizers = () => {
  // const state = useSelector((state) => state.topBar);
  const [stateOrganizers , setstateOrganizers] = useState(
    [
      {
        id : '1',
        FirstName:'test first name',
        LastName:'test Last Name',
        email:'test email',
        password:'test password',
        organizationName:'test organizationName',
      },
      {
        id : '2',
        FirstName:'test first name',
        LastName:'test Last Name',
        email:'test email',
        password:'test password',
        organizationName:'test organizationName',
      },  
      {
        id : '3',
        FirstName:'test first name',
        LastName:'test Last Name',
        email:'test email',
        password:'test password',
        organizationName:'test organizationName',
      },
    ]
  )

  useEffect(()=>{
    // console.log(state)
    // state.organizers.map(itemEvent=>{
    //   console.log(itemEvent)
    // })
    
      })


    return (
      <Box m="20px">
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>FirstName</StyledTableCell>
                <StyledTableCell align="right">LastName</StyledTableCell>
                <StyledTableCell align="right">email</StyledTableCell>
                <StyledTableCell align="right">organizationName</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
                <StyledTableCell align="right">Update</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateOrganizers.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.FirstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.LastName}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.organizationName}</StyledTableCell>
                  <StyledTableCell align="right">
                  <Button variant="contained">Delete</Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <Button variant="contained">Update</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))} 
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
}

export default Organizers;
