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

const Event = () => {
  // const state = useSelector((state) => state.topBar);

  const [stateEvent , setstateEvent] = useState(
    [
    {
      id : '1',
      eventName:'test eventName',
      eventPrice:'test eventPrice',
      description_event:'test description_event',
      dateEvent:'test dateEvent',
      locationEvent:'test locationEvent',
      imageEvent:'test imageEvent',
      statusEvent:'test statusEvent',
      placesNumber:'test placesNumber',
      typeEvenement:'test typeEvenement',
      idOrganizer:'test idOrganizer',
    },
    {
      id : '2',
      eventName:'test eventName',
      eventPrice:'test eventPrice',
      description_event:'test description_event',
      dateEvent:'test dateEvent',
      locationEvent:'test locationEvent',
      imageEvent:'test imageEvent',
      statusEvent:'test statusEvent',
      placesNumber:'test placesNumber',
      typeEvenement:'test typeEvenement',
      idOrganizer:'test idOrganizer',
    }
  ]
  )


   
    return (
      <Box m="20px">
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>eventName</StyledTableCell>
            <StyledTableCell align="right">eventPrice</StyledTableCell>
            <StyledTableCell align="right">imageEvent</StyledTableCell>
            <StyledTableCell align="right">locationEvent</StyledTableCell>
            <StyledTableCell align="right">placesNumber</StyledTableCell>
            <StyledTableCell align="right">statusEvent</StyledTableCell>
            <StyledTableCell align="right">typeEvenement</StyledTableCell>
            <StyledTableCell align="right">idOrganizer</StyledTableCell>
            <StyledTableCell align="right">description_event</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stateEvent.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.eventName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.eventPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.imageEvent}</StyledTableCell>
              <StyledTableCell align="right">{row.locationEvent}</StyledTableCell>
              <StyledTableCell align="right">{row.placesNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.statusEvent}</StyledTableCell>
              <StyledTableCell align="right">{row.typeEvenement}</StyledTableCell>
              <StyledTableCell align="right">{row.idOrganizer}</StyledTableCell>
              <StyledTableCell align="right">{row.description_event}</StyledTableCell>
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

export default Event;




