import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import DynamicTableComp from './DynamicTableComp';
const styles = theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const header = [[{data: 'From'}, {data: 'To'}, {data: 'Days'}, {data: 'Amount'}]];

const LeaseTable = (props) => {
  const { matrix, classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <DynamicTableComp
          matrix={header}
          isTableBody={false}
        />
        <DynamicTableComp
          matrix={matrix}
          isTableBody={true}
        />
      </Table>
    </Paper>
  );
};

LeaseTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaseTable);