import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const DynamicTableComp = ({ matrix, isTableBody }) => {
  return isTableBody ?
    (<TableBody>
      {
        matrix.map(row => (
          <TableRow>{ row.map(col =>
            (<TableCell align="left">{col.data}</TableCell>))
          }</TableRow>)
        )}
    </TableBody>) :
    (<TableHead>
      <TableRow>
        {
          matrix[0].map(col =>
            (<TableCell align="left">{col.data}</TableCell>))
        }
      </TableRow>
    </TableHead>);
};

export default DynamicTableComp;
