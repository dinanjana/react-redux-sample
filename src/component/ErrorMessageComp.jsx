import React from 'react';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';

const ErrorMessageComponent = ({ error }) => {
  if (error) {
    return(
      <Paper>
        Error occurred!
      </Paper>
    )
  }
  return '';
};

const mapStateToProps = state => ({ error: state.error });

export default connect(mapStateToProps, null)(ErrorMessageComponent);