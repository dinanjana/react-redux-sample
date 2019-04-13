import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import DynamicTableComp from './DynamicTableComp';
import { closeLeaseInformationTable } from '../actions/actions';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const header = [[{data: 'From'}, {data: 'To'}, {data: 'Days'}, {data: 'Amount'}]];

const LeaseTable = (props) => {
  let { classes, leaseInformation, closeLeaseInformationTable, tenant, selectedTenant } = props;
  return (
    !_.isNil(selectedTenant) && tenant === selectedTenant ?
    <Paper className={classes.root}>
      <button onClick={closeLeaseInformationTable}>Cancel</button>
      <Table className={classes.table}>
        <DynamicTableComp
          matrix={header}
          isTableBody={false}
        />
        <DynamicTableComp
          matrix={leaseInformation}
          isTableBody={true}
        />
      </Table>
    </Paper> : ''
  );
};

const mapStateToUIvalues = (state) =>
  _.map(state.loadedLeaseInformation.rents, rent => _.map(rent, val => ({data: val})));

const mapStateToProps = state => ({ selectedTenant: state.selectedTenant, leaseInformation: mapStateToUIvalues(state) });
const mapDispatchToProps = dispatch => ({
  closeLeaseInformationTable: () => dispatch(closeLeaseInformationTable()),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LeaseTable));