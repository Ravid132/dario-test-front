import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Loader } from './Loader';

export default function MessagesTable({ messages }) {
  function createData(name, Successfully_Sent, Failed) {
    return { name, Successfully_Sent, Failed };
  }

  const [rows, setRows] = useState([]);

  const getData = () => {
    const data = [];
    messages.map((message) => {
      var count_success = message.all_success.filter(
        (val) => val === '1'
      ).length;
      var count_fail = message.all_success.length - count_success;

      data.push(createData(message._id.log_created, count_success, count_fail));
    });
    setRows(data);
  };

  useEffect(() => {
    getData();
  }, [messages]);

  if (!messages) return <Loader />;
  if (messages.length === 0) return <h3>no messages to display...</h3>;
  return (
    <TableContainer className='table-container' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align='right'>Successfully Sent</TableCell>
            <TableCell align='right'>Failed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>

              <TableCell align='right'>{row.Successfully_Sent}</TableCell>
              <TableCell align='right'>{row.Failed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
