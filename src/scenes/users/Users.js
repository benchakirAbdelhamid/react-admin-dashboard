import React, { useState } from "react";
import "./style.css";
import { Box } from "@mui/material";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#7a0ec2cc",
    color: "white",
    "&:hover": {
      backgroundColor: "#60079cc7",
    },
  },
}));

const Users = () => {
  const classes = useStyles();

  const [tableData, setTableData] = useState([
    {
      id: "1",
      userFirstName: "test first name",
      userEmail: "test email",
      userPassword: "test password",
      sexe: "test sexe",
      birthDate: "test birthDate",
      photoURl: "photoURl",
    },
    {
      id: "2",
      userFirstName: "test first name",
      userEmail: "test email",
      userPassword: "test password",
      sexe: "test sexe",
      birthDate: "test birthDate",
      photoURl: "photoURl",
    },
    {
      id: "3",
      userFirstName: "test first name",
      userEmail: "test email",
      userPassword: "test password",
      sexe: "test sexe",
      birthDate: "test birthDate",
      photoURl: "photoURl",
    },
  ]);

  const handleInputChange = (e, id,field) => {

  const updatedTableData = tableData.map((item) =>
    item.id === id ? { ...item, [field]: e.target.value } : item
  );
  setTableData(updatedTableData);
  };

  const handleButtonClick = () => {
    console.log(tableData);
  };

  return (
    <Box m="20px">
      <table id="customers">
        <tr>
          <th>photoURl</th>
          <th>sexe</th>
          <th>userEmail</th>
          <th>userFirstName</th>
          <th>birthDate</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td component="th" scope="row">
              {item.photoURl}
            </td>
            <td>
              <input
                type="text"
                value={item.sexe}
                onChange={(e) => handleInputChange(e, item.id ,'sexe')}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.userEmail}
                onChange={(e) => handleInputChange(e, item.id,'userEmail')}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.userFirstName}
                onChange={(e) => handleInputChange(e, item.id,'userFirstName')}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.birthDate}
                onChange={(e) => handleInputChange(e, item.id,'birthDate')}
              />
            </td>
            <td>
              {" "}
              <Button className={classes.button}>Delete</Button>
            </td>
            <td>
              <Button className={classes.button} onClick={handleButtonClick}>
                Update
              </Button>
            </td>
          </tr>
        ))}
      </table>
    </Box>
  );
};

export default Users;
