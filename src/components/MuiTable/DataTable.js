import { Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


function DataTable({ title, data, rowClickHandler, actions, deleteHandler}) {
  const headers = Object.keys(data[0]);

  return (
    <Paper>
      <Typography variant="h4" color="inherit">
        {title}
      </Typography>

      <hr />

      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell align="right">{header.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((emp, index) => (
            <TableRow key={index}
            onDoubleClick ={() => rowClickHandler(emp)}
            >
              {headers.map(header => (
                <TableCell align="right">{emp[header]}</TableCell>
              ))}
              {actions.includes('delete') && <TableCell align="right"
                onClick={() => deleteHandler(emp)}
              >
                <DeleteOutlinedIcon />
              </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.defaultProps = {
  title: "No Title"
};

export default DataTable;
