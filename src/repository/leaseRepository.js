/**
 * Created by dinanjanag on 4/10/19.
 */
import axios from 'axios';
import { BASE_URL } from '../Constants';

const makeReq = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

const getLeases = async () => {
  return makeReq(BASE_URL);
};

const getLeaseInfo = async (id) => {
  return makeReq(`${BASE_URL}/id`);
};

export {
  getLeases,
  getLeaseInfo,
}

