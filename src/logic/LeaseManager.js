/**
 * Created by dinanjanag on 4/12/19.
 */
import _ from 'lodash';
import moment from 'moment';
import { FREQUENCIES, WEEK, DATE_FORMAT, UNIT_OF_TIME } from '../Constants';

const extractLeaseInfo = (data) => {
  if (_.isNil(data))
    return null;
  const { start_date, end_date, frequency, rent, payment_day} = data;
  const leaseInfo = {};
  const rentPerTerm = getPerPaymentTermRent(frequency, rent);
  leaseInfo.from = start_date;
  leaseInfo.to = end_date;
  leaseInfo.rent = rentPerTerm;
  leaseInfo.rents =
    getLeasePaymentsList(
      end_date,
      start_date,
      payment_day,
      7*getFrequency(frequency),
      rent,
      rentPerTerm);
  return leaseInfo;
};

const getDayForPaymentDay = (start, payDay, partialTerm) => {
  if (WEEK[start.day()] === payDay) {
    return partialTerm;
  }
  start.add(1, UNIT_OF_TIME.DAYS);
  return getDayForPaymentDay(start, payDay, ++partialTerm);
};

const createRentList = (start, end, term, rent, weeklyRent, list) => {
  const rentInfo = {
    from: start.format(DATE_FORMAT),
  };
  start.add(term - 1, UNIT_OF_TIME.DAYS);
  rentInfo.to = start.format(DATE_FORMAT);
  rentInfo.days = term;
  rentInfo.rent = rent;
  start.add(1, UNIT_OF_TIME.DAYS);
  const diff = end.diff(start, UNIT_OF_TIME.DAYS);
  if (diff < 0) {
    rentInfo.to = start.add(diff, UNIT_OF_TIME.DAYS).format(DATE_FORMAT);
    rentInfo.days = term + diff;
    rentInfo.rent = ((weeklyRent/7)*(term + diff)).toFixed(2);
    list.push(rentInfo);
    return list;
  }
  list.push(rentInfo);
  return createRentList(start, end, term, rent, weeklyRent, list);
};

const getLeasePaymentsList = (to, from, payday, term, weeklyRent, rent) => {
  const startDate = moment(from);
  const partialTerm = getDayForPaymentDay(startDate, payday, 0);
  const endDate = moment(to);
  const rentList = [];
  const formattedStartDate = startDate.format(DATE_FORMAT);
  startDate.add(partialTerm, UNIT_OF_TIME.DAYS);
  rentList.push({
    from: formattedStartDate,
    to: startDate.format(DATE_FORMAT),
    days: partialTerm,
    rent: ((weeklyRent/7)*partialTerm).toFixed(2),
  });
  return createRentList(startDate, endDate, term, rent, weeklyRent, rentList);
};

const getPerPaymentTermRent = (frequency, rent) => {
  if (_.isNil(frequency) || _.isNil(rent)) {
    return null;
  }
  return rent*getFrequency(frequency);
};

const getFrequency = (frequency) => {
  switch (frequency){
    case FREQUENCIES.WEEKLY:
      return 1;
    case FREQUENCIES.FORTNIGHTLY:
      return 2;
    case FREQUENCIES.MONTHLY:
      return 4;
    default:
      return 0;
  }
};

export {
  extractLeaseInfo,
};