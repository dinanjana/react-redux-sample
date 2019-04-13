/**
 * Created by dinanjanag on 4/10/19.
 */
import { getLeases, getLeaseInfo } from '../repository/leaseRepository';
import { ACQUIRE_LEASES, ACQUIRE_LEASE_INFORMATION, CLOSE_LEASE_INFORMATION_TABLE } from '../actions/events/events';

const acquireLeases = () => ({
  type: ACQUIRE_LEASES,
  payload: getLeases()
});

const acquireLeaseInformation = (id) => ({
  type: ACQUIRE_LEASE_INFORMATION,
  payload: getLeaseInfo(id).then((data) => ({id, lease: data})),
});

const closeLeaseInformationTable = () => ({
  type: CLOSE_LEASE_INFORMATION_TABLE,
  payload: null,
});

export {
  acquireLeases,
  acquireLeaseInformation,
  closeLeaseInformationTable,
}