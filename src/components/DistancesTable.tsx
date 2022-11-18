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
  createData("Airport", 43, "54 minutes"),
  createData("Edinburgh", 36, "1 hour"),
  createData("Lauder", 10, "16 minutes"),
  createData("Glasgow", 82, "1.5 hours"),
  createData("London", 379, "7 hours"),
  createData("Nantes", 586, "3 hours"),
  createData("Colorado", 4405, "15 hours"),
  createData("California", 5176, "15 hours"),
  createData("Florida", 4324, "13 hours"),
  createData("Texas", 4707, "13 hours"),
  createData("Iowa", 3853, "15 hours"),
  createData("Phuket", 6182, "17 hours"),
  createData("Shenzhen", 5887, "23 hours"),
  createData("Kuala Lumpur", 6588, "18 hours"),
  createData("Manchester", 152, "4 hours"),
  createData("Ireland", 321, "5 hours"),
  createData("Middlesbrough", 91, "3 hours"),
  createData("Oslo", 568, "3 hours"),
];

rows.sort((a, b) => a.distance - b.distance);

const DistancesTable: React.FC = () => {
  return (
    <TableContainer
      style={{
        width: "90%",
        margin: "0 5%",
        background: "hsla(24, 22%, 75%, 0.5)",
      }}
      component={Paper}
    >
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <h2 style={{ fontWeight: "200" }}>Distance from...</h2>
            </TableCell>
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
