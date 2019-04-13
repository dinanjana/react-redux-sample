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
  selectedTenant: null,
  loadedLeaseInformation: {
    rents: [[]],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACQUIRE_LEASES_FULFILLED:
      return {
        leaseList: action.payload.data,
        loadedLeaseInformation: state.loadedLeaseInformation,
      };
    case ACQUIRE_LEASE_INFORMATION_FULFILLED:
      return {
        leaseList: state.leaseList,
        loadedLeaseInformation: extractLeaseInfo(action.payload.lease.data),
        selectedTenant: action.payload.id,
      };
    case CLOSE_LEASE_INFORMATION_TABLE:
      return {
        leaseList: state.leaseList,
        selectedTenant: null,
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