import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import LeaseEntry from './LeaseEntry';
import { acquireLeaseInformation } from '../actions/actions';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
  },
});

const LeaseList =(props) => {
  const { classes, leaseList, acquireLeaseInformation } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {leaseList.map(({id, tenant}) =>
          (<LeaseEntry
            lease={id}
            tenant={tenant}
            acquireLeaseInformation={acquireLeaseInformation}
          />))}
      </List>
    </div>
  );
};

const mapStateToProps = state => ({ leaseList: state.leaseList });
const mapDispatchToProps = dispatch => ({
  acquireLeaseInformation: (id) => dispatch(acquireLeaseInformation(id)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LeaseList));