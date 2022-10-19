import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(location: string, distance: number, time: string) {
  return { location, distance, time };
}

const rows = [
  createData("Ediburgh Airport", 43, "54 minutes"),
  createData("Downtown Edinburgh", 36, "1 hour"),
  createData("Lauder", 10, "16 minutes"),
  createData("Glasgow", 82, "1 hour, 33 minutes"),
  createData("London", 379, "6 hours, 33 minutes"),
  createData("Nantes", 586, "3 hours"),
  createData("Colorado", 4405, "15 hours"),
  createData("Phuket", 6182, "17 hours"),
];

const DistancesTable: React.FC = () => {
  return (
    <TableContainer style={{ width: "100%" }} component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>Distance from...</h2>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.location}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell align="right">{row.distance}&nbsp;miles</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DistancesTable;
