import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import LeaseTable from './LeaseTable';



/**
 * Created by dinanjanag on 4/12/19.
 */

const LeaseEntry =
  ({lease, tenant, acquireLeaseInformation}) => {
  return(
  <div>
    <ListItem
      button
      onClick={() => acquireLeaseInformation(tenant)}
    >
      <ListItemText primary={lease} secondary={tenant}/>
    </ListItem>
    <LeaseTable tenant={tenant}/>
  </div>
  );
};

LeaseEntry.propTypes = {
  lease: PropTypes.string.isRequired,
  tenant: PropTypes.string.isRequired,
};


export default LeaseEntry;