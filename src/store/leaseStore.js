import _ from 'lodash';
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import { ACQUIRE_LEASES_FULFILLED, ACQUIRE_LEASE_INFORMATION } from '../actions/events/events';
/**
 * Created by dinanjanag on 4/10/19.
 */

const initialState = {
  leaseList: [],
  loadedLeaseInformation: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACQUIRE_LEASES_FULFILLED:
      return _.set(state, 'leaseList', action.payload.data);
    case ACQUIRE_LEASE_INFORMATION: //We may not need to store this
      return _.set(state, 'loadedLeaseInformation', action.payload);
    default:
      return state
  }
};

const leaseStore = createStore(reducer, initialState, applyMiddleware(promise));

export default leaseStore;