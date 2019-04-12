import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import {
  ACQUIRE_LEASES_FULFILLED,
  ACQUIRE_LEASE_INFORMATION_FULFILLED,
  CLOSE_LEASE_INFORMATION_TABLE } from '../actions/events/events';
import { extractLeaseInfo } from '../logic/LeaseManager';

/**
 * Created by dinanjanag on 4/10/19.
 */

const initialState = {
  leaseList: [],
  loadedLeaseInformation: {
    rents: [[]],
  },
};

const reducer = (state = initialState, action) => {
  console.log(`${action.type}`);
  switch (action.type) {
    case ACQUIRE_LEASES_FULFILLED:
      return {
        leaseList: action.payload.data,
        loadedLeaseInformation: state.loadedLeaseInformation,
      };
    case ACQUIRE_LEASE_INFORMATION_FULFILLED: //We may not need to store this
      return {
        leaseList: state.leaseList,
        loadedLeaseInformation: extractLeaseInfo(action.payload.data),
      };
    case CLOSE_LEASE_INFORMATION_TABLE:
      return {
        leaseList: state.leaseList,
        loadedLeaseInformation: {
          rents: [[]]
        },
      };
    default:
      return state
  }
};

const leaseStore = createStore(reducer, initialState, applyMiddleware(promise));

export default leaseStore;