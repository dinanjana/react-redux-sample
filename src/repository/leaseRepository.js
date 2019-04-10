/**
 * Created by dinanjanag on 4/10/19.
 */
import axios from 'axios';

const baseURL = 'https://hiring-task-api.herokuapp.com/v1/leases';

const makeReq = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getLeases = async () => {
  return makeReq(baseURL);
};

const getLeaseInfo = async (id) => {
  return makeReq(`${baseURL}/id`);
};

export {
  getLeases,
  getLeaseInfo,
}

