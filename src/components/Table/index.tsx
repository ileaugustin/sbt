import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from "../../pages/Users/types";

export default function BasicTable({ data, handleSort }: { data: User[]; handleSort: (sort: string) => void }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort("name")}>Name</TableCell>
            <TableCell align="right" onClick={() => handleSort("email")}>Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: User) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell align="right">{row.company.bs} {row.company.catchPhrase} {row.company.name}</TableCell>
              <TableCell align="right">{row.address.city} {row.address.street} {row.address.suite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
